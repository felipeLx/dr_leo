let count = 0;

function onClick() {
    console.log('clicked');
    if(typeof(Storage) !== "undefined") {
        if(localStorage.clickcount) {
            count += 1;
            localStorage.clickcount = Number(localStorage.clickcount)+1;
        } else {
            localStorage.clickcount = 1;
        }
        return document.getElementById("clickme").innerHTML = count; 
    }
    
    
}

