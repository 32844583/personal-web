# 譜方法（Spectral Methods）完整介紹

---

## 一、譜方法的背景與目標

### 背景問題

傳統卷積神經網路（CNN）在圖像上非常成功。圖像是規則的網格結構，每個像素有固定的上下左右鄰居，所以可以定義固定大小的卷積核滑過去。

但圖結構是不規則的：

- 每個節點的鄰居數量不同
- 沒有固定的「上下左右」方向
- 無法直接套用傳統卷積核

### 譜方法的解決思路

既然在空間上無法直接定義卷積，那就繞到頻譜域去。

借用信號處理的理論：在頻譜域中，卷積等價於逐元素相乘。這個性質在圖上同樣成立。

所以譜方法透過圖傅立葉轉換，把圖信號轉到頻譜域，做完運算再轉回來，藉此實現圖上的卷積。

---

## 二、完整的頻譜域操作流程

### 前置步驟：建立圖的數學表示

#### 鄰接矩陣 $\mathbf{A}$

記錄節點之間的連接關係，$A_{ij}=1$ 表示節點 i 和 j 相連。

#### 度矩陣 $\mathbf{D}$

對角矩陣，記錄每個節點有幾個鄰居。

#### 拉普拉斯矩陣

$$\mathbf{L} = \mathbf{I} - \mathbf{D}^{-\frac{1}{2}}\mathbf{A}\mathbf{D}^{-\frac{1}{2}}$$

這個矩陣描述了「每個節點與鄰居之間的關係與差異」，是譜方法的核心工具。

**為什麼需要 $\mathbf{D}^{-\frac{1}{2}}$ 進行正規化？**

假設一個社交網路中：
- 網紅A有10000個朋友
- 普通人B只有10個朋友

如果直接用鄰接矩陣 $\mathbf{A}$ 聚合鄰居信號：
- A會收到10000份信號的總和
- B只收到10份信號的總和

這樣度數大的節點會主導整個計算結果。

$\mathbf{D}^{-\frac{1}{2}}\mathbf{A}\mathbf{D}^{-\frac{1}{2}}$ 的效果是：對於節點 i 和 j 之間的邊，原本權重是 1，正規化後變成：

$$\frac{1}{\sqrt{d_i} \cdot \sqrt{d_j}}$$

其中 $d_i$ 和 $d_j$ 是兩個節點的度數。度數越大的節點，它對鄰居的影響力被縮小得越多，讓聚合結果更平衡。

額外好處：正規化後，拉普拉斯矩陣的特徵值被限制在 [0, 2] 範圍內，這讓後續的神經網路訓練更穩定，不容易出現梯度爆炸或消失的問題。

#### 特徵分解

$$\mathbf{L} = \mathbf{U}\mathbf{\Lambda}\mathbf{U}^T$$

根據線性代數的譜定理，N×N的實對稱矩陣必定有N個特徵值。因此N個節點的圖會產生N個頻率成分，記錄在 $\mathbf{\Lambda}$ 的對角線上。

**以3個節點的鏈狀圖為例說明：**

節點A、B、C排成一列，A連B，B連C：

$$A — B — C$$

**鄰接矩陣**（記錄誰跟誰相連，1表示相連，0表示不相連）：

$$\mathbf{A} = \begin{bmatrix} 0 & 1 & 0 \\ 1 & 0 & 1 \\ 0 & 1 & 0 \end{bmatrix}$$

**度矩陣**（對角線記錄每個節點有幾條邊：A有1條，B有2條，C有1條）：

$$\mathbf{D} = \begin{bmatrix} 1 & 0 & 0 \\ 0 & 2 & 0 \\ 0 & 0 & 1 \end{bmatrix}$$

**拉普拉斯矩陣**：

$$\mathbf{L} = \mathbf{D} - \mathbf{A} = \begin{bmatrix} 1 & -1 & 0 \\ -1 & 2 & -1 \\ 0 & -1 & 1 \end{bmatrix}$$

**特徵分解的計算過程：**

第一步：列出特徵方程

特徵值 $\lambda$ 滿足：

$$\det(\mathbf{L} - \lambda\mathbf{I}) = 0$$

代入拉普拉斯矩陣：

$$\det\begin{bmatrix} 1-\lambda & -1 & 0 \\ -1 & 2-\lambda & -1 \\ 0 & -1 & 1-\lambda \end{bmatrix} = 0$$

