// добавить обработчик события 
 addEvent(document, 'mousedown', mouseDown);

 //глобальная переменная 
 var drag;

// определить функцию mouseDown

function mouseDown(e){
 e = e || event;
var target = e.target || e.srcElement;

if (target.className == "top" && target.parentNode.className == 'drag' && e.shiftKey){

  //при клике запоминаем какой элемент мы собираемся двигать

  //запоминаем его координаты (заметьте, что мы задаем собственные свойства у объекта)
  //drag.X = drag.offsetLeft;
  // drag.Y = drag.offsetTop;
  //запоминаем координаты клика мыши!
  //drag.mouseX = e.clientX;
  //drag.mouseY = e.clientY;
  
  //запускаем отслеживание mousemove и  mouseup когда кликнули
  //addEvent(document, 'mousemove', mouseMove);
  //addEvent(document, 'mouseup', mouseUp);
}

} 

//определить остальные функции
/*function mouseMove(e){
 e = e || event;
 //убираем подтормаживание на старых машинах
 cancelEvent(e);
 drag.style.left = drag.X + (e.clientX - drag.mouseX) + "px"; 
 //drag.style.top = drag.Y + (e.clientY - drag.mouseY) + "px"; 
} 
*/
//Удаляем слушатели после того как клавиша мыши поднята.
//То есть отпустили наш div
/*function mouseUp(e){
 e = e || event;
  removeEvent(document, 'mousemove', mouseMove);
  removeEvent(document, 'mouseUp', mouseUp);
} */