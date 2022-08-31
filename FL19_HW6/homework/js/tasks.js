// #1
const arr = ['1','3','4','2','5']
function getMaxEventElement(arr) {
    let num = null
   for (const i of arr) {
    [parseInt(i)]
}
   num = Math.max(...arr.filter(number => Number.isInteger(number/2)))
     return num 
}
console.log(getMaxEventElement(arr));

// #2
let a = 3
let b = 5
b = [a, a = b][0]
console.log(a);
console.log(b);

// #3
function getValue(params) {
    if (params === null) {
        return '-'
    } else if (params === undefined) {
        return '-'
    } else {
        return params
    }

}
console.log(getValue(0));
console.log(getValue(4));
console.log(getValue('Some text'));
console.log(getValue(null));
console.log(getValue(undefined));

// #4
const arrayOfArrays = [
    ["name","dan"],
    ["age","21"],
    ["city", "Lviv"]
]
function getObjFromArray(p) {
const obj = {}
for (const i of p) {
    obj[i[0]] = i[1]
}
return obj
}
    console.log(getObjFromArray(arrayOfArrays));

// #5
const obj1 = {name: 'rick'}
function addUniqueId(obj) {
    let re = 'id'
    let user = {}
    user[re] = Symbol()
    const clon = Object.assign(obj, user) 
    return clon
}
console.log(addUniqueId(obj1));
console.log(addUniqueId({name: 'buffy'}));
console.log(Object.keys(obj1).includes("id "));

// #6
const oldObj = {
    name: 'willow',
    details: { id: 1, age: 47, university: 'LNU' }
}
function getRegroupedObject(oldObj) {
    const { name, details } = oldObj
    const { id, age, university } = details
    console.log( id, age, university)
    console.log(name, details);
    const obj = {}
    obj.university = university
    obj.user = {age:age, firstName:name, id:id}
    return obj
}
console.log(getRegroupedObject(oldObj));
console.log('oldObj', oldObj)

// #7
const array = [2,3,4,2,4,'a','c','a']
function getArrayWithUniqueElements(arr) {
    let arre = new Set(arr)
    return arre
}
console.log(getArrayWithUniqueElements(array));

// #8
const phoneNumber = '0123456789'
function hideNumber(phoneNumber) {
 const hide = phoneNumber.slice(6).padStart(10,'*')
    return hide
}
console.log( hideNumber(phoneNumber))

// #9
function add (a = 2, b) {
    if (a&&b) {
        return a + b;
    }
    const e = new Error('b is reqire')
    return e
}
console.log(add(2, 3));
console.log(add(2));

// #10
const generatorObject = generateIterableSequence()
function* generateIterableSequence(){
    yield 'I'
    yield 'love'
    yield 'EPAM'
}
for (let value of generatorObject){
    console.log(value);
}