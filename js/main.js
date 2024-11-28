// Получаем ссылку на шапку
let header = document.getElementById('header');
let lastScrollTop = 0;

// Устанавливаем плавный переход для шапки в CSS
header.style.transition = "top 0.3s ease"; // Плавное скрытие и появление шапки

// Отслеживаем прокрутку страницы
window.addEventListener('scroll', function() {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    
    if (currentScroll > lastScrollTop) {
        // Когда пользователь прокручивает вниз
        header.style.top = "-200px"; // Прячем шапку
    } else {
        // Когда пользователь прокручивает вверх
        header.style.top = "50"; // Показываем шапку
    }
    
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Для корректной работы на верхней части страницы
});
