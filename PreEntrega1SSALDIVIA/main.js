//PRIMERA PRE ENTREGA, SALDIVIA SANTIAGO, VOY A TRATAR DE INICAR MI PROYECTO EN BASE A PRESTAMOS, INTERESES Y DEMAS
let nombre = prompt("ingrese nombre");
let apellido= prompt("ingrese apellido");

alert("BIENVENIDO," + nombre + " " + apellido);

function getCreditQuota(initialPrice, numberOfQuotas){
    
    if(numberOfQuotas === 1 ){
        const priceWithInteres = initialPrice 
        console.log('tenes que devolver', priceWithInteres)
        return priceWithInteres
    }
    if(numberOfQuotas === 3){
        const priceWithInteres = initialPrice + initialPrice * 0.15
        console.log('tenes que devolver', priceWithInteres)
        return priceWithInteres
    }
    if(numberOfQuotas === 6){
        const priceWithInteres = initialPrice + initialPrice * 0.45
        console.log('tenes que devolver', priceWithInteres)
        return priceWithInteres
    }
    if(numberOfQuotas === 9){
        const priceWithInteres = initialPrice + initialPrice * 0.70
        console.log('tenes que devolver', priceWithInteres)
        return priceWithInteres
    }
    
    alert('SOLO SE PUEDE POR 1, 3, 6 O 9')
    console.log('SOLO SE PUEDE POR 1, 3, 6 O 9')
}


let numeroA = parseInt (prompt("Ingrese el valor que necesita del prestamo"));
let numeroB = parseInt (prompt("En cuantas cuotas deseas devolver este dinero? "));

getCreditQuota(numeroA, numeroB)




// let multiplicacion = (numeroA * 1.21);
// alert("el dinero total a devolver es " + " " + multiplicacion);
// console.log("el dinero total a devolver es " + multiplicacion);