第二步：計算行列式

沿第一列展開：

$$(1-\lambda) \det\begin{bmatrix} 2-\lambda & -1 \\ -1 & 1-\lambda \end{bmatrix} - (-1) \det\begin{bmatrix} -1 & -1 \\ 0 & 1-\lambda \end{bmatrix} = 0$$

計算兩個2×2行列式：

$$\det\begin{bmatrix} 2-\lambda & -1 \\ -1 & 1-\lambda \end{bmatrix} = (2-\lambda)(1-\lambda) - 1 = \lambda^2 - 3\lambda + 1$$

$$\det\begin{bmatrix} -1 & -1 \\ 0 & 1-\lambda \end{bmatrix} = (-1)(1-\lambda) - 0 = \lambda - 1$$

代回並整理：

$$(1-\lambda)(\lambda^2 - 3\lambda + 1) + (\lambda - 1) = 0$$

$$(1-\lambda)(\lambda^2 - 3\lambda) = 0$$

$$(1-\lambda) \cdot \lambda \cdot (\lambda - 3) = 0$$

第三步：解出特徵值

$$\lambda_1 = 0, \quad \lambda_2 = 1, \quad \lambda_3 = 3$$

第四步：求各特徵值對應的特徵向量

**對於 $\lambda_1 = 0$：**

解 $(\mathbf{L} - 0\mathbf{I})\mathbf{u} = \mathbf{0}$

$$\begin{bmatrix} 1 & -1 & 0 \\ -1 & 2 & -1 \\ 0 & -1 & 1 \end{bmatrix}\begin{bmatrix} u_1 \\ u_2 \\ u_3 \end{bmatrix} = \begin{bmatrix} 0 \\ 0 \\ 0 \end{bmatrix}$$

從第一列：$u_1 = u_2$；從第三列：$u_2 = u_3$

所以 $u_1 = u_2 = u_3$，取單位向量：

$$\mathbf{u}_1 = \frac{1}{\sqrt{3}}\begin{bmatrix} 1 \\ 1 \\ 1 \end{bmatrix}$$

所有節點的值相同。這代表「完全平坦」的模式，相鄰節點之間沒有差異。

**對於 $\lambda_2 = 1$：**

解 $(\mathbf{L} - 1\mathbf{I})\mathbf{u} = \mathbf{0}$

$$\begin{bmatrix} 0 & -1 & 0 \\ -1 & 1 & -1 \\ 0 & -1 & 0 \end{bmatrix}\begin{bmatrix} u_1 \\ u_2 \\ u_3 \end{bmatrix} = \begin{bmatrix} 0 \\ 0 \\ 0 \end{bmatrix}$$

從第一列：$u_2 = 0$；從第二列：$u_1 = -u_3$

取單位向量：

$$\mathbf{u}_2 = \frac{1}{\sqrt{2}}\begin{bmatrix} 1 \\ 0 \\ -1 \end{bmatrix}$$

兩端節點值相反，中間為0。這代表「緩慢變化」的模式。

**對於 $\lambda_3 = 3$：**

解 $(\mathbf{L} - 3\mathbf{I})\mathbf{u} = \mathbf{0}$

$$\begin{bmatrix} -2 & -1 & 0 \\ -1 & -1 & -1 \\ 0 & -1 & -2 \end{bmatrix}\begin{bmatrix} u_1 \\ u_2 \\ u_3 \end{bmatrix} = \begin{bmatrix} 0 \\ 0 \\ 0 \end{bmatrix}$$

從第一列：$u_2 = -2u_1$；從第三列：$u_3 = u_1$

取單位向量：

$$\mathbf{u}_3 = \frac{1}{\sqrt{6}}\begin{bmatrix} 1 \\ -2 \\ 1 \end{bmatrix}$$

相鄰節點的值劇烈變化（正、負、正交替）。這代表「快速震盪」的模式。

第五步：組成矩陣形式

$$\mathbf{U} = \begin{bmatrix} \frac{1}{\sqrt{3}} & \frac{1}{\sqrt{2}} & \frac{1}{\sqrt{6}} \\ \frac{1}{\sqrt{3}} & 0 & \frac{-2}{\sqrt{6}} \\ \frac{1}{\sqrt{3}} & \frac{-1}{\sqrt{2}} & \frac{1}{\sqrt{6}} \end{bmatrix}, \quad \mathbf{\Lambda} = \begin{bmatrix} 0 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 3 \end{bmatrix}$$

