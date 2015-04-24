var NoticiasL = document.getElementById("NoticiasL");
    document.getElementById("NoticiasL").innerHTML +=  "<p> Sanguinetti: Anhelo una Venezuela que acepte la presencia de un lider democrata<p>";
    document.getElementById("NoticiasL").innerHTML +=  "<p>El Sancocho TV: Los venezolanos somos bipolares<p>";
    document.getElementById("NoticiasL").innerHTML +=  "<p>Cantv y Movilnet aumentarán sus tarifas en mayo<p>";
    document.getElementById("NoticiasL").innerHTML +=  "<p>Muere pasajera que se lanzo de un autobus que era asaltado<p>";
    document.getElementById("NoticiasL").innerHTML +=  "<p>Fadess alerta al pais sobre inminente catastrofe laboral<p>";
    document.getElementById("NoticiasL").innerHTML +=  "<p>Dolar Simadi vuelve a subir<p>";
    document.getElementById("NoticiasL").innerHTML +=  "<p>Llevaran a instancias internacionales abusos contra dirigencia sindical venezolana<p>";
    document.getElementById("NoticiasL").innerHTML +=  "<p>Asi se llamara el programa de television de Cilia Flores<p>";
    document.getElementById("NoticiasL").innerHTML +=  "<p>Maduro anuncia que los gerentes de Abastos Bicentenarios estan detenidos<p>";
    document.getElementById("NoticiasL").innerHTML +=  "<p>Capriles pidio al pueblo rechazar que el Gobierno meta la politica en las escuelas<p>";

document.getElementById("noticiasN").innerHTML = noticiasN
var i = 0;
var NN = ["Sector comercial no ha podido importar mercancia por acceso precario a los dolares",
 "Roig: El sector privado es el unico que lleva productos a los anaqueles",
 "Gobierno activa registro para acceder a las medicinas para enfermedades cronicas",
 "Cardoso, Lagos y Sanguinetti emiten declaracion en apoyo a Felipe Gonzalez",
 "Aznar solidario con Felipe Gonzalez por ser declarado “persona non grata” en Venezuela",
 "Conindustria: La entrega de divisas estaba restringida, que no den ahora no cambia el panorama",
 "Jovenes venezolanos abandonan los estudios antes de los 15 años de edad",
 "Mercado informal de pasajes al exterior cobra jugosas comisiones",
 "El Kid Rodriguez llego a 350 salvados",
 "Javier Castellano montara a Materiality en el Kentucky Derby"];

if(NN.length > 0) tiempo();
function tiempo() {                
    document.getElementById("noticiasN").innerHTML += ('<p>' + NN[i] + '<p>');
    i++;
    if (i < NN.length)
        setTimeout(tiempo, 1000);
}
