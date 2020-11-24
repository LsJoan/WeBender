
conte.setAttribute
/* Rotaciones */
let conte = document.getElementById("contenedor");

function rotate1() {

    if(conte.className = "contenedor") {
    conte.className = "contenedor rotate1";
    }
    else {
        conte.className = "contenedor";
    }
}

function rotate2() {

    if(conte.className = "contenedor") {
    conte.className = "contenedor rotate2";
    }
    else {
        conte.className = "contenedor";
    }
}

function rotate3() {

    if(conte.className = "contenedor") {
    conte.className = "contenedor rotate3";
    }
    else {
        conte.className = "contenedor";
    }
}

function rotate4() {

    if(conte.className = "contenedor") {
    conte.className = "contenedor rotate4";
    }
    else {
        conte.className = "contenedor";
    }
}


function rotate5() {

    if(conte.className = "contenedor") {
    conte.className = "contenedor rotate5";
    }
    else {
        conte.className = "contenedor";
    }
}


function rotate6() {

    if(conte.className = "contenedor") {
    conte.className = "contenedor rotate6";
    }
    else {
        conte.className = "contenedor";
    }
}


function rotate7() {

    if(conte.className = "contenedor") {
    conte.className = "contenedor rotate7";
    }
    else {
        conte.className = "contenedor";
    }
}


function rotate8() {

    if(conte.className = "contenedor") {
    conte.className = "contenedor rotate8";
    }
    else {
        conte.className = "contenedor";
    }
}


function rotate9() {

    if(conte.className = "contenedor") {
    conte.className = "contenedor rotate9";
    }
    else {
        conte.className = "contenedor";
    }
}

function rotate10() {

    if(conte.className = "contenedor") {
    conte.className = "contenedor rotate10";
    }
    else {
        conte.className = "contenedor";
    }
}

function rotatePara() {

    if(conte.className = "contenedor") {
    conte.className = "contenedor";
    }
    else {
        conte.className = "contenedor";
    }
}
/* ---Fin de rotaciones--- */

function color() { 
    let rango = document.getElementById("rango").value;
    let caja = document.querySelectorAll(".box")[rango];
    let colores = document.getElementById("colores").value;
    caja.style.background = colores;
}
/* --Fin de fondo */

function x(){
    conte.style.transform = "rotateZ(1turn) rotateX(1turn)"

}
function y(){
    conte.style.transform = "rotateZ(1turn) rotateY(1turn)"

}
function z(){
    conte.style.transform = "rotateZ(1deg)"

}
