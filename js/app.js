const billEl = document.querySelector("#bill")
const peopleEl = document.querySelector("#people")
const errorEl = document.querySelectorAll(".error")

const tipEl = document.querySelectorAll(".tip")


  let errorFunc = (num, err) => {
    errorEl[num].hidden = false
    errorEl[num].style.color = "#e83240"
    errorEl[num].textContent = err
  }

  let reg = /[A-Za-z]/g

  billEl.addEventListener("keydown", () => {
    console.log(billEl.value.length)
    if(billEl.value.length < 0) {
      billEl.style.border = "2px solid #e83240"
      errorFunc(0, "Can't be empty")
      return false
    }
    if(reg.test(billEl.value)) {
      billEl.style.border = "2px solid #e83240"
      errorFunc(0, "Numbers only")
      return false
    }
    else {
      errorEl[0].hidden = true
      billEl.style.border = "2px solid var(--primary-c1 )"
      return true
    }
  })

  peopleEl.addEventListener("keydown", () => {
    console.log( typeof peopleEl.value)
    if(peopleEl.value == null) {
      peopleEl.style.border = "2px solid #e83240"
      errorFunc(1, "Can't be zero")
        return false
    }
    if(reg.test(peopleEl.value)) {
      peopleEl.style.border = "2px solid #e83240"
      errorFunc(1, "Numbers only")
      return false
    }
    else {
      errorEl[1].hidden = true
      peopleEl.style.border = "2px solid var(--primary-c1 )"
      return true
    }
  })


let tipContainer = 0

//loop through the list of tip options
tipEl.forEach(tip => {
  tip.addEventListener("click", () => {
    tipContainer = tip.value
  })
  tip.addEventListener("keydown", () => {
    tipContainer = tip.value
  })
})

const tipAmountEl = document.querySelector("#tipAmount")
let computeTip = () => {
  let result = billEl.value * tipContainer / peopleEl.value
  let convertResult = result.toFixed(2)
  console.log(tipContainer)
  return convertResult
}

const totalAmountEl = document.querySelector("#totalAmount")
let computeTotal = () => {
  let result = billEl.value * (1 + tipContainer) / peopleEl.value
  let convertResult = result.toFixed(2)
  return convertResult
}

window.addEventListener("keypress", (e) => {
  if(e.key == "Enter") {

    if(billEl.value && peopleEl.value && tipContainer !== null) {
    tipAmountEl.textContent = computeTip()
    totalAmountEl.textContent = computeTotal()
    }
    else {
      console.log("fill up the fields")
    }

  }
})

const resetEl = document.querySelector("#reset")

resetEl.addEventListener("click", e => {
  e.preventDefault
  billEl.value = null
  peopleEl.value = null
  tipContainer = null
  tipAmountEl.textContent = "0.00"
  totalAmountEl.textContent = "0.00"
})




