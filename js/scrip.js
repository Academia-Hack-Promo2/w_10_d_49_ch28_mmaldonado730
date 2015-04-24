var NoticiasL = document.getElementById("NoticiasL");
    document.getElementById("NoticiasL").innerHTML +=  "Sanguinetti: Anhelo una Venezuela que acepte la presencia de un lider democrata"+ "<br>";
    document.getElementById("NoticiasL").innerHTML +=  "El Sancocho TV: Los venezolanos somos bipolares"+ "<br>";
    document.getElementById("NoticiasL").innerHTML +=  "Cantv y Movilnet aumentarán sus tarifas en mayo"+ "<br>";
    document.getElementById("NoticiasL").innerHTML +=  "Muere pasajera que se lanzo de un autobus que era asaltado"+ "<br>";
    document.getElementById("NoticiasL").innerHTML +=  "Fadess alerta al pais sobre inminente catastrofe laboral"+ "<br>";
    document.getElementById("NoticiasL").innerHTML +=  "Dolar Simadi vuelve a subir"+ "<br>";
    document.getElementById("NoticiasL").innerHTML +=  "Llevaran a instancias internacionales abusos contra dirigencia sindical venezolana"+ "<br>";
    document.getElementById("NoticiasL").innerHTML +=  "Asi se llamara el programa de television de Cilia Flores"+ "<br>";
    document.getElementById("NoticiasL").innerHTML +=  "Maduro anuncia que los gerentes de Abastos Bicentenarios estan detenidos"+ "<br>";
    document.getElementById("NoticiasL").innerHTML +=  "Capriles pidio al pueblo rechazar que el Gobierno meta la politica en las escuelas"+ "<br>";

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
