/* CONTRIBUTE TO THIS WEBSITE ON OUR GITHUB https://github.com/homebrewfrance/homebrewfrance.github.io */
/* LAST-EDITED : 27/12/2023 by Dhalian */

// MANUELS DISPONIBLES :
// 3DS - DEMAT 
Man3DSDemat = 'https://hbf-files.github.io/download/HBFDOCE1R13DS.pdf';

// 3DS - IMRPIMABLE
Man3DSPrintable = 'https://hbf-files.github.io/download/HBFDOCE1R13DS-PRNTABLE.pdf';



function traitement() {
    var ThreedsManVersion = document.getElementById('ThreedsManVersion').value;
    if (ThreedsManVersion == 'none') {
        alert("Vous devez choisir une version !")
    }
    else if (ThreedsManVersion == 'demat') {
        console.log("demat choisi" + ThreedsManVersion.value);
        window.location.href = Man3DSDemat;
    }
    else if (ThreedsManVersion == 'printable') {
        console.log("pribntable choisi" + ThreedsManVersion.value);
        window.location.href = Man3DSPrintable;
    }
}