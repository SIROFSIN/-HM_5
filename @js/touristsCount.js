//Объявление переменных
const touristsCountMax = 8;
const touristsCountMin = 1;
//Валидация загрузки элементов DOM + регистрация основного параметра и событий
document.addEventListener('DOMContentLoaded', function() {
    const touristCountInput = document.getElementById('touristCount');
    const increaseButton = document.getElementById('increaseBtn2');
    const decreaseButton = document.getElementById('decreaseBtn2');
// Запуск функции увеличения числа туристов по нажатию на кнопку
    increaseButton.addEventListener('click', function() {
    let currentTouristsCount = parseInt(touristCountInput.value);
    if (currentTouristsCount < touristsCountMax) {
        currentTouristsCount++;
        touristCountInput.value = currentTouristsCount;
    }
});
// Запуск функции уменьшения числа туристов по нажатию на кнопку
    decreaseButton.addEventListener('click', function() {
    let currentTouristsCount = parseInt(touristCountInput.value);
    if (currentTouristsCount > touristsCountMin) {
        currentTouristsCount--;
        touristCountInput.value = currentTouristsCount;
    }
});
});

