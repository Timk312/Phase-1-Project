//box 1 and 2 input height and weight and set that value to myHeight/myWeight variables / update bmi

let myHeight= document.getElementById('myHeight')
let myWeight= document.getElementById('myWeight')
let heightOutput=document.getElementById('heightOutput')
let weightOutputo=document.getElementById('weightOutput')
let myBMI=document.getElementById('bmiOutput')
let bmi=0
let meal=document.getElementById("Meal")
let calorieOutput=document.getElementById("calorieOutput")
let currentCalories=0
let currentEnergy=0
let amountEnergy=0
//buttons
const submitInfobtn= document.getElementById('submitInfo')
const submitMealbtn= document.getElementById('submitMeal2')
const button1=document.getElementById('button1')
const button2=document.getElementById('button2')
const button3=document.getElementById('button3')
const button4=document.getElementById('button4')
const button5=document.getElementById('button5')

//updates the value of height and weight inputs into html
//converts height and weight into integers
//BMI=weight (lb) / [height (in)]2 x 703
//updates BMI
function submitInfo(){
    heightOutput.innerHTML=myHeight.value 
    weightOutput.innerHTML= myWeight.value
    myHeight=parseInt(heightOutput.innerHTML)
    myWeight=parseInt(weightOutput.innerHTML)
    let inches=myHeight*12
    bmi=(myWeight/(Math.pow(inches,2)))*703
    myBMI.innerHTML=bmi  
}
//calls submitInfo() once button is clicked
submitInfobtn.addEventListener("click",submitInfo)

//box 3 .find() meal within database, else askes to add the meal / select energy level

submitMealbtn.addEventListener("click",fetchData)

function fetchData(){
fetch("database.json")
.then(res=>res.json())
.then(data=>findData(data))
.catch(error=>alert('food not found, please enter manually'))
}


function findData(data){
    //set inputed text and fetched data to variables
    let mealInput=meal.value
    let dataArray=data

    //find the food item
    let found = dataArray.find(x=>{
        if(mealInput==x.food){   
            return true
        }
    })
    //if inputed food matches database update the total calories
    if (found.food==mealInput){
    currentCalories+=found.calories
    calorieOutput.innerHTML=currentCalories
}
}

//click on energy levels

button1.addEventListener("click",enterEnergy1)
button2.addEventListener("click",enterEnergy2)
button3.addEventListener("click",enterEnergy3)
button4.addEventListener("click",enterEnergy4)
button5.addEventListener("click",enterEnergy5)

function enterEnergy1(){
    button2.style.backgroundColor='white',button3.style.backgroundColor='white',button4.style.backgroundColor='white',button5.style.backgroundColor='white'
    button1.style.backgroundColor='green'
    currentEnergy+=1
    amountEnergy+=1
    console.log(currentEnergy)
    console.log(amountEnergy)
}
function enterEnergy2(){
    button1.style.backgroundColor='white',button3.style.backgroundColor='white',button4.style.backgroundColor='white',button5.style.backgroundColor='white'
    button2.style.backgroundColor='green'
    currentEnergy+=2
    amountEnergy+=1
    console.log(currentEnergy)
    console.log(amountEnergy)
}
function enterEnergy3(){
    button2.style.backgroundColor='white',button3.style.backgroundColor='white',button4.style.backgroundColor='white',button1.style.backgroundColor='white'
    button3.style.backgroundColor='green'
    currentEnergy+=3
    amountEnergy+=1
    console.log(currentEnergy)
    console.log(amountEnergy)
}
function enterEnergy4(){
    button2.style.backgroundColor='white',button3.style.backgroundColor='white',button1.style.backgroundColor='white',button5.style.backgroundColor='white'
    button4.style.backgroundColor='green'
    currentEnergy+=4
    amountEnergy+=1
    console.log(currentEnergy)
    console.log(amountEnergy)
}
function enterEnergy5(){
    button2.style.backgroundColor='white',button3.style.backgroundColor='white',button4.style.backgroundColor='white',button1.style.backgroundColor='white'
    button5.style.backgroundColor='green'
    currentEnergy+=5
    amountEnergy+=1
    console.log(currentEnergy)
    console.log(amountEnergy)
}
    
