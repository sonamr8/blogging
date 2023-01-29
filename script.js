class BlogData{
  constructor(fname,lname,title,content){
      this.fname = fname;
      this.lname = lname;
      this.title = title;
      this.content = content;
  }
}
All_Data = new Array();    
function submitData(){

  alert("Thank you! for submitting your blog.")
  
  let fname = document.forms["myForm"]["fname"].value;
  let lname = document.forms["myForm"]["lname"].value;
  let title = document.forms["myForm"]["title"].value;
  let content = document.forms["myForm"]["content"].value;
  
  

  const obj = new BlogData(fname,lname,title,content);
 
  All_Data.push(obj);
  console.log(All_Data);
 
 document.forms["myForm"]["fname"].value='';
document.forms["myForm"]["lname"].value='';
   document.forms["myForm"]["title"].value='';
  document.forms["myForm"]["content"].value='';
  
  return false;

}

const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
})
const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
})

//modal//

const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
})

// Login Alert//
const alertPlaceholder = document.getElementById('liveAlertPlaceholder')

const alert = (message, type) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  alertPlaceholder.append(wrapper)
}

const alertTrigger = document.getElementById('liveAlertBtn')
if (alertTrigger) {
  alertTrigger.addEventListener('click', () => {
    alert('Thanks ! For the Signup')
  })
}





(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})()