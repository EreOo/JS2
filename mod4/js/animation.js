function animation_opacity(element, steps, timeStep, finOpasity){
   
    var i = 0 ;
	var curOpacity=0
	if (element.style.opacity) var curOpacity=parseInt(element.style.opacity);
	
	if (curOpacity < finOpasity) {var direction = -1; var beg=0}
	 else {var direction = 1; var beg=1};

	function iterate(){
	i++;

	element.style.opacity = beg - direction*i/steps;
		/*@cc_on
	element.filters.alpha.opacity = 100*(beg - direction*i/steps);
	@*/

    if (i<steps){ 
	/*Для отладки и изучения скрипта можно раскоментировать
    element.innerHTML = "opacity="+element.style.opacity+"<br>";
    element.innerHTML += "direction="+direction+"<br>";
    element.innerHTML += "finOpasity="+finOpasity+"<br>";
    element.innerHTML += "curOpacity="+curOpacity+"<br>";*/
	setTimeout(iterate, timeStep*1000);}
	}
  
   iterate();

   
  }

function changeStyle(e){
  animation_opacity(e, 40, 0.1,0);
}
