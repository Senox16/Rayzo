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
