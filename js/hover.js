const arraySecciones = ["element01","element02","element03","element04","element05","element06","element07","element08","element09","element10"];
arraySecciones.forEach(myFunction);
function myFunction(value) {
    let item = document.getElementById(value);
    item.onmouseover = function(){item.classList.remove("bg-dark"); item.classList.add("bg-secondary"); };
    item.onmouseout = function(){item.classList.remove("bg-secondary"); item.classList.add("bg-dark"); };
}