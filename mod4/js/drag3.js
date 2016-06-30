// добавить обработчик события 
 addEvent(document, 'mousedown', mouseDown);

 //глобальная переменная 
 var drag;

// определить функцию mouseDown

function mouseDown(e){
 e = e || event;
var target = e.target || e.srcElement;

if (target.className == "top" && target.parentNode.className == 'drag' && e.shiftKey){

  //при клике запоминаем
  drag = target.parentNode;
  drag.X = drag.offsetLeft;
  drag.Y = drag.offsetTop;
  drag.mouseX = e.clientX;
  drag.mouseY = e.clientY;
  
  //запускаем отслеживание mousemove и  mouseup
   addEvent(document, 'mousemove', mouseMove);
   addEvent(document, 'mouseup', mouseUp);
}

} 

//определить остальные функции
function mouseMove(e){
 e = e || event;
 //убираем подтормаживание на старых машинах
 cancelEvent(e);
 
 //Для наведения красоты, должны учесть границы окна :)
 //Крайнее положение по x
 /*if (drag.X + (e.clientX - drag.mouseX) > 0){
  drag.style.left = drag.X + (e.clientX - drag.mouseX) + "px"; 
  }
  else { drag.style.left = "0";}*/
 
  //Крайнее положение по y
 /*if (drag.Y + (e.clientY - drag.mouseY) > 0){
  drag.style.top = drag.Y + (e.clientY - drag.mouseY) + "px"; 
  }
  else { drag.style.top = "0";}*/

 
} 

function mouseUp(e){
 e = e || event;
  removeEvent(document, 'mousemove', mouseMove);
  removeEvent(document, 'mouseUp', mouseUp);
} 