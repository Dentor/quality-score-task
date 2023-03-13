/*Creating the Produc Object with the parameters I got from the task*/
let product = [
    {
      "ammount" : 1,
      "retail" : 58.00 ,
      "price" : 39.95 ,
      "subscribe" : 35.95 ,
      "link" : "www.tracker.com/link-1",
      "subscribeLink" : "www.tracker.com/subscribe-link-1"
    },
    {
        "ammount" : 3,
        "retail" : 174.00 ,
        "price" : 102.00 ,
        "subscribe" : 91.80 ,
        "link" : "www.tracker.com/link-3",
        "subscribeLink" : "www.tracker.com/subscribe-link-3"
      },
      {
        "ammount" : 6,
        "retail" : 348.00 ,
        "price" : 186.00 ,
        "subscribe" : 167.40 ,
        "link" : "www.tracker.com/link-6",
        "subscribeLink" : "www.tracker.com/subscribe-link-6"
      }
];
/*Creating a bollean varuble for the subscribed check*/
let subscribed = false;

/*Bol varuble to check if the buy-now is available*/
available = true

/*Creating a global varuble to store product ammount*/
let productNumber = 3;

/*Creating a link varuble for the final purches*/ 
buyLink = product[1].link;

/*Declaring all dom elements selectors that I need for the page function*/

/*To update image*/
let productImage = document.querySelector(".product-image");

/*To update the price*/
let finalPrice = document.querySelector(".final-price");
let retailPrice = document.querySelector(".retail-price");
let savingPrice = document.querySelector(".saving-price");

/*To update the stomp*/
let stomp = document.querySelector(".product-stamp");

/*To update the subscribe text box*/
let subscriptionBox = document.querySelector(".subscribtion-box");

/*Tu update the checkbox */
let checkBox = document.querySelector(".check-box");
/*To update CTA color */
let cta = document.querySelector(".cta");


/*This function will change the annount of the packages, and the background of the packages*/
function annount(number, event) {
  let boxes = document.getElementsByClassName("ammount-box");

  /*Loop through all the elements with the class "ammount-box"*/
  for (let i = 0; i < boxes.length; i++) {
    /*Remove the "box-selected" class from all elements*/
    boxes[i].classList.remove("box-selected");
  }

  /*Add the "box-selected" class to the clicked element*/
  event.target.classList.add("box-selected");
  
  /*Update the product-ammount class of the product-image element*/
  productImage.classList.remove("product-ammount-" + (productNumber));
  productImage.classList.add("product-ammount-" + number);
  productNumber = number;

  /*This function call for the price change of the product, depend of the number the client want to order*/
  ammountChange(number)
}

/*This function will change the subscription option for the product*/
function subscribe(bol, event) {
  let boxes = document.getElementsByClassName("subscribe-box");
  let ammount = document.querySelector(".ammount-box.box-selected");
  let ammountNumber = ammount.innerHTML;
  
  subscribed = bol;
  ammountNumber = parseInt(ammountNumber);
  
  if(bol) {
    subscriptionBox.style.display="block";
    cta.classList = "cta disabled";
    available = false;

  } else {
    subscriptionBox.style.display="none";
    cta.classList = "cta";
    available = true;
  }
  
  /*Loop through all the elements with the class "subscribe-box"*/
  for (let i = 0; i < boxes.length; i++) {
    /*Remove the "box-selected" class from all elements*/
    boxes[i].classList.remove("box-selected");
  }

  /*Add the "box-selected" class to the clicked element*/
  event.target.classList.add("box-selected");
  
  /*This function call for the price change of the product, depend of the number the client want to order, with subscription*/
  ammountChange(ammountNumber);
}


function ammountChange(number) {
  /*Depend if the subscribe is true, or false I will change the price ammount for the products according the ammount*/
  /*plus change the CTA link according the ammount*/
  if(subscribed) {
    switch (number) {
      case 1:
        finalPrice.textContent = "$" +product[0].subscribe.toFixed(2);
        retailPrice.textContent = "$" +product[0].retail.toFixed(2);
        savingPrice.textContent = "$" +(product[0].retail - product[0].subscribe).toFixed(2);
        stomp.classList = "product-stamp";
        stomp.innerHTML = "";
        buyLink = product[0].subscribeLink;
      break;
      case 3:
        finalPrice.textContent = "$" +product[1].subscribe.toFixed(2);
        retailPrice.textContent = "$" +product[1].retail.toFixed(2);
        savingPrice.textContent = "$" +(product[1].retail - product[1].subscribe).toFixed(2);
        stomp.classList = "product-stamp pink-stomp";
        stomp.innerHTML = "Best <br> Seller";
        buyLink = product[1].subscribeLink;
      break;
      case 6:
        finalPrice.textContent = "$" +product[2].subscribe.toFixed(2);
        retailPrice.textContent = "$" +product[2].retail.toFixed(2);
        savingPrice.textContent = "$" +(product[2].retail - product[2].subscribe).toFixed(2);
        stomp.classList = "product-stamp green-stomp";
        stomp.innerHTML = "Best <br> Value";
        buyLink = product[2].subscribeLink;
      break;
    }
  } else {
    switch (number) {
      case 1:
        finalPrice.textContent = "$" +product[0].price.toFixed(2);
        retailPrice.textContent = "$" +product[0].retail.toFixed(2);
        savingPrice.textContent = "$" +(product[0].retail - product[0].price).toFixed(2);
        stomp.classList = "product-stamp";
        stomp.innerHTML = "";
        buyLink = product[0].link;
      break;
      case 3:
        finalPrice.textContent = "$" +product[1].price.toFixed(2);
        retailPrice.textContent = "$" +product[1].retail.toFixed(2);
        savingPrice.textContent = "$" +(product[1].retail - product[1].price).toFixed(2);
        stomp.classList = "product-stamp pink-stomp";
        stomp.innerHTML = "Best <br> Seller";
        buyLink = product[1].link;
      break;
      case 6:
        finalPrice.textContent = "$" +product[2].price.toFixed(2);
        retailPrice.textContent = "$" +product[2].retail.toFixed(2);
        savingPrice.textContent = "$" +(product[2].retail - product[2].price).toFixed(2);
        stomp.classList = "product-stamp green-stomp";
        stomp.innerHTML = "Best <br> Value";
        buyLink = product[2].link;
      break;
    }
  }
}

/*This will make sure that the CTA is disabled if the user didn't used the checkbox*/
function checkToggle() {
  available = !available;
  if(available) {
    checkBox.classList = "check-box triggerd";
    cta.classList = "cta";
  } else {
    checkBox.classList = "check-box";
    cta.classList = "cta disabled";
  }
}


/*Open the product buy window*/
function buyEvent() {
  if(available) {
    window.open(buyLink);
  }
}