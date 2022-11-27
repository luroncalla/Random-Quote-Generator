const quoteText = document.querySelector(".quote"),
    authorName = document.querySelector(".author .name"),
    quoteBtn = document.querySelector("button"),
    soundBtn = document.querySelector(".sound"),
    copyBtn = document.querySelector(".copy"),
    twitterBtn = document.querySelector(".twitter");


const randomQuote = () => {
    quoteBtn.classList.add("loading");
    quoteBtn.innerText = "Loading Quote...";
    fetch("https://api.quotable.io/random")
        .then(response => response.json())
        .then(data => {
            quoteText.innerText = data.content;
            authorName.innerText = data.author;
            quoteBtn.innerText = "New Quote";
            quoteBtn.classList.remove("loading");
        });
}

soundBtn.addEventListener("click", () => {
    //using the SpeechSyntesisUtterance web api
    let mensaje = new SpeechSynthesisUtterance();
    mensaje.text = `${quoteText.innerText} by ${authorName.innerText}`;
    //speak methos of speechSynthesis speaks the utterance
    speechSynthesis.speak(mensaje);
});


copyBtn.addEventListener("click", () => {
    // las propiedad writeText() escribe el texto respecifico en el portapapeles del sistema 
    navigator.clipboard.writeText(quoteText.innerText);
});

twitterBtn.addEventListener("click", () => {
    let tweetUrl = `https://twitter.com/intent/tweet?url=${quoteText.innerText}`;
    window.open(tweetUrl, "_blank");
})

quoteBtn.addEventListener("click", randomQuote);