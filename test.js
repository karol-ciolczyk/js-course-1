var myArray = new Array();
myArray[0] = 8;
myArray[1] = "hello"


var myCar = new Object();
myCar.maxSpeed = 50;
myCar.driver = "Karol";
myCar.drive = function(){
    console.log("now driving");
};

myCar.drive()

var myCar2 = {
    
    maxSpeed: 90, 
    driver: "Karol",
    drive:function(speed, time){
        console.log(speed * time);}

};

    console.log(myCar2.maxSpeed);
    console.log(myCar2.driver);
    myCar2.drive(70, 5);