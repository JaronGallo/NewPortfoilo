
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
 

    if($(window).width() >= 1024){
       $(".zoom").each(function(i, el) {


        
    
        // create a timeline for this element in paused state
        var tl = new TimelineMax({
          paused: true
        });
    
        // create your tween of the timeline in a variable
        tl.to(el, 0.1, {
          scale: 1.02
        });
    
        // store the tween timeline in the javascript DOM node
        el.animation = tl;
    
        //create the event handler
        $(el).on("mouseenter", function() {
          //this.style.willChange = 'transform';
          this.animation.play();
          el.parentNode.appendChild(el);
        }).on("mouseleave", function() {
          //this.style.willChange = 'auto';
          el.parentNode.insertBefore(el, el.parentNode.firstChild);
          this.animation.reverse();
         
        });
      });
          } else {
             console.log('test');
          }
      
    

 

      // loop through each element
  


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
