var items = document.getElementsByClassName("list-group-item");
items[2].style.backgroundColor = 'green'

for (var i = 0; i<items.length;i++){
    items[i].style.fontWeight = 'bold';
}

var li = document.getElementsByTagName("li");
li[3].textContent = 'HELLO 2'