window.onload = () => {
    h=0; m=0; s=0; mls=0; timeStarted=0;
    time = document.getElementById(`time`);
    btStart = document.getElementById(`btn-start`);
    btPause = document.getElementById(`btn-pause`);
    btReset = document.getElementById(`btn-reset`);

    iniciar();
}

function iniciar(){
    btStart.addEventListener(`click`,start);
    btPause.addEventListener(`click`,pause);
    btReset.addEventListener(`click`,reset);
}

function write(){
    let ht, mt, st, mlst;  

    mls++;

    if(mls > 60){
        s++;
        mls = 0;
    }
    if(s > 60){
        m++;
        s=0;
    }
    if(m>60){
        h++;
        m=0;
    }

    mlst = (`0${mls}`).slice(-2);
    st = (`0${s}`).slice(-2);
    mt = (`0${m}`).slice(-2);
    ht = (`0${h}`).slice(-2);

    time.innerHTML = `${ht}:${mt}:${st}:${mlst}`;
}


function start(){
    write();
    timeStarted = setInterval(write, 10);
}

function pause(){
    clearInterval(timeStarted);
}

function reset(){
    clearInterval(timeStarted);
    time.innerHTML = `00:00:00:00`;
    h=0; m=0; s=0; mls=0;
}