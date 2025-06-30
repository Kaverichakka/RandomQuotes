# 🎯 Random Quotes Generator

A simple and visually appealing web application that displays a random quote each time you click the **"New Quote"** button. It fetches quotes from an external JSON source and updates the UI dynamically.

## 🌐 Live Preview

You can host it on GitHub Pages or any web server and add your link here.

## 📁 Project Structure

```
📦 random-quotes-generator
├── index.html         # Main HTML file
├── style.css          # Styling for the app
├── app.js             # JavaScript for quote fetching and DOM manipulation
└── README.md          # Project documentation
```

## 🚀 Features

- Generates random quotes from a public JSON API
- Styled with custom fonts and vibrant colors
- Fully responsive and mobile-friendly
- Uses `fetch()` to get quotes asynchronously

## 🛠️ Technologies Used

- HTML5
- CSS3 (with Google Fonts)
- JavaScript (ES6+)
- External JSON API

## 📸 Screenshots

_Add a screenshot of your app here if available._

## 🔧 Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/random-quotes-generator.git
   cd random-quotes-generator
   ```

2. **Open in Browser**
   - Open `index.html` directly in a web browser, or
   - Use Live Server in VS Code for better experience.

## 🔄 Functionality Overview

- `randomQuotes()` function:
  - Fetches the quote list from a public [Gist JSON URL](https://gist.githubusercontent.com/nasrulhazim/54b659e43b1035215cd0ba1d4577ee80/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json)
  - Selects a random quote
  - Updates `.quote-container` and `.author-container` dynamically


