
// SE PIDE DATO DE ENTRADA PARA CADA UNA DE LAS 3 FUNCIONES

function pedir_nombre() {
    let nombre=prompt("Introduce su nombre");
        return nombre; // SE RETORNA EL VALOR INGRESADO
}
function pedir_edad() {
    let edad=prompt("Introduce su edad");
        return edad; // SE RETORNA EL VALOR INGRESADO
}
function pedir_estatura() {
    let estatura=prompt("Introduce su estatura, en cm");
        return estatura; // SE RETORNA EL VALOR INGRESADO
}

let dato1=pedir_nombre(); //ASIGNAMOS A UNA VARIABLE EL VALOR DE LA PRIMER FUNCIÓN
let dato2=pedir_edad(); //ASIGNAMOS A UNA VARIABLE EL VALOR DE LA SEGUNDA FUNCIÓN
let dato3=pedir_estatura(); //ASIGNAMOS A UNA VARIABLE EL VALOR DE LA TERCER FUNCIÓN

function datos_completos(parametro1,parametro2,parametro3) { //ESPECIFICAMOS QUE LA FUNCIÓN, TOMARÁ 3 PARÁMETROS
    let apellido=prompt("Introduce su apellido");
    document.write("<u/>Hola " + parametro1 + " " + apellido + ", su edad es " + parametro2 + 
    " y su estatura en cm es " + parametro3 + ", Bienvenido!!");
}

// LLAMAMOS  A LA FUNCIÓN, EN RELACION A LOS TRES PARÁMETROS

datos_completos(dato1,dato2,dato3);
