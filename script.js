var listasVideos = document.getElementsByClassName("lista_videos");

const abrirListaVideos = (lista) =>{
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