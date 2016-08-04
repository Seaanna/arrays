// Test test test 
// largest number challenge
// array

var a = [1.5,2.0,5.5,7.6,3.3];


var max = 0

// defining the function highestNumber
function highestNumber(){
  // create forEach to list out the array (a) that has an anonymous function
a.forEach(function(element){
  // only if the element is greater than the max
  if (element>max) {
    // max will change to new element
    max = element;
  }
})
// allowing to see in console
console.log(max);
}




//lowest number
// used var b from smallest number challenge
var min = 300
// defining the function for lowest number
function lowestNumber(){
  // create forEach to list out the array (b) that has an anonymous function
b.forEach(function(element){
  // only if the element is greater than the min
  if (element<min) {
    // min will change to new element
    min = element;
  }
})
// allowing to see in console
console.log(min);
}





// smallest number challenge
// array with negative numbers and decimals
var b = [-.01,1.5,2.0,-4.7,5.5,7.6,3.3];


var min = 300

function smallestNumber(){
  // running.forEach to the array of b
  b.forEach(function(element){
    // if statement to change the elements to absolute values
    if(Math.abs(element)<min){
      //change absolute value element to min
      min = element;
    }
  })
  //allowing to see in console
  console.log(min);
}


//function that finds calculates the sum
var c = ([1,4,6,9]);
// declaring variable for the base line to start adding the elements
var s = 0;
// function to add array together
function addSum(){
  // function with forEach to
  c.forEach(function(element){
    // updated the var s to change while adding the element
    s += element;

  })
  console.log(s);

}




// caluclateing the mean

var c = ([1,4,6,9]);


function meanValue(){
  // moved var s outside the forEach function
  var s = 0;
  c.forEach(function(element){
    s += element;
  });
  // redefining s when called on to divide by c.length (array)
  s= s/(c.length);
  console.log(s);
}








// finding the index of the highest number

var a = [1.5,2.0,5.5,7.6,3.3];


function indexHigh(){
  // create forEach to list out the array (a) that has an anonymous function
a.forEach(function(element){
  // only if the element is greater than the max
  if (element>max) {
    // max will change to new element
    max = element;

  }
})
// shows the index of the highest element (7.6 is 3)
return a.lastIndexOf(max);}


//alphabetical order with arrays
var sibs = ["Derrick", "Rhonda", "Brian"]
var parts = ["Katherine", "Andy", "Dan"]


//siblings in order
sibs.sort(function(element1,element2){
  return(element1>element2)*1 + (element1<element2)*-1;
});

// reverse of alphabetical order
parts.sort(function(element1,element2){
  return(element1<element2)*1 + (element1>element2)*-1;
});

//combine both arrays
var every1 = sibs.concat(parts);
console.log(every)
// combined arrays and puttin gin reverse alphabetical order
every1.sort(function(element1,element2){
  return(element1>element2)*1 + (element1<element2)*-1;
});




//function determines if a given name is within an array
  var sibs = ["Derrick", "Rhonda", "Brian"]
  var parts = ["Katherine", "Andy", "Dan"]







  //make function to find a given name
  function name(x){
    // return if the name is in the array of the name that is given
    return x == "Andy";

  }
// look inside the arry and see if the name is in any of the strings
  sibs.some(name);




// an array that will return only even numbers
var even = [1,3,4,2,7]
// build a blank array to push the new array into
var array = []
// function to grab the even numbers from the array
even.forEach(function(element){
  // calculating what numbers are going to be even in array
  if(element%2===0){
// pushing elements that are calculated into the empy array
    array.push(element);
  }
});
// tried to return and it worked inside the function but we could not see it. console.log(array) returned the array once it was outside the function. Because forEach is an anonymous function, return may not act how it usually does!!!!
console.log(array);



//map array
// array for map
var map = [1,2,3];
// make an empty array to push the changed elements
var empty = [];
// function to start mapping
function mapping(){
  // grabbing individual elements from map
map.forEach(function(element){
  // multiply each individual elements by 2 and then equal to element
  element*=2;
  // add the new elements into an array
  empty.push(element);
});
// need to see in console
console.log(empty);
}


// Filter array
var balloon = [12,10,11,4];
// create a function

// create function with a place holder
function balloonRed (x){
// create a variable to have an empty array
  var nothing = [];
//grab each element from the place holder .forEach
x.forEach(function(element){
// parameter for elements
  if(element>=10){
  //pushing elements into nothing (empty array)
    nothing.push(element);
  }
});
// show the content
console.log(nothing);
}



filterArray([5,6,7], function(x) { return x>=6; })
