function zamowienie() {
    var numer = document.getElementById("zestaw1").value;
    var ilosc = document.getElementById("ilosc1").value;
    if(document.querySelector("#staly:checked")=="[object HTMLInputElement]") {
        var stalyKlient = 0.8;
    } else {
        var stalyKlient = 1;
    };

    if(numer=="Zestaw nr 1") {
        var cenaZestawu = 12.5;
    } else if(numer=="Zestaw nr 2") {
        var cenaZestawu = 17.5;
    } else if(numer=="Zestaw nr 3") {
        var cenaZestawu = 15.5;
    };
    var cena = (cenaZestawu * ilosc) * stalyKlient;
    document.getElementById("zestaw2").innerHTML = numer;
    document.getElementById("ilosc2").innerHTML = ilosc;
    document.getElementById("cena").innerHTML = cena;
    document.getElementById("rachunek").style["display"] = "block";
    
};