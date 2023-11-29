window.onload = function () {
    let favoriteItems = document.querySelectorAll('.favorite-coffee__content-items')
    let buttons = document.querySelectorAll('.favorite-btn__item')
    console.log(buttons)
    console.log(coffee)
    function showContent(index) {
        // Скрываем все блоки
        favoriteItems.forEach(function(block) {
            block.classList.add('hidden');
        });
        buttons.forEach(function(block) {
            block.classList.remove('active');
        });
        // Отображаем выбранный блок
        favoriteItems[index].classList.remove('hidden');
        buttons[index].classList.add('active');
    }
    // Добавляем обработчик события для каждой кнопки
    buttons.forEach(function(button, index) {
        button.addEventListener('click', function() {
            showContent(index);
        });
    });


    // function toggleFavorite(){
    //     for(let i = 0; i < btn.length; i++) {
    //         btn[i].onclick = function (e) {
    //             coffee.style.display = 'none'
    //             let current = this
    //             console.log(current)
    //             for (let i = 0; i < e.length; i++) {
    //                 if (current !== e[i]) {
    //                     e[i].classList.remove('active');
    //                 } else if (current.classList.contains('active') === true) {
    //                     current.classList.remove('active');
    //                 } else {
    //                     current.classList.add('active')
    //                 }
    //             }
    //         }
    //     }
    // }
}
