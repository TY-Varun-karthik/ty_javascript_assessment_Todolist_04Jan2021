//Getting the Eelements from the html 
let addToDoButton = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputField');

//adding the event for id name addToDo and variable name addToDoButton 
//In one click the values we pass in the input tag will be keep on adding.  
//event passed in function
addToDoButton.addEventListener('click', function () {

    var listDesign = document.createElement('ul');//unorderList will be created
    listDesign.classList.add('list-styling');//adding the css properties to that event
    listDesign.innerText = inputField.value;//Fetching the input field data to append 
    toDoContainer.appendChild(listDesign);//It will add at the last 
    inputField.value = "";

    //adding styles for click event
    listDesign.addEventListener('click', function () {
        listDesign.style.textDecoration = "line-through";
    })

    //On double click data will be deleted
    listDesign.addEventListener('dblclick', function () {
        toDoContainer.removeChild(listDesign);
    })
})