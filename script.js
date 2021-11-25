var listasVideos = document.getElementsByClassName("lista-videos");

// document.getElementById("zelda-wind-waker-h1").addEventListener("click", function(){
//     abierto = !abierto;
//     if (abierto) {
//         document.getElementById("zelda-wind-waker-lista").style.transform = "scaleY(1)";
//         document.getElementById("zelda-wind-waker-lista").style.maxHeight = "1000em";
//     }else{
//         document.getElementById("zelda-wind-waker-lista").style.transform = "scaleY(0)";
//         document.getElementById("zelda-wind-waker-lista").style.maxHeight = "0px";
//     }
// }, false);

const abrirListaVideos = (lista) =>{
    console.log(document.getElementById(lista).classList);
    if (document.getElementById(lista).classList.contains("cerrada")) {
        for (let i = 0; i < listasVideos.length; i++) {
            listasVideos[i].classList.remove("abierta");
            listasVideos[i].classList.add("cerrada");
            document.getElementById(lista).classList.remove("cerrada");
            document.getElementById(lista).classList.add("abierta");
        }
        return;
    }
    if (document.getElementById(lista).classList.contains("abierta")) {
        for (let i = 0; i < listasVideos.length; i++) {
            listasVideos[i].classList.remove("abierta");
            listasVideos[i].classList.add("cerrada");
        }
        return;
    }
}