class Player {
    constructor(name, shirtNumber, element) {
        this.name = name;
        this.shirtNumber = shirtNumber;
        this.element = element;
        console.dir(this.element)
       
    }

    sayHello() {
        this.element.innerText = `Hi ${this.name}`;
        
    }

    set setLastName(lastName){
        this.lastName = lastName;
    }

    setPosion(position){
        this.position = position
    }

   
}