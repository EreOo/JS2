//Пока работаем с одним окном (переменная в глобальной области видимости)
var dialog;


//1.Ловим все нажатия мыши на document
kernel.addEvent(document, "mousedown", mousedown);

//1.Обработка нажатия
function mousedown(e){
 var e = e || event;
 var target = e.target || e.srcElement;

 log("нажали и держим");
  if (target.className == "top" && target.parentNode.className=="drag"){

  
  dialog = target.parentNode;
  dialog.style.cursor = "move";
  dialog.X = e.screenX;//Запоминаем координаты мыши на drag
  dialog.Y = e.screenY;

  dialog.W =  document.documentElement.clientWidth || document.body.clientWidth; 
  dialog.H =  document.documentElement.clientHeight || document.body.clientHeight;
 
  dialog.left = dialog.offsetLeft;
  dialog.top= dialog.offsetTop;
 
  //2. Регистрируем слушателей перемещения и поднятия мыши
  kernel.addEvent(document, "mousemove", mousemove);
  kernel.addEvent(document, "mouseup", mouseup);
 }
}

//2. Обработка перемещения
function mousemove(e){
 var e = e || event;

 var target = e.target || e.srcElement;

 //перемещаем содержимое
 log("двигаем x="+e.screenX.toFixed(2)+",y="+e.screenY.toFixed(2));
 
 if ((dialog.left  +  (e.screenX-dialog.X)) > 0){
 dialog.style.left =  dialog.left  +  (e.screenX-dialog.X)+"px";
  } else {
  dialog.style.left = "0px";
  }
   
 if ((dialog.left  +   dialog.offsetWidth) < dialog.W){
 dialog.style.left =  dialog.left  +  (e.screenX-dialog.X)+"px";
  } else {
  dialog.style.left =(dialog.W - dialog.left)+"px";
  }
  
   if ((dialog.top  +  (e.screenY-dialog.Y)) > 0){
 dialog.style.top =  dialog.top  +  (e.screenY-dialog.Y)+"px";
  } else {
  dialog.style.top = "0px";
  }
  
  
 
}
//3.Обработка поднятия клавиши мыши 
function mouseup(e){
log("клавиша мышки отпущена");
  dialog.style.cursor = "default";
  kernel.removeEvent(document, "mouseup", mouseup);
 kernel.removeEvent(document, "mousemove", mousemove);

}

function getStyle(el,styleProp)
{
	var x = document.getElementById(el);
	if (x.currentStyle)
		var y = x.currentStyle[styleProp];
	else if (window.getComputedStyle)
		var y = document.defaultView.getComputedStyle(x,null).getPropertyValue(styleProp);
	return y;
}