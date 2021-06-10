// Repaso de lo visto arrays en javascript


// concat()

/*
const array1 = [1, 2, 3, 4, 5]
const array2 = ['6', '7', '8', '9', '10']

let arrayConcat = array1.concat(array2)
console.log(arrayConcat);
*/






// copyWithin()

/*
const fruits = ['Apple', 'Orange', 'Banana', 'Grapes', 'Pineapple']
const copyFruits = fruits.copyWithin(4, 0, 2)
console.log(copyFruits)
*/
 





// entries()

// const names = ['Luis', 'Pedro', 'Juan', 'Diego', 'Lalo']
// const iteration = names.entries()
// 
// console.log(iteration.next().value)
// console.log(iteration.next().value)
// console.log(iteration.next().value)
// console.log(iteration.next().value)
// console.log(iteration.next().value)

// for(let e of iteration) {
// 	console.log(e)
// }






// every()

// const boysArray = [
// 	{ age: 14, name: 'pepe' },
// 	{ age: 13, name: 'carlos' },
// 	{ age: 14, name: 'juan' },
// 	{ age: 15, name: 'diego' },
// 	{ age: 14, name: 'eduardo' },
// ];
// 
// let ageValidate = boysArray.every((obj) => {
// 	return obj.age >= 10
// });
// 
// let result = (ageValidate ? 'Todos son mayores de 10' : 'Todos no son mayores de 10')
// 
// console.log(result)






// fill()

// const staticArray = Array(100).fill(5)
// console.log(staticArray)
// 
// const array = [1, 2, 3, 4, 5, 6]
// const newArray = array.fill(10, 3, 4)
// console.log(newArray)








// filter()

// const students = [
// 	{ name: 'Juanito', age: 18, carrera: 'INNI', estado: 'Jalisco' },
// 	{ name: 'Pedrito', age: 20, carrera: 'INNI', estado: 'Zacatecas' },
// 	{ name: 'Eduardo', age: 20, carrera: 'INNI', estado: 'Jalisco' },
// 	{ name: 'Carlitos', age: 22, carrera: 'INNI', estado: 'Michoacan' },
// 	{ name: 'Lupitas', age: 21, carrera: 'INNI', estado: 'Oaxaca' },
// ];
// 
// const queryStudentsByEstado = (student) => {
// 	return student.estado === 'Jalisco'
// } 
// 
// const validateStudents = students.filter(queryStudentsByEstado) 
// 
// console.log(validateStudents)
// 






// find()

// const students = [
// 	{ name: 'Juanito', age: 18, carrera: 'INNI', estado: 'Jalisco' },
// 	{ name: 'Pedrito', age: 20, carrera: 'INNI', estado: 'Zacatecas' },
// 	{ name: 'Eduardo', age: 20, carrera: 'INNI', estado: 'Jalisco' },
// 	{ name: 'Carlitos', age: 22, carrera: 'INNI', estado: 'Michoacan' },
// 	{ name: 'Lupitas', age: 21, carrera: 'INNI', estado: 'Oaxaca' },
// ];
// 
// const findNameStudent = (student) => {
// 	return student.name === 'Eduardo'
// }
// 
// console.log(students.find(findNameStudent))






// findIndex()
// const students = [
// 	{ name: 'Juanito', age: 18, carrera: 'INNI', estado: 'Jalisco' },
// 	{ name: 'Pedrito', age: 20, carrera: 'INNI', estado: 'Zacatecas' },
// 	{ name: 'Eduardo', age: 20, carrera: 'INNI', estado: 'Jalisco' },
// 	{ name: 'Carlitos', age: 22, carrera: 'INNI', estado: 'Michoacan' },
// 	{ name: 'Lupitas', age: 21, carrera: 'INNI', estado: 'Oaxaca' },
// ];

// const findStudentIndex = (student) => {
//     return student.age >= 20
// }   

// let result = students.findIndex(findStudentIndex)
// let message = (result ? 'Se encontro el indice del elemento' : 'No existe' )
// console.log(message)







// forEach()

// const students = [
// 	{ name: 'Juanito', age: 18, carrera: 'INNI', estado: 'Jalisco' },
// 	{ name: 'Pedrito', age: 20, carrera: 'INNI', estado: 'Zacatecas' },
// 	{ name: 'Eduardo', age: 20, carrera: 'INNI', estado: 'Jalisco' },
// 	{ name: 'Carlitos', age: 22, carrera: 'INNI', estado: 'Michoacan' },
// 	{ name: 'Lupitas', age: 21, carrera: 'INNI', estado: 'Oaxaca' },
// ];

