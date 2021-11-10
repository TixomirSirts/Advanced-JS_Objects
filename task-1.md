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

## ***Задание 1.***

```bush
console.group(`Выполнение задания 1:`);

const testObj1 = {
    prop1: 'value1',
    prop2: 'value2',
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

function chekProp(testObj) {
    console.warn(testObj);
    if (typeof testObj !== 'object') {
        console.log(`${testObj} <= это не объект, а ${typeof testObj}`)
    }
    if (testObj === null) {
        console.log(`${testObj} <= это null`)
    }
    if (typeof testObj === 'string') {

        console.log(`${testObj} <= если точнее - это строка`)
    } else {
        for (let prop in testObj) {
            if (testObj.hasOwnProperty(prop)) {
                console.log(`KEY: ${prop} | VALUE: ${testObj[prop]}`);
            }
        }
    }
    console.log(``);
}

chekProp(testObj1);
chekProp(someObj = {
    someProp: 'someValue'
});
chekProp(testNumber);
chekProp(testString);
chekProp(testBoolean);
chekProp(null);
chekProp(NaN);
chekProp(undefined);
```
