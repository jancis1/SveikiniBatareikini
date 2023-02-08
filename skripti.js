//alert("SveikiniBatareikini")
console.log("Nebuus!")

var log = document.querySelector(".chataZinas");
var vards =  document.querySelector("#vards");
var zina = document.querySelector("#zina");

function sutitZinu(){
    console.log("Poga darbojas")
    console.log("ziņa ir: "+zina.value);

    log.innerHTML = log.innerHTML +"♥"+ zina.value;
}

async function ieladetZinas(){
let datiNoServera = await fetch("zinas.txt");
let dati = await datiNoServera.text();
console.log(dati);
}