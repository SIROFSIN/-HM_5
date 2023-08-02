//Объявление переменных
const nightsCountMax = 28;
const nightsCountMin = 1;
//Валидация загрузки элементов DOM + регистрация основного параметра и событий
document.addEventListener('DOMContentLoaded', function() {
    const nightCountInput = document.getElementById('nightCount');
    const increaseButton = document.getElementById('increaseBtn');
    const decreaseButton = document.getElementById('decreaseBtn');
// Запуск функции увеличения числа ночей по нажатию на кнопку
    increaseButton.addEventListener('click', function() {
    let currentNightsCount = parseInt(nightCountInput.value);
    if (currentNightsCount < nightsCountMax) {
        currentNightsCount++;
        nightCountInput.value = currentNightsCount;
    }
});
// Запуск функции уменьшения числа ночей по нажатию на кнопку
    decreaseButton.addEventListener('click', function() {
    let currentNightsCount = parseInt(nightCountInput.value);
    if (currentNightsCount > nightsCountMin) {
        currentNightsCount--;
        nightCountInput.value = currentNightsCount;
    }
});
});

