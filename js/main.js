document.addEventListener('DOMContentLoaded', ()=>{
  // モバイル: ハンバーガーや他のナビは後で追加できます。
  // スムーススクロール（内部リンク）
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', (e)=>{
      const href = a.getAttribute('href')
      if(href && href.startsWith('#')){
        const target = document.querySelector(href)
        if(target){
          e.preventDefault()
          target.scrollIntoView({behavior:'smooth'})
        }
      }
    })
  })

  const form = document.getElementById('contactForm')
  form?.addEventListener('submit', (e)=>{
    e.preventDefault()
    // デモ: 実際はここで fetch を使って API に送る
    alert('お問い合わせを受け付けました（デモ）。追って担当よりご連絡します。')
    form.reset()
  })

  // モバイルメニューのトグル
  const menuToggle = document.querySelector('.menu-toggle')
  const siteNav = document.querySelector('.site-nav')
  menuToggle?.addEventListener('click', ()=>{
    const expanded = menuToggle.getAttribute('aria-expanded') === 'true'
    menuToggle.setAttribute('aria-expanded', String(!expanded))
    siteNav?.classList.toggle('open')
  })
})