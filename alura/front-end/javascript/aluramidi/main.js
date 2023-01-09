function tocaSom (IdDoSom) {
    document.querySelector(IdDoSom).play();
}

const ListaDeTeclas = document.querySelectorAll('.tecla');

//let recebe valores que se atualizam.



for (let contador = 0; contador < ListaDeTeclas.length; contador++) {
    
    const tecla = ListaDeTeclas[contador];

    const instrumento = tecla.classList[1];

    const idAudio = `#som_${instrumento}`;

    console.log(idAudio);

    tecla.onclick = function () {
        tocaSom(idAudio);
    }
}
