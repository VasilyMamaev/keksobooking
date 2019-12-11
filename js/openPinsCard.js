'use strict';

(function () {
    document.openPinsCard = function () {

        var pins = document.querySelectorAll('button.map__pin:not(.map__pin--main)');
        var pinsMap = document.querySelector('.map__pins');

        pins.forEach(function (element, i) {
            element.addEventListener('click', function () {
                var thisCard = document.parentCardFragment.childNodes[i].cloneNode(true);
                pinsMap.appendChild(thisCard)

                var cardClose = thisCard.querySelector('.popup__close');
                cardClose.addEventListener('click', function () {
                    thisCard.remove()
                })
            })
        });


    }
})();