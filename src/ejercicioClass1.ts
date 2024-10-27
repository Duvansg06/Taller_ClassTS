interface Vehicle {
    modelo: number;
    year: number;
    color: string;
}

interface Car extends Vehicle {
    vehiCode: string
    multas: number
}

interface Motorcycle extends Vehicle{
    soat: number
    tecno: string

}

class Renta implements Car {
    modelo: number;
    year: number;
    color: string;
    vehiCode: string;
    multas: number


    constructor(modelo : number, year: number, color: string, vehiCode: string, multas: number){
        this.modelo = modelo;
        this.year = year;
        this.color = color;
        this.vehiCode = vehiCode;
        this.multas = multas
    }

}

let rentaUsuario = new Renta( 2025, 2026, "Azul", "KJYFSRTA", 4)
console.log(`Renta encontrada: 
    No. Modelo ${rentaUsuario.modelo},
    Year ${rentaUsuario.year},
    Color ${rentaUsuario.color},
    Codigo de Vehiculo ${rentaUsuario.vehiCode}.
    multas ${rentaUsuario.multas} `)