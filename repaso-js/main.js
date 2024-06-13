
var nombre = "Alvaro Climent";
var altura = 190;

/*
var concatenacion = nombre + " " + altura;

// document.write(nombre);
// document.write(altura);
// document.write(concatenacion);

var datos = document.getElementById("datos");
// datos.innerHTML = concatenacion;
datos.innerHTML = `
<h1>Soy la caja de datos, el div</h1>
<h2>Mi nombre es: ${nombre}</h2>
<h3>Mi altura es: ${altura} cm</h3>
`

if(altura >= 190){
    datos.innerHTML += '<h1>Eres una persona alta</h1>';
}else{
    datos.innerHTML += '<h1>Eres una persona bajita</h1>';

}

for(var i = 2000; i <= 2020; i++){
    //bloque de instrucciones
    datos.innerHTML += '<h2>Estamos en el año:' + i;
}
*/

function MuestraMiNombre(nombre, altura){

    var misDatos = `
    <h1>Soy la caja de datos, el div</h1>
    <h2>Mi nombre es: ${nombre}</h2>
    <h3>Mido: ${altura} cm</h3>
    `;

    return misDatos;
}

function Imprimir(){
    var datos = document.getElementById("datos");
    datos.innerHTML = MuestraMiNombre("NoName por params", 180);
}

Imprimir();

var nombres = ['Victor','Antonio', 'Joaquin'];

document.write('<h1>Listado de Nombres:</h1>');
/*
for(i = 0; i < nombres.length; i++){
    document.write(nombres[i] + '</br>');
}
*/
nombres.forEach((nombre) => {
    document.write(nombre + '</br>');

})

var coche = {
    modelo: 'Mercedes Clase A',
    velmaxima: 350,
    año: 2023,
    mostrarDatos(){
        console.log(this.modelo, this.velmaxima, this.año);
    },
    propiedad1: "valor aleatorio"
};

document.write("<h1>"+coche.modelo+"</h1>");
coche.mostrarDatos();

var saludar = new Promise((resolve, reject) => {
    setTimeout(() => {
        let saludo = "Hola amigos";
        saludo = false;
        if(saludo){
            resolve(saludo);
        }else{
            reject('No hay saludo disponible');
        }
    }, 2000);
});

saludar.then(resultado => {
    alert(resultado);
})
.catch(err => {
    alert(err);
});