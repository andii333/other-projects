// #  Task 1
class Toy {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    getToyInfo() {
        return `The toy name is ${this.name}. It costs ${this.price} dollars.`
    }
}

class Cotton extends Toy {
    constructor(){
        super();
        this.material = 'cotton'
    }
     
    getMaterialInfo() {
        return `The toy ${this.name} was made of ${this.material}`
    }
}
class Wood extends Toy {
    constructor() {
        super();
        this.material = 'wood'
    }
    getMaterialInfo() {
        return `The toy ${this.name} was made of ${this.material}`
    }
}
class Plastic extends Toy {
    constructor() {
        super();
        this.material = 'plastic'
    }
    getMaterialInfo() {
        return `The toy ${this.name} was made of ${this.material}`
    }
}

const arrToy = []


class Factory {
    produce(name, price, material = 'plastic') {
        let toy = new Toy()
        if (material === 'cotton') {
            toy = new Cotton()
        }
        if (material === 'wood') {
            toy = new Wood()
        }
        if (material === 'plastic') {
            toy = new Plastic()
        }
        toy.name = name
        toy.price = price
        toy.material = material

        return newToy(toy)
    }
}

function newToy(toy) {

    arrToy.forEach((e, index) => {
        if (e.material === toy.material) {
            toy = arrToy[index]
        }
    })
    arrToy.forEach((e, index) => {
        if
        (e.name === toy.name) {
            toy = arrToy[index]
        }
    }
    )
    if (!arrToy.includes(toy)) {
        arrToy.push(toy)
    }
    return toy;
}

const factory = new Factory()

const teddyBear = factory.produce('Bear', 200, 'cotton')
console.log(teddyBear.getToyInfo());
console.log(teddyBear.getMaterialInfo());

const plasticBear = factory.produce('Bear', 150, 'plastic')
console.log(plasticBear.getToyInfo());
console.log(plasticBear.getMaterialInfo());

const plasticCar = factory.produce('Car', 100)
console.log(plasticCar.getToyInfo());
console.log(plasticCar.getMaterialInfo());


const woodenHorse = factory.produce('Horse', 400, 'wooden')
console.log(woodenHorse.getToyInfo());

const woodenBear = factory.produce('Bear', 200, 'wooden')
console.log(woodenBear.getToyInfo());



// #  Task 2

class Car {
    constructor(name, host) { 
        this.host = host; this.name = name
     }
    carSound() {
         return "Usual car sound." 
        }
}
class AmbulanceCar extends Car {
    ambulanceSound(){
        return 'Siren sound.'
    }
}

const mercedes = new Car('Mercedes', 'Doctor')
const ambulanceMercedes = new AmbulanceCar(mercedes)
console.log(ambulanceMercedes.ambulanceSound()); 

const toyota = new Car('Toyota', 'Doctor 2')
const ambulanceToyota = new AmbulanceCar(toyota)
console.log(ambulanceToyota.ambulanceSound()); 

