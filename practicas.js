let array = [' vaca', ' pollo', ' maiz']
array.push(' carne', ' pescado', ' pasta', ' tomates')
let copiaArray = array.slice()
array.shift()
array.unshift(' cerdo')
array.pop()
array.splice(0, 1)
array[9] = ' cordero'

const mapeo = array.map(item => {
let cocinar = ' cocido'
return item + cocinar
})

console.log(copiaArray)
console.log(mapeo + '. El pescado esta en el índice ' + array.indexOf(' pescado'))
console.log(mapeo[6])
