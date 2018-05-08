
window.onload = function () {
    var test = document.getElementById("greenSock");
    var test2 = document.getElementById("greenSock2");
    var test3 = document.getElementById("greenSock3");
    var test4 = document.getElementById("greenSock4");

    var skills = document.getElementById("greenSock5");


    TweenLite.from(test, 1, { x: -1000, autoAlpha: 0 });
    TweenLite.from(test2, 1, { x: -1000, delay: .5, autoAlpha: 0 });
    TweenLite.from(test3, 1.1, { x: -1000, delay: .75, autoAlpha: 0 });
    TweenLite.from(test4, 1.2, { x: -1000, delay: 1, autoAlpha: 0 });
 




    // var $circle = $(".circle");

    
    // function moveCircle(e) {
    //   TweenLite.to($circle, 0.4, {
    //     css: {
    //       left: e.pageX,
    //       top: e.pageY,
    //       scale:.50,
    //     }
    //   });
    
    
    // }
    
    // document.addEventListener('mousemove', moveCircle)
 
    // var bt = document.querySelector('img');


    // bt.addEventListener('mouseover', overButton)
    // bt.addEventListener('mouseout', outButton)



    
    // function overButton() {
    //     TweenLite.to($circle, 0.15, {
    //         autoAlpha:0,
    //         ease:Linear.easeNone
    //     })
    // }
    
    // function outButton() {
    //     TweenLite.to($circle, 0.15, {
    //         autoAlpha:1,
    //         ease:Linear.easeNone
    //     })
    // }
    
 
   
    };
