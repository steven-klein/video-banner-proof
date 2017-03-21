(function(window, undefinded){

    var vid = document.getElementById("bgvid"),
    html = document.documentElement;
    pauseButton = document.getElementById("vidpause");

    if( vid.canPlayType && vid.canPlayType('video/mp4').replace(/no/, '') ) {
        html.classList.add("has-video");
    }

    function vidFade() {
        html.classList.add("stopfade");
    }

    vid.addEventListener('ended', function() {

        // only functional if "loop" is removed
        vid.pause();

        // to capture IE10
        vidFade();

    });

    pauseButton.addEventListener("click", function() {

        html.classList.toggle("stopfade");

        if (vid.paused) {
            vid.play();
        } else {
            vid.pause();
        }

    });

})(window);
