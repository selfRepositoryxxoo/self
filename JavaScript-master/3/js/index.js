
FastClick.attach(document.body);
~function () {
    var winW = document.documentElement.clientWidth;
    document.documentElement.style.fontSize = winW / 640 * 100 + "px";
}();


new Swiper(".swiper-container", {
    loop: true,
    direction: "vertical",
    onSlidePrevEnd: changeEnd,//延迟加载
    onSlideNextEnd: changeEnd
});


function changeEnd(swiper) {
    var n = swiper.activeIndex,
        slideAry = swiper.slides;
    [].forEach.call(slideAry, function (slide, index) {
        if (n === index) {
            slide.id = (n == 1 || n == 3) ? "page1" : "page2";
            return;
        }
        slide.id = null;
    });
}


var music = document.getElementById("music"),
    musicAudio = document.getElementById("musicAudio");
window.setTimeout(function () {
    musicAudio.play();  //preload=null; 增加一个事件；canplay是否能播放；  设置定时器让其播放； 还要增加一个事件canplay看是否能播放；
    musicAudio.addEventListener("canplay", function () {
        music.style.display = "block";
        music.className = "music move";
    }, false);
}, 1000);
music.addEventListener("click", function () {
    //->当前是暂停状态我让其播放
    if (musicAudio.paused) {
        musicAudio.play();
        music.className = "music move";
        return;
    }
    //->当前是播放状态我让其暂停
    musicAudio.pause();
    music.className = "music";
}, false);





