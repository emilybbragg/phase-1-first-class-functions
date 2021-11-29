
//takes a callback function as an argument and calls the callback function
function receivesAFunction(cb){
cb()
}
// function that takes no arguments, returns a named function
function returnsANamedFunction(){
    return function namedFunction() {

    }
}

// function that takes no arguments, returns an anonymous function
function returnsAnAnonymousFunction() {
    return function () {

    }
}


/*
function Monday() {
    console.log("Go for a five-mile run");
    console.log("Pump iron");
  }
  
  function Tuesday() {
    console.log("Go for a five-mile run");
    console.log("Swim 40 laps");
  }
  
  function Wednesday() {
    console.log("Go for a five-mile run");
    console.log("Go for a five-mile run");
  }
  
  function Thursday() {
    console.log("Go for a five-mile run");
    console.log("Pump iron");
  }
  
  function Friday() {
    console.log("Go for a five-mile run");
    console.log("Swim 40 laps");
  }

  can be turned into:
  function runFiveMiles() {
    console.log("Go for a five-mile run");
  }
  function liftWeights() {
    console.log("Pump iron");
  }
  function swimFortyLaps() {
    console.log("Swim 40 laps");
  }

  so now Monday looks like:
  function Monday() {
    runFiveMiles();
    liftWeights();
  }

  however, can condense even more by creating a function that takes the second
  activity as a parameter: (postRunActivity is now a CALLBACK)
  function exerciseRoutine(postRunActivity) {
  runFiveMiles();
  postRunActivity();
}


  */