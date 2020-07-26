class Player {
    constructor(name, shirtNumber) {
        this.name = name;
        this.shirtNumber = shirtNumber;
       
      
    }

    sayHello() {
        
    }

    set setLastName(lastName){
        this.lastName = lastName;
    }

    setPosion(position){
        this.position = position
    }
}

class FootballPlayer extends Player{

    constructor(name, shirtNumber, numberOfGoals){
        super(name, shirtNumber);

        
        this.numberOfGoals = numberOfGoals
    }

    shoot(){
        
    }

}