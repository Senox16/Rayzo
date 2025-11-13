/* --------------------------------------------- */
/*  RAYZO.AI – FRONTEND LOGIK & ANIMATIONEN     */
/* --------------------------------------------- */

/* Preisberechnung */
const lengthSel = document.getElementById("length");
const priceDisplay = document.getElementById("price");

if (lengthSel) {
    function calcPrice() {
        let base = 89;
        if (lengthSel.value == "90") base = 149;
        if (lengthSel.value == "150") base = 229;
        priceDisplay.innerText = base;
    }

    lengthSel.addEventListener("change", calcPrice);
}



/* Absende-Alert */
const form = document.getElementById("songForm");
if (form) {
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        alert("Deine Anfrage wurde gesendet! Wir melden uns innerhalb von 12 Stunden.");
    });
}



/* Neon Hover Effekt */
document.querySelectorAll(".btn, .feature, .price-card, .service-box").forEach(el => {
    el.addEventListener("mouseenter", () => {
        el.style.boxShadow = "0 0 15px #4be1ff, 0 0 15px #b36bff";
    });
    el.addEventListener("mouseleave", () => {
        el.style.boxShadow = "none";
    });
});



/* Fade-in Effect */
window.addEventListener("load", () => {
    const hero = document.querySelector(".hero-content");
    if (hero) {
        hero.style.opacity = "0";
        setTimeout(() => {
            hero.style.transition = "1.5s";
            hero.style.opacity = "1";
        }, 200);
    }
});
/* MULTISTEP-FORMULAR */
const steps = document.querySelectorAll(".step");
let currentStep = 0;

document.querySelectorAll(".nextBtn").forEach(btn => {
    btn.addEventListener("click", () => {
        steps[currentStep].classList.remove("active");
        currentStep++;
        steps[currentStep].classList.add("active");
        window.scrollTo({ top: 200, behavior: "smooth" });
    });
});
/* ZUSAMMENFASSUNG AUTOMATISCH LADEN */
const formInputs = {
    songType: document.getElementById("songType"),
    genre: document.getElementById("genre"),
    language: document.getElementById("language"),
    mood: document.getElementById("mood"),
    person: document.getElementById("personName"),
    story: document.getElementById("story"),
    length: document.getElementById("length"),
    price: document.getElementById("price")
};

function fillSummary() {
    document.getElementById("sumSong").innerText = formInputs.songType.value;
    document.getElementById("sumGenre").innerText = formInputs.genre.value;
    document.getElementById("sumLanguage").innerText = formInputs.language.value;
    document.getElementById("sumMood").innerText = formInputs.mood.value;
    document.getElementById("sumPerson").innerText = formInputs.person.value || "—";
    document.getElementById("sumStory").innerText = formInputs.story.value;
    document.getElementById("sumLength").innerText = formInputs.length.value + " Sekunden";
    document.getElementById("sumPrice").innerText = formInputs.price.innerText;
}

/* Zusammenfassung wird automatisch geladen, wenn letzter Step aktiviert wird */
document.querySelectorAll(".nextBtn")[5].addEventListener("click", fillSummary);
