let numeroRandom = Math.floor(Math.random() * 100) + 1;

let mensaje = document.getElementById('mensaje');
let numeroEntrada = document.getElementById('numeroEntrada');
let botonComprobar = document.getElementById('botonComprobar');
let intentos = document.getElementById('intentos');
let contadorIntentos = 0;


function chequearValores() {
    let numeroIngresado = parseInt(numeroEntrada.value);
        
    if (numeroIngresado < 1) {
        mensaje.textContent = 'No puedes ingresar números menores a 1';
        mensaje.style.color = 'black';
        sumarContadorIntentos();
    }
    else if (numeroIngresado > 100) {
        mensaje.textContent = 'No puedes ingresar números mayores a 100';
        mensaje.style.color = 'black';
        sumarContadorIntentos();
    }
    else if (numeroIngresado === numeroRandom) {
        mensaje.textContent = '¡Felicitaciones! ¡Adivinaste el número!';
        mensaje.style.color = 'green';
        numeroEntrada.disabled = true;
        botonComprobar.disabled = true;
        return
    }
    else if (numeroIngresado > numeroRandom) {
        //document.getElementById('mensaje').innerHTML = "El numero es menor";
        mensaje.textContent = 'El numero buscado es menor a ' + numeroIngresado;
        mensaje.style.color = 'orange';
        sumarContadorIntentos();
    }
    else {
        //document.getElementById('mensaje').innerHTML = "El numero es mayor";
        mensaje.textContent = ' El numero buscado es mayor a ' + numeroIngresado;
        mensaje.style.color = 'red';
        sumarContadorIntentos();
    }    
}

function sumarContadorIntentos()
{
    contadorIntentos ++;
    intentos.textContent = 'Intentos: '+contadorIntentos;
}