let concesionaria = require('./modulo/moduloConcesionaria')
let fs = require('fs')
let autosDB = JSON.parse(fs.readFileSync('./data/autos.json', 'utf-8'))
let personasDB = JSON.parse(fs.readFileSync('./data/personas.json', 'utf-8'))

//console.log(concesionaria.autos)
//console.log(concesionaria.buscarAuto("ZPO158")) // si no lo encuentra devuelve null


//console.log(concesionaria.venderAuto('APL123')) // cambia vendido: fale a vendido: true


//console.log(concesionaria.autosParaLaVenta())

//console.log(concesionaria.autosNuevos())
//console.log(concesionaria.listaDeVentas())

//console.log(concesionaria.totalDeVentas())

//console.log(concesionaria.puedeComprar(autosDB[0], personasDB[0]))
console.log(concesionaria.autosQuePuedeComprar(personasDB[1]))






