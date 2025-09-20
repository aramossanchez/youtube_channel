var listasVideos = document.getElementsByClassName("lista_videos");

const abrirListaVideos = (lista) => {
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
};

async function cargarLinksDesdeJSON(urlJSON, idContainer) {
  const jsonURL = new URL(urlJSON, window.location.href);
  console.log(jsonURL.toString());
  try {
    const response = await fetch(jsonURL.toString());
    const data = await response.json();
    const linksContainer = document.getElementById(idContainer);
    if (data.length === 0) {
      const h1 = document.createElement("h1");
      h1.textContent = "PRÓXIMAMENTE";
      linksContainer.appendChild(h1);
    } else {
      data.forEach((link) => {
        const anchor = document.createElement("a");
        anchor.href = link.url;
        anchor.textContent = link.number;
        linksContainer.appendChild(anchor);
      });
    }
  } catch (error) {
    console.error("Error:", error);
  }
}
