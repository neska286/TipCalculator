// tip calaculator
// These are all the DIV ID's you're gonna need access to 👇
// ========================================================
// #1 ID 👉 'billTotalInput' = User input for bill total
// #2 ID 👉 'tipInput' = User input for tip
// #3 ID 👉 'numberOfPeople' = Current number of people you're splitting the bill between
// #4 ID 👉 'perPersonTotal' = Total dollar value owed per person
// */
let billTotalInput = document.getElementById("billTotalInput")
let tipInput = document.getElementById("tipInput")
let numberOfPeopleDiv = document.getElementById("numberOfPeople")
let perPersonTotal = document.getElementById("perPersonTotal")
console.log('perPersonTotal',perPersonTotal);

let numberOfPeople = Number(numberOfPeopleDiv.innerText) 

const calculateBill = () => {
    // get bill from user input & convert it into a number
    const bill = Number(billTotalInput.value)
  
    
  
    // get the tip from user & convert it into a percentage (divide by 100)
    const tipPercent = Number(tipInput.value) / 100
   
    
  
    // get the total tip amount
    const tipAmount =  bill * tipPercent
    
  
    // calculate the total (tip amount + bill)
    let total = tipAmount + bill
    
  
    // calculate the per person total (total divided by number of people)
    let totalPersons = total/ numberOfPeople
  
  
    // update the perPersonTotal on DOM & show it to user
    perPersonTotal.innerText = `$${totalPersons.toFixed(2)}`
  
  }


  const increasePeople = () => {
    // increment the amount of people
  numberOfPeople +=1

    // update the DOM with the new number of people

    numberOfPeopleDiv.innerHTML = numberOfPeople
   
  
  
    // calculate the bill based on the new number of people
    calculateBill()
   
  
  }

  const decreasePeople = () => {
    // guard clause
    // if amount is 1 or less simply return
    // (a.k.a you can't decrease the number of people to 0 or negative!)
    if(numberOfPeople <= 1){
        return 
    }
  
    
    // decrement the amount of people
    numberOfPeople -=1
  
    // update the DOM with the new number of people
    numberOfPeopleDiv.innerHTML = numberOfPeople
  
    // calculate the bill based on the new number of people
    calculateBill()
  }