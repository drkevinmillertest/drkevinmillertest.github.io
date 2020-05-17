function animation(x){
    x.classList.toggle("change");
    
}

function togglemyNav(){
    if(document.getElementById("myNav").style.height == "100%"){
        document.getElementById("myNav").style.height = "0%";
        document.getElementById("header").style.backgroundColor = "rgba(94,16,10)";
        document.getElementById("header").style.boxShadow = "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)";
    }else{
        document.getElementById("myNav").style.height = "100%";
        document.getElementById("header").style.backgroundColor = "transparent";
        document.getElementById("header").style.boxShadow = "0 4px 8px 0 rgba(0, 0, 0, 0), 0 6px 20px 0 rgba(0, 0, 0, 0)";
    }
}