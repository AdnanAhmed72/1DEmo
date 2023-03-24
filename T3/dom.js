//console.dir(document);
//console.log(document.URL);
//console.log(document.forms);
//console.log(document.body);
//document.title = 123
var headerTitle = document.getElementById('header-title')
var header = document.getElementById('main-header')
//console.log(headerTitle);
//headerTitle.textContent = 'Hello!!'
//headerTitle.innerText='GOOODbyee'
//headerTitle.innerHTML = '<h3>Helloo</h3>';
//console.log(header);
header.style.borderBottom = 'solid 3px #000'
var addItems = document.getElementsByClassName('title');
//console.log(addItems);
addItems[0].style.fontWeight='bold';
addItems[0].style.color='green';