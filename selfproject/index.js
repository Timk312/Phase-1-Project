//box 1 input height and weight and set that value to myHeight/myWeight variables

let myHeight= document.getElementById('myHeight')
let myWeight= document.getElementById('myWeight')
const submitInfobtn= document.getElementById('submitInfo')
let heightInfo=document.getElementById('heightInfo')
let weightInfo=document.getElementById('weightInfo')
function submitInfo(){

    heightInfo.innerHTML= "Height :" + myHeight.value 
    weightInfo.innerHTML= "Weight :" + myWeight.value +"lbs"
    myHeight=heightInfo.innerHTML
    myWeight=weightInfo.innerHTML
    
}
submitInfobtn.addEventListener("click",submitInfo)