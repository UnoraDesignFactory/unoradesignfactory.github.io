
// Header scroll effekti
window.addEventListener("scroll", () => {
    const header = document.querySelector("header");

    if (window.scrollY > 50) {
        header.style.background = "rgba(2, 6, 23, 0.95)";
    } else {
        header.style.background = "rgba(15, 23, 42, 0.85)";
    }
});

// ===== OYNADAN TASHQARIGA BOSILSA YOPILADI =====
window.addEventListener("click", function (e) {
    const modal = document.getElementById("registerModal");

    if (e.target === modal) {
        closeModal();
    }
});

// 3D card effekti
const cards = document.querySelectorAll(".card");

cards.forEach(card => {
    card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const rotateY = (x / rect.width - 0.5) * 15;
        const rotateX = (0.5 - y / rect.height) * 15;

        card.style.transform = `
            perspective(1000px)
            rotateX(${rotateX}deg)
            rotateY(${rotateY}deg)
            translateY(-10px)
        `;
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform =
            "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)";
    });
});

// ===== TELEGRAM SOZLAMALARI =====
const TOKEN = "8869722753:AAFGTMVxR-gIt2qT7-EVdh5VLxgmJDzjggw";
const CHAT_ID = "259848554";

// ===== MODALNI OCHISH =====
function openModal() {
    document.getElementById("registerModal").style.display = "flex";
}

// ===== MODALNI YOPISH =====
function closeModal() {
    document.getElementById("registerModal").style.display = "none";
}

// ===== FORMANI OLISH =====
const form = document.getElementById("registerForm");

// ===== BUYURTMANI TELEGRAMGA YUBORISH =====
form.addEventListener("submit", async function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const surname = document.getElementById("surname").value;
    const phone = document.getElementById("phone").value;
    const address = document.getElementById("address").value;

    const text = `🛋 UNORA DESIGN FACTORY

📦 Yangi buyurtma!

👤 Ism: ${name}
👨‍👩‍👦 Familya: ${surname}
📞 Telefon: ${phone}
📍 Manzil: ${address}`;

    try {
        await fetch(`https://api.telegram.org/bot${TOKEN}/sendMessage`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                chat_id: CHAT_ID,
                text: text
            })
        });

        document.getElementById("message").innerText =
            "✅ Buyurtma muvaffaqiyatli yuborildi!";

        form.reset();

        setTimeout(() => {
            closeModal();
        }, 2000);

    } catch (error) {
        document.getElementById("message").innerText =
            "❌ Xatolik yuz berdi!";
    }
});

function openModal() {
    document.getElementById("registerModal").style.display = "flex";
}

function closeModal() {
    document.getElementById("registerModal").style.display = "none";
}

