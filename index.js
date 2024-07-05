const items = [];
var result = document.getElementById('input');
function toDo(){
  if(result.value !== ""){
  items.push(result.value);
  TodoList();
} 
  result.value = "";
}

function deleteItems(index,list){
    items.splice(index, 1);
    items.slice(list);
  TodoList();
}
function TodoList(){
  let listItems = document.getElementById('lists');
  listItems.innerHTML = "";
  for(let i = 0; i < items.length; i++){
  let lists = document.createElement('li');
    let checkbox = document.createElement('input');
    checkbox.type ="checkbox";
    lists.appendChild(checkbox);
   let del = document.createElement('button');
    del.innerHTML = "Delete";
    del.style.display = "block";
    del.addEventListener('click', ()=> deleteItems(i, listItems));
  let texts = document.createElement('span');
    texts.style.wordWrap = "break-word";
    texts.innerHTML = items[i];
  lists.appendChild(texts);
    lists.appendChild(del);
  listItems.appendChild(lists);
  }
}
