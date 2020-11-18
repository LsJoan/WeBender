li {
    list-style: none;
}

.header {
    width: 100%;
}

.header .logo img {
    width: 170px;
}

.header .logo {
    display: inline;
}

.navbar-brand {
    float: right;
    margin-top: 10px;
    font-size: 1.5rem;
}

.nav-item {
    margin-left: 10px;
    margin-right: 10px;
}

.nav-item a {
    color: transparent;
    -webkit-text-stroke: 1px aqua;
    font-weight: 800;
}

.nav-item a:hover {
    color: aqua;
    text-decoration: none;
    text-shadow: 0px 0px 10px aqua;
}
.navbar-mobile {
    display: none;
    top: 0;
    right: -220px;
    position: fixed;
    width: 300px;
    opacity: 0.9;
    height: 50px;
    z-index: 1;
    background: transparent;
    font-size: 1.6rem;
    padding: 35px 0px;
    transition: width 1.5s;
    transition: right 1s;
}
.navbar-mobile:hover {
    right: 0;
    background: #343a40;
    transition: background 1s;
    width: 190px;
    transition: right 1s;
    transition: width 1.5s;
    height: 600px;
}
.navbar-mobile .nav-mobile {
    float: right;
}
.navbar-mobile .nav-item-mobile {
    margin: 30px;
}
.navbar-mobile .nav-item-mobile a {
    color: transparent;
    -webkit-text-stroke: 1px aqua;
    font-weight: 900;
}
.navbar-mobile .nav-item-mobile a:hover {
    text-decoration: none;
    color: aquamarine;
}
.barra-navbar {
    display: none;
    position: absolute;
    left: -100;
    top: 0;
    z-index: 1;
}
main {
    background-image: url(../img/bender-slider.jpg);
    background-size: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    background-repeat: no-repeat;
    width: 100vw;
    height: 33vw;
    z-index: -1;
}
.slider {
    display: flex;
    justify-content: center;
    align-items: center;
}
.slider-ojos {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30.5vw;
    height: 10.2vw;
    margin-top: 6.5vw;
    border-radius: 8vw;
    overflow: hidden;
    margin-left: -5px;
}
.slider-cejas1, .slider-cejas2 {
    width: 100%;
    height: 13vw;
    display: block;
    position: relative;
    background: #000;
    top: 0;
    left: 2.55vw;
    animation: cejass 100s linear 1 normal;
}
.slider-cejas1 {
    left: 2.9vw;
    transform: rotate(10deg);
}
.slider-cejas2 {
    left: 2.1vw;
    transform: rotate(350deg);
}
@keyframes cejass {
    6%{
        top: -9vw;
    }
    to {
        top: -9vw;
    }
}
.punto-ojo {
    width: 6.5vw;
    height: 2.8vw;
    background: #000;
    display: inline-block;
    position: relative;
    border-radius: 5px;
}
.slider-pupila1 {
    left: -16.8vw;
    animation: ojo01 2s linear infinite alternate;
}

.slider-pupila2 {
    left: -7vw;
    animation: ojo02 2s linear infinite alternate;
}


/*
@media screen and (min-width: 1200px) {
    
}
@media screen and (max-width: 991px) {
    
}
*/
@media screen and (max-width: 767px) {
 
    .header .logo img {
        width: 120px;
    }
    .navbar-brand {
        margin-top: 3px;
        font-size: 1.3rem;
    }
}

@media screen and (max-width: 574px) {
    
    .row {
        width: 30%;
        margin: auto;
    }
}

@media screen and (max-width: 576px) {
    
    .navbar-brand {
        display: none;
    }
    .header .logo img {
        width: 100px;
    }
    .barra-navbar {
        display: block;
    }
    .navbar-mobile {
        display: block;
    }
}
@media screen and (max-width: 442px) {
    .navbar-mobile {
        width: 250px;
        right: -175px;
    }
}
@media screen and (max-width: 359px) {
    .navbar-mobile {
        width: 230px;
        right: -175px;
        font-size: 1.3rem;
    }
    .navbar-mobile:hover {
        width: 180px;
    }
}

section .flex-wrap {
    border: 1px solid #000;
    border-radius: 20px 0px 20px 0px;
    margin-bottom: 30px;
}

section .modal-title {
    text-align: center;
    margin-bottom: 10px;
    font-size: 2.5rem;
    color: transparent;
    font-weight: 800;
    -webkit-text-stroke: 1px aqua;
}

