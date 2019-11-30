'use strict';

(function () {

    // удаление класса

    var map = document.querySelector('.map');
    map.classList.remove('map--faded');


    //  содание шаблонов

    var pinsMap = document.querySelector('.map__pins');
    var parentPinFragment = document.createDocumentFragment();
    var parentCardFragment = document.createDocumentFragment();
    var similarAdTemplate = document.querySelector('#temp')
        .content.querySelector('.map__card');
    var similarAdPin = document.querySelector('#temp')
    .content.querySelector('.map__pin');
 
    for (var i = 0; i < document.mockAds.length; i++) {
        var similarPin = similarAdPin.cloneNode(true);
        var similarAd = similarAdTemplate.cloneNode(true);        

        // функция отрнисовки features
        var createFeatures = function () {
            var featuresArr = document.mockAds[i].offer.features;
            for (var k = 0; k < featuresArr.length; k++) {
                var el = document.createElement('li');
                el.className = `popup__feature popup__feature--${featuresArr[k]}`;
                similarAd.querySelector('.popup__features').append(el);
            }
        };
        // функция отрисовки photos
        var createPhotos = function () {
            var photosArr = document.mockAds[i].offer.photos;

            for (var j = 0; j < photosArr.length; j++) {
                var elem = similarAd.querySelector('.popup__photo');
                var photo = elem.cloneNode(true);
                photo.src = `${photosArr[j]}`;
                similarAd.querySelector('.popup__photos').appendChild(photo)
            }

        };

        // заполнение шаблонов

        // метки 

        similarPin.style = `left: ${document.mockAds[i].location.x}px; top: ${document.mockAds[i].location.y}px`;
        similarPin.querySelector('.map__pin img').src = document.mockAds[i].author.avatar;

        parentPinFragment.appendChild(similarPin);

        
        // объявления

        similarAd.querySelector('.popup__avatar').src = document.mockAds[i].author.avatar;
        similarAd.querySelector('.popup__title').textContent = document.mockAds[i].offer.title;
        similarAd.querySelector('.popup__text--address').textContent = document.mockAds[i].offer.address;
        similarAd.querySelector('.popup__text--price').textContent = document.mockAds[i].offer.price;
        similarAd.querySelector('.popup__type').textContent = document.mockAds[i].offer.type;
        similarAd.querySelector('.popup__text--capacity').textContent = `${document.mockAds[i].offer.rooms} комнаты на ${document.mockAds[i].offer.guests} гостей`;
        similarAd.querySelector('.popup__text--time').textContent = `Заезд после ${document.mockAds[i].offer.checkin}, выезд до ${document.mockAds[i].offer.checkout}`;
        similarAd.querySelector('.popup__features').innerHTML = '';
        createFeatures();
        similarAd.querySelector('.popup__description').textContent = document.mockAds[i].offer.description;
        createPhotos();

        parentCardFragment.appendChild(similarAd);
    }

    pinsMap.appendChild(parentPinFragment);
    map.appendChild(parentCardFragment);

    // удаление пустого img
    document.addEventListener("DOMContentLoaded", () => {
        var list = document.querySelectorAll('.popup__photos');
        list.forEach((listEl, idx) => {
            listEl.removeChild(listEl.childNodes[1])
        })
    });





})();