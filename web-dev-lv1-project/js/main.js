//String var example
var myString = "Alejandro";
//Number var example
var myNumber= 17;
//Boolean var example
var myBool = false;

    var x = 999;
    var y = 10;
    var flag = false;

    var person ={

        firstname: "Alex",
        lastname: "Moreno",
        age: 999,
        height: 5.2,
        haircolor: "black",

    }

    var numbers = [1,2,3,4,5,6,7,8,9,10];

    if(x != y && x > y ){

    window.alert("The condition is TRUE!!!!!!")

    }
    //Function that multiply two numbers
    //Params: numberX, numberY: two numbers to be multiplied
    //These comments are useful to document and describe your code, be sure to use it when you can 
    function nulTwoNums(p1,p2){

        return p1 * p2;

    }

    var myBnumber = nulTwoNums(10,10);

    console.log(myBnumber);
    console.log(myString);
    console.log(myANumber);
    console.log(myBool);

    function displayStringPopUp(){
        window.alert(myString);
    }

    function displayNumberInConsole(){
        window.alert(myANumber);
    }

    function displayBoolPopUp(){
        window.alert(myBool);
    }

    displayStringPopUp ();
    displayNumberInConsole ();
    displayBoolPopUp ();


