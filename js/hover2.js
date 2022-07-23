const arraySecciones = ["regresar"];
arraySecciones.forEach(myFunction);
function myFunction(value) {
    let item = document.getElementById(value);
    item.onmouseover = function(){item.classList.remove("bg-dark"); item.classList.add("bg-secondary"); };
    item.onmouseout = function(){item.classList.remove("bg-secondary"); item.classList.add("bg-dark"); };
}
