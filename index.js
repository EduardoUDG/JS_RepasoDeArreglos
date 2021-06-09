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






