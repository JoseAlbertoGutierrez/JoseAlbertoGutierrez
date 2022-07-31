const arraySecciones = ["regresar"];
arraySecciones.forEach(myFunction);
function myFunction(value) {
    let item = document.getElementById(value);
    item.onmouseover = function(){item.classList.remove("pantone-azul"); item.classList.add("pantone-azul-claro"); };
    item.onmouseout = function(){item.classList.remove("pantone-azul-claro"); item.classList.add("pantone-azul"); };
}
