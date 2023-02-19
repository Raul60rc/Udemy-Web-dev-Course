var guestList = ["Angela","Jack","Pan","James","Lara","Jason"];

var guestName = prompt("What is your name");
guestList.includes(guestName)

if(guestList.includes(guestName)){
    alert("welcome")
}else {
    alert("sorry maybe next time")
}