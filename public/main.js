$(document).ready(function () {
    function handler(e) {
        e.stopPropagation();
        e.preventDefault();
    }
    $('#zapisatsya').click(function () {
        document.addEventListener("click", handler, true);
        $(".modal-wrapper ").fadeIn(800);
        $(".modal-wrapper").css("display", "flex");
        $("#phone").mask("+7(999) 999-99-99");
        setTimeout(function () {
            document.removeEventListener('click', handler, true);
        }, 800);
    });


    $('.overlay').click(function () {
        document.addEventListener("click", handler, true);
        $(".modal-wrapper").fadeOut(800);
        $(".modal-wrapper").css("display", "none");
        setTimeout(function () {
            document.removeEventListener('click', handler, true);
        }, 800)
    });

    $('#closeform').click(function () {
        document.addEventListener("click", handler, true);
        $(".modal-wrapper").fadeOut(800);
        $(".modal-wrapper").css("display", "none");
        setTimeout(function () {
            document.removeEventListener('click', handler, true);
        }, 800)
    });

    $('.slsl').slick({
        infinite: true,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 2000,
        cssEase: 'linear',
        pauseOnHover: true,
        pauseOnFocus: true,
        focusOnSelect: true,
        accessibility: false,
        mobileFirst: true,
        dots: true,
    });


    $('#name,#phone').unbind().blur(function () {
        // Для удобства записываем обращения к атрибуту и значению каждого поля в переменные
        var id = $(this).attr('id');
        var val = $(this).val();

        // После того, как поле потеряло фокус, перебираем значения id, совпадающие с id данного поля
        switch (id) {
            // Проверка поля "Имя"
            case 'name':
                var rv_name = /^[a-zA-Zа-яА-Я .]+$/; // используем регулярное выражение

                // Eсли длина имени больше 2 символов, оно не пустое и удовлетворяет рег. выражению,
                // то добавляем этому полю класс .not_error,
                // и ниже в контейнер для ошибок выводим слово " Принято", т.е. валидация для этого поля пройдена успешно

                if (val.length > 2 && val != '' && rv_name.test(val)) {
                    $(this).removeClass('.is-invalid').addClass('.is-valid');
                    $(this).next('.error-box').text('Принято')
                        .css('color', 'green')
                        .animate({ 'paddingLeft': '10px' }, 400)
                        .animate({ 'paddingLeft': '5px' }, 400);
                }

                // Иначе, мы удаляем класс not-error и заменяем его на класс error, говоря о том что поле содержит ошибку валидации,
                // и ниже в наш контейнер выводим сообщение об ошибке и параметры для верной валидации

                else {
                    $(this).removeClass('.is-valid').addClass('.is-invalid');
                    $(this).next('.error-box').html('поле "Имя" обязательно для заполнения<br>, длина имени должна составлять не менее 2 символов<br>, поле должно содержать только русские или латинские буквы')
                        .css('color', 'red')
                        .animate({ 'paddingLeft': '10px' }, 400)
                        .animate({ 'paddingLeft': '5px' }, 400);
                }
                break;
            case 'phone':
                if (val == "+7(___) ___-__-__") {
                    $(this).removeClass('.is-valid').addClass('.is-invalid');
                    $(this).next('.error-box').html('поле "Телефон" обязательно для заполнения,<br> укажите телефон в формате +7 (999) 999-99-99 <br>')
                        .css('color', 'red')
                        .animate({ 'paddingLeft': '10px' }, 400)
                        .animate({ 'paddingLeft': '5px' }, 400);
                }

                // Иначе, мы удаляем класс not-error и заменяем его на класс error, говоря о том что поле содержит ошибку валидации,
                // и ниже в наш контейнер выводим сообщение об ошибке и параметры для верной валидации

                else {
                    $(this).removeClass('.is-invalid')
                    $(this).next('.error-box').html('');
                }

                break;
        } // end switch(...)
    }); // end blur()


    //Получаем кнопку сабмит и добавляем обработчик колик


    let a = 3;

    $("#Otpravit").click(function () {
        // Проверка поля Имя
        var error = 0;
        var rv_name = /^[a-zA-Zа-яА-Я .]+$/;
        var name = $('#name');
        if (name.val() !== '' && name.val().length > 2 && rv_name.test(name.val())) {
            name.removeClass('.is-invalid').addClass('.is-valid');
            name.next('.error-box').text('Принято')
                .css('color', 'green')
                .animate({ 'paddingLeft': '10px' }, 400)
                .animate({ 'paddingLeft': '5px' }, 400);
        }
        else {
            name.removeClass('.is-valid').addClass('.is-invalid');
            name.next('.error-box').html('поле "Имя" обязательно для заполнения<br>, длина имени должна составлять не менее 2 символов<br>, поле должно содержать только русские или латинские буквы')
                .css('color', 'red')
                .animate({ 'paddingLeft': '10px' }, 400)
                .animate({ 'paddingLeft': '5px' }, 400);
            error += 1;

        }

        // Проверка поля Телефон
        var phone = $('#phone');
        if (phone.val().length !== 17) {
            phone.removeClass('.is-valid').addClass('.is-invalid');
            phone.next('.error-box').html('поле "Телефон" обязательно для заполнения,<br> укажите телефон в формате +7 (999) 999-99-99 <br>')
                .css('color', 'red')
                .animate({ 'paddingLeft': '10px' }, 400)
                .animate({ 'paddingLeft': '5px' }, 400);
            error += 1;
        }
        else {
            phone.removeClass('.is-invalid')
            phone.next('.error-box').text('');
        }

        if (error == 0) {
            $.ajax({
                url: 'universal_form.php',
                type: 'post',
                data: $('form#form_zapis').serialize(),

                beforeSend: function (xhr, textStatus) {
                    $('form#form_zapis :input').attr('disabled', 'disabled');
                },

                success: function (response) {
                    $('form#form_zapis :input').removeAttr('disabled');
                    $('.modal_ok').fadeIn(800);
                    $('.modal_ok').css("display", "flex");
                    $('#uspeshnaya_otpravka').click(function () {
                        $(".modal_ok").fadeOut(800);
                        $(".modal_ok").css("display", "none");
                        location.reload();
                    });
                }
            }); // end ajax({...})
        }
        else {
            return false;
        }


    })






});