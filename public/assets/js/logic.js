window.onload = function() {
    var test = document.getElementById("greenSock");
    var test2 = document.getElementById("greenSock2");
    var test3 = document.getElementById("greenSock3");
    var test4 = document.getElementById("greenSock4");
    var tl = new TimelineMax();
    tl.from(test, 1, { x:-1000, autoAlpha:0});
    TweenLite.from(test2, 1, { x:-1000,delay:.5, autoAlpha:0});
    TweenLite.from(test3, 1, { x:-1000,delay:1, autoAlpha:0});
    TweenLite.from(test4,1, { x:-1000,delay:.5, autoAlpha:0});
};
