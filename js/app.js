'use strict';

// Global variables
// All Categlog Data
let allImg = [];
let clicks = 0;
let clicksAllowed = 25;
// Image Array to test no repeats of images
let imageHolder = [];
let imageOne = document.querySelector('div img:first-child');
let imageTwo = document.querySelector('div img:nth-child(2)');
let imageThree = document.querySelector('div img:last-child');
let resultButton = document.getElementById('button');
let myContainer = document.getElementById('imageList');

function Catelog (name, imgLocation = 'jpg') {
  this.name = name;
  this.src = `img/${name}.${imgLocation}`;
  this.view = 0;
  this.favImg = 0;
  this.clicks = 0;
  allImg.push(this);
}

// Retrieving for local storage
// getting it back
let retrievedImages = localStorage['clicks'];
console.log(retrievedImages);
// putting back into parse
if (retrievedImages) {
  let parsedImages = JSON.parse(retrievedImages); // Retrieving string and making back into object
  allImg = parsedImages;
}
else {
  new Catelog ('bag');
  new Catelog ('banana');
  new Catelog ('bathroom');
  new Catelog ('boots');
  new Catelog ('breakfast');
  new Catelog ('bubblegum');
  new Catelog ('chair');
  new Catelog ('cthulhu');
  new Catelog ('dog-duck');
  new Catelog ('dragon');
  new Catelog ('pen');
  new Catelog ('pet-sweep');
  new Catelog ('scissors');
  new Catelog ('shark');
  new Catelog ('sweep', 'png');
  new Catelog ('tauntaun');
  new Catelog ('unicorn');
  new Catelog ('water-can');
  new Catelog ('wine-glass');
}

function selectRandomImageIndex () {
  return Math.floor(Math.random() * allImg.length);
}

function renderRandomImg () {
  while (imageHolder.length < 6) {
    let uniqueIndex = selectRandomImageIndex(); // creates random number
    if(!imageHolder.includes(uniqueIndex)) { // sees if number already exsist inside array
      imageHolder.push(uniqueIndex); // pushes number into array if not already inside
    }
  }
  let imgOne = imageHolder.shift();
  let imgTwo = imageHolder.shift();
  let imgThree = imageHolder.shift();

  imageOne.src = allImg[imgOne].src;
  imageOne.alt = allImg[imgOne].name;
  allImg[imgOne].view++;

  imageTwo.src = allImg[imgTwo].src;
  imageTwo.alt = allImg[imgTwo].name;
  allImg[imgTwo].view++;

  imageThree.src = allImg[imgThree].src;
  imageThree.alt = allImg[imgThree].name;
  allImg[imgThree].view++;
}

