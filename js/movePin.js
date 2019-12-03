'use strict';

(function () {

    var map = document.querySelector('.map');
    var pin = document.querySelector('.map__pin--main');
    var adForm = document.querySelector('.ad-form');
    var adFormFielsets = document.querySelectorAll('.ad-form fieldset');

    var adressInput = document.querySelector('#address');

    pin.addEventListener('mousedown', function(evt) {
        evt.preventDefault();

        var startCoords = {
            x : evt.clientX,
            y : evt.clientY
        };

        var onMouseMove = function (evtMove) {

            var shift = { 
                x : startCoords.x - evtMove.clientX,
                y : startCoords.y - evtMove.clientY
            };

            startCoords = {
                x : evtMove.clientX,
                y : evtMove.clientY
            };

            pin.style.top = (pin.offsetTop - shift.y) + 'px';
            pin.style.left = (pin.offsetLeft - shift.x) + 'px';
        };

        var onMouseUp = function (evtUp) {
            evtUp.preventDefault();

            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseup', onMouseUp);

            map.classList.remove('map--faded');
            
            adFormFielsets.forEach(function(item) {item.disabled = false});
            adForm.classList.remove('ad-form--disabled');

            adressInput.value = startCoords.x + ', ' + startCoords.y;
        };

        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);

    })



})();