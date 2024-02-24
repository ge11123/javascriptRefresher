function f1(paramters) {
    return paramters;
}

const f2 = (paramters) => {
    return paramters;
}

const f3 = function f3(paramters) {
    return paramters;
}

document.getElementById('output1').innerText = `${f1("f1")}`;
document.getElementById('output2').innerText = `${f2("f2")}`;
document.getElementById('output3').innerText = `${f3("f3")}`;
