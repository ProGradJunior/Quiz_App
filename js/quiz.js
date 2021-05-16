// Create the questions


//Create local storage


//Create show function


//Create next function



function toggleActive() {
  let option = document.querySelectorAll("li.option");
  for (let i = 0; i < option.length; i++) {
    option[i].onclick = function() {
      for (let i = 0; i < option.length; i++) {
        if (option[i].classList.contains("active")) 
        {
          option[i].classList.remove("active");
        }
      }
      option[i].classList.add("active");
    };
  }
}  