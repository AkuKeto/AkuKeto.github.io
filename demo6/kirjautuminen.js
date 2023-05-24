document.addEventListener("DOMContentLoaded", onkoKirjautunut);

function onkoKirjautunut() {
let kirjautunut = 'kylla';
if(kirjautunut === 'kylla'){
    document.getElementById('tervetulo_teksti').textContent += ' Aku!';
}   
}