function Kernel(){
 this.load = function(){
 //Объект создается при загрузке страницы если указать <body onload="Kernel.load()">
 //Подготовительная работа
 } 
}

var kernel = new Kernel();

//Кроссбраузерное добавление слушателя события
 Kernel.prototype.addEvent = function (element, event_name, handler){
  try {
      element.addEventListener(event_name,handler,false)  
  } catch(z){
     element.attachEvent('on'+event_name,handler)  
  }
}

 Kernel.prototype.removeEvent = function (element, event_name, handler){
  try {
      element.removeEventListener(event_name,handler,false)  
  } catch(z){
     element.detachEvent('on'+event_name,handler)  
  }
}
// Отмена действия события по-умолчанию
 Kernel.prototype.cancelEvent = function (e){
 try {
  e.preventDefault();
 } catch(z){
   e.returnValue = false;
 }

}
// Остановка распространения события по дереву DOM (отмена всплытия) 
 Kernel.prototype.stopEvent = function (e){
 try {
  e.stopPropagation();
 } catch(z){
   e.cancelBubble = true;
 }
}




