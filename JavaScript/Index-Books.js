//JavaScript

let OS = navigator.userAgent || navigator.vendor || window.opera;
let ReadButton = document.getElementById("Read-Button");

//New Books
function PeterPan() {
  openDescription(
    "Peter Pan",
    "/Book-Cover/Kids/Peter-Pan-Book-Cover.webp",
    "James Matthew Barrie",
    "1911",
    "137",
    "Novel, Children's Literature"
  );
  ReadButton.setAttribute("href", "/Books/Kids/Peter Pan.pdf");

  if (/android/i.test(OS)) {
    ReadButton.setAttribute(
      "href",
      "https://drive.google.com/file/d/1VVc9qRt_OglME_W89JPAd83iNV5bLtAj/view?usp=sharing"
    );
  }
}

function LittleWomen() {
  openDescription(
    "Little Women",
    "/Book-Cover/Kids/Little-Women-Book-Cover.webp",
    "Louisa May Alcott",
    "1868",
    "483",
    "Comedy, Children's Literature"
  );
  ReadButton.setAttribute("href", "/Books/Kids/Little Women.pdf");

  if (/android/i.test(OS)) {
    ReadButton.setAttribute(
      "href",
      "https://drive.google.com/file/d/1FKqmVIdaSxEDcKGb6MWN7769Qd5TVEsS/view?usp=sharing"
    );
  }
}

function RebelionEnLaGranja() {
  openDescription(
    "Rebelión en la Granja",
    "/Book-Cover/In Spanish/Rebelion-en-la-Granja-Book-Cover.webp",
    "George Orwell",
    "1945",
    "64",
    "Satire, Allegory, Fable"
  );
  ReadButton.setAttribute(
    "href",
    "/Books/In Spanish/Rebelion en la Granja.pdf"
  );

  if (/android/i.test(OS)) {
    ReadButton.setAttribute(
      "href",
      "https://drive.google.com/file/d/1TJpZ6doD7JsqpQp9Zf67GEe_arPi05Pn/view?usp=sharing"
    );
  }
}

function ElGatoNegro() {
  openDescription(
    "El Gato Negro",
    "/Book-Cover/In Spanish/El-Gato-Negro-Book-Cover.webp",
    "Edgar Allan Poe",
    "1843",
    "9",
    "Horror"
  );
  ReadButton.setAttribute("href", "/Books/In Spanish/El Gato Negro.pdf");

  if (/android/i.test(OS)) {
    ReadButton.setAttribute(
      "href",
      "https://drive.google.com/file/d/1lA1tFneAeNDd4Bc884qkEEtGENNj60Wy/view?usp=sharing"
    );
  }
}

//Trending Books
function TheMartian() {
  openDescription(
    "The Martian",
    "/Book-Cover/Adventure/The-Martian-Book-Cover.webp",
    "Andy Weir",
    "2011",
    "318",
    "Fiction, Adventure"
  );
  ReadButton.setAttribute("href", "/Books/Adventure/The Martian.pdf");

  if (/android/i.test(OS)) {
    ReadButton.setAttribute(
      "href",
      "https://drive.google.com/file/d/17XaVB09_uyvTF4NmQqBXKENJXpc9E9fm/view?usp=sharing"
    );
  }
}

function _112263() {
  openDescription(
    "11.22.63",
    "/Book-Cover/Thriller/11.22.63-Book-Cover.webp",
    "Stephen King",
    "2011",
    "717",
    "Science Fiction, Thriller"
  );
  ReadButton.setAttribute("href", "/Books/Thriller/11.22.63.pdf");

  if (/android/i.test(OS)) {
    ReadButton.setAttribute(
      "href",
      "https://drive.google.com/file/d/1AGiD-F5YMLt_mIPiho4CelvMVOZNlci8/view?usp=sharing"
    );
  }
}

function TheBookThief() {
  openDescription(
    "The Book Thief",
    "/Book-Cover/Fiction/The-Book-Thief-Book-Cover.webp",
    "Markus Zusak",
    "2005",
    "576",
    "Fiction"
  );
  ReadButton.setAttribute("href", "/Books/Fiction/The Book Thief.pdf");

  if (/android/i.test(OS)) {
    ReadButton.setAttribute(
      "href",
      "https://drive.google.com/file/d/1oL3aueaLefJoKf1LL6gH0cOOs0AarM9i/view?usp=sharing"
    );
  }
}

function _1984() {
  openDescription(
    "1984",
    "/Book-Cover/Fiction/1984-Book-Cover.webp",
    "George Orwell",
    "1949",
    "250",
    "Dystopian, Fiction"
  );
  ReadButton.setAttribute("href", "/Books/Fiction/1984.pdf");

  if (/android/i.test(OS)) {
    ReadButton.setAttribute(
      "href",
      "https://drive.google.com/file/d/12xPWzn2ctLUAY_a8ZivagmDsdc7rWo1V/view?usp=sharing"
    );
  }
}

function PrideandPrejudice() {
  openDescription(
    "Pride and Prejudice",
    "/Book-Cover/Fiction/Pride-and-Prejudice-Book-Cover.webp",
    "Jane Austen",
    "1813",
    "315",
    "Classics, Fiction, Romance"
  );
  ReadButton.setAttribute("href", "/Books/Fiction/Pride and Prejudice.pdf");

  if (/android/i.test(OS)) {
    ReadButton.setAttribute(
      "href",
      "https://drive.google.com/file/d/1K5j4om7pMKors0komr9rsx9feo_FFuAg/view?usp=sharing"
    );
  }
}

function openDescription(
  Title,
  BookCover,
  Author,
  PublicationDate,
  Pages,
  Genre
) {
  document.getElementById("Book-Description").style.width = "100%";
  document.getElementById("Book-Title").innerHTML = Title;
  document.getElementById("Book-Cover").setAttribute("src", BookCover);
  document.getElementById("Author").innerHTML = Author;
  document.getElementById("Publication-Date").innerHTML = PublicationDate;
  document.getElementById("Pages").innerHTML = Pages;
  document.getElementById("Genre").innerHTML = Genre;
}

function closeDescription() {
  document.getElementById("Book-Description").style.width = "0%";
}
