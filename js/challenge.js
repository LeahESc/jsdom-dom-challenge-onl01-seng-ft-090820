document.addEventListener("DOMContentLoaded", () => {
    beginTime() 
});
function beginTime() {
    let counter = setInterval(incrementTime, 1000)
  }

  function incrementTime() { 
    let h1 = document.getElementById("counter")
    let timer = parseInt(h1.innerText)
    timer++ 
    let t = (timer++).toString()
    h1.innerText = t
  }

  function minusTime() {
      let minus = document.getElementById("minus")
      minus.addEventListener ('click', decrementTime)
  }

  function decrementTime(e) {
    let counterText = document.getElementById("counter").innerText
    let counterTime = parseInt(counterText)
    counterTime--
    let n = (counterText--).toString()
    counterText = n
    console.log(counterText)
  }


//   function pauseTime() { 
//     let pauseButton = document.getElementById("pause")

//   }