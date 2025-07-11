const animals = [
    {
        name: "Kucing",
        image: "assets/kucing.png",
        sound: "assets/kucing.mp3"
    },
    {
        name: "Anjing",
        image: "assets/anjing.png",
        sound: "assets/anjing.mp3"
    },
    {
        name: "Sapi",
        image: "assets/sapi.png",
        sound: "assets/sapi.mp3"
    }
];

const container = document.getElementById("animal-container");

animals.forEach(animal => {
    const card = document.createElement("div");
    card.className = "animal-card";

    const img = document.createElement("img");
    img.src = animal.image;
    card.appendChild(img);

    const btnSound = document.createElement("button");
    btnSound.textContent = "Putar Suara";
    btnSound.onclick = () => {
        const audio = new Audio(animal.sound);
        audio.play();
    };
    card.appendChild(btnSound);

    const btnName = document.createElement("button");
    btnName.textContent = "Tampilkan Nama";
    btnName.onclick = () => {
        alert("Ini adalah " + animal.name);
    };
    card.appendChild(btnName);

    container.appendChild(card);
});

function checkAnswer(jawaban) {
    const benar = animals.length;
    const feedback = document.getElementById("feedback");
    if (jawaban === benar) {
        feedback.textContent = "✅ Benar! Ada " + benar + " hewan.";
        feedback.style.color = "green";
    } else {
        feedback.textContent = "❌ Salah. Coba lagi!";
        feedback.style.color = "red";
    }
}
