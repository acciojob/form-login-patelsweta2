function getFormValue() {

  var form = document.getElementById('form1');


  var firstName = form.elements['fname'].value;
  var lastName = form.elements['lname'].value;

  
  alert(firstName + ' ' + lastName);

 
  return false;
}

