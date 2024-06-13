class Coche{
    
    constructor(modelo, velocidad, antiguedad){
        this.modelo= modelo;
        this.velocidad= velocidad;
        this.antiguedad= antiguedad;
    }

    aumentarVelocidad(){
        this.velocidad += 1;
    }

    reducirVelocidad(){
        this.velocidad -= 1;
    }
}

class Autobus extends Coche{
    constructor(modelo, velocidad, antiguedad){
        super(modelo, velocidad, antiguedad);
        this.altura = 5;
    }

    mostrarAltura(){
        return "La altura del bus es" +this.altura;
    }
}

var autobus1 = new Autobus('Pegasus');
console.log(autobus1.mostrarAltura()); 

var coche1 = new Coche('BMW', 200, 2017);
var coche2 = new Coche('Audi', 100, 2007);
var coche3 = new Coche('Toyota', 290, 2011);
var coche4 = new Coche('Jaguar', 230, 2012);

document.write("<h1> Velocidad:"+coche1.velocidad+"</h1>");
coche1.aumentarVelocidad();
coche1.aumentarVelocidad();
coche1.aumentarVelocidad();
document.write("<h1> Velocidad:"+coche1.velocidad+"</h1>");


