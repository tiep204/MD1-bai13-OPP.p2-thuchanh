class Battery {
    energy;
    decreaseenergy;

    constructor(energy,decreaseenergy) {
        this.energy = energy;
        this.decreaseenergy = decreaseenergy;
    }

    setEnergy(energy){
        this.energy=energy
    }
    getEnergy(){
        return this.energy
        if (this.energy > 0){
            this.energy--;
        }
    }
    setdecreaEnergy(decreaenergy){
        this.decreaseenergy=decreaenergy;
    }
    getdecreaEnergy(){
        return this.decreaseenergy;
        }

}