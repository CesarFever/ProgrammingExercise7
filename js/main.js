const todolist = document.querySelector('ul');


function appendList(todo)
{

    var li = document.createElement('li');

    li.appendChild(document.createTextNode(todo));
    li.setAttribute("style", "text-align: center;");

    todolist.appendChild(li);

}



function addTODO()
{
    var todo = document.getElementById("todo").value;

    appendList(todo);
}

