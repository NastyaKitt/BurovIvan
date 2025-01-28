let politicBtn = document.getElementById('popup')
let clsPolitic = document.getElementById('cls')

politicBtn.addEventListener("click", function() {
    document.getElementById("modalPolitic").classList.add("open");
});
clsPolitic.addEventListener("click", function() {
    document.getElementById("modalPolitic").classList.remove("open");
});




document.addEventListener('DOMContentLoaded', function() {
    const reviews = document.querySelectorAll('.review');
    const leftBtn = document.querySelector('.leftBtn');
    const rightBtn = document.querySelector('.rightBtn');
    let currentIndex = 0;

    function updateReviews() {
        reviews.forEach((review, index) => {
            // Удаляем класс 'active' у всех
            review.classList.remove('active');

            // Если индекс совпадает с текущим, добавляем класс 'active'
            if (index === currentIndex) {
                review.classList.add('active');
            }
        });
    }

    rightBtn.addEventListener('click', function() {
        currentIndex = (currentIndex + 1) % reviews.length; // Переход к следующему отзыву
        updateReviews(); // Обновляем отображение отзывов
    });

    leftBtn.addEventListener('click', function() {
        currentIndex = (currentIndex - 1 + reviews.length) % reviews.length; // Переход к предыдущему отзыву
        updateReviews(); // Обновляем отображение отзывов
    });

    // Инициализируем отображение с первым отзывом
    updateReviews();
});