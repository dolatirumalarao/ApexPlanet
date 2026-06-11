// Quiz Logic

function checkAnswer(answer){

    const correct = "Delhi";
    const result = document.getElementById("quizResult");

    if(answer === correct){
        result.textContent =
        "✅ Correct! Delhi is the capital of India.";
    }
    else{
        result.textContent =
        "❌ Incorrect. Try again!";
    }
}

// Image Carousel

const images = [
    "https://picsum.photos/400/250?random=1",
    "https://picsum.photos/400/250?random=2",
    "https://picsum.photos/400/250?random=3",
    "https://picsum.photos/400/250?random=4"
];

let currentIndex = 0;

function nextImage(){

    currentIndex = (currentIndex + 1) % images.length;

    document.getElementById("carouselImage").src =
    images[currentIndex];
}

// Joke API

async function fetchJoke(){

    const jokeText = document.getElementById("jokeText");

    try{

        const response =
        await fetch("https://official-joke-api.appspot.com/random_joke");

        const data = await response.json();

        jokeText.textContent =
        `${data.setup} 😂 ${data.punchline}`;

    }
    catch(error){

        jokeText.textContent =
        "Unable to fetch joke. Try again later.";
    }
}