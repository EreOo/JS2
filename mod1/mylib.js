/*
* Функция принимает массив а и выводит все свойства
* объекта через for in
*/
function dw(a){
 for(var p in a)
  document.write(p + " = " + a[p] + "<br>");
}