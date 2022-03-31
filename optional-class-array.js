// reference type

var object1 = {value: 10};
var object2 = object1;
var object3 = {value: 10};

object1 === object2 

object1 === object3

object1.value

object2.value

object3.value

   


// context vs scope
function b() {
    let a = 4;
}

// another example 
console.log(this);
console.log(this === window)
true
this.alert("hello")
.alert()

function a() {
    console.log(this);
}
window.a()

// another example 
const object4 = {
    a: function() {
        console.log(this);
    }
}
object4.a()

// instantiation
class Player {
    constructor(name, type) {
        console.log('player', this);
        this.name = name;
        this.type = type;
    }
    introduce() {
        console.log(`Hi I am ${this.name}, I'm a ${this.type}`);
    }
} 

class Wizard extends Player {
    constructor(name, type) {
        super(name, type).
        console.log('wizard', this);
    }
    play() {
        console.log(`WEEEEEE I'm a ${this.type}`);
    }
}

const wizard1 = new Wizard('Shelly', 'Healer');
const wizard2 = new Wizard('Shawn', 'Dark Magic');

// Classical Inhertiance, old way to do things
var Player = function(name, type) {
    this.name = name;
    this.type = type;
}

Player.prototype.introduce = function() {
    console.log(`Hi I am ${this.name}, I'm a ${this.type}`);
}

var wizard1 = new Player('Shelly', 'healer');
var wizard2 = new Player('Shawn', 'dark magic');

wizard1.play = function() {
    console.log(`WEEEEEE I'm a ${this.type}`);
}

wizard2.play = function() {
    console.log(`WEEEEEE I'm a ${this.type}`);
}
