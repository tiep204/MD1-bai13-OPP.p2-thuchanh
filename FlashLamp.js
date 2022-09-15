class FlashLamp {
    battery;
    batteryinfo;
    light;
    turnon;
    turnoff;

    constructor(battery, batteryinfo, light,turnon,turnoff) {
        this.battery=battery;
        this.batteryinfo=batteryinfo;
        this.light=light;
        this.turnon=turnon;
        this.turnoff=turnoff;
    }
    setBattery(battery){
        this.battery =battery;
    }
    getBattery(){
        return this.battery;
    }
    setBatteryinfo(batteryinfo){
        this.batteryinfo;
    }
    getBatteryinfo(){
        return this.battery.getEnergy();
    }
    setLight(light){
        this.light=light;
    }
    getLight(){
        return this.light
        if(this.status){
            alert('Lighting');
        }else{
            alert("Not lingting");
        }
    }
    setTurnon(turnon){
        this.turnon=turnon;
    }
    getTurnon(){
        return this.turnon
        this.status = true
    }
    setTurnoff(turnoff){
        this.turnoff=turnoff;
    }
    getTurnoff(){
        return this.turnoff
        this.status = false;
    }


}