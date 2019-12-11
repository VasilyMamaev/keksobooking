'use strict';

(function(){

    var avatarImg = document.querySelector('.ad-form-header__preview > img:nth-child(1)');
    var avatarInput = document.querySelector('#avatar');

    var FILE_TYPES = ['jpg', 'jpeg', 'gif', 'png'];

    avatarInput.addEventListener('change', function(){
        var file = avatarInput.files[0];
        var fileName = file.name.toLowerCase();

        var matches = FILE_TYPES.some(function (it) {
            return fileName.endsWith(it);
        });

        if (matches) {
            var reader = new FileReader();

            reader.addEventListener('load', function() {
                avatarImg.src = reader.result;
            });

            reader.readAsDataURL(file);
        };

    });
})();