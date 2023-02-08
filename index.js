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
    var array = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n",letra,"o","p","q","r","s","t","u","v","w","x","y","z"];
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
            case ",":
                newArray[i] = "c7om'8mA9";
                break;
            default:
                newArray[i] = arrayText[i];
                break;
        }
    }
    return newArray;
}
function takePosition(letter,text){
    var arrayLetter;
    var letra = String.fromCharCode(241);
    var array = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n",letra,"o","p","q","r","s","t","u","v","w","x","y","z"];
    for(i=0;i<array.length;i++){
        if(text[i] == letter){
            arrayLetter = array[i];
        }
    }
    return arrayLetter;
}
function translate(arrayText,textCompare){
    var letra = String.fromCharCode(241);
    var newArray = []
    for(var i=0;i<arrayText.length;i++){
        switch(arrayText[i]){
            case "a":
                newArray[i] = takePosition("a",textCompare);
                break;
            case "b":
                newArray[i] = takePosition("b",textCompare);
                break;
            case "c":
                newArray[i] = takePosition("c",textCompare);
                break;
            case "d":
                newArray[i] = takePosition("d",textCompare);
                break;
            case "e":
                newArray[i] = takePosition("e",textCompare);
                break;
            case "f":
                newArray[i] = takePosition("f",textCompare);
                break;
            case "g":
                newArray[i] = takePosition("g",textCompare);
                break;
            case "h":
                newArray[i] = takePosition("h",textCompare);
                break;
            case "i":
                newArray[i] = takePosition("i",textCompare);
                break;
            case "j":
                newArray[i] = takePosition("j",textCompare);
                break;
            case "k":
                newArray[i] = takePosition("k",textCompare);
                break;
            case "l":
                newArray[i] = takePosition("l",textCompare);
                break;
            case "m":
                newArray[i] = takePosition("m",textCompare);
                break;
            case "n":
                newArray[i] = takePosition("n",textCompare);
                break;
            case letra:
                newArray[i] = takePosition(letra,textCompare);
                break;
            case "o":
                newArray[i] = takePosition("o",textCompare);
                break;
            case "p":
                newArray[i] = takePosition("p",textCompare);
                break;
            case "q":
                newArray[i] = takePosition("q",textCompare);
                break;
            case "r":
                newArray[i] = takePosition("r",textCompare);
                break;
            case "s":
                newArray[i] = takePosition("s",textCompare);
                break;
            case "t":
                newArray[i] = takePosition("t",textCompare);
                break;
            case "u":
                newArray[i] = takePosition("u",textCompare);
                break;
            case "v":
                newArray[i] = takePosition("v",textCompare);
                break;
            case "w":
                newArray[i] = takePosition("w",textCompare);
                break;
            case "x":
                newArray[i] = takePosition("x",textCompare);
                break;
            case "y":
                newArray[i] = takePosition("y",textCompare);
                break;
            case "z":
                newArray[i] = takePosition("z",textCompare);
                break;
            case "":
                newArray[i] = "";
                break;
            case ",":
                newArray[i] = "c7om'8mA9";
                break;
            default:
                newArray[i] = arrayText[i];
                break;
           
        }
    }
    return newArray;
}
/*-------------------TRANSLATE-------------------*/
function translateAll(num,txt){
    var minText = lowerText(txt);
    var withoutTildes = deleteTildes(minText);
    var withoutSpace = deleteSpace(withoutTildes);
    var arrayText = array(withoutSpace);
    var textCompare = sort(num);
    var textEncrypted = translate(arrayText,textCompare);
    var stringTextEncrypted = textEncrypted.toString().replace(/,/g,"");
    var stringTextEncryptedComma = stringTextEncrypted.replace(/c7om'8mA9/gi,",");
    return stringTextEncryptedComma;
}
/*-------------------ENCRIPTAR-------------------*/
function encryptAll(num,txt){
    var minText = lowerText(txt);
    var withoutTildes = deleteTildes(minText);
    var withoutSpace = deleteSpace(withoutTildes);
    var arrayText = array(withoutSpace);
    var textCompare = sort(num);
    var textEncrypted = encrypt(arrayText,textCompare);
    var stringTextEncrypted = textEncrypted.toString().replace(/,/g,"");
    var stringTextEncryptedComma = stringTextEncrypted.replace(/c7om'8mA9/gi,",");
    return stringTextEncryptedComma;
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
function deleteText(){
    var padre = document.getElementById("encrypt");
    var hijo = document.getElementsByClassName("eliminar");
    for(var i=0;i<hijo.length;i++){
        padre.removeChild(hijo[i]);
    }
}
function insertText(textEncrypt){
    var newDiv = document.createElement("div");
    var newP = document.createElement("p");
    var newContent = document.createTextNode(textEncrypt);
    newP.appendChild(newContent);
    newDiv.appendChild(newP);
    var after = document.getElementById("encrypt");
    newDiv.setAttribute("class","divSpecial eliminar");
    newDiv.setAttribute("id","result")
    newP.setAttribute("class","pSpecial");

    after.appendChild(newDiv);
}
function comprobarBtn(){
    var txt = document.getElementById("text").value;
    deleteText();
    if(this.innerHTML == "Encrypt"){
        if(comprobarCampos(num,txt)==true){
            var textEncrypt = encryptAll(num,txt);
            insertText(textEncrypt);
        }
    }
    else{
        if(comprobarCampos(num,txt)==true){
            var textTranslate=translateAll(num,txt);
            insertText(textTranslate);
        }
    }

    if(!!document.getElementById("result")){
        const textAreaResult = document.getElementById("result")
        textAreaResult.scrollIntoView()
    }
}
function btnListener(){
    for(var i=0;i<btn.length;i++){
        btn[i].addEventListener("click",comprobarBtn);
    }
}

btnListener();