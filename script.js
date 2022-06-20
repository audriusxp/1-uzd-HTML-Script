window.onload = function() {
    
    let ilgioNuskaitymoLangelis = document.getElementById("ilgis");
    console.log(ilgioNuskaitymoLangelis);
    let plocioIvedimoLaukelis = document.getElementById("plotis");
    console.log(plocioIvedimoLaukelis);
    let mygtukas = document.getElementById("skaiciavimoMygtukas");
    console.log(mygtukas);
    mygtukas.onclick = function () {
        let ilgis =ilgioNuskaitymoLangelis.valueAsNumber;
        console.log(ilgis);
        let plotis = plocioIvedimoLaukelis.valueAsNumber;
        console.log(plotis);
        console.log(staciakampioPerimetras(ilgis,plotis));
        rezultatoPastraipa.innerHTML = "Stačiakampio perimetras yra: " + staciakampioPerimetras(ilgis, plotis);
        
    }
    
    
    }

 function staciakampioPerimetras(a,b){
     return 2*a + 2*b;
 }