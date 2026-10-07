/* ========================================
   NAVEGACIÓN
======================================== */

function goTo(sectionId) {

    const section =
        document.getElementById(sectionId);

    if (!section) return;

    section.scrollIntoView({
        behavior: "smooth"
    });

}



/* ========================================
   CORAZONES FLOTANTES
======================================== */

const heartTypes = [
    "💜",
    "💗",
    "💙",
    "♡",
    "♥"
];


function createHeart() {

    const heart =
        document.createElement("div");

    heart.classList.add(
        "floating-heart"
    );


    heart.textContent =
        heartTypes[
            Math.floor(
                Math.random()
                * heartTypes.length
            )
        ];


    heart.style.left =
        Math.random() * 100 + "vw";


    heart.style.fontSize =
        (
            12 +
            Math.random() * 18
        ) + "px";


    heart.style.animationDuration =
        (
            5 +
            Math.random() * 5
        ) + "s";


    document
        .getElementById(
            "hearts-container"
        )
        .appendChild(heart);


    setTimeout(() => {

        heart.remove();

    }, 10000);

}



/* Crear corazones constantemente */

setInterval(
    createHeart,
    700
);



/* ========================================
   BOTÓN "SÍ"
======================================== */

function answerYes() {

    const message =
        document.getElementById(
            "final-message"
        );


    message.style.display =
        "block";


    message.innerHTML = `

        <h3>
            Entonces vení... 💜
        </h3>

        <p>
            Volvamos a elegirnos.
        </p>

        <br>

        <p>
            Pero esta vez no para volver a ser
            exactamente quienes éramos.
        </p>

        <br>

        <p>
            Sino para ser algo todavía más lindo.
        </p>

        <br>

        <p>
            Más tranquilos.
            Más conscientes.
            Más nosotros.
        </p>

        <br>

        <p>
            Te amo, Morena.
        </p>

        <br>

        <p style="
            font-size: 2rem;
            color: #ff9fdf;
        ">
            13 · ∞ · 💙
        </p>

    `;


    /*
       Explosión de corazones
    */

    for (
        let i = 0;
        i < 60;
        i++
    ) {

        setTimeout(
            createHeart,
            i * 50
        );

    }


    setTimeout(() => {

        message.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

    }, 300);

}



/* ========================================
   BOTÓN "HABLEMOS"
======================================== */

function answerTalk() {

    const message =
        document.getElementById(
            "final-message"
        );


    message.style.display =
        "block";


    message.innerHTML = `

        <h3>
            Está bien, amor. 💜
        </h3>

        <p>
            No necesito que me respondas
            algo por presión.
        </p>

        <br>

        <p>
            Si algo aprendí de todo esto,
            es que lo que sentimos merece
            ser cuidado y hablado.
        </p>

        <br>

        <p>
            Solamente quería que supieras
            lo que siento.
        </p>

        <br>

        <p>
            Y que, pase lo que pase,
            siempre voy a valorar
            nuestra historia.
        </p>

        <br>

        <p style="
            font-size: 2rem;
            color: #ff9fdf;
        ">
            Siempre vos. 💙
        </p>

    `;


    message.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

}



/* ========================================
   ANIMACIÓN DE ENTRADA
======================================== */

window.addEventListener(
    "load",
    () => {

        document.body.classList.add(
            "loaded"
        );

    }
)
/* ========================================
   PERSONAJES — CAMBIOS AL INTERACTUAR
======================================== */

const kuromiImages = [
    "img/kuromi.png",
    "img/kuromi2.png",
    "img/kuromi3.png",
    "img/kuromi4.png"
];

const badtzImages = [
    "img/badtz.png",
    "img/badtz2.png",
    "img/badtz3.png",
    "img/badtz4.png"
];

let characterIndex = 0;


/* Cambiar personajes */

function changeCharacters() {

    const kuromi =
        document.querySelector(".kuromi img");

    const badtz =
        document.querySelector(".badtz img");

    if (!kuromi || !badtz) return;


    /* Animación de salida */

    kuromi.classList.add("character-changing");
    badtz.classList.add("character-changing");


    setTimeout(() => {

        characterIndex++;

        /*
           Cuando llegamos al final
           volvemos al último personaje.
        */

        if (
            characterIndex >= kuromiImages.length
        ) {
            characterIndex =
                kuromiImages.length - 1;
        }


        kuromi.src =
            kuromiImages[characterIndex];

        badtz.src =
            badtzImages[characterIndex];


        /* Animación de entrada */

        kuromi.classList.remove(
            "character-changing"
        );

        badtz.classList.remove(
            "character-changing"
        );


        kuromi.classList.add(
            "character-changed"
        );

        badtz.classList.add(
            "character-changed"
        );


        setTimeout(() => {

            kuromi.classList.remove(
                "character-changed"
            );

            badtz.classList.remove(
                "character-changed"
            );

        }, 450);

    }, 250);

}/* ========================================
   INTERACCIONES DE LA CARTA
======================================== */

document.addEventListener("DOMContentLoaded", () => {

    /*
       Cada tarjeta de recuerdos cambia
       a los siguientes personajes.
    */

    const memoryCards =
        document.querySelectorAll(".memory-card");


    memoryCards.forEach(card => {

        card.addEventListener(
            "click",
            changeCharacters
        );

    });


    /*
       Los botones también generan
       una reacción.
    */

    const buttons =
        document.querySelectorAll(".btn");


    buttons.forEach(button => {

        button.addEventListener(
            "click",
            changeCharacters
        );

    });

});