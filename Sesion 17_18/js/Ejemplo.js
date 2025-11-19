function compara() {
    var a = 2;
    var b = 2;
    if (a === b) {
        alert("Son iguales");
    } else {
        alert("No son iguales");
    }
}

function resta(x,y) {
    var rest = x - y;
    document.writeln("<h2> El resultado de la resta es: " + rest +"</h2>");
}

function suma(a,b) {
    var sum = a + b;
    document.getElementById("sumar").innerHTML = "El resultado de la suma es: " + sum;
}

function escribir() {
    valor = document.getElementById("entrada").value;
    document.getElementById("contenido").innerHTML = valor;
}