// プロダクトデータ
const productsData = [
    {
        icon: 'assets/Catalyze_icon.jpg',
        title: 'Catalyze',
        description: '様々な効率的な学習ツールとリソースを提供し、個々の学習スタイルに合わせたパーソナライズドな学習体験を実現します。',
        link: 'https://play.google.com/store/apps/details?id=com.catalyze.app'
    }
    
    /*
    {
        icon: 'smartphone',
        title: 'TaskMaster',
        description: '効率的なタスク管理アプリ。iOSとAndroidに対応し、チームコラボレーション機能を備えています。',
        link: '#'
    },
    {
        icon: 'monitor',
        title: 'Dashboard Pro',
        description: 'ビジネス向けダッシュボード。リアルタイムデータ分析とカスタマイズ可能なウィジェットを提供します。',
        link: '#'
    },
    {
        icon: 'palette',
        title: 'UI Kit Collection',
        description: 'モダンなUIコンポーネントのコレクション。ReactとVue.jsに対応した再利用可能なデザインシステムです。',
        link: '#'
    },
    {
        icon: 'activity',
        title: 'FitTracker',
        description: '健康管理アプリ。運動記録と栄養管理を統合し、パーソナライズされたフィットネスプランを提供します。',
        link: '#'
    },
    {
        icon: 'shopping-cart',
        title: 'E-Shop Builder',
        description: '簡単にオンラインショップを作成できるプラットフォーム。決済統合と在庫管理機能を備えています。',
        link: '#'
    },
    {
        icon: 'image',
        title: 'Brand Identity Kit',
        description: 'ブランド構築のための包括的なデザインキット。ロゴ、色使い、タイポグラフィを統一します。',
        link: '#'
    }
    */
];

// プロダクトカードを生成する関数
function generateProductCards() {
    const grid = document.getElementById('products-grid');
    if (!grid) return;

    const cardsHtml = productsData.map(product => `
        <div class="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-vercy-blue-500 transition duration-300 hover:shadow-2xl">
            <div class="mb-4 inline-block p-3 rounded-full bg-vercy-blue-100 text-vercy-blue-600">
                <img src="${product.icon}" class="w-8 h-8 rounded-full" alt="${product.title} icon">
            </div>
            <h3 class="text-xl font-bold mb-3 text-gray-900">${product.title}</h3>
            <p class="text-gray-600 mb-4">${product.description}</p>
            <a href="${product.link}" class="text-vercy-blue-500 hover:text-vercy-blue-600 font-semibold">詳細を見る →</a>
        </div>
    `).join('');

    grid.innerHTML = cardsHtml;
}