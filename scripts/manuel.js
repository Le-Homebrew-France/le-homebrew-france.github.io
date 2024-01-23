/* CONTRIBUTE TO THIS WEBSITE ON OUR GITHUB https://github.com/homebrewfrance/homebrewfrance.github.io */
/* LAST-EDITED : 23/01/2024 by Dhalian */

// MANUELS DISPONIBLES :
// 3DS - DEMAT 
Man3DSDemat = 'https://homebrewfrance.github.io/download/HBFDOCE1R23DS.pdf';

// 3DS - IMRPIMABLE
Man3DSPrintable = 'https://homebrewfrance.github.io/download/HBFDOCE1R23DS-PRNTABLE.pdf';



function traitement() {
    var ThreedsManVersion = document.getElementById('ThreedsManVersion').value;
    if (ThreedsManVersion == 'none') {
        alert("Vous devez choisir une version !")
    }
    else if (ThreedsManVersion == 'demat') {
        window.location.href = Man3DSDemat;
    }
    else if (ThreedsManVersion == 'printable') {
        window.location.href = Man3DSPrintable;
    }
}
