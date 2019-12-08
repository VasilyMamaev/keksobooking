'use strict';

(function () {

    var map = document.querySelector('.map');
    var pinsMap = document.querySelector('.map__pins');
    var pin = document.querySelector('.map__pin--main');
    var adForm = document.querySelector('.ad-form');
    var adFormFielsets = document.querySelectorAll('.ad-form fieldset');

    var adressInput = document.querySelector('#address');

    var listenerTrigger = false;

    var onMouseDown = function(evt) {
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

            if (!listenerTrigger) {
            map.classList.remove('map--faded');            
            adFormFielsets.forEach(function(item) {item.disabled = false});
            adForm.classList.remove('ad-form--disabled');

            pinsMap.appendChild(document.parentPinFragment);
            document.openPinsCard();
            };
            adressInput.value = startCoords.x + ', ' + startCoords.y;

            listenerTrigger = true;          
        };

        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);

    };

    pin.addEventListener('mousedown', onMouseDown);


})();