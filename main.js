window.onload = () => {
    let input = document.querySelector('#input');
    let hintsList = document.querySelector('.hints');
    let selectedValue = '';

    // Изначально скрываем список подсказок
    hintsList.classList.add('hide');

    input.addEventListener('input', function() {
        let value = this.value.trim();
        let list = document.querySelectorAll('.hints li');

        // Показываем список подсказок, только если в input есть текст
        if (value) {
            hintsList.classList.remove('hide');
            list.forEach(elem => {
                if (elem.innerText.search(RegExp(value, 'i')) === -1) {
                    elem.classList.add('hide');
                } else {
                    elem.classList.remove('hide');
                }
            });
        } else {
            hintsList.classList.add('hide');
        }
    });

    // Скрываем список подсказок при потере фокуса с input
    input.addEventListener('blur', function() {
        // Сохраняем выбранное значение
        selectedValue = input.value;
    });

    // Добавляем обработчик клика на элементы списка подсказок
    document.querySelectorAll('.hints li').forEach(item => {
        item.addEventListener('click', function() {
            // Устанавливаем значение input на выбранное значение
            input.value = this.innerText;
            selectedValue = this.innerText;
            hintsList.classList.add('hide');
        });
    });

    // Восстанавливаем значение input при фокусе
    input.addEventListener('focus', function() {
        this.value = selectedValue;
    });
};
