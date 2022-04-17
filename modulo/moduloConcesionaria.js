let fs = require('fs')
let autosDB = JSON.parse(fs.readFileSync('./data/autos.json', 'utf-8'))

//reescribe elelemto en JSON
let escribirJson = (array) => {
    fs.writeFileSync('./data/autos.json', JSON.stringify(array), 'utf-8')
}





let concesionaria = {
    autos: autosDB,
    buscarAuto: function (patente) {
        let autoEncontrado = autosDB.find(auto => auto.patente == patente)
        if (autoEncontrado) {
            return autoEncontrado
        } else {
            return null
        }
    },
    venderAuto: function (patente) {
        let auto = this.buscarAuto(patente)
        if (auto.vendido == false) {
            auto.vendido = true
            escribirJson(this.autos)
            return auto
        }

    },
    autosParaLaVenta: function () {
        //let autosFiltrados = this.autos.filter(auto => auto.vendido == false)
        return this.autos.filter(auto => auto.vendido == false)
    },
    autosNuevos: function () {
        return this.autosParaLaVenta().filter(auto => auto.km <= 100)
    },
    listaDeVentas: function () {
        let autosVendidos = this.autos.filter(auto => auto.vendido === true)
        return autosVendidos.map(auto => auto.precio)
    },
    totalDeVentas: function () {
        let vendidos = this.listaDeVentas()
        let total = vendidos.length !== 0 ? vendidos.reduce((acum, item) => acum + item) : 0
        return total
    },
    puedeComprar: function (auto, persona) {
        let cuota = auto.precio / auto.cuotas
        return auto.precio <= persona.capacidadDePagoTotal && persona.capacidadDePagoEnCuotas >= cuota
    },
    autosQuePuedeComprar: function (persona){
        let autosDisponibles = this.autosParaLaVenta()
        return autosDisponibles.filter(auto => this.puedeComprar(auto, persona))

    }

}

module.exports = concesionaria



