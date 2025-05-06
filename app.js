function randomQuotes() {


    let randomNumber = Math.floor(Math.random() * 102)

    let quotes = fetch('https://gist.githubusercontent.com/nasrulhazim/54b659e43b1035215cd0ba1d4577ee80/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json')
        .then((res) => {
            return res.json();
        }).then((data) => {

            let Quote = document.querySelector('.quote-container')
            let Author = document.querySelector('.author-container')

            Quote.innerText = ("' " + data.quotes[randomNumber].quote + " '");

            Author.innerText = data.quotes[randomNumber].author;


        })

}
