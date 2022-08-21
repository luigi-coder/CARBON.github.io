const escribiendo = (string)=>{

    const arrayString = string.split("");
    let i = 0;
    const dibujar = setInterval(()=>{
        document.getElementById("texto").innerHTML += arrayString[i];
        i++;

        if(i === arrayString.length){
            clearInterval(dibujar);
        }

    },100);
}

escribiendo("Estudio Fotográfico Andy Invernizzi");