可驗證 $\mathbf{L} = \mathbf{U}\mathbf{\Lambda}\mathbf{U}^T$。

**參數說明：**

- $\mathbf{U}$：特徵向量矩陣，每一列是一個特徵向量（一種頻率模式）
- $\mathbf{U}^T$：U的轉置，用於將信號投影到各頻率成分上
- $\mathbf{\Lambda}$：特徵值對角矩陣，對角線上的值就是各頻率的「頻率值」

**頻率的直觀意義：**

特徵值越大，對應的模式中「相鄰節點差異越大」。這就是為什麼特徵值被解讀為「頻率」：高特徵值對應高頻震盪，低特徵值對應低頻平滑。

---

### 步驟一：圖傅立葉轉換（轉到頻譜域）

$$\hat{\mathbf{x}} = \mathbf{U}^T\mathbf{x}$$

將原始信號 $\mathbf{x}$（每個節點的特徵）轉換為頻率強度 $\hat{\mathbf{x}}$。

每個 $\hat{x}_i = \mathbf{u}_i^T\mathbf{x}$ 代表原始信號在第 i 個頻率成分上的強度。

**頻率成分在圖上的意義：**

- 低頻成分：代表「相鄰節點的值相近」的全局模式
- 高頻成分：代表「相鄰節點的值差異大」的全局模式
- 圖上的信號是多種頻率成分的疊加

---

### 步驟二：頻譜域濾波

$$\hat{\mathbf{y}} = \mathbf{g}_w\hat{\mathbf{x}}$$

其中 $\mathbf{g}_w = \text{diag}(g_1, g_2, ..., g_N)$ 是可學習的對角矩陣。

每個 $g_i$ 決定第 i 個頻率成分要放大（$g_i > 1$）還是縮小（$g_i < 1$）。

**濾波器的作用：** 不同任務需要不同的濾波策略。

- 社群分類：同社群的人特徵相似，應放大低頻、縮小高頻
- 異常偵測：異常者與鄰居不同，應放大高頻、縮小低頻

實際上濾波器權重由神經網路從訓練資料中自動學習，不需人為設定。

---

### 步驟三：逆圖傅立葉轉換（轉回原始域）

$$\mathbf{y} = \mathbf{U}\hat{\mathbf{y}}$$

把濾波後的頻率成分重新組合，變回每個節點上的信號值，得到卷積後的輸出。

---

### 合併公式

$$\mathbf{g}_w \star \mathbf{x} = \mathbf{U}\mathbf{g}_w\mathbf{U}^T\mathbf{x}$$

---

## 三、譜方法的演進

在步驟二的頻譜域濾波中，直接學習對角矩陣的N個元素會面臨問題：

- 參數量太大（N個節點需要N個參數）
- 計算成本高（需要對拉普拉斯矩陣進行特徵分解）

為了解決這些問題，後續研究者提出了改進方法。

---

### ChebNet：用多項式近似濾波器

**核心想法：** 用Chebyshev多項式近似濾波器，只需K+1個係數，大幅減少參數量。

**公式：**

$$\mathbf{g}_w \star \mathbf{x} \approx \sum_{k=0}^{K} w_k \mathbf{T}_k(\tilde{\mathbf{L}})\mathbf{x}$$

**從對角矩陣到多項式的轉換過程：**

原本的對角矩陣 $\mathbf{g}_w = \text{diag}(g_1, g_2, ..., g_N)$，每個 $g_i$ 對應特徵值 $\lambda_i$，決定該頻率要放大還是縮小。

這其實隱含了一個「頻率到權重」的函數關係：$g_i = g(\lambda_i)$。也就是說，對角矩陣可以看成是函數 $g(\lambda)$ 在N個特徵值上的取樣結果。

既然 $g(\lambda)$ 是一個函數，我們可以用多項式來近似它：

$$g(\lambda) \approx \sum_{k=0}^{K} w_k T_k(\lambda)$$

其中 $T_k$ 是第k階Chebyshev多項式，$w_k$ 是係數。

這樣一來，需要學習的參數從N個降為K+1個。

將多項式代入原本的濾波操作：

$$\mathbf{g}_w = \text{diag}(g(\lambda_1), g(\lambda_2), ..., g(\lambda_N))$$

