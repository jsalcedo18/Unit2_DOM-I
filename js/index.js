const siteContent = { 
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};
//--------------------------------------------------------------------------------------------
// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])


//Header Section-----------------------------------------------------------------------------

const navLinks = document.querySelectorAll("nav a");
// console.log(navLinks);

const navLinksArray = Array.from(navLinks);
// console.log(navLinksArray);

//--------------------------------------------
  //Task: Add "Services" to nav a 1
  const navService = document.querySelector('.container nav a');
  navService.textContent = 'Services';
  // console.log(navService);

//--------------------------------------------
  //Task: Add "Product" to nav a 2
  const navProduct = navService.nextElementSibling;
  navProduct.textContent = 'Product';
  // console.log(navProduct);

//--------------------------------------------
  //Task: Add "Vision" to nav a 3
  const navVision = navProduct.nextElementSibling;
  navVision.textContent = 'Vision';

//--------------------------------------------
  //Task: Add "Features" to nav a 4
  const navFeatures = navVision.nextElementSibling;
  navFeatures.textContent = 'Features';

//--------------------------------------------
  //Task: Add "About" to nav a 5
  const navAbout = navFeatures.nextElementSibling;
  navAbout.textContent = 'About';

//--------------------------------------------
  //Task: Add "Contact" to nav a 6
  const navContact = navAbout.nextElementSibling;
  navContact.textContent = 'Contact';
  
//Section Class cta-------------------------------------------------------------------------

//--------------------------------------------
  //Task: Add DOM <br> Is <br> Awesome to <h1>

//--------------------------------------------
  //Task: Add "Get Started" to Button

//--------------------------------------------
  //Task: Add img src

//Section Class main-content---------------------------------------------------------------

//--------------------------------------------
  //Task: top-content- h4 + p of Features

//--------------------------------------------
  //Task: top-content- h4 + p of About

//--------------------------------------------
  //Task: img src

//--------------------------------------------
  //Task: bottom-content- h4 + p of Services

//--------------------------------------------
  //Task: bottom-content- h4 + p of Product

//--------------------------------------------
  //Task: bottom-content- h4 + p of Vision

//Section Class contact-------------------------------------------------------------------

//--------------------------------------------
  //Task: h4 "Contact"

//--------------------------------------------
  //Task: p "123 Way 456 Street<br>Somewhere, USA"

//--------------------------------------------
  //Task: p "1 (888) 888-8888"

//--------------------------------------------
  //Task: p "sales@greatidea.io"

//Footer---------------------------------------------

  //Task: p "Copyright Great Idea! 2018"
