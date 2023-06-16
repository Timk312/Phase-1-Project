//element id selectors
let myHeight= document.getElementById('myHeight')
let myWeight= document.getElementById('myWeight')
let heightOutput=document.getElementById('heightOutput')
let weightOutputo=document.getElementById('weightOutput')
let myBMI=document.getElementById('bmiOutput')
let meal=document.getElementById("Meal")
let calorieOutput=document.getElementById("calorieOutput")
let energyOutput=document.getElementById("energyOutput")
let goalOutput=document.getElementById("goalOutput")
let inputMeal=document.getElementById("inputMeal")
let inputCalories=document.getElementById("inputCalories")
//integers
let bmi=0
let currentCalories=0
let currentEnergy=0
let amountEnergy=0
let calorieGoal=0
let difficulty=1
let type=0
//buttons
const submitInfobtn= document.getElementById('submitInfo')
const submitMealbtn= document.getElementById('submitMeal2')
const addToDataBasebtn=document.getElementById("submitMeal")
const buttonMeal=document.getElementById("buttonMeal")
const buttonSnack=document.getElementById("buttonSnack")
const button1=document.getElementById('button1')
const button2=document.getElementById('button2')
const button3=document.getElementById('button3')
const button4=document.getElementById('button4')
const button5=document.getElementById('button5')
const leftKey=document.getElementById("leftKey")
const rightKey=document.getElementById("rightKey")

//box 1 and 2 input height and weight and set that value to myHeight/myWeight variables / update bmi
//updates the value of height and weight inputs into html
//converts height and weight into integers
//BMI=weight (lb) / [height (in)]2 x 703
//updates BMI

//calls submitInfo() once Submit Info is clicked
submitInfobtn.addEventListener("click",submitInfo)
function submitInfo(){
    //change display of height and weight by the value entered
    heightOutput.innerHTML=myHeight.value 
    weightOutput.innerHTML= myWeight.value
    //change string to integer
    myHeight=parseInt(heightOutput.innerHTML)
    myWeight=parseInt(weightOutput.innerHTML)
    //BMI formula / update BMI display
    let inches=myHeight*12
    bmi=(myWeight/(Math.pow(inches,2)))*703
    myBMI.innerHTML=bmi  
}


//box 3 .find() meal within database, else askes to add the meal / select energy level

//calls fetchToFindData once Submit Meal is clicked
submitMealbtn.addEventListener("click",fetchToFindData)

//fetch data from json file then run findDate function / alert if not found
function fetchToFindData(){
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
    //if inputed food matches database update the total calories and calorieGoal
    if (found.food==mealInput){
    currentCalories+=found.calories
    calorieOutput.innerHTML=currentCalories
    //if meal+=700 calorie goal / if snack+=350 calorie goal
    if(found.type=="meal"){
        //if relaxed diet , add 700 calories per meal
        if (difficulty==1){
        calorieGoal+=700
        }
        else{
        //else strict diet
        calorieGoal+=(700*.66)
        }
    }
    else if(found.type=="snack"){
        //if relaxed diet, add 350 calroies per snack
        if (difficulty==1){
        calorieGoal+=350
        }
        else{
        //else strict diet
        calorieGoal+=(350*.66)
        }
       
    }
    
    goalOutput.innerHTML=calorieGoal
}
}

//meal snack buttons
buttonMeal.addEventListener("click",()=>{
    type=1
})
buttonSnack.addEventListener("click",()=>{
    type=2
})


//calls fetchToAddData once Add to database is clicked
// addToDataBasebtn.addEventListener("click",fetchToAddData)

// function fetchToAddData(){
// let newFood=inputMeal
// let newCalories=inputCalories
// let newType=
// let newObject=    {
//     "food": newFood,
//     "calories": newCalories,
//     "type": newType
// }
    

// fetch("database.json",{
//     method: 'PUT',
//     body: JSON.stringify(newObject)
// })
// .then(res=>res.json())
// .then(data=>addData(data))
// }

// function addData(){
    
// }

//click on energy levels

button1.addEventListener("click",enterEnergy1)
button2.addEventListener("click",enterEnergy2)
button3.addEventListener("click",enterEnergy3)
button4.addEventListener("click",enterEnergy4)
button5.addEventListener("click",enterEnergy5)

function enterEnergy1(){
    //makes current selected = green and others =white
    button2.style.backgroundColor='white',button3.style.backgroundColor='white',button4.style.backgroundColor='white',button5.style.backgroundColor='white'
    button1.style.backgroundColor='green'
    //adds selected energy level to currentEnergy / keeps count of how many times u pressed a button
    currentEnergy+=1
    amountEnergy+=1
    //finds the average energy and displays it
    energyOutput.innerHTML=currentEnergy/amountEnergy
}
function enterEnergy2(){
    button1.style.backgroundColor='white',button3.style.backgroundColor='white',button4.style.backgroundColor='white',button5.style.backgroundColor='white'
    button2.style.backgroundColor='green'
    currentEnergy+=2
    amountEnergy+=1
    energyOutput.innerHTML=currentEnergy/amountEnergy
}
function enterEnergy3(){
    button2.style.backgroundColor='white',button1.style.backgroundColor='white',button4.style.backgroundColor='white',button5.style.backgroundColor='white'
    button3.style.backgroundColor='green'
    currentEnergy+=3
    amountEnergy+=1
    energyOutput.innerHTML=currentEnergy/amountEnergy
}
function enterEnergy4(){
    button2.style.backgroundColor='white',button3.style.backgroundColor='white',button1.style.backgroundColor='white',button5.style.backgroundColor='white'
    button4.style.backgroundColor='green'
    currentEnergy+=4
    amountEnergy+=1
    energyOutput.innerHTML=currentEnergy/amountEnergy
}
function enterEnergy5(){
    button2.style.backgroundColor='white',button3.style.backgroundColor='white',button4.style.backgroundColor='white',button1.style.backgroundColor='white'
    button5.style.backgroundColor='green'
    currentEnergy+=5
    amountEnergy+=1
    energyOutput.innerHTML=currentEnergy/amountEnergy
}
//if left key arrow is pressed, highlight difficulty and change difficulty integer
document.body.addEventListener('keydown', e=>{
if(e.keyCode==37){
    rightKey.style.backgroundColor='white'
    leftKey.style.backgroundColor='green'
    if(difficulty==2){
        calorieGoal/=.66
        goalOutput.innerHTML=calorieGoal
        difficulty-=1
    }
}

//if right key arrow is pressed, highlight difficulty and change difficulty integer
})
document.body.addEventListener('keydown', e=>{
    if(e.keyCode==39){
    leftKey.style.backgroundColor='white'
    rightKey.style.backgroundColor='green'
    if(difficulty==1){
        calorieGoal*=.66
        goalOutput.innerHTML=calorieGoal
        difficulty+=1
    }
}

})
