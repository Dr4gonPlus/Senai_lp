function calcular() {

    const nome = document.getElementById("inNome").value;
    const masc = document.getElementById("inMasculino").Checked;
    const alt = document.getElementById("inAltura").value;

    /*let peso = masculino Math.pow(altura,2) * 22 : Math.pow(altura,2) * 21;*/
    
    if (masc) {
        peso = 22 * Math.pow(alt, 2);
    } else {
        peso = 21 * Math.pow(alt, 2);
    }

    document.querySelector("h3").innerText = `Peso ideal ${peso.toFixed(2)}`;

    return false; // vai impedir o refresh da página equivalente ao e.preventDefault()

}

function limpar() {
    document.querySelector("h3").innerText = "";
}