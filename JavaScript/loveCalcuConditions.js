// using if & else - controlling the flow 
maxScore = 100
var loveScore = Math.random() * 100;
loveScore = Math.floor(loveScore); // with this +1 can go to 100

if (loveScore > 100){
    alert("your love is!" + loveScore + "You love each other like Kanye loves Kanye");
}
if (loveScore >30 && loveScore <= 70){
    alert("your love is" + loveScore)
}
if (loveScore <30){
    alert("your love score is" + loveScore + "not compatible")
}
if (loveScore >70 && loveScore <99){
    alert("your love score is" + loveScore + "great match")
}
else{
    alert("your love is" + loveScore + "4")

}
console.log(loveScore) 