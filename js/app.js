
//Things to note!!!
// Create a branch for each step of the way

// Look over and make more descriptive sudo code


// ########## 1 ##########
// Display 3 unique RANDOM items at a time, side by side
// They will pick a favorite
// Store the favorite

//Create a constructor Function
// Inside that change are (name of product, img file path, times image has been shown)

const allImg = [];
const parentEl = document.getElementById('results');

// Not sure if needed unless posting to let user see
const myForm = document.getElementById('form');

function Catelog (name, img, shown) {
  this.name = name;
  this.img = img;
  this.shown = shown;
  allImg.push(this);
}

let handleClick = function (event) {
  console.log('the event.target.id is ', event.target.id);
  if (event.target.id === 'box-one') {
    // Inside here, when clicked, return new images
    // Add +1 to the image clicked to record
  } else if (event.target.id === 'box-two') {
    // Inside here, when clicked, return new images
    // Add +1 to the image clicked to record
  } else if (event.target.id === 'box-three') {
    // Inside here, when clicked, return new images
    // Add +1 to the image clicked to record
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
function handleSubmit(event){
  event.preventDefault();
  // to access form input values
  // event.target.<name>.value
  console.log(event.target.first.value);
  console.log(event.target.last.value);
  console.log(event.target.pet.value);
  let firstName = event.target.first.value;
  let lastName = event.target.last.value;
  let petType = event.target.pet.value;
  allImg.push([firstName, lastName, petType]);
}

myForm.addEventListener('submit', handleSubmit);


// ########## 2 ##########
// Track to see which pictures are chosen

// In constructor function
// Track how many times a profuct has been "clicked"

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


// Other
// Image name should be EXACTLY the same as file name

// First Branch name 'lab11-busmall'
