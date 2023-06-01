document.addEventListener("DOMContentLoaded", onkoKirjautunut);

function onkoKirjautunut() {
    if (localStorage.getItem("kirjautunut") === "kylla") {
        document.getElementById("tervetulo_teksti").textContent += localStorage.getItem("nimi");
        document.getElementById("kirjaudu_ulos_lomake").style.display;
        document.getElementById("kirjautumis_lomake").style.display="none"
    }
    if (localStorage.getItem("kirjautunut") === "ei") {
        document.getElementById("kirjaudu_teksti").textContent;
        document.getElementById("kirjaudu_ulos_lomake").style.display="none";
        document.getElementById("kirjautumis_lomake").style.display;
    }
}

function kirjaudu() {
    localStorage.setItem("nimi", document.getElementById("nimi").value);
    localStorage.setItem("kirjautunut", "kylla");
}
function kirjaudu_ulos() {
    localStorage.setItem("nimi", value="");
    localStorage.setItem("kirjautunut", "ei");
}