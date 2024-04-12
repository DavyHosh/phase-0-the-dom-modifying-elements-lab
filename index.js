// Write your code here!
// Process index.js

// Remove the <main> element with id 'main'
const mainElement = document.querySelector('main#main');
mainElement.remove();

// Create a new <h1> element
const newHeader = document.createElement('h1');

// Set the id attribute of the new <h1> element to 'victory'
newHeader.id = 'victory';

// Set the text content of the new <h1> element
newHeader.textContent = "DAVID is the champion";

// Append the new <h1> element to the document body or any desired location in the DOM
document.body.appendChild(newHeader);
