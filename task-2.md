# ***Advanced object work JS***

## **Продвинутая работа с объектами в JS**

## **Содеражние:**

[**Главная**](./README.md)

+ [**Задание 1.**](./task-1.md)
+ [**Задание 2.**](./task-2.md)
+ [**Задание 3.**](./task-3.md)
+ [**Задание 4.**](./task-4.md)
+ [**Задание 5.**](./task-5.md)

___

## ***Задание 2.***

```bush
console.group(`Выполнение задания 2:`);

const testObj2 = {
    prop1: 'value1',
    prop2: 'value2',
    soughtProp: 'this is what I need',
    meth1: function func1() {
        console.log(`This is first function.`)
    },
    meth2: function func2() {
        console.log(`This is second function.`)
    }
}

const testNumber = Math.round(Math.random() * 100);

const testString = String.fromCharCode(Math.round(Math.random() * 100));

const testBoolean = Boolean(Math.round(Math.random() * 100) >= 50 ? true : false);

function chekThisProp(testObj, testProp = false) {
    console.warn(testObj);

    if (testProp === false) {
        console.log(`Ошибка ввода: введите искомое свойство`);
        return false
    } else {
        console.log(`${testProp} <= искомое свойство...`);
    }

    let searchResult = (testProp) => {
        if (testProp === false) {
            console.log(`Искомое свойство НЕ найдено.`)
            console.log(``);
        } else {
            console.log(`Искомое свойство НАЙДЕНО!`);
            console.log(``);
        }
    }

    if (testObj === null) {
        console.log(`${testObj} <= это null, у него нет свойств...`);
        searchResult(false);
        return false
    }

    if (typeof testObj !== 'object') {
        console.log(`${testObj} <= это не объект, а ${typeof testObj}...`)
        if (typeof testObj === 'string') {
            console.log(`${testObj} <= если точнее - это строка...`)
            searchResult(false);
            return false
        } else {
            searchResult(false);
            return false
        }
    }

    for (let prop in testObj) {
        if (testObj.hasOwnProperty(prop)) {
            if (prop === testProp) {
                searchResult(true);
                return true
            }
        }
    }
}

chekThisProp(testObj2, 'soughtProp');
chekThisProp(someObj = {
    someProp: 'someValue'
}, 'someProp');
chekThisProp(testNumber, 'soughtProp');
chekThisProp(testString, 'soughtProp');
chekThisProp(testBoolean, 'soughtProp');
chekThisProp(null, 'soughtProp');
chekThisProp(NaN, 'soughtProp');
chekThisProp(undefined, 'soughtProp');
```
