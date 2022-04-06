
var i = 0;

function secondsCount() {
    i = i + 1;
    if(i % 2 == 0){
        postMessage("Aridon");
    }else {
        postMessage("Andi");
    }
    setTimeout("secondsCount()", 2000);
}

secondsCount();
