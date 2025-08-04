


const button  = document.getElementById("alertBtn");
const alertMenu = document.getElementById("menu");
const closeBtn = document.querySelector(".close-Btn");


function openModal(){
    alertMenu.style.display = "flex";
}
function closemodal(){
    alertMenu.style.display = "none";
}

button.addEventListener("click",openModal);
closeBtn.addEventListener("click",closemodal);


window.addEventListener("keydown",(Event) =>{
     if(Event.key === Tab){
        closemodal();
     }
})
const cardDetails = [{Image:"imgs/images/whiskey/w2.png",
    heading:"Select Reserve",
    paragraph:"Select Reserve is a triple <br>distilled blend of rish a pot still<br>and grain whiskey that is <br>matured in a mixture of sherryt <br>casks and bourbon barrels ",
    button:"Order Now",
    rating:"4",


},
{Image:"imgs/images/whiskey/w1.png",
    heading:"Limited Reserve",
    paragraph:"Matured for 18 years in hand-<br>selected oak casks from Europe <br>and America,this rare whiskey <br>is finished in first-fill bourbon<br>barrels",
    button:"Order Now",
    rating:"4",

},
{Image:"imgs/images/whiskey/w4.png",
    heading:"Gold Reserve",
    paragraph:"Arish and chewy entry in the <br>Jameson range,with three<br>styles of pot still spirit carefully<br>balanced <br> <br>     ",
    button:"Order Now",
    rating:"4",


},
{Image:"imgs/images/whiskey/w3.png",
    heading:"Special Reserve",
    paragraph:"This is a smooth, spicy 12<br>year old blended Irish <br>whiskey with good content<br>of pure potstil.<br> <br> ",
    button:"Order Now",
    rating:"4",


},



];

function cardCreate() {
    const container = document.getElementById("cardcontainer");

    cardDetails.forEach(card => {
        const cardElement = document.createElement("div");
        cardElement.classList.add("card");

        let stars  ='';
        for (let i = 0; i < 5; i++){
            if (i < Math.floor(card.rating)){
                stars += '<span class="star filled">★</span>'
            }
            else{
                stars += '<span class="star">☆</span>'
            }
        }

        cardElement.innerHTML = `
            <img src="${card.Image}" alt="${card.heading}">
            <div class="stars">${stars}</div>
            <h2>${card.heading}</h2>
            <p>${card.paragraph}</p>
            <button>${card.button}</button>
        `;

        container.appendChild(cardElement);
    });
}

document.addEventListener("DOMContentLoaded",cardCreate());


const cardDetail = [{Image:"imgs/images/whiskey2/1.png",
    heading:"Caskmates",
    paragraph:"Jameson Caskmates Stout and<br>IPA edition-triple distilled<br>whiskey you love finished in<br>craft beer barrels<br> <br> ",
    button:"Order Now",
    rating:"4",
},

 {Image:"imgs/images/whiskey2/2.png",
    heading:"Blender's Dog",
    paragraph:"A rich, round, creamy<br>mouthful , with the sweetness<br>of butterscotch,giving the way to<br>the prickle of the pot still spices<br> <br> ",
    button:"Order Now",
    rating:"4",
},

{Image:"imgs/images/whiskey2/3.png",
    heading:"Black bBarrel",
    paragraph:"Is our tribute to our coopers,<br>who painstakingly give their<br>bourbon barrels an additional<br>charring reveal their untold<br>rishness ",
    button:"Order Now",
    rating:"4",
},
{Image:"imgs/images/whiskey2/4.png",
    heading:"Crested",
    paragraph:"Crested is a tribute to the first<br>drops bottled at The Bow Street Distillery andit is<br>Jameson's oldest distillery<br>bottled brand ",
    button:"Order Now",
    rating:"4",
},



]
function Create() {
    const container = document.getElementById("carding");
    cardDetail.forEach(card => {
        const cardElement = document.createElement("div");
        cardElement.classList.add("card"); 

        let stars  ='';
        for (let i = 0; i < 5; i++){
            if (i < Math.floor(card.rating)){
                stars += '<span class="star filled">★</span>'
            }
            else{
                stars += '<span class="star">☆</span>'
            }
        }

        cardElement.innerHTML = `
            <img src="${card.Image}" alt="${card.heading}">
            <div class="stars">${stars}</div>
            <h2>${card.heading}</h2>
            <p>${card.paragraph}</p>
            <button>${card.button}</button>
        `;

        container.appendChild(cardElement);
    });


}
document.addEventListener("DOMContentLoaded",Create());


const cardDetain = [{Image:"imgs/images/testmonials/1.png",
    heading:"David Beckam",
    paragraph:"Jameson Gold Rerserve<br>Remarkably,it lingers<br>with the essence of<br>milk chocolate and<br>butterscotch <br> <br> ",
    rating:"4",


},
{Image:"imgs/images/testmonials/2.png",
    heading:"Jordan Sancho",
    paragraph:"My go-to crocktail.<br>The best everyday<br>whiskey in the world <br> <br> <br> <br> ",
    rating:"4",


},
{Image:"imgs/images/testmonials/3.png",
    heading:"Serena Williams",
    paragraph:"Excellent lrish sipping whiskey.But if<br>you have to dilute there is nothing<br>better than Jamison and ginger ale<br>with a slice or lime!And if you are in<br>Northern lreland, visit the distiller,.<br>great tour ",
    rating:"4",


},



]

function Creation() {
    const container = document.getElementById("cording");
    cardDetain.forEach(card => {
        const cardElement = document.createElement("div");
        cardElement.classList.add("card"); 

        let stars  ='';
        for (let i = 0; i < 5; i++){
            if (i < Math.floor(card.rating)){
                stars += '<span class="star filled">★</span>'
            }
            else{
                stars += '<span class="star">☆</span>'
            }
        }

        cardElement.innerHTML = `
            <img src="${card.Image}" alt="${card.heading}">
            <div class="stars">${stars}</div>
            <p>${card.paragraph}</p>
             <h6>${card.heading}</h6>
            
        `;

        container.appendChild(cardElement);
    });
}
document.addEventListener("DOMContentLoaded",Creation());



  








































