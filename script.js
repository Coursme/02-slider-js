const slides = document.querySelector('.slides');
const slide = document.querySelectorAll('.slide');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentIndex = 0;
const totalSlides = slide.length;

function updateSliderPosition() {
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

nextBtn.addEventListener('click', () => {
    if (currentIndex < totalSlides - 1) {
        currentIndex++;
    } else {
        currentIndex = 0; // Возврат к первому слайду
    }
    updateSliderPosition();
});

prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = totalSlides - 1; // Переход на последний слайд
    }
    updateSliderPosition();
});


let autoSlideInterval = setInterval(() => {
    if (currentIndex < totalSlides - 1) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    updateSliderPosition();
}, 3000); // Смена слайда каждые 3 секунды

// Остановка автопереключения при взаимодействии с кнопками
nextBtn.addEventListener('click', () => {
    clearInterval(autoSlideInterval);
    autoSlideInterval = setInterval(() => {
        if (currentIndex < totalSlides - 1) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        updateSliderPosition();
    }, 3000);
});

prevBtn.addEventListener('click', () => {
    clearInterval(autoSlideInterval);
    autoSlideInterval = setInterval(() => {
        if (currentIndex < totalSlides - 1) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        updateSliderPosition();
    }, 3000);
});
