
var count = document.querySelectorAll(".btn").length;

for (var i = 0; i < count; i++){
    document.querySelectorAll(".btn")[i].addEventListener("click", function(){
        var userClick = this.innerHTML;
        
        switch (userClick) {
            case "Sena":
                var audiosena = new Audio("sound/sena.mp3");
                audiosena.play();
                break;
            case "Hữu Giang":
                var audiohuugiang = new Audio("sound/daihoc.mp3");
                audiohuugiang.play();
                break;
            default:
                break;
        }


    });
}


// var audio = new Audio("sound/sena.mp3");
//         audio.play();