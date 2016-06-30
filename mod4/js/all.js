function addEvent(element, event_name, handler){
  try {
      element.addEventListener(event_name,handler,false)  
  } catch(z){
     element.attachEvent('on'+event_name,handler)  
  }
}

function removeEvent(element, event_name, handler){
  try {
      element.removeEventListener(event_name,handler,false)  
  } catch(z){
     element.detachEvent('on'+event_name,handler)  
  }
}
// Отмена действия события по-умолчанию
function cancelEvent(e){
 try {
  e.preventDefault();
 } catch(z){
   e.returnValue = false;
 }

}
// Остановка распространения события по дереву DOM (отмена всплытия) 
function stopEvent(e){
 try {
  e.stopPropagation();
 } catch(z){
   e.cancelBubble = true;
 }
}




