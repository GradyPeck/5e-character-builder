//- - - API fetch demo starts here - - -
//finding the test button on the HTML sheet...
const testButton = document.getElementById("testButton");
//...and attaching an event listener to it that will run my function whenever it's clicked. 
testButton.addEventListener("click", APItestFunction);
//the root URL for the API - every one of our fetches will be pointed at an address starting with this. 
const rootURL = "https://www.dnd5eapi.co/api/";

function APItestFunction() {
    //adding to the root URL to make a more specific request (in this case, for the list of classes)
    let myTarget = rootURL + "classes/"
    //fetch from that URL - this part is that simple! 
    fetch(myTarget)
/*  Now we have to process the response. for that we use functions wrapped in .then() statements.
    .then() lets us chain a function right after the previous one. 
    We can then chain another .then() after THAT, and so on. 
    I hate that this is the best analogy I have, but a .then chain is basically a human centipede of functions;
    each one takes in whatever the last one puts out, and then passes it on to the next one. 
    They're extremely useful with asynchronous functions like fetch, where we don't know how long they'll take,
    because the .then() will only be run once the fetch is done. */

    //this first one is using a tiny arrow function to convert the response from a string, which all responses default to, back to JavaScript data.
    //this may seem weird to do as its own step, but it has to be due to some strangeness with the way .json() works. Just copy and paste it after any fetch. 
    .then((response) => response.json())
    //this second one is using a function I wrote below. 
    .then(LogData);
}

//This function pulls the class names out of the object the fetch sends back and logs them. It's used in the second .then() above. 
function LogData(data) {
    data = data.results;
    for(let i = 0; i < data.length; i++) {
        console.log(data[i].name);
    }
}