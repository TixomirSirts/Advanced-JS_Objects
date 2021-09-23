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
        if (this.power == true) {
            console.log(`The ${this.name} has turned off, because the plug has been unplugged.\nThe ${this.name} is not working.`);
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
}

Device.prototype.workingStatus = function () {
    if (this.power == true && this.socketContact == true) {
        console.log(`WorkStatus - ON: The ${this.name} is working!`);
    } else {
        console.log(`WorkStatus - OFF: The ${this.name} is not working.`);
    }
}

BatteryDevice.prototype.switchPlug = function (socketContact = this.socketContact) {
    this.socketContact = socketContact;
    if (this.battery == false) {
        if (this.socketContact == true) {
            this.socketContact = false;
            console.log(`The plug of ${this.name} is unplugged.`);
            if (this.power == true) {
                console.log(`The ${this.name} has turned off, because the plug has been unplugged.\nThe ${this.name} is not working. Because battery is out too.`);
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
                console.log(`The ${this.name} is NOT working, because power is OFF.`);
            }
            return socketContact
        } else {
            this.socketContact = true;
            console.log(`The plug of the ${this.name} is inserted into the socket.`);
            if (this.power == true) {
                console.log(`It does not matter, because the ${this.name} is working by battery!`);
            } else {
                console.log(`The ${this.name} is NOT working, because power is OFF.`);
            }
            return socketContact
        }
    }
}

BatteryDevice.prototype.workingStatus = function () {
    if (this.battery == false) {
        if (this.power == true && this.socketContact == true) {
            console.log(`WorkStatus - ON: The ${this.name} is working without battery from the mains.`);
        } else {
            console.log(`WorkStatus - OFF: The ${this.name} is not working. Battery is out. Plug is out of socket.`);
        }
    } else {
        if (this.power == true) {
            if (this.socketContact == true) {
                console.log(`WorkStatus - ON: The ${this.name} is working from the mains. Battery is charging.`);
            } else {
                console.log(`WorkStatus ON: The ${this.name} is working off the mains by battery.`);
            }
        } else {
            console.log(`WorkStatus - OFF: The ${this.name} is not working, because power is OFF.`);
        }
    }
}


const lamp = new Device('lamp');
const humidifier = new Device('humidifier');
const notebook = new BatteryDevice('notebook', true);


// Функция для тетирования работы электро приборов

function checkDevice(device) {
    console.warn(device);
    // device.workingStatus();
    device.switchPlug();
    device.switchPower();
    device.workingStatus();
    // device.switchPlug();
    // device.switchPower();
    // device.workingStatus();
    console.log(``);
}


// Проверка работы лампы и увлажнителя

// checkDevice(lamp);
// checkDevice(humidifier);


// Проверка работы ноутбука

// checkDevice(notebook);


// Проверка работы ноутбука без батареи

// notebook.battery = false;
// checkDevice(notebook);


// Функция смены цвета для лампы

lamp.switchColor = function (lightColor = light) {
    this.lightColor = lightColor;
    console.log(`The ${this.name} emits ${this.lightColor}`);
}

// console.log(lamp);
// lamp.switchColor('daylight');


// Функция смены цвета посветки клавиатуры

notebook.switchKeyboardColor = function (keysLightColor = white) {
    this.keysLightColor = keysLightColor;
    console.log(`Keys of ${this.name} glow ${this.keysLightColor}`);
}

// console.log(notebook);
// notebook.switchKeyboardColor('blue');


// Функция смены режимов увлажнителя

humidifier.switchOperatingMode = function (operatingMode = this.operatingMode) {
    this.operatingMode = operatingMode;
    if (this.operatingMode != 'light' && this.operatingMode != 'medium' && this.operatingMode != 'heavy') {
        this.operatingMode = 'light';
        console.log(`The ${this.name}\'s operating mode is ${this.operatingMode}.`);
    } else {
        if (this.operatingMode == 'light') {
            this.operatingMode = 'medium';
            console.log(`The ${this.name}\'s operating mode switched to ${this.operatingMode}.`);
        } else if (this.operatingMode == 'medium') {
            this.operatingMode = 'heavy';
            console.log(`The ${this.name}\'s operating mode switched to ${this.operatingMode}.`);
        } else if (this.operatingMode == 'heavy') {
            this.operatingMode = 'light';
            console.log(`The ${this.name}\'s operating mode switched to ${this.operatingMode}.`);
        }
    }
}

// console.log(humidifier);
// humidifier.switchOperatingMode();
// humidifier.switchOperatingMode();
// humidifier.switchOperatingMode();
// humidifier.switchOperatingMode();