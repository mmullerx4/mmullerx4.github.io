function toggleMenu() {
    
    document.getElementById("primaryNav").classList.toggle("hide");
}

var date=new Date();
var weekList=["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var monthList=["January", "Febrary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
document.getElementById("date").innerHTML=weekList[date.getDay()]  + ", " + date.getDate() +   " " + monthList[date.getMonth()] +  " " + date.getFullYear();


const today = new Date();
//console.log(today);

const dayNumber = today.getDate();