$$= \text{diag}\left(\sum_{k=0}^{K} w_k T_k(\lambda_1), \sum_{k=0}^{K} w_k T_k(\lambda_2), ..., \sum_{k=0}^{K} w_k T_k(\lambda_N)\right)$$

$$= \sum_{k=0}^{K} w_k \cdot \text{diag}(T_k(\lambda_1), T_k(\lambda_2), ..., T_k(\lambda_N))$$

$$= \sum_{k=0}^{K} w_k T_k(\mathbf{\Lambda})$$

代入完整的譜卷積公式 $\mathbf{g}_w \star \mathbf{x} = \mathbf{U} \mathbf{g}_w \mathbf{U}^T \mathbf{x}$：

$$= \mathbf{U} \left( \sum_{k=0}^{K} w_k T_k(\mathbf{\Lambda}) \right) \mathbf{U}^T \mathbf{x} = \sum_{k=0}^{K} w_k \mathbf{U} T_k(\mathbf{\Lambda}) \mathbf{U}^T \mathbf{x}$$

利用數學性質 $\mathbf{U} T_k(\mathbf{\Lambda}) \mathbf{U}^T = T_k(\mathbf{L})$，最終得到：

$$\mathbf{g}_w \star \mathbf{x} = \sum_{k=0}^{K} w_k T_k(\mathbf{L}) \mathbf{x}$$

這個公式不再需要計算 $\mathbf{U}$ 和 $\mathbf{\Lambda}$，只需要用拉普拉斯矩陣 $\mathbf{L}$ 直接計算。

| 階段 | 公式 | 需要什麼 |
|------|------|---------|
| 譜網絡 | $\mathbf{U} \mathbf{g}_w \mathbf{U}^T \mathbf{x}$ | 特徵分解得到U，學習N個權重 |
| 多項式代入 | $\mathbf{U} \left(\sum_k w_k T_k(\mathbf{\Lambda})\right) \mathbf{U}^T \mathbf{x}$ | 特徵分解得到U和Λ，學習K+1個係數 |
| ChebNet | $\sum_k w_k T_k(\mathbf{L}) \mathbf{x}$ | 只需要L，學習K+1個係數 |

**什麼是「L 的多項式組合」？**

L 是拉普拉斯矩陣。「L 的多項式組合」指的是把 L 當作變數代入多項式中。

普通多項式長這樣：

$$p(x) = a_0 + a_1 x + a_2 x^2 + a_3 x^3$$

把 x 換成矩陣 L，就變成矩陣多項式：

$$p(\mathbf{L}) = a_0 \mathbf{I} + a_1 \mathbf{L} + a_2 \mathbf{L}^2 + a_3 \mathbf{L}^3$$

其中 $\mathbf{L}^2 = \mathbf{L} \times \mathbf{L}$，$\mathbf{L}^3 = \mathbf{L} \times \mathbf{L} \times \mathbf{L}$，以此類推。

**關鍵發現：$\mathbf{L}^k$ 對應 k 步鄰居關係**

以3節點鏈狀圖為例說明：

節點連接：1 — 2 — 3

鄰接矩陣：

$$\mathbf{A} = \begin{bmatrix} 0 & 1 & 0 \\ 1 & 0 & 1 \\ 0 & 1 & 0 \end{bmatrix}$$

$A_{ij} = 1$ 表示節點 i 和 j 之間有邊（1步可達）。

**$\mathbf{A}^2$ 代表什麼？**

$$\mathbf{A}^2 = \begin{bmatrix} 1 & 0 & 1 \\ 0 & 2 & 0 \\ 1 & 0 & 1 \end{bmatrix}$$

$A^2_{ij}$ 的值代表「從 i 到 j 恰好走2步的路徑數量」。

例如 $A^2_{13} = 1$，代表從節點1到節點3走2步有1條路徑（1→2→3）。

**$\mathbf{A}^3$ 代表什麼？**

$$\mathbf{A}^3 = \begin{bmatrix} 0 & 2 & 0 \\ 2 & 0 & 2 \\ 0 & 2 & 0 \end{bmatrix}$$

$A^3_{ij}$ 代表「從 i 到 j 恰好走3步的路徑數量」。

**聚合信號時的效果：**

假設節點信號是 $\mathbf{x} = [x_1, x_2, x_3]^T$

$$\mathbf{A}\mathbf{x} = \begin{bmatrix} x_2 \\ x_1 + x_3 \\ x_2 \end{bmatrix}$$

