var telescope = $('#telescope'),
    h = window.innerHeight,
    w = window.innerWidth
    texto = ['TRILLIONS OF STARS', 'YOU ARE AMAZINGLY SMALL'],
    trillions = document.querySelector('.trillions'),
    tl = new TimelineLite();


function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

tl.staggerFrom(telescope, 2, {top:54+'%',  autoAlpha:0, ease: Elastic.easeOut.config(1, 0.48), y: 0, delay:1.5})
  .staggerTo(telescope, 1.9, {scale: 6, left:15+'%', top:95+'%', ease: Power4.easeInOut, y: 0, onComplete:makeInterval});
 //GENERAR SET INTERVAL EN EL QUE SE CREEN LAS ESTRELLAS Y FORMEN UNA CONSTELACIÓN(?)
 //ANIMACIÓN QUE HAGA SCALE EN EL TELESCOPIO Y LO ORILLE A LA ESQUINA INFERIOR


function makeStars(){
  star = document.createElement('div');
  star.className = "stars";
  star.style.top = getRandomInt(0, h) + 'px';
  star.style.left = getRandomInt(0, w) + 'px';
  var medida = getRandomInt(2, 8) + 'px';

  $('#bodyUno').append(star);
  TweenLite.to(star, 0.3, { autoAlpha: 1, width:medida, height: medida },Elastic.easeOut.config(1, 0.48));
  //clearInterval(interval);
}

function makeInterval(){
    interval = setInterval(makeStars, 1300);
    tl.to(trillions, 2, {autoAlpha:1, delay:2})
      .to(trillions, 1.2, {marginTop:'-100px', autoAlpha:0, delay:2});
}
