var keyNumber = document.getElementById("keyNumber");
var key = keyNumber.getElementsByTagName("input");
var txtNumber = document.getElementById("txtNumber");
var cadenaBtn = document.getElementById("button");
var btn = cadenaBtn.getElementsByTagName("button");
var btnEncrypt = document.getElementById("btnEncrypt");
var btnTranslate = document.getElementById("btnTranslate");
var num;
console.log(btn[0]);

/*Insertar numero en la barra de NUMBER:*/
function insertNumber(num){
    txtNumber.innerHTML = "Number: "+num;
}
function btnKey(){
    var number = this.value;
    insertNumber(number);
    num = number;
}
function KeyListener(){
    for(var i=0;i<key.length;i++){
        key[i].addEventListener("click",btnKey);
    }
}
KeyListener();
/*-------------------ENCRIPTAR y TRANSLATE--------*/
/*HACER LA CONVERSION DE ENCRYPT Y TRASLATE, FORMAR UN ARREGLO */
/*Convertir a Minuscula*/
function lowerText(txt){
    return txt.toLowerCase();
}
/*Eliminar todas las tildes excepto la ñ*/
function deleteTildes(minText){
    return minText.normalize('NFD').replace(/([^n\u0300-\u036f]|n(?!\u0303(?![\u0300-\u036f])))[\u0300-\u036f]+/gi,"$1").normalize();
}
/*Eliminar los espacios absurdos*/
function deleteSpace(withoutTildes){
    return withoutTildes.trim();
}
/*Convertir el string perfecto a un array*/
function array(withoutSpace){
    return withoutSpace.split("");
}
/*Retorna la cadena con el abecedario ordenado*/
function sort(num){
    var letra = String.fromCharCode(241);
    var keycopy = num;
    var array = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n",letra,"o","p","q","r","s","u","v","w","x","y","z"];
    var a=[];
    var n=0;
    for(i=0;i<array.length;i++){
        if(i>=num){
            a[i] = array[n];
            n++;
        }
        else{
            a[i] = array[array.length - keycopy];
            keycopy--;
        }
    }
    return a;
}
/*Retorna el valor encryptado*/ //-----------no se pueden ingresar numeros--------
function encrypt(arrayText,textCompare){
    var letra = String.fromCharCode(241);
    var newArray = []
    for(var i=0;i<arrayText.length;i++){
        switch(arrayText[i]){
            case "a":
                newArray[i] = textCompare[0];
                break;
            case "b":
                newArray[i] = textCompare[1];
                break;
            case "c":
                newArray[i] = textCompare[2];
                break;
            case "d":
                newArray[i] = textCompare[3];
                break;
            case "e":
                newArray[i] = textCompare[4];
                break;
            case "f":
                newArray[i] = textCompare[5];
                break;
            case "g":
                newArray[i] = textCompare[6];
                break;
            case "h":
                newArray[i] = textCompare[7];
                break;
            case "i":
                newArray[i] = textCompare[8];
                break;
            case "j":
                newArray[i] = textCompare[9];
                break;
            case "k":
                newArray[i] = textCompare[10];
                break;
            case "l":
                newArray[i] = textCompare[11];
                break;
            case "m":
                newArray[i] = textCompare[12];
                break;
            case "n":
                newArray[i] = textCompare[13];
                break;
            case letra:
                newArray[i] = textCompare[14];
                break;
            case "o":
                newArray[i] = textCompare[15];
                break;
            case "p":
                newArray[i] = textCompare[16];
                break;
            case "q":
                newArray[i] = textCompare[17];
                break;
            case "r":
                newArray[i] = textCompare[18];
                break;
            case "s":
                newArray[i] = textCompare[19];
                break;
            case "t":
                newArray[i] = textCompare[20];
                break;
            case "u":
                newArray[i] = textCompare[21];
                break;
            case "v":
                newArray[i] = textCompare[22];
                break;
            case "w":
                newArray[i] = textCompare[23];
                break;
            case "x":
                newArray[i] = textCompare[24];
                break;
            case "y":
                newArray[i] = textCompare[25];
                break;
            case "z":
                newArray[i] = textCompare[26];
                break;
            case "":
                newArray[i] = "";
                break;
        }
    }
    return newArray;
}
function translate(num,txt){
    alert("transalte"+txt+num);
}
/*-------------------ENCRIPTAR-------------------*/
function encryptAll(num,txt){
    var minText = lowerText(txt);
    var withoutTildes = deleteTildes(minText);
    var withoutSpace = deleteSpace(withoutTildes);
    var arrayText = array(withoutSpace);
    var textCompare = sort(num);
    var textEncrypted = encrypt(arrayText,textCompare);
    console.log(textEncrypted);
}
function comprobarCampos(num,txt){
    var setClass = document.getElementById("text");
    if(num==undefined | txt == ""){
        if(num == undefined){
            txtNumber.innerHTML = "<b>Define a KEY !!!</b>";
            txtNumber.setAttribute("class","errorKey");
        }
        if(txt == ""){
            setClass.setAttribute("class","error");
            setClass.setAttribute("placeholder","Try again! Insert a message");
        }
        else{
            setClass.setAttribute("class","text");
            setClass.setAttribute("placeholder","Insert a message");
        }
    }
    else if(txt != ""){
        setClass.setAttribute("class","text");
        setClass.setAttribute("placeholder","Insert a message");
        return true;
    }
}
function comprobarBtn(){
    var txt = document.getElementById("text").value;
    if(this.innerHTML == "Encrypt"){
        if(comprobarCampos(num,txt)==true){
            encryptAll(num,txt);
        }
    }
    else{
        if(comprobarCampos(num,txt)==true){
            translate(num,txt);
        }
    }
}
function btnListener(){
    for(var i=0;i<btn.length;i++){
        btn[i].addEventListener("click",comprobarBtn);
    }
}

btnListener();

/*function encrypt(){
    if(btnEncrypt == ){
        alert("soy encrypt");
    }
    else{
        alert("soy translate");
    }*/