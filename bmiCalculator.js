//Create your function below this line.
//The first parameter should be the weight and the second should be the height.

var weight = 65
var height = 1.8

function bmiCalculator(weight,height){
    var bmi = weight / (height * height); // can also add math.pow // 
     // adding () in height will calculate that first then will divide wight weight
     return Math.round(bmi); // added math round so it's a whole number
}
bmiCalculator()