// students.forEach((student) => {
//     console.log('Hola soy ',student.name, ' y tengo ', student.age, ' años')
// })







// includes()

// const names = ['Lalo', 'Pedro', 'Juan', 'Antonio']
// console.log(names.includes('Antonio'))






// indexOf()

// const array = ['Apple', 'Banana', 'Lemon', 'Pineaple']
// console.log(array.indexOf('Banana'))    

// const array2 = [
//     'Apple', 
//     'Banana', 
//     'Lemon', 
//     'Pineaple',
//     'Apple', 
//     'Lemon', 
//     'Apple'
// ];
// const indicesEncontrados = []
// let elemento = 'Apple'
// let idx = array2.indexOf(elemento)

// while(idx != -1) {
//     indicesEncontrados.push(idx)
//     idx = array2.indexOf(elemento, idx+1)
// }
// console.log(indicesEncontrados)










// isArray()

// const array = []
// const array2 = [
//     'Apple', 
//     'Banana', 
//     'Lemon', 
//     'Pineaple',
//     'Apple', 
//     'Lemon', 
//     'Apple'
// ];
// let valorTruty = Array.isArray(array) 
// console.log(Array.isArray(array2))








// join()

// const array = [
//     'Apple', 
//     'Banana', 
//     'Lemon', 
//     'Pineaple',
//     'Apple', 
//     'Lemon', 
//     'Apple'
// ];

// let arrayToString = array.join(' ') 
// let stringToArray = arrayToString.split(' ')

// console.log(arrayToString)
// console.log(array)
// console.log(stringToArray)











// keys()

// const array = [
//     'Apple', 
//     'Banana', 
//     'Lemon', 
//     'Pineaple',
//     'Apple', 
//     'Lemon', 
//     'Apple'
// ];

// const iteration = array.keys()
// console.log(iteration.next().value)
// console.log(iteration.next().value)
// console.log(iteration.next().value)
// console.log(iteration.next().value)
// console.log(iteration.next().value)
// console.log(iteration.next().value)
// console.log(iteration.next().value)

// for(let e of iteration) {
//     console.log(e)
// }









// lastIndexOf()

// const indicesFound = []
// const array = [1, 2, 1, 4, 3, 7, 23, 1]
// let element = 1
// let idx = array.lastIndexOf(element)

// while(idx != -1) {
//     indicesFound.push(idx)
//     idx = (idx > 0 ? array.lastIndexOf(element, idx - 1) : -1)
// }
// console.log(`Longitud del arrelgo: ${array.length}`)
// console.log(indicesFound)






// map()

// const array = [1, 2, 3, 4, 5, 6]
// const mapArray = array.map(e => e * 2)
// console.log(mapArray)

// const emptyArray = [1, 2, 3, 4]
// const fillArray = emptyArray.map((ele, idx) => {    
//     return { [idx]:ele*10 }
// })
// console.log(fillArray)

// const array = ['1', '2', '3', '4']
// console.log(array.map(Number))
// console.log(array)







// pop()    
// const array = [
//   { name: 'Eduardo', age: 20, gender: 'M' },
//   { name: 'Juan', age: 21, gender: 'M' },
//   { name: 'Carla', age: 18, gender: 'F' },
//   { name: 'Daniela', age: 19, gender: 'F' },
//   { name: 'Javier', age: 20, gender: 'M' },
// ];

// console.log(array)
// const deleteLast = array.pop()
// console.log(array)
// console.log(deleteLast)













// push()

// const array = [
//     { name: 'Eduardo', age: 20, gender: 'M' },
//     { name: 'Juan', age: 21, gender: 'M' },
//     { name: 'Carla', age: 18, gender: 'F' },
//     { name: 'Daniela', age: 19, gender: 'F' },
//     { name: 'Javier', age: 20, gender: 'M' },
// ];
// console.log(array)
// let element = { name: 'NuevoElemento', age: 22, gender: 'F' }

// console.log(array)
// const addElement = (array.push(element))
// console.log(array)










// reduce()
// const array = [21, 12, 53, 12, 3, 56, 83, 18, 17]

// const maxValue = (acc, valIni) => ( acc > valIni ? acc : valIni )
// const minValue = (acc, valIni) => ( acc < valIni ? acc : valIni )
// const sumValue = (acc, valIni) => acc + valIni
// let average = (array.reduce(sumValue)/array.length)


// console.log('Valor maximo del arreglo: ',array.reduce(maxValue))
// console.log('Valor minimo del arreglo: ',array.reduce(minValue))
// console.log('Suma del arreglo: ',array.reduce(sumValue))
// console.log('Promedio del arreglo: ',average.toFixed(2))