function renderChart () {
  let clicksArr = [];
  let viewsArr = [];
  let namesArr = [];

  for (let i = 0; i < allImg.length; i++) {
    clicksArr.push(allImg[i].clicks);
    viewsArr.push(allImg[i].view);
    namesArr.push(allImg[i].name);
  }

  let ctx = document.getElementById('myChart').getContext('2d');
  new Chart(ctx, { //eslint-disable-line
    type: 'bar',
    data: {
      labels: namesArr,
      datasets: [{
        label: '# of Clicks',
        data: clicksArr,
        backgroundColor: [
          'rgba(211, 169, 33, 0.5)'
        ],
        borderColor: [
          'silver'
        ],
        borderWidth: 1
      },
      {
        label: '# of Views',
        data: viewsArr,
        backgroundColor: [
          'rgba(60, 201, 201, 0.5)'
        ],
        borderColor: [
          'silver'
        ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}

function handleImageClick(event) {
  if (event.target === myContainer){ // make sure you click on an image
    window.alert('Click on an image please');
  }

  clicks++;
  let clickedImg = event.target.alt;
  for (let i = 0; i < allImg.length; i++){
    if (clickedImg === allImg[i].name) {
      allImg[i].clicks++; // adds number clicks to images taht were clicked
    }
  }
  renderRandomImg();
  if(clicks === clicksAllowed){
    myContainer.removeEventListener('click', handleImageClick);
    appendDOM('p', 'Enough images have been clicked. Please click results for your total', resultButton);

    // Must use Stringify before storing
    let stringify = JSON.stringify(allImg);

    // Setting local storage
    localStorage['clicks'] = stringify;
  }
}

function renderImageResults () { // render
  let el = document.getElementById('results');
  for (let i = 0; i < allImg.length; i++){
    appendDOM('li', `${allImg[i].name} had ${allImg[i].view} views and was clicked ${allImg[i].clicks} times` , el);
  }
}

let handleResultClick = function(event) { //eslint-disable-line
  if (clicks === clicksAllowed) {
    renderImageResults();
    renderChart();
    resultButton.removeEventListener('click', handleResultClick);
  }
};

function appendDOM (element, content, parent) {
  let el = document.createElement(element);
  el.textContent = content;
  parent.appendChild(el);
}

renderRandomImg();
resultButton.addEventListener('click', handleResultClick);
myContainer.addEventListener('click', handleImageClick);







//Things to note!!!
// Create a branch for each step of the way

// Look over and make more descriptive sudo code
/*
#### Possible things we need
- Global Varibles
  - Arrays
  - Counter - starts 0 clicks . max of 25 clicks?
  - window into the DOM - container, img one img two, view results?
- COnstructor
  - image souce
  - name
  - clicks
  - views
  -  push allImages into array
- prototype methods???
  -Shouldnt need???
- Functions
  - Render three unique images into the DOM
    - generate random numbers to get an image from an array
    - assign randoms to vatiables, push into ana rray (ESPECIALLY FOR MORE 2 IMAGES)
    - validattion to make sure the random numbers are not the same
    - once we have 2 unique images to renter. incredment viewd for BOTH objects
  - need tro rerender images - EVENT HANDLER
    - if the images are assigned by property, all we need to do for new images, is reassing the properties
    - increment counter
    - event handler can call render function again
    - log what was clicked - in other worlds, increment THAT objects "click" property
    - hit limit - stop rendering when hit 25 clicks 0 remove event handler
    - can add button then OR the vutton could ecsist all along

  - button NEEDS seperate event handler
    - validation on vutton (if it already exists) if clicks = 25 then do the thing
    - render lists of results
      - render name, number of views, and number of clicks

*/


// ########## 1 ##########
// DONE: Display 3 unique RANDOM items at a time, side by side
// They will pick a favorite
// Store the favorite

// DONE: Create a constructor Function
// DONE: Inside that change are (name of product, img file path, times image has been shown)


// Create algorith that will randomly generate 3 images
// Increment its property of itmes it has been shown by one

// Attach an event lister
// display 3 more images once an image is clicked
// function handleSubmit(event){
//   event.preventDefault();
//   // to access form input values
//   // event.target.<name>.value
//   console.log(event.target.first.value);
//   console.log(event.target.last.value);
//   console.log(event.target.pet.value);
//   let firstName = event.target.first.value;
//   let lastName = event.target.last.value;
//   let petType = event.target.pet.value;
//   allImg.push([firstName, lastName, petType]);
// }

// myForm.addEventListener('submit', handleSubmit);


// ########## 2 ##########
// Track to see which pictures are chosen

// In constructor function
// Track how many times a profuct has been "clicked"

// appendDOMTesting('p', imgLocationArray2, test);
// After each click, update the newly added property to reflect it was clicked


// ########## 3 ##########
// Max 25 rounds of choosing images
// Keep number of rounds in a variable ###### DEBUG HERE ######


// ########## 4 ##########
// Create a property that returns all the images that were clicked starting with most to least
// After 25 rounds remove event listener

// Button named 'view results'
// list of all images and how many times they have been clicked
// number of times the images has been seen

// new Catelog ('bag', ../assets/bag.jpg, 0)
// Other
// Image name should be EXACTLY the same as file name
