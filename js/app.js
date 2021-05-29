
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
  - Render two unique images into the DOM
    - generate rendom numbers to get an image from an array
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

// Global variables
const allImg = [];

// array with includes!!!!

let imageOne = document.querySelector('div img:first-child');
let imageTwo = document.querySelector('div img:nth-child(2)');
let imageThree = document.querySelector('div img:last-child');
const parentEl = document.getElementById('results');

// let myContainer = document.getElementById('box-one');

// Not sure if needed unless posting to let user see
// const myForm = document.getElementById('form');

let clicks = 0;
let clicksAllowed = 25;

// ########## 1 ##########
// DONE: Display 3 unique RANDOM items at a time, side by side
// They will pick a favorite
// Store the favorite

// DONE: Create a constructor Function
// DONE: Inside that change are (name of product, img file path, times image has been shown)

function Catelog (name, imgLocation = 'jpg') {
  this.name = name;
  this.src = `img/${name}.${imgLocation}`;
  // this.shown = shown;
  // this.clicks = 0;
  this.views = 0;
  this.favImg = 0;
  allImg.push(this);
}

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



function selectRandomImageIndex () {
  return Math.floor(Math.random() * allImg.length);
}

function renderRandomImg () {
  let imgOne = selectRandomImageIndex();
  let imgTwo = selectRandomImageIndex();
  let imgThree = selectRandomImageIndex();
  
  // change this into an array, compare it better
  while (imgOne === imgTwo){
    imgTwo = selectRandomImageIndex();
  }
  imageOne.src = allImg[imgOne].src;
  imageOne.alt = allImg[imgOne].name;
  allImg[imgOne].view++;

  imageTwo.src = allImg[imgTwo].src;
  imageTwo.alt = allImg[imgTwo].name;
  allImg[imgTwo].view++;

  imageThree.src = allImg[imgThree].src;
  imageThree.alt = allImg[imgThree].name;
  allImg[imgThree].view++;

  console.log(`
  Image one: ${imgOne},
  Image two: ${imgTwo},
  Image three: ${imgThree}
  `);
}

function handleImageClick(event) {
  if (event.target === myContainer){
    alert('Click on an image please');
  }

  clicks++;
  let clickedImg = event.target.alt;
  for (let i = 0; i < allImg.length; i++){
    for (let j = 0; j < allImg[i]; j++){
      allImg[i].clicks++;
    }
  }
  renderRandomImg();

  if(clicks === clicksAllowed){
    myContainer.removeEventListener('click', handleImageClick);
  }
}


function renderImageResults () {
  let el = document.querySelector(element);
  // for...for...for..
  el.textContent = content;
  parent.appendChild(el);
}

// changes image to certain width, for posting results
//imageOne.style.width = 50px;

function appendDOM (element, content, parent) {
  let el = document.createElement(element);
  el.textContent = content;
  parent.appendChild(el);
}

appendDOM('p', 'Is this working?', imageTwo);

renderRandomImg();

myContainer.addEventListener('click', handleImageClick);







let handleClick = function (event) {
  console.log('the event.target.id is ', event.target.id);
  if (event.target.id === 'box-one') {
    // Append to DOM and Count
    Catelog.timesClicked();
  } else if (event.target.id === 'box-two') {
    Catelog.timesClicked();
  } else if (event.target.id === 'box-three') {
    Catelog.timesClicked();
  } else {
    let el = document.createElement('p');
    el.textContent = 'Please Click an Image';
    parentEl.appendChild(el);
  }
};

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



Catelog.prototype.timesClicked = function () {
  appendDOM('li', `${this.name}: ${this.shown} votes`, parentEl);
  this.shown += 1;
  // Inside here, when clicked, return new images
  // Add +1 to the image clicked to record
};

let imgLocationArray2 = ['_../assets/bag.jpg'];
let imageIndex = 0;
function appendDOMTesting (element, content, parent) {
  test.setAttribute('src',imgLocationArray2[imageIndex]);
  let el = document.createElement(element);
  el.textContent = content;
  parent.appendChild(el);
}

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


function imagePrintTest(){
  for (let i = 0; i < allImg.length; i++){
    console.log(allImg[i].src);
    let firstImage = document.createElement('img');
    firstImage.setAttribute('src', allImg[i].src);
    imageOne.appendChild(firstImage);

    imageTwo.src = allImg[i].src;
    imageThree.src = allImg[i].src;
    test.src = allImg[i].src;
    // console.log(imageOne);
    // console.log(i);
  }
}
// imagePrintTest();
// imageOne.src = allImg[0].src;
