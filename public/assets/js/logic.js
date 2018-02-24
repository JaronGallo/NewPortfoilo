window.onload = function() {
      
  // $(".name").hide();
  // $('.name').transition('fly down');
// Skill bars
  $('#htmlBar').progress();
  $('#cssBar').progress();
  $('#jsBar').progress();
  $('#jqueryBar').progress();
  $('#reactBar').progress();
  $('#myBar').progress();
  $('#mongoBar').progress();
  $('#expressBar').progress();
  $('#authBar').progress();
  $('#testingBar').progress();

  // Project Octothorpe_v2
  $('#btn1').click(function(){
    window.open('https://github.com/JaronGallo/Octothorpe_v2');
  });

  $('#btn1Heroku').click(function(){
    window.open('https://afternoon-tor-12706.herokuapp.com/');
  });

  // React Matching Game
  $('#btn2').click(function(){
    window.open('https://github.com/JaronGallo/react-game');
  });

  $('#btn2Github').click(function(){
    window.open('https://jarongallo.github.io/react-game/');
  });

  // LIRI
  $('#btn3').click(function(){
    window.open('https://github.com/JaronGallo/LIRI_Bot');
  });

  // Project RTD
  $('#btn4').click(function(){
    window.open('https://github.com/SummitMedia1/trainstationguide');
  });

  $('#btn4Github').click(function(){
    window.open('https://summitmedia1.github.io/trainstationguide/');
  });

  // Project GiphyApi
  $('#btn5').click(function(){
    window.open('https://github.com/JaronGallo/GiphyApi');
  });

  $('#btn5Github').click(function(){
    window.open('https://jarongallo.github.io/GiphyApi/');
  });

  $('.logosGit').click(function(){
    window.open('https://github.com/JaronGallo');

  });
  // Logo animation
  $('.logosGit').hover(function(){
    $('.logosGit').transition('tada');
  });

  $('.logosLink').hover(function(){
    $('.logosLink').transition('tada');
  });

  $('.logosLink').click(function(){
    window.open('https://www.linkedin.com/in/jarongallo/');
  });
       
  setTimeout(function(){$('.shape').shape('flip down');}, 3000);

       $('.special.cards .image').dimmer({
    on: 'hover'
  });
  };

  $(function(){
    $('#docs').click(function(){
    window.open('https://docs.google.com/document/d/1XBL9l8g2DTuD3Vn8sN6lPP3iOAITH3NI2KrJiv-6t0o/edit?usp=sharing');
  });
});
