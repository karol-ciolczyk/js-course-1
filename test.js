var Car = function(maxSpeed, driver){

    this.maxSpeed = maxSpeed;
    this.driver = driver
    this.drive = function(speed, time){
        console.log(speed * time);

    };
    this.logDriver = function(){
        console.log("driver name is - " + this.driver);
    };

}

var myCar = new Car(60, "Karol ride");
var myCar1 = new Car(60, "Karol ride");
var myCar2 = new Car(60, "Karol ride");
var myCar3 = new Car(60, "Karol rrrrrride");
var myCar4 = new Car(60, "Karol ride");
var myCar5 = new Car(60, "Karol rirrrrrrrde");
var myCar6 = new Car(60, "Karol ride");

myCar.drive(23,5);
myCar5.logDriver()