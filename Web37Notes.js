// Guided Practice Youtube Video: https://www.youtube.com/watch?v=H1-uw5ueouE&feature=youtu.be

// 👉 1- Finding an element on the page and saving a reference to it
//  Older: getElementById, getElementsByTagName, getElementsByClassName
//  Newer: querySelector, querySelectorAll
//  Select the following single elements from the div.card

//-------------------------------------------------------------------------------------------------------------------

// A- finding across the entire DOM
const header = document.querySelector("header");
const logoTitle = document.querySelector("#logoTitle");
const firstCard = document.querySelector(".card");
    // console.log(firstCard);
    const copyOfFirstCard = firstCard.cloneNode(true); //a method (has to be invoked = (true), it copies all of firstCard) but won't show
                                                       // until you append it to the DOM
    // console.log(copyOfFirstCard);
    const cardContainer = document.querySelector(".card-group"); //this selects parent element (card itself)
    cardContainer.appendChild(copyOfFirstCard); //a method that copies the child to the parent container

// B- finding within one particular element
    //starting from line 9... firstCard is the overall class and below is the elements in that class
        const imageFirstCard = firstCard.querySelector("img");
        const titleFirstCard = firstCard.querySelector("h2");
        const subtitleFirstCard = firstCard.querySelector("h3");
        const textFirstCard = firstCard.querySelector("p");
// C- traversing with dot notation
    //When there are multiple of the same elements
        //Using CSS selector: const link1FirstCard = document.querySelector("card-link.nth-of-type(1)");
        //Easier Way...
            //When looking at the HTML, the 1st link is right after .card p, thats when you use .nextElementSibling
            const link1FirstCard = textFirstCard.nextElementSibling;
            //Then in order to get the second of the same element, you use .nextElementSibling bc its right after it
            const link2FirstCard = link1FirstCard.nextElementSibling;

//-------------------------------------------------------------------------------------------------------------------

// 👉 2- Finding collections of elements in the DOM:

//How Instructor Did it...
// A- Find all the anchor tags inside the nav element
    const links = document.querySelectorAll("nav a");//Provide a Nodelist, a list of all things searched
        // console.log(links);

// B- Loop over the links and console.log their text content
    links.forEach((link) => console.log(link.textContent));
        //Going to loop thru the list of links (All the nav a), and provide the text in that

// C- Turn the collection of links into a real array
    const linksRealArray = Array.from(links); 
        //creating a array with that list in order to use for other things bc nodelist is not an array
        //Array.from creates a new array with the name of linksRealArray and passing in all information of (links)
            console.log(linksRealArray); //won't look different from nodelist BUT now you can use this array

// D- Use .filter to find the anchor tag with the textContent of "Home" ➡  TREVOR Explained
    console.log(
        (result = linksRealArray.filter((word) => word.textContent === "Home"))
        );
        console.log(result);

    //How Trevor Explained:
    const links = document.getElementsByTagName('a') //will provide a Nodelist

    links.filter(link => link.textContent === 'Home') //looking for the word in the Nodelist
    /*OR*/
    const homeLink = links.find(link => link.textContent === 'Home') //put that word to a variable in order to manipulate
    homeLink.style.fontSize = '2rem'; //then you can style
        //Notes: .find() returns a single object 
        //   and .filter() returns a new array
//-------------------------------------------------------------------------------------------------------------------

// 👉 3- Changing an element's text content:

//  A- Change the cat-related content into dog-related content
    logoTitle.textContent = "Lambda Dog";
        //Need to querySelector the element first and assign it a variable (line 12), then use the variable name
    titleFirstCard.textContent = "I rulez";
    subtitleFirstCard.textContent = "obviously";
    textFirstCard.textContent =
    "Puggorino tungg puggorino, waggy wags. thicc wow such tempt. Very jealous pupper doing me a frighten puggorino very taste wow, borkdrive. Smol big ol fluffer pupperino fluffer, waggy wags ruff blep.";
    link2FirstCard.textContent = "Dog Ipsum";
//  B- Have the students research online the difference between textContent and innerText
        //.innerText vs .textContent = textContent gives you everything while innerText only gives the readable content
//-------------------------------------------------------------------------------------------------------------------

// 👉 4- Changing any property:

//  A- Using dot notation to change a few attributes
logoTitle.className = "logo heading banana";
imageFirstCard.src = "https://cdn.pixabay.com/photo/2017/09/25/13/12/dog-2785074__340.jpg";
    //In order to change Picture^^^

//  B- Using .setAttribute to change a few attributes (Another Way)
        //a method that takes 2 arguments (attribute, URL)
link1FirstCard.setAttribute("href", "https://www.pexels.com/search/dog/"); //this is changing the link website
link2FirstCard.setAttribute("href", "https://doggoipsum.com/");

//-------------------------------------------------------------------------------------------------------------------

// 👉 5- Changing the styling of an element:

//  A- By changing the class names on the element with the classList API
    header.classList.add("sky"); 
        //that changes the background color of the header
    header.classList.remove("sky");
        // What is the reasoning for this?
        
    setInterval(() => header.classList.toggle("sky"), 1000);
        //takes whatever callback function, and a time duration
            //1 sec = 1000 mili sec
            //it toggles (back & forth) the original color with whatever is inside the .toggle( )

//  B- By manipulating inline styles on the element //override whatever was there before
header.style.fontSize = "2em";

//-------------------------------------------------------------------------------------------------------------------

// 👉 6- Creating new elements from scratch and appending them

// Create a new link inside the nav for "Blog" //adding a whole new element to the nav
    const blogLink = document.createElement("a");
        //.createElement(type of element creating) to the document

    blogLink.textContent = "Blog"; //The text of the new nav link

    //--- It had only been created, it will not appear yet...

    blogLink.href = "#"; //saying where its going to go (usually a link here)

    document.querySelector("nav").appendChild(blogLink); 
        //document. is what its going to be placed on
        //"nav" is specific place you want to go
        //.appendChild is the method that adds whatevers in the ( ) to officially appear

//-------------------------------------------------------------------------------------------------------------------

// 👉 7- Making a copy of the card and appending it to the card group
// DOM nodes can only exist in one spot in the DOM
// We cannot append the same copy multiple times

const secondCard = firstCard.cloneNode(true);
document.querySelector(".card-group").appendChild(secondCard);

//Notes from beginning:
const firstCard = document.querySelector(".card");
    const copyOfFirstCard = firstCard.cloneNode(true); //a method (has to be invoked = (true), it copies all of firstCard) 
                                                       // but won't show until you append it to the DOM
    // console.log(copyOfFirstCard);
    const cardContainer = document.querySelector(".card-group"); //this selects parent element (card itself)
    cardContainer.appendChild(copyOfFirstCard); //a method that copies the child to the parent container
//-------------------------------------------------------------------------------------------------------------------
// 👉 8- Removing an existing element and putting it back [STRETCH if time allows]

// 👉 9- Show to students the insertAdjacentHTML method [STRETCH if time allows]
