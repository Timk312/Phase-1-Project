//box 1 and 2 input height and weight and set that value to myHeight/myWeight variables / update bmi

let myHeight= document.getElementById('myHeight')
let myWeight= document.getElementById('myWeight')
const submitInfobtn= document.getElementById('submitInfo')
let heightOutput=document.getElementById('heightOutput')
let weightOutputo=document.getElementById('weightOutput')
let myBMI=document.getElementById('bmiOutput')
let bmi=0
function submitInfo(){

    heightOutput.innerHTML=myHeight.value 
    weightOutput.innerHTML= myWeight.value
    myHeight=parseInt(heightOutput.innerHTML)
    myWeight=parseInt(weightOutput.innerHTML)
    bmi=myWeight+myHeight
    myBMI.innerHTML=bmi
    
}
submitInfobtn.addEventListener("click",submitInfo)

