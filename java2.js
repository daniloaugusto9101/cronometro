window.onload = () =>{

    let contMls = 0;
    let contS = 0;
    let contM = 0;
    let interval;
    let mls = document.getElementById("contador-mls");
    let s = document.getElementById("contador-s");
    let m = document.getElementById("contador-m");
    

    document.getElementById("btn-start").addEventListener("click", ()=>{
        interval = setInterval(contar, 10);
    });

    document.getElementById("btn-pause").addEventListener("click", ()=>{
        clearInterval(interval);
    });

    document.getElementById("btn-reset").addEventListener("click", ()=>{
        clearInterval(interval);
        mls.innerHTML = `00`;
        s.innerHTML = `00`;
        m.innerHTML = `00`;
        contMls = 0;
        contS = 0;
        contM = 0;

    });

    function contar(){
        contMls++;
        if (contMls > 99) {
            contMls = 0;
            contS++;
        }
        if (contS >= 60) {
            contS = 0;
            contM++;
        }
        mls.innerHTML = `${doisDigitos(contMls)}`;
        s.innerHTML = `${doisDigitos(contS)}`;
        m.innerHTML = `${doisDigitos(contM)}`;
    }

    function doisDigitos(d){
        if (d < 10) {
            return (`0`+ d)
        }else{
            return d
        }
    }
}