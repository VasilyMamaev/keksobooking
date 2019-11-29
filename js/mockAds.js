'use strict';

(function () {

  document.mockAds = [];

  var mockData = {
    TITLES: ["Большая уютная квартира", "Маленькая неуютная квартира",
      "Огромный прекрасный дворец", "Маленький ужасный дворец",
      "Красивый гостевой домик", "Некрасивый негостеприимный домик",
      "Уютное бунгало далеко от моря", "Неуютное бунгало по колено в воде"
    ],
    TYPES: ["palace", "flat", "house", "bungalo"],
    CHECKINS: ["12:00", "13:00", "14:00"],
    FEATURES: ["wifi", "dishwasher", "parking", "washer", "elevator", "conditioner"],
    PHOTOS: ["http://o0.github.io/assets/images/tokyo/hotel1.jpg", "http://o0.github.io/assets/images/tokyo/hotel2.jpg", "http://o0.github.io/assets/images/tokyo/hotel3.jpg"]
  }

  // функция случайного числа в диапозоне
  var getRandomNumber = function (min, max) {
    return Math.round(Math.random() * (max - min) + min)
  };

  // функция получения перетосованного массива
  var randomShuffleArr = function (arr) {
    var newArr = arr.slice();
    for (var i = newArr.length - 1; i > 0; i--) {
      var k = getRandomNumber(0, (newArr.length - 1));
      var temp = newArr[i];
      newArr[i] = newArr[k];
      newArr[k] = temp;
    }
    return newArr;
  }

  // копия массива со случайной длиной
  var randomCutedArr = function (arr) {
    var newArr = arr.slice(0, getRandomNumber(1, (arr.length - 1)));
    return newArr;
  }



  // функция создания объекта массива объявлений
  var GenerateSimilarAd = function (i) {
    var loc = {
      x: getRandomNumber(0, 1200),
      y: getRandomNumber(130, 630)
    };
    var adObj = {
      author: {
        avatar: `img/avatars/user0${i + 1}.png`
      },
      offer: {
        title: mockData.TITLES[i],
        address: `${loc.x}, ${loc.y}`,
        price: getRandomNumber(1000, 1000000),
        type: mockData.TYPES[getRandomNumber(0, 3)],
        rooms: getRandomNumber(1, 5),
        guests: getRandomNumber(1, 10),
        checkin: mockData.CHECKINS[getRandomNumber(0, 2)],
        checkout: mockData.CHECKINS[getRandomNumber(0, 2)],
        features: randomCutedArr(randomShuffleArr(mockData.FEATURES)),
        description: '',
        photos: randomShuffleArr(mockData.PHOTOS)
      },
      location: {
        x: loc.x,
        y: loc.y
      }
    }
    return adObj
  };

  for (var j = 0; j < 8; j++) {
    document.mockAds[j] = GenerateSimilarAd(j);
  }

})();
