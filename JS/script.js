const members = document.querySelectorAll('.member');
window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const vh = window.innerHeight;
    
    // 計算動畫進度 (0 到 1)，在滾動一個螢幕高度內完成噴射
    const progress = Math.min(scrollY / vh, 1); 

    // 1. 處理成員照片噴射 (.member)
    
    members.forEach((member, index) => {
        // 分配噴射方向：將 360 度 (2*PI) 平均分配給照片數量
        const angle = (index / members.length) * Math.PI * 2;
        const speed = 800; // 噴射飛行的距離（像素）
        
        const moveX = Math.cos(angle) * progress * speed;
        const moveY = Math.sin(angle) * progress * speed;
        
        // 套用位移、縮放與透明度
        member.style.transform = `translate(${moveX}px, ${moveY}px) scale(${1 - progress})`;
        member.style.opacity = 1 - progress;
    });

    // 2. 處理中央 Logo 噴射 (.main-logo)
    const logo = document.querySelector('.main-logo');
    if (logo) {
        // Logo 往上飄移並縮小
        const logoMoveY = progress * -150; 
        logo.style.transform = `translateY(${logoMoveY}px) scale(${1 - progress})`;
        logo.style.opacity = 1 - (progress * 1.5);
    }
});

const whale = document.querySelector('.whale-container');

window.addEventListener('scroll', () => {
    // 這裡是你原本的照片噴射 (progress) 代碼...
    const scrollY = window.scrollY;
    
    if (whale) {
        // 1. 隨滾動垂直飄移 (乘數越小移動越慢)
        const whaleY = scrollY * 0.12; 
        
        // 2. 利用正弦函數 (Math.sin) 產生波浪般的左右晃動
        // scrollY / 200 控制波浪的頻率，* 20 控制晃動幅度
        const whaleX = Math.sin(scrollY / 200) * 20; 
        
        // 3. 隨滾動微調旋轉角度，模擬鯨魚轉向
        const whaleRotate = Math.sin(scrollY / 400) * 5;

        // 套用位移與旋轉
        whale.style.transform = `translate(${whaleX}px, ${-whaleY}px) rotate(${whaleRotate}deg)`;
    }
});