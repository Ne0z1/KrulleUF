function minskaVarukorg() {
    const obj = document.getElementById("räknare");
    const obj1 = document.getElementById("antal");
    const obj2 = document.getElementById("price");
    let i = parseInt(obj.innerText);
    if (i == 1) {
        obj.innerText = i;
        obj1.textContent = `Antal: ${obj.innerText}`;
        obj2.innerText = `${i * 35} kr`;
    }
    else if (i > 1) {
        i--;
        obj.innerText = i;
        obj1.textContent = `Antal: ${obj.innerText}`;
        if(i == 1){
            obj2.innerText = `${i * 35} kr`;
        }else{
            obj2.innerText = `${i * 29} kr`;
        }
    }
}

function ökaVarukorg() {
    const obj = document.getElementById("räknare");
    const obj1 = document.getElementById("antal");
    const obj2 = document.getElementById("price");
    let i = parseInt(obj.innerText);
    i++;
    obj.innerText = i;
    obj1.textContent = `Antal: ${obj.innerText}`;
    obj2.innerText = `${i * 35} kr`;
    if (i > 1) {
        obj.innerText = i;
        obj1.textContent = `Antal: ${obj.innerText}`;
        obj2.innerText = `${i * 29} kr`;
    }
}

function resetVarukorg() {
    const obj = document.getElementById("räknare");
    const obj1 = document.getElementById("antal");
    const obj2 = document.getElementById("price");
    obj.innerText = "1";
    obj1.textContent = `Antal: ${obj.innerText}`;
    obj2.innerText = "35 kr";
}


