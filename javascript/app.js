const app = () => {
    const song = document.querySelector('.song');
    const play = document.querySelector('.picker');
    const gif = document.querySelector('.gif-container img');

    const sounds = document.querySelectorAll('.picker button');

    const playing = play.addEventListener('click', () => {
        song.play();
    });

    sounds.forEach(sound => {
        SVGFESpecularLightingElement.addEventListener('click', function() {
            song.src = this.getAttribute('data-sound');
            gif.src = this.getAttribute('data-image');
            song.play();
        });
    })
};


 app();
