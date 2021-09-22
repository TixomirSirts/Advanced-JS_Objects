console.group(`Выполнение задания 4:`);

function Device(name) {
    this.name = name;
    this.type = 'electric';
    this.socketContact = false;
    this.power = false;

}

function BatteryDevice(name) {
    this.name = name;
    this.battery = true;
}

BatteryDevice.prototype = new Device();

Device.prototype.switchPower = function (power = this.power) {
    this.power = power;
    if (this.power == true) {
        this.power = false;
        console.log(`The ${this.name}\'s power is OFF.`);
        console.log(`The ${this.name} is not working.`);
        return power
    } else {
        this.power = true;
        console.log(`The ${this.name}\'s power is ON.`)
        if (this.socketContact == false) {
            console.log(`But plug is not in socket. If you want to use the ${this.name}, please, insert the plug into the socket.`)
        } else {
            console.log(`The ${this.name} is working!`)
        }
        return power
    }
}

Device.prototype.switchPlug = function (socketContact = this.socketContact) {
    this.socketContact = socketContact;
    if (this.socketContact == true) {
        this.socketContact = false;
        console.log(`The plug of ${this.name} is unplugged.`);
        console.log(`The ${this.name} is not working.`);
        if (this.power == true) {
            console.log(`The ${this.name} has turned off, because the plug has been unplugged.`);
            console.log(`The ${this.name} is not working.`);
        }
        return socketContact
    } else {
        this.socketContact = true;
        console.log(`The plug of the ${this.name} is inserted into the socket.`);
        if (this.power == true) {
            console.log(`The ${this.name} is working!`);
        } else {
            console.log(`The ${this.name} is not working.`);
        }
        return socketContact
    }
}

Device.prototype.workingStatus = function () {
    if (this.power == true && this.socketContact == true) {
        console.log(`The ${this.name} is working!`);
    } else {
        console.log(`The ${this.name} is not working.`);
    }
}

BatteryDevice.prototype.switchPlug = function (socketContact = this.socketContact) {
    this.socketContact = socketContact;
    if (this.battery == false) {
        if (this.socketContact == true) {
            this.socketContact = false;
            console.log(`The plug of ${this.name} is unplugged.`);
            if (this.power == true) {
                console.log(`The ${this.name} has turned off, because the plug has been unplugged.`);
                console.log(`The ${this.name} is not working. Because battery is out too.`);
            } else {
                console.log(`The ${this.name} is not working.`);
            }
            return socketContact
        } else {
            this.socketContact = true;
            console.log(`The plug of the ${this.name} is inserted into the socket.`);
            if (this.power == true) {
                console.log(`The ${this.name} is working!`);
            } else {
                console.log(`The ${this.name} is not working.`);
            }
            return socketContact
        }
    } else {
        if (this.socketContact == true) {
            this.socketContact = false;
            console.log(`The plug of ${this.name} is unplugged.`);
            if (this.power == true) {
                console.log(`Even though the plug has been unplugged, the ${this.name} is working by battery.`);
            } else {
                console.log(`The ${this.name} is NOT working, because POWER is OFF.`);
            }
            return socketContact
        } else {
            this.socketContact = true;
            console.log(`The plug of the ${this.name} is inserted into the socket.`);
            if (this.power == true) {
                console.log(`It does not matter, because the ${this.name} is working by battery!`);
            } else {
                console.log(`The ${this.name} is NOT working, because POWER is OFF.`);
            }
            return socketContact
        }
    }
}


const lamp = new Device('lamp');
const humidifier = new Device('humidifier');
const notebook = new BatteryDevice('notebook', true);

function checkDevice(device) {
    console.warn(device);
    // device.workingStatus();
    device.switchPlug();
    // device.switchPower();
    // device.switchPlug();
}


// checkDevice(lamp);
// checkDevice(humidifier);
checkDevice(notebook);