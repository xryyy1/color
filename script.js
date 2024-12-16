let currentIndex = 0;
const pages = document.querySelectorAll('.page');

// 监听滑动事件
window.addEventListener('touchstart', handleTouchStart, false);
window.addEventListener('touchmove', handleTouchMove, false);

let touchStartY = 0;

function handleTouchStart(e) {
    touchStartY = e.touches[0].clientY;
}

function handleTouchMove(e) {
    const touchEndY = e.touches[0].clientY;
    if (touchStartY - touchEndY > 50) {
        // 滑动向上，切换到下一个页面
        currentIndex = Math.min(pages.length - 1, currentIndex + 1);
        changePage();
    } else if (touchEndY - touchStartY > 50) {
        // 滑动向下，切换到上一个页面
        currentIndex = Math.max(0, currentIndex - 1);
        changePage();
    }
}

function changePage() {
    for (let i = 0; i < pages.length; i++) {
        pages[i].style.transform = `translateY(-${currentIndex * 100}vh)`;
    }
}
