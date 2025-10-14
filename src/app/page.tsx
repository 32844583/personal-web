// app/page.tsx

// 這是我們頁面的主要函式，Next.js 會把它渲染成 HTML
export default function HomePage() {
  return (
    // <main> 是 HTML 的主要內容區塊
    // className 裡面的東西是 Tailwind CSS，用來設定樣式
    // 這裡我們設定了一個深灰色的背景、讓內容垂直水平置中
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-8">
      
      {/* 主要的內容容器，設定最大寬度和文字置中 */}
      <div className="max-w-2xl text-center">

        {/* 頭像圖片
          - 你可以將自己的頭像圖片命名為 "avatar.png" (或其他格式)
          - 然後把它放到專案的 public/ 資料夾底下
          - Next.js 會自動找到它
        */}
        {/* <img 
          src="/avatar.png" 
          alt="我的頭像" 
          className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-yellow-400"
        /> */}

        {/* 大標題：你的名字 */}
        <h1 className="text-4xl md:text-6xl font-bold text-yellow-400 mb-4">
          你好，我是 你的名字
        </h1>

        {/* 副標題：你的職稱或一句話介紹 */}
        <p className="text-lg md:text-xl text-gray-300 mb-8">
          一位熱愛網頁開發與解決問題的 你的職稱，例如：前端工程師
        </p>

        {/* 主要的自我介紹段落 */}
        <div className="text-left bg-gray-800 p-6 rounded-lg shadow-lg">
          <p className="text-base leading-relaxed mb-4">
            歡迎來到我的個人網站。我專注於使用現代化的技術，例如 React 和 Next.js，來打造流暢且高效的使用者體驗。
          </p>
          <p className="text-base leading-relaxed">
            我熱衷於學習新知，並樂於將所學應用於實際專案中。目前我正在探索：
          </p>
          {/* 技能或興趣清單 */}
          <ul className="list-disc list-inside mt-4 space-y-2">
            <li>Cloudflare Pages 網站部署</li>
            <li>使用 Tailwind CSS 進行快速樣式設計</li>
            <li>探索後端技術與資料庫</li>
          </ul>
        </div>

        {/* 社群連結 */}
        <div className="mt-10">
          <p className="text-gray-400 mb-4">你可以在這些地方找到我：</p>
          <div className="flex justify-center space-x-6">
            <a href="https://github.com/你的GitHub帳號" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-yellow-400 transition-colors">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/你的LinkedIn帳號" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-yellow-400 transition-colors">
              LinkedIn
            </a>
            <a href="mailto:你的Email信箱" className="text-gray-300 hover:text-yellow-400 transition-colors">
              Email
            </a>
          </div>
        </div>

      </div>
    </main>
  );
}