function ElectricalAppliance() {
    this.power = false
}

ElectricalAppliance.prototype.onPower = function() {
    if (this.power === false) {
        this.power = true;
        console.log(`${this.name} is On`);
    } else {
        console.log(`${this.name} is already turned On`);
    }
}
ElectricalAppliance.prototype.offPower = function() {
    if (this.power === true) {
        this.power = false;
        console.log(`${this.name} is off`);
    } else {
        console.log(`${this.name} is already turned off`);
    }
}


function Computer(name, powerConsumption, wifi) {
    this.name = name,
    this.powerConsumption = powerConsumption,
    this.isWiFi = wifi
}

function TableLamp(name, powerConsumption, lightColor) {
    this.name = name,
    this.powerConsumption = powerConsumption,
    this.lightColor = lightColor
}

Computer.prototype = new ElectricalAppliance();
TableLamp.prototype = new ElectricalAppliance();

Computer.prototype.getInfo = function() {
    console.log(`This computer «${this.name}» has a power consumption ${this.powerConsumption}W`);
}
TableLamp.prototype.getInfo = function() {
    console.log(`This table lamp «${this.name}» has a power consumption ${this.powerConsumption}W`);
}


const computer = new Computer("Asus", 680, true);
const tableLamp = new TableLamp("Miconos", 60, "yellow");


computer.onPower();
console.log(computer.power)
computer.offPower();
console.log(computer.power)

computer.getInfo();
tableLamp.getInfo();
