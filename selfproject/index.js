//box 1 and 2 input height and weight and set that value to myHeight/myWeight variables / update bmi

let myHeight= document.getElementById('myHeight')
let myWeight= document.getElementById('myWeight')
let heightOutput=document.getElementById('heightOutput')
let weightOutputo=document.getElementById('weightOutput')
let myBMI=document.getElementById('bmiOutput')
let bmi=0
let meal=document.getElementById("Meal")
//buttons
const submitInfobtn= document.getElementById('submitInfo')
const submitMealbtn= document.getElementById('submitMeal2')

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
}
function findData(data){
    let mealInput=meal.value
    let dataArray=data
    //const found = dataArray.food.find(x=>x.food=mealInput)
    console.log(dataArray)
    console.log(mealInput)
}



