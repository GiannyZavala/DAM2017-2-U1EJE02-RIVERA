/* Funcion palindromo*/
function palindromo (cadena){
    console.log("La cadena a evaluar es: "+cadena);
    var cad = cadena.toLowerCase();
    var cadsinE = eliminarespacios(cadena);
    //console.log("Eliminando espacios en blanco "+cadsinE);
    var ArrayCad = cadsinE.split("");
    var reverseCad = ArrayCad.reverse();
    // Verifico sin son iguales
    var b = true;
    for (i in ArrayCad) {
        if (ArrayCad[i] !=reverseCad[i]) {
            b = false;
            break;
        };
    };
    return ("1.- Palindromo: "+b);
    
};
    
//Contar numero de palabras
function Cpalabras (cadena){
    var numerop = cadena.split(" ").length;
    return ("2.- Palabras: "+numerop);
}
// Contar numero de Letras
function Cletras (cadena){
   var numeroL = eliminarespacios(cadena).length;
   return ("3.- Numero de Letras: "+numeroL);
}

//Contar numero de Vocales
function Cvocales (cadena){
    var temp = 0
    var vocales = ["a","e","i","o","u"];
    var cad1 = eliminarespacios(cadena).split("");
    for (var i in cad1){
        for (var j in vocales)
        if (cad1 [i] == vocales [j] ){
            temp++; 
        }
    }
    return temp;
    

}

function Cvocales (cadena){
    var temp = 0
    var vocales = ["a","e","i","o","u"];
    var cad1 = eliminarespacios(cadena).split("");
    for (var i in cad1){
        for (var j in vocales)
        if (cad1 [i] == vocales [j] ){
            temp++; 
        }
    }
    return ("4.- Numero de vocales: "+temp);
    

}

function Cconsonantes (cadena){
    var temp = 0
    var consonantes = ["b","c","d","f","g","h","j","k","l","m","n","ñ",
                    "p","q","r","s","t","v","w","x","y","z"];
    var cad1 = eliminarespacios(cadena).split("");
    for (var i in cad1){
        for (var j in consonantes)
        if (cad1 [i] == consonantes [j] ){
            temp++; 
        }
    }
    return ("5.- Numero de consonantes: "+temp);
    

}
var palabra = "anita lava la tina";
console.log(palindromo(palabra));
console.log(Cpalabras(palabra));
console.log(Cletras(palabra));
console.log(Cvocales(palabra));
console.log(Cconsonantes(palabra));

function eliminarespacios (cadena){
    var sinE = cadena.toString().replace(/ /g,"");
    return sinE;
}