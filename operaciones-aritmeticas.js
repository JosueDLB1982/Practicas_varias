'use strict'
const ops = (num1, num2) => {
 let suma = (parseInt(num1) + parseInt(num2))
  console.log(`La suma es ${suma}`)

 let resta = (parseInt(num1) - parseInt(num2))
  console.log(`La resta es ${resta}`)

 let multiplicacion = (parseInt(num1) * parseInt(num2))
  console.log(`La multiplicación es ${multiplicacion}`)

 let division = (parseInt(num1) / parseInt(num2))
  console.log(`La división es ${division}`)

 let potencia = (Math.pow(num1,num2))
  console.log(`La potencia es ${potencia}`)
}
ops(2, 5)
  
