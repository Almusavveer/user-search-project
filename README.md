# Dynamic User Search Project 🕵️‍♂️💻

A simple, real-time user search interface built with vanilla JavaScript. This project dynamically renders and filters a list of user cards based on text input from an array of objects. 🔍

---

## Core Functionality ⚙️

This project is built around two key JavaScript functions:

1.  *showUsers(arr)*: This function takes an array of user objects and dynamically creates the HTML for each user card. It uses document.createElement to build the card structure and appends it to the DOM.

2.  *input Event Listener*: An event listener attached to the search input field triggers on every keystroke. It performs the following actions:
    * Filters the master people array using the .filter() method.
    * Uses .startsWith() to match users whose names begin with the input value.
    * Clears the current display using .innerHTML = "".
    * If the filtered array is not empty, it calls showUsers() to render the matching results.
    * If no users match the search, it displays a "User not Found" message to provide clear feedback to the user. ✅

---

## Technologies & Concepts Demonstrated 🧠

-   *HTML5 & CSS3* for structure and styling. 🎨
-   *Vanilla JavaScript (ES6+)* for all logic. 📜
-   *DOM Manipulation:* Extensive use of document.querySelector, createElement, and .append().
-   *Event Handling:* Capturing live user input with addEventListener. ⌨️
-   *Array Methods:* Efficient data handling with .forEach() and .filter().

---

## How to Use 🚀

To run this project locally:

1.  Clone the repository:
    bash
    git clone https://github.com/Almusavveer/user-search-project.git
    
2.  Navigate to the project directory:
    bash
    cd user-search-project
    
3.  Open the index.html file in your web browser. 🌐

---

## Acknowledgement 🙏

A huge and heartfelt thank you to *Sheyrians Coding School* for their incredible "Part 2 – Master JavaScript & Become a Real Developer" course. This project is a direct result of the high-quality, practical, and free education they provide. Their detailed explanations and hands-on projects have been fundamental to my learning journey in web development. ❤️
