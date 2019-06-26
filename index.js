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
/*-------------------ENCRIPTAR--------*/
/*HACER LA CONVERSION DE ENCRYPT Y TRASLATE, FORMAR UN ARREGLO */
function translate(num,txt){
    alert("transalte"+txt+num);
}
function encrypt(num,txt){
    alert("encrypt"+txt+num);
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
            encrypt(num,txt);
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