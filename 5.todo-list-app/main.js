const input = document.querySelector('.newtask');
const btnAdd = document.querySelector('.btnAdd');
const tasks = document.querySelector('.tasks');


//Disable add button

input.addEventListener('keyup', () => {
  if (input.value.trim() != 0) {
    btnAdd.classList.add('enabled');
  } else {
    btnAdd.classList.remove('enabled');
  }
});

// Add New Item to the Task list
btnAdd.addEventListener ('click' , ()=> {
    if (input.value.trim() != 0) {
        let newItem = document.createElement('div');
        newItem.classList.add('task');
        newItem.innerHTML =  `
        <input type="text" class="text" value=${input.value} readonly />
          <div class="actions">
            <button class="btnDone"><i class="fa-solid fa-check"></i></button>
            <button class="btnEdit">
              <i class="fa-solid fa-pen-to-square"></i>
            </button>
            <button class="btnDel">
              <i class="fa-solid fa-trash-can"></i>
            </button>
          </div>
        `
        tasks.appendChild(newItem);
        input.value ='';
    } else {
        alert('Please enter a task');
    }
})


// Delete Task Event Listener
tasks.addEventListener('click', (e) => {
  if (e.target.classList.contains('fa-trash-can')) {
    e.target.parentElement.parentElement.parentElement.remove();
  }
});

// Complete Task Event Listener
tasks.addEventListener('click', (e) => {
  if (e.target.classList.contains('fa-check')) {
    //console.log(e.target.parentElement.parentElement.parentElement.classList);
     e.target.parentElement.parentElement.parentElement.classList.toggle('completed');
  }
});

// Edit Task Event Listener
tasks.addEventListener('click' , (e) => {
    //alert(e.target.parentElement.parentElement.previousElementSibling.classList);
    if (e.target.classList.contains('fa-pen-to-square')) {
        target= e.target.parentElement.parentElement.previousElementSibling;
        target.removeAttribute("readonly");
        target.focus();
        target.style.opacity = 1;
      }
} );

//Disable Text box for Task on loss of focus
tasks.addEventListener("focusout", (e)=> {
    if (e.target.classList == 'text') {
        //console.log(e.target.classList);
        e.target.setAttribute("readonly", true);
        e.target.style.opacity = 0.7;
    }

});