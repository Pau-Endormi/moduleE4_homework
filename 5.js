class ElectricalAppliance {
    constructor() {
        this.power = false
    }
    onPower() {
        if (this.power === false) {
            this.power = true;
            console.log(`${this.name} is On`);
        } else {
            console.log(`${this.name} is already turned On`);
        }
    }
    offPower() {
        if (this.power === true) {
            this.power = false;
            console.log(`${this.name} is off`);
        } else {
            console.log(`${this.name} is already turned off`);
        }
    }
}


class Computer extends ElectricalAppliance {
    constructor(name, powerConsumption, wifi, power) {
        super(power),
        this.name = name,
        this.powerConsumption = powerConsumption,
        this.isWiFi = wifi
    }
    getInfo() {
        console.log(`This computer «${this.name}» has a power consumption ${this.powerConsumption}W`);
    }
}

class TableLamp extends ElectricalAppliance {
    constructor(name, powerConsumption, lightColor, power) {
        super(power),
        this.name = name,
        this.powerConsumption = powerConsumption,
        this.lightColor = lightColor
    }
    getInfo() {
        console.log(`This table lamp «${this.name}» has a power consumption ${this.powerConsumption}W`);
    }
}


const computer = new Computer("Asus", 680, true);
const tableLamp = new TableLamp("Miconos", 60, "yellow");


computer.onPower();
console.log(computer.power)
computer.offPower();
console.log(computer.power)

computer.getInfo();
tableLamp.getInfo();
