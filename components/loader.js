// 共通コンポーネントをロードする関数
async function loadComponent(url, targetId) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const html = await response.text();
        document.getElementById(targetId).innerHTML = html;
    } catch (error) {
        console.error('Error loading component:', error);
    }
}

// ページ読み込み時にコンポーネントをロード
document.addEventListener('DOMContentLoaded', async () => {
    await loadComponent('components/header.html', 'header-placeholder');
    await loadComponent('components/footer.html', 'footer-placeholder');
    
    // コンポーネントロード後にJavaScriptを実行
    initializeHeader();
    
    // products.htmlの場合、プロダクトカードを生成
    if (document.getElementById('products-grid')) {
        // products.jsを動的にロード
        const script = document.createElement('script');
        script.src = 'components/products.js';
        script.onload = () => {
            generateProductCards();
        };
        document.head.appendChild(script);
    }
});

// ヘッダーの初期化関数
function initializeHeader() {
    // Lucide Iconsを置き換え
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }

    // スムーズスクロールとナビゲーションの動作
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const hash = this.getAttribute('href');
            if (hash === '#') return; // トップページリンクは除外
            
            e.preventDefault();
            const targetElement = document.querySelector(hash);
            if (targetElement) {
                // ヘッダーの高さを考慮してスクロール位置を調整
                const headerHeight = document.querySelector('header').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight - 20; 
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // モバイルメニューのトグル
    const menuButton = document.getElementById('menuButton');
    const mobileMenu = document.getElementById('mobileMenu');
    if (menuButton && mobileMenu) {
        menuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => mobileMenu.classList.add('hidden'));
        });
    }
}