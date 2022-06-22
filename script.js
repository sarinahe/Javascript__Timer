let searchcontainer = document.querySelector("#search-container");
let buttoncontainer = document.querySelector("#button-container");

let timerCircle = document.querySelector(".c100");
let startBox = document.querySelector(".start-box");
let timerNum = document.querySelector(".c100 > span");
let loadingMessage = document.querySelector(".message .loading");
let successMessage = document.querySelector(".message .success");

buttoncontainer.addEventListener("click", function (e) {
  let second = parseInt(searchcontainer.value);

  if (isNaN(second))return toggleErrorMessage({ show: true, message: 'Enter correct time! ' })
    
    
   
  toggleErrorMessage({ show: false})
 
  startBox.classList.remove("active");
  timerCircle.style.display = "block";
  timerNum.textContent = second;
  loadingMessage.style.display = "block";
  successMessage.style.display = "none";

  let originalSecond = second;
  let lastPercent = "p100";
  let timerId = setInterval(() => {
    if (lastPercent) timerCircle.classList.remove(lastPercent);

    if (second <= 0) {
      clearInterval(timerId);
      startBox.classList.add("active");
    //   togglestartBox{ show : false}
      timerCircle.style.display = "none";
      loadingMessage.style.display = "none";
      successMessage.style.display = "block";
      searchcontainer.value = "";
      timerCircle.classList.remove(lastPercent);
    }

    second -= 1;
    let percent = lastPercent = `p${Math.abs(
        Math.floor(((originalSecond - second) / originalSecond) * 100 - 100)
      )}`
       timerCircle.classList.add(percent)
    timerNum.textContent = second;
  }, 1000);
});


let toggleErrorMessage = ({show , message}) =>{
    let errorElement = document.querySelector("#error-message");
    if(show){
        errorElement.textContent = message;
        errorElement.classList.add("active");
    } else{
        errorElement.classList.remove("active");
    }
}