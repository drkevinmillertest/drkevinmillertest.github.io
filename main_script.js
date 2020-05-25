function animation(x){
    x.classList.toggle("change");
    
}


function change_ham_color() {
    document.getElementById("topbar").style.backgroundColor = "#ad1b10";
    document.getElementById("midbar").style.backgroundColor = "#ad1b10";
    document.getElementById("botbar").style.backgroundColor = "#ad1b10";
}

function normalize_ham() {
    document.getElementById("topbar").style.backgroundColor = "darkslategray";
    document.getElementById("midbar").style.backgroundColor = "darkslategray";
    document.getElementById("botbar").style.backgroundColor = "darkslategray";
}


function togglemyNav(){
    if(document.getElementById("myNav").style.width == "30%"){

        document.getElementById("myNav").style.width = "0%";
        document.getElementById("black").style.width = "100%";
        $("#black").fadeOut(300);
        

        /*
      document.getElementById("header").style.backgroundColor = "rgba(94,16,10)";
        document.getElementById("header").style.boxShadow = "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)";
        */
        
        
    }else{
        document.getElementById("myNav").style.zIndex = "0";
        document.getElementById("myNav").style.width = "30%";
        $("#black").fadeIn(300);
        document.getElementById("black").style.width = "70%";
        
        /*
        document.getElementById("header").style.backgroundColor = "transparent";
        document.getElementById("header").style.boxShadow = "0 4px 8px 0 rgba(0, 0, 0, 0), 0 6px 20px 0 rgba(0, 0, 0, 0)";
        
        */
    }
}


function decreaseNav() {
        //document.getElementById("myNav").style.width = "0%";
        //document.getElementById("myNav").style.height = "0%";
        document.getElementById("navButtonBars").classList.toggle("change", false);
}

window.onscroll = function() {fade(element)};

function fade(element) {
    var op = 1;  // initial opacity
    var timer = setInterval(function () {
        if (op <= 0.1){
            clearInterval(timer);
            element.style.display = 'none';
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op -= op * 0.1;
    }, 50);
}