section .list-group-horizontal {
    padding-left: 0px;
    margin-bottom: 0px;
    border-radius: 20px 0px 20px 0px;
}

section .progress {
    width: 100%;
    background: cornsilk;
}

section .list-group-item {
    width: 100%;
    background: #ccc;
}

section .html,
section .css,
section .js {
    display: flex;
    color: aqua;
    font-weight: 700;
    align-items: center;
    justify-content: center;
    border-radius: 0px 50px 50px 0px;
    animation: Color 10s linear infinite alternate;
}

section .flex-wrap .html {
    width: 80%;
    background: #000;
}

section .flex-wrap .css {
    width: 75%;
    background: #000;
}

section .flex-wrap .js {
    width: 25%;
    background: #000;
}

@keyframes Color {
    to {
        background: aqua;
        color: #000;
    }
}

section .service {
    width: 70%;
    margin: auto;
    margin-top: 20px;
    border-radius: 5px;
    margin-bottom: 50px;
    border: 1px solid aquamarine;
}

section .service:hover {
    background: rgba(0, 0, 0, 0.1);
    transition: 1.6s;
    border-right: none;
    border-left: none;
}

section .service p {
    padding: 5px;
}

section .service .btn {
    width: 100px;
    margin: 10px;
}

.countdown {
    margin-top: 40px;
    margin-bottom: 50px;
}

.text-count {
    color: #343a40;
    text-align: center;
    margin-bottom: 20px;
    font-weight: 800;
    animation: Text 5s linear infinite alternate;
    -webkit-text-stroke: 1px #343a40;
}

@keyframes Text {
    to {
        color: transparent;
        -webkit-text-stroke: 1px aqua;
    }
}

.text-count {
    border: none;
}

.row {
    width: 50%;
    margin: auto;
}

.count {
    border-right: 1px solid aqua;
    color: #343a40;
    font-weight: 600;
    text-align: center;
    -webkit-text-stroke: 1px #343a40;
    animation: Text 5s linear infinite alternate;
}

.animaciones {
    width: 100%;
    padding: 20px;
    margin-bottom: 10px;
    display: grid;
    align-items: center;
    justify-content: center;
}

.animacion {
    display: inline-block;
    width: 35%;
    padding: 15px;
    position: relative;
    left: 13%;
}

.animacion:hover {
    opacity: 0.6;
    top: 2px;
    transition: opacity 1s;
}

.animacion img {
    width: 100%;
}

@media screen and (min-width: 1200px) {
    .row {
        width: 50%;
        margin: auto;
    }
}

@media screen and (max-width: 991px) {
    .row {
        width: 60%;
        margin: auto;
    }
}

@media screen and (max-width: 767px) {
    .row {
        width: 70%;
        margin: auto;
    }
}

@media screen and (max-width: 574px) {
    .row {
        width: 80%;
        margin: auto;
    }
}

@media screen and (max-width: 442px) {
    .row {
        width: 100%;
        margin: auto;
    }
}

@media screen and (max-width: 359px) {
    .row {
        width: 40%;
        margin: auto;
    }
    .count {
        border: none;
    }
}

.footer .container .foot {
    width: 29%;
    float: left;
    color: aquamarine;
    padding: 10px;
}

.footer .container h3 {
    color: aqua;
}

.social-footer .redes-footer {
    margin-top: 30px;
    width: 100%;
    margin-bottom: 30px;
}

.social-footer .redes-footer img:hover {
    position: relative;
    top: 3px;
    opacity: 0.7;
    transition: opacity 1s;
}

.social-footer .correo {
    width: 100%;
    margin-top: 10px;
}

.escribeme-boton {
    width: 100px;
    background: aqua;
    height: 40px;
    margin-bottom: 20px;
}

.escribeme-boton:hover {
    background: black;
    color: aqua;
}

.footer .container .foot .correo h6 {
    color: aqua;
}

.correo-footer {
    color: transparent;
    -webkit-text-stroke: 1px aquamarine;
    font-weight: 800;
    margin-bottom: 15px;
}

.correo-footer:hover {
    text-decoration: none;
    color: #fff;
}

.vacia {
    display: none;
}

hr {
    color: aqua;
    box-shadow: 0px 0px 2px aqua;
}

@media screen and (max-width: 767px) {
    .footer .container .social-footer .correo {
        font-size: 0.8rem;
    }
}

@media screen and (max-width: 574px) {
    .footer .container .foot {
        width: 100%;
    }
}