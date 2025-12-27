document.addEventListener('DOMContentLoaded', () => {
  // スムーズスクロール
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || targetId === '') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        const header = document.querySelector('.header');
        const headerHeight = header ? header.offsetHeight : 0;
        const targetPosition = targetElement.offsetTop - headerHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });

        // メニューが開いていたら閉じる
        if (headerToggle && mobileMenu && body.classList.contains('menu-open')) {
          headerToggle.classList.remove('is-active');
          mobileMenu.classList.remove('is-open');
          body.classList.remove('menu-open');
        }
      }
    });
  });


  // タブ切り替え機能
  const signTabs = document.querySelectorAll('.sign__tab');
  const signTabContents = document.querySelectorAll('.sign__tab-content');
  
  if (signTabs.length > 0 && signTabContents.length > 0) {
    signTabs.forEach((tab, index) => {
      tab.addEventListener('click', () => {
        // すべてのタブからactiveクラスを削除
        signTabs.forEach(t => t.classList.remove('active'));
        // すべてのタブコンテンツからactiveクラスを削除
        signTabContents.forEach(content => content.classList.remove('active'));
        
        // クリックされたタブにactiveクラスを追加
        tab.classList.add('active');
        // 対応するタブコンテンツにactiveクラスを追加
        signTabContents[index].classList.add('active');
      });
    });
  }

  // Swiper初期化（腰）
  const koshiSwiper = new Swiper('.solve-koshi-swiper', {
    slidesPerView: 'auto',
    loop: true,
    pagination: {
      el: '#solve-koshi-swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
    navigation: {
      nextEl: '#solve-koshi-swiper-next',
    },
  });

  // Swiper初期化（肩）
  const kataSwiper = new Swiper('.solve-kata-swiper', {
    slidesPerView: 'auto',
    loop: true,
    pagination: {
      el: '#solve-kata-swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
    navigation: {
      nextEl: '#solve-kata-swiper-next',
    },
  });

  // Swiper初期化（首）
  const kubiSwiper = new Swiper('.solve-kubi-swiper', {
    slidesPerView: 'auto',
    loop: true,
    pagination: {
      el: '#solve-kubi-swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
    navigation: {
      nextEl: '#solve-kubi-swiper-next',
    },
  });

  // FAQアコーディオン機能
  const faqTitles = document.querySelectorAll('.is-AccordionTitle');
  
  if (faqTitles.length > 0) {
    faqTitles.forEach(title => {
      title.addEventListener('click', () => {
        const faqItem = title.closest('.faq__item');
        const accordionContent = title.nextElementSibling;
        
        // すでに開いているかチェック
        const isOpen = faqItem.classList.contains('is-open');
        
        if (isOpen) {
          // 閉じる
          faqItem.classList.remove('is-open');
          accordionContent.style.maxHeight = null;
        } else {
          // 開く
          faqItem.classList.add('is-open');
          accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
        }
      });
    });
  }
});