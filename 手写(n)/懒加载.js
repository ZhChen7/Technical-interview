function lazyload(images) {
    var n = 0;

    return function() {
        var seeHeight = document.documentElement.clientHieght;
        var scrollHeight = document.documentElement.scrollTop;

        [].slice.call(images, n).forEach(function(image) {
            if(image.offsetTop <= seeHeight+scrollHeight && image.src==='./images/laoding.png') {
                image.src = image.dataset.src;
                n++;
            }
        });
    };
}
