function toggleMenu() {
    console.log(document.getElementById("primaryNav").classList);
    document.getElementById("primaryNav").classList.toggle("hide");
}

var date=new Date();
var weekList=["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var monthList=["January", "Febrary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
document.getElementById("date").innerHTML=weekList[date.getDay()]  + ", " + date.getDate() +   " " + monthList[date.getMonth()] +  " " + date.getFullYear();


        const today = new Date();
        console.log(today);

        const dayNumber = today.getDate();
        console.log(dayNumber);

        const element = document.getElementById("message");

        if (dayNumber == 6) {
            element.classList.add("showme");
        } else {
            element.classList.add("hideme");
        }
    
        
        WebFont.load({
            google: {
                families: ['Roboto']
            }
        });

        
    