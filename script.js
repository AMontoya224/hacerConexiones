function cambiar(){
    let sign = document.getElementById("sign");
    if (sign.innerHTML == "Sign Out"){
        sign.innerHTML = "Sign In";
    }
    else{
        sign.innerHTML = "Sign Out";
    }
}

let edit0 = document.getElementById("nombre");
let edit1 = document.querySelector("#fotoperfil");
let edit2 = document.getElementById("ciudad");
let edit3 = document.getElementById("skill");
let edit4 = document.getElementById("tituloUniversitario");
edit0.innerHTML = "Andres Montoya"; //necesario para que me reconozca el if de abajo
function edit(){
    if (edit0.innerHTML == "Andres Montoya" ){
        edit0.innerHTML = "Jane Doe";
        edit1.src = "./images/anne-s.jpg"; 
        edit2.innerHTML = "Seattle";
        edit3.innerHTML = "Developer | Engineer | Problem Solver";
        edit4.innerHTML = "Master of shadows and the Internet";
    }
    else{
        edit0.innerHTML = "Andres Montoya";
        edit1.src = "./images/perfil.jpg"; 
        edit2.innerHTML = "Peru";
        edit3.innerHTML = "Electronic Engineer | Developer";
        edit4.innerHTML = "Engineer of software and hardware!";
    }
}
let i = 2;
let cont1 = document.getElementById("contador1");
function remover1(){
    let rem1 = document.getElementById("user1");
    i--;
    cont1.innerHTML = i;
    rem1.remove()
}

let j = 418;
function aumentar(){
    let cont2 = document.getElementById("contador2");
    j++;
    cont2.innerHTML = j;
}

function remover2(){
    let rem2 = document.getElementById("user2");
    i--;
    cont1.innerHTML = i;
    rem2.remove()
}