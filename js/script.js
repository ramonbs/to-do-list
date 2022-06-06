const ElementAdicionar = document.getElementById("task-add");

ElementAdicionar.addEventListener("click", newElement);

//Função de adição das tarefas a uma lista
function newElement(e) {
    var li = document.createElement('li');
    e.preventDefault();
    var inputValue = document.getElementById('task-input').value;
    var html = `
    <li class="task-list">
        <input type="checkbox"/>
        <label class="tag"> ${inputValue} </label>
        <button class="close-button">X</button>
    </li>
    `;
    if (inputValue === '') {
        alert("Você deve escrever algo!")
    } else {
        if (inputValue.length > 15) {
            alert("Você ultrapassou o limite de caractéres!")
        } else { document.getElementById("myUL").innerHTML += html; }
    }

    document.getElementById('task-input').value = '';


    // Click para remover o item da lista
    var close = document.getElementsByClassName("close-button");
    var i;
    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
            console.log(close);
        }
    }
}