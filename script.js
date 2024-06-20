//always move scroll the page back to top when the page refresh
const targetY = document.getElementsByClassName("Flowers1");
const bodyElement = document.getElementById("mainContent");
const mainPage = document.getElementById("mainPage");
const preloader = document.getElementById("preloadScreen");

document.addEventListener("DOMContentLoaded", ready);
preloader.style.display = "block";
mainPage.style.display = "none";
bodyElement.style.display = "none";

function ready() {
  setTimeout(() => {
    showMainPage();
  }, 3000);
} 

window.onload = function () {
  window.scrollTo({ top: targetY, behavior: "smooth" });
  preloader.style.display = "none";
  bodyElement.style.display = "none";
};

function showMainPage() {
  preloader.style.display = "none";
  mainPage.style.display = "block";
}

function ScrollToTop() {
  window.scrollTo({ top: targetY, behavior: "smooth" });
} 

//when the button is clicked, the website will check if it's invited or not
function checkName() {
  const name = document.getElementById("userName").value.trim();
  const outputName = document.getElementById("userNameText");
  const tableNumber = document.getElementById("seatNumberText");
  const userInput = document.getElementById("userName");
  const rejectText = document.getElementById("reject");
  const statement = document.getElementById("statement");

  if (name === "") {
    rejectText.style.display = "block";
    statement.innerHTML = "Enter your name first!";
    window.scrollTo({ top: targetY, behavior: "smooth" });
    setTimeout(() => {
      bodyElement.style.display = "none";
      rejectText.style.display = "none";
    }, 1000);
  } else if (!guestList[name]) {
    statement.innerHTML = "Sorry you are not invited.";
    window.scrollTo({ top: targetY, behavior: "smooth" });
    rejectText.style.display = "block";
    userInput.value = "";
    window.scrollTo({ top: targetY, behavior: "smooth" });
    setTimeout(() => {
      bodyElement.style.display = "none";
      rejectText.style.display = "none";
    }, 1000);
  } else {
    bodyElement.style.display = "block";
    document.body.style.overflowY = "scroll";
    rejectText.style.display = "none";
    const targetY = document.getElementById("resultPart").offsetTop;
    window.scrollTo({
      top: targetY,
      behavior: "smooth",
    });

    userInput.value = "";
    outputName.innerHTML = name;
    tableNumber.innerHTML = guestList[name];
  }
}


//lists of names that is invited
const guestList = {
  //Debutante
  "Juliana Kim Borbe": 18,

  //Table 01 (VIP)
  "Egay Merced": 1,
  "Tsay chai Merced": 1,
  "Yollo Eulogio": 1,
  "Marilou Merced": 1,
  "Sally Cadalin": 1,
  "Recto Furio": 1,
  "Darwin Merced": 1,
  "Jomar Cadalin": 1,
  "Albert Deocareza": 1,
  "Jesalie Deocareza": 1,
  "AJ Deocareza": 1,
  "Jamille Clemente": 1,
  "Vanna Clemente": 1,
  "Jhay Ar Clemente": 1,
  "Vanna Clemente": 1,
  "Dana Merced": 1,
  "Jomari Quijano": 1,
  "Aiden Quijano": 1,
  "Carlos Merced": 1,

  //Table 02
  "Edrich Merced": 2,
  "Dave Merced": 2,
  "Emay Merced": 2,
  "Ahsec Deocareza": 2,
  "Timothy Merced": 2,
  "Elizer Daugdaug": 2,
  "Jed Daugdaug": 2,
  "Dale Merced": 2,

  //Table 03
  "Jennica Concepcion": 3,
  "Angel Daugdaug": 3,
  "Ella Daugdaug": 3,
  "Jazmine Daugdaug": 3,
  "Cristinejoy Galang": 3,
  "Clarize Romero": 3,
  "Sophia Kimberly Borbe": 3,
  "Airabelle Caparas": 3,
  "KC Dalida": 3,

  //Table 04
  "Joshua Paul De Borja": 4,
  "Jaiden Ezekiel Manzanares": 4,
  "Raica Denise Robale": 4,
  "John Magnaye": 4,
  "Christian Emmanuel Collo": 4,
  "Margaret Julianne Juan": 4,
  "Lemuel Clemente": 4,
  "Zyke Kahlil Valenzuela": 4,

  //Table 05
  "Hannah Tolentino": 5,
  "John Troy Laurio": 5,
  "Kristine Herrero": 5,
  "Marck Joseph Basig": 5,
  "Joey Boy Fernandez": 5,
  "Miguel Pua": 5,
  "Jay - jay Dawal": 5,

  //Table 06
  "Samantha Grace Liwanag": 6,
  "Nicole Dejan": 6,
  "Katherine Batiles": 6,
  "Fiona Maergreth Asuncion": 6,
  "Jhemaeca Umusig": 6,
  "Ricah Botobara": 6,
  "Alex Rhian Poblete": 6,

  //Table 07
  "Lovely Jhane Aceituna": 7,
  "Mae Cel Atienza": 7,
  "Dezirei Amar": 7,
  "Hearty Ocampo": 7,
  "Elwina Aragona": 7,
  "Glen Gomez": 7,
  "Heaven Morales": 7,

  //Table 08
  "Denver Trinidad": 8,
  "Xyrhid Kheira Barrientos": 8,
  "Allyson Delfinado": 8,
  "Marial Baldo": 8,
  "Therese Joie Cortez": 8,
  "Arleen Cansicio": 8,
  "Andrea Nicole Gudio": 8,
  

  //Table 09
  "Dougle Dela Cruz": 9,
  "Jerlyn Jornalin": 9,
  "Jayrichmond Geral": 9,
  "Prince Valdez": 9,
  "Gian Duma": 9,
  "Ruth Quinn Gaspar": 9,

  //Table 10
  "Kenneth Carl Concepcion": 10,
  "Mon Mon": 10,
  Paulo: 10,
  Raymond: 10,
  Ecat: 10,
  Jerry: 10,
  Geloy: 10,

  //Table 11
  "Rico Aceituna": 11,
  "Oyah Bathan": 11,
  "Dante Bathan": 11,
  "Annie Tenorio Montalban": 11,
  "Aleli Rona Tenorio": 11,
  "Sheryl lou Terrano": 11,

  //Table 12
  "Mhean Borbe": 12,
  "Hannah Borbe": 12,
  "Josephine Sangalang": 12,
  "Jiana Fancheska": 12,
  "Justine Borbe": 12,
  "Rae Shelle Villaluna": 12,
  "Mikiella Villaluna": 12,

  // Add more guests as needed
};
