// добавить обработчик события 
 addEvent(document, 'mousedown', mouseDown);

 //глобальная переменная 
 var drag;

// определить функцию mouseDown

function mouseDown(e){
 e = e || event;
var target = e.target || e.srcElement;

if (target.className == "top" && target.parentNode.className == 'drag' && e.shiftKey){
alert("fg")
  //при клике запоминаем
  drag = target.parentNode;
  drag.X = drag.offsetLeft;
  drag.Y = drag.offsetTop;
  drag.mouseX = e.clientX;
  drag.mouseY = e.clientY;
  
  //Проверяем свойство, отвечающее за режим совместимости
 drag.W = document.compatMode == 'CSS1Compat'? 
   document.documentElement.clientWidth:
   document.body.clientWidth; 
 drag.H = document.compatMode == 'CSS1Compat'? 
   document.documentElement.clientHeight:
   document.body.clientHeight;
  
  
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
 
 //Задать и проверку на нижнюю и правую границу
if (drag.X + (e.clientX - drag.mouseX) > 0){
 
  //добавляем проверку по нижнему и правому краю
  if (drag.X + (e.clientX - drag.mouseX)+ drag.offsetWidth < drag.W ) {
    drag.style.left = drag.X + (e.clientX - drag.mouseX) + "px"; 
  
  } else {
   drag.style.left = drag.W -  drag.offsetWidth + "px";
   }
  }
  else { drag.style.left = "0";}
 
 if (drag.Y + (e.clientY - drag.mouseY) > 0){
 
  //добавляем проверку по нижнему и правому краю
  if (drag.Y + (e.clientY - drag.mouseY)+ drag.offsetHeight < drag.H ) {
     drag.style.top = drag.Y + (e.clientY - drag.mouseY) + "px"; 
  
  } else {
   drag.style.top = drag.H - drag.offsetHeight+ "px";
   }
  }
  else { drag.style.top = "0";}

 
} 

function mouseUp(e){
 e = e || event;
  removeEvent(document, 'mousemove', mouseMove);
  removeEvent(document, 'mouseup', mouseUp);
} 