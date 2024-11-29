function modElement() {
    let titolo = document.getElementsByTagName("h1") [0] 
    titolo.innerText ="Vendita Auriculari" 
    console.log(titolo)
}


function CambiaCss(Sfondo) {
    switch(Sfondo) {
    case "nero":
        cssSfondo = "assets/css/black.css"
        break
    case "bianco":
        cssSfondo = "assets/css/style.css"
        break
    
} 
let tagLink = document.querySelector("Link")
tagLink.href = cssSfondo
}


function changeAddress() {
    let address = document.getElementById("address")
    address.innerText = "Via Chiaia, 216, Napoli"
    console.log(address)
} 


function addClassToAmazonLinks() {
    let amazonLinks = document.querySelectorAll ('a[href*="amazon.it"]')
    amazonLinks.forEach(link => {
        link.classList.add('Evidenzia')
    });

    console.log(amazonLinks)

} 


function toggleImagesVisibility() {
    let immaginiMain = document.querySelectorAll('#container ul li img')
    let immaginiFooter = document.querySelectorAll('#footer ul li img')
    let tutteLeImmagini = [...immaginiMain, ...immaginiFooter]
    tutteLeImmagini.forEach(function(img) {
        img.classList.toggle('nascondi')
    });
    
    console.log("tutteleImmagini")
}


function cambiaColorePrezzo() {
    let prezzi = document.querySelectorAll('.prezzo')
    let colori = ['red', 'blue', 'green', 'orange', 'purple']
    prezzi.forEach(function(prezzo) {
        let coloreCasuale = colori[Math.floor(Math.random() * colori.length)]
        prezzo.style.color = coloreCasuale
        console.log("prezzo")
    });
}