// const reduceArray = [[1, 2], [3, 4], [5, 6]]
// const arrayConc = reduceArray.reduce((preVal, curVal) => {
//     return preVal.concat(curVal)
// });

// console.log(arrayConc)










// rediceRigth()

// const array = [21, 12, 53, 12, 3, 56, 83, 18, 17]

// const maxValue = (acc, valIni) => ( acc > valIni ? acc : valIni )
// const minValue = (acc, valIni) => ( acc < valIni ? acc : valIni )
// const sumValue = (acc, valIni) => acc + valIni
// let average = (array.reduce(sumValue)/array.length)


// console.log('Valor maximo del arreglo: ',array.reduceRight(maxValue))
// console.log('Valor minimo del arreglo: ',array.reduceRight(minValue))
// console.log('Suma del arreglo: ',array.reduceRight(sumValue))
// console.log('Promedio del arreglo: ',average.toFixed(2))








// reverse()
// const array = [1, 2, 3, 4, 5, 6]

// console.log(array)
// console.log(array.reverse())









// shift()
// const array = [
//     { mame:'Eduardo', age: 20, country: 'Mexico' },
//     { mame:'Luna', age: 21, country: 'Mexico' },
//     { mame:'Pancho', age: 22, country: 'Mexico' },
//     { mame:'Franchesco', age: 23, country: 'Mexico' },
//     { mame:'Miguel', age: 21, country: 'Mexico' },
// ];

// console.log(array)
// console.log(array.shift())
// console.log(array)









// slice()
// const array = [
//     { mame:'Eduardo', age: 20, country: 'Mexico' },
//     { mame:'Luna', age: 21, country: 'Mexico' },
//     { mame:'Pancho', age: 22, country: 'Mexico' },
//     { mame:'Franchesco', age: 23, country: 'Mexico' },
//     { mame:'Miguel', age: 21, country: 'Mexico' },
// ];

// const partirArreglo = array.slice(0, 1)
// console.log(partirArreglo)
// console.log(JSON.stringify(partirArreglo))











// some()

// const array = [
//     { mame:'Eduardo', age: 20, country: 'Mexico' },
//     { mame:'Luna', age: 21, country: 'Mexico' },
//     { mame:'Pancho', age: 22, country: 'Mexico' },
//     { mame:'Franchesco', age: 23, country: 'Mexico' },
//     { mame:'Miguel', age: 21, country: 'Mexico' }
// ];

// let findAge = (elemnt) => {
//     'use stric';
//     return elemnt.age >= 23
// }

// console.log(array.some(findAge))







// sort()

// const numbersArray = [1, 212, 32, 123, 54, 34, 12]
// const orderNumbers = numbersArray.sort((a ,b) => {
//     return a - b
// })

// console.log(orderNumbers)
// const arrayString = ['Mario', 'adrian', 'Juan', 'Beto', 'CARLA']
// const arrayToLower = arrayString.map(ele => {
//     return ele.toLowerCase()
// });

// const orderString = ((a,b) => {
//     if(a > b) {
//         return 1
//     }
//     if(a < b) {
//         return -1
//     }
//     return 0
// });
// console.log(arrayToLower.sort(orderString))









// splice()

// const numbersArray = [1, 2, 3, 4, 5, 6, 7]
// const array = [
//     { name:'Eduardo', age: 20, country: 'Mexico' },
//     { name:'Luna', age: 21, country: 'Mexico' },
//     { name:'Pancho', age: 22, country: 'Mexico' },
//     { name:'Franchesco', age: 23, country: 'Mexico' },
//     { name:'Miguel', age: 21, country: 'Mexico' }
// ];

// const findName = array.findIndex(elemnt => elemnt.name === 'Luna')
// console.log(array.splice(findName, 1))

// const deleteTwoElements = numbersArray.splice(0,2, 3, 3)
// console.log(numbersArray)















// toString()

// const array = [1, 2, 3, 4, 5, 6]
// const arrayToString = array.toString() 

// let stringToArray = arrayToString.split(',')
// const StringToIntArray = stringToArray.map(Number)

// console.log(array)
// console.log(arrayToString)
// console.log(StringToIntArray)













// unshift()

// const fruits = ['Apple', 'Banana', 'Orange', 'Pineapple', 'Grapes']

// console.log(fruits)
// fruits.unshift('Salchipulpos')
// console.log(fruits)












// values()

// const fruits = ['Apple', 'Banana', 'Orange', 'Pineapple', 'Grapes']
// let iteration = fruits.values()

// for(let element of iteration) {
//     console.log(element)
// }