每個節點得到的是「1步鄰居的信號總和」。

$$\mathbf{A}^2\mathbf{x} = \begin{bmatrix} x_1 + x_3 \\ 2x_2 \\ x_1 + x_3 \end{bmatrix}$$

每個節點得到的是「2步可達節點的信號」（含自己，因為走2步可以回到原點）。

拉普拉斯矩陣 $\mathbf{L} = \mathbf{I} - \mathbf{D}^{-\frac{1}{2}}\mathbf{A}\mathbf{D}^{-\frac{1}{2}}$ 是 $\mathbf{A}$ 的正規化變形。所以 $\mathbf{L}^k$ 同樣會涉及 k 步鄰居的關係，只是多了正規化的處理，讓數值更穩定。

**ChebNet的好處：**

由於 $\mathbf{L}^k$ 對應 k 步鄰居關係，ChebNet可以完全跳過特徵分解，直接用拉普拉斯矩陣做計算。頻譜域的「調整頻率權重」和空間域的「聚合不同步數鄰居」，數學上是等價的兩種描述方式，但後者計算成本低很多。

---

### GCN：進一步簡化

為了再簡化模型，GCN 令 K=1，只考慮自己和1步鄰居。

**公式：**

$$\mathbf{H} = \tilde{\mathbf{D}}^{-\frac{1}{2}}\tilde{\mathbf{A}}\tilde{\mathbf{D}}^{-\frac{1}{2}}\mathbf{X}\mathbf{W}$$

其中 $\tilde{\mathbf{A}} = \mathbf{A} + \mathbf{I}_N$（加入自環），$\tilde{\mathbf{D}}_{ii} = \sum_j \tilde{\mathbf{A}}_{ij}$。

濾波器形式固定為正規化鄰接矩陣，不再需要學習濾波器參數。學習能力轉移到特徵變換權重 $\mathbf{W}$ 上。

---

## 四、兩種權重的區分

### 濾波器權重

決定如何處理不同頻率成分。

- 譜網絡：需要學習N個參數
- ChebNet：需要學習K+1個參數
- GCN：已固定，不需學習

### 特徵變換權重 $\mathbf{W}$

將輸入特徵維度轉換為輸出特徵維度。所有方法都需要學習。

---

### ChebNet 與 GCN 濾波器的比較

#### ChebNet：可學習的濾波器

$$\mathbf{g}_w \star \mathbf{x} \approx \sum_{k=0}^{K} w_k \mathbf{T}_k(\tilde{\mathbf{L}})\mathbf{x}$$

- 有K+1個可學習的係數 $w_0, w_1, ..., w_K$
- 每個 $w_k$ 控制「k步鄰居」的貢獻程度
- 濾波器的形狀由訓練資料決定

#### GCN：固定的濾波器

$$\mathbf{H} = \tilde{\mathbf{D}}^{-\frac{1}{2}}\tilde{\mathbf{A}}\tilde{\mathbf{D}}^{-\frac{1}{2}}\mathbf{X}\mathbf{W}$$

- 令K=1，只考慮自己和1步鄰居
- 濾波器形式固定為正規化鄰接矩陣，沒有可學習的濾波器參數
- 學習能力轉移到特徵變換權重 $\mathbf{W}$ 上

#### 為什麼可以這樣替代？

**第一，正規化鄰接矩陣提供了「合理的預設」**

它假設：自己和鄰居同等重要，貢獻程度按度數平衡分配。這對大多數任務來說是合理的起點。

**第二，堆疊多層可以彌補**

ChebNet在一層內聚合K步鄰居。GCN每層只聚合1步鄰居，但堆疊L層後，信息可以傳播L步。

| 方法 | 單層感受野 | 達到K步的方式 |
|------|-----------|--------------|
| ChebNet | K步鄰居 | 調整K值 |
| GCN | 1步鄰居 | 堆疊K層 |

**第三，學習能力沒有消失，只是轉移了**

ChebNet學習「如何組合不同步數的鄰居」。GCN學習「如何變換特徵」，每層都有自己的 $\mathbf{W}$，每層可以學到不同的變換方式。

#### 代價是什麼？

GCN的表達能力比ChebNet弱一些，因為它無法在單層內靈活調整不同步數鄰居的權重。但換來的是更簡單的模型、更快的計算、更少的參數，實際應用中往往效果也夠好。