window.onload = function() {
  var redcircle = document.getElementById("redcircle");
  TweenMax.to(redcircle, 4, {x:"-50px", y:"-40px", repeat:-1, yoyo:true, repeatDelay:.2});
	
  
  var bluecircle = document.getElementById("bluecircle");
  TweenMax.to(bluecircle, 4, {x:"-50px", y:"-40px", repeat:-1, yoyo:true, repeatDelay:.2});
}