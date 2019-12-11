'use strict';

(function () {
    document.validation = function () {

        var form = document.querySelector('.ad-form')
        var submitBtn = form.querySelector('.ad-form__submit');
        var inputs = form.querySelectorAll('input');

        var personsInput = form.querySelector('#room_number');
        var roomsInput = form.querySelector('#capacity');

        submitBtn.addEventListener('click', function() {
            if (personsInput.value != roomsInput.value) {
                personsInput.setCustomValidity('количество комнат должно равняться количесту посетителей')
            } else {personsInput.setCustomValidity('')}
        })


        // function CustomValidation() {};

        // CustomValidation.prototype = {
        //     //пустой массив сообщений об ошибках
        //     invalidities: [],

        //     //метод проверяющий валидность
        //     checkValidity: function (input) {
        //         var validity = input.validity;

        //         if (validity.patternMismatch) {
        //             this.addInvalidity('This is the wrong pattern for this field');
        //         }

        //         if (validity.tooLong) {
        //             var max = input.getAttribute('maxlength');
        //             this.addInvalidity('The maximum value should be ' + max);
        //         }

        //         if (validity.tooShort) {
        //             var min = input.getAttribute('minlength');
        //             this.addInvalidity('The minimum value should be ' + min);
        //         }

        //         if (personsInput.value != roomsInput.value) {
        //             this.addInvalidity('количество комнат должно равняться количесту посетителей')
        //         }

        //     },

        //     //доавление сообщения об ошибке в массив
        //     addInvalidity: function(message) {
        //         this.invalidities.push(message)
        //     },

        //     //получение общего текста об ошибках
        //     getInvalidities: function() {
        //         return this.invalidities.join('. \n')
        //     }
        // };

        // //обработчик клика на кнопке отправки формы
        // submitBtn.addEventListener('click', function(evt) {
        //     for (var i = 0; i < inputs.length; i++){

        //         var input = inputs[i];

        //         //проверка валидности поля
        //         if(input.checkValidity() == false) {
        //             console.log('lol');
        //             var inputCustomValidation = new CustomValidation();
        //             inputCustomValidation.checkValidity(input);
        //             var castomValidityMessage = inputCustomValidation.getInvalidities();
        //             input.setCustomValidity(castomValidityMessage);
        //         }
        //     }
        // })

    };
})();