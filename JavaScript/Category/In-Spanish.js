//JavaScript

let OS = navigator.userAgent || navigator.vendor || window.opera;
let ReadButton = document.getElementById("Read-Button");

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

function PeterPan() {
  openDescription(
    "Peter Pan",
    "/Book-Cover/In Spanish/Peter-Pan-Book-Cover.webp",
    "James Matthew Barrie",
    "1911",
    "68",
    "Novel, Children's Literature"
  );
  ReadButton.setAttribute("href", "/Books/In Spanish/Peter Pan.pdf");

  if (/android/i.test(OS)) {
    ReadButton.setAttribute(
      "href",
      "https://drive.google.com/file/d/11VcX03yVOhV3W4246pB-2PaK3J1fuWLQ/view?usp=sharing"
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

function _1984() {
  openDescription(
    "1984",
    "/Book-Cover/In Spanish/1984-Book-Cover.webp",
    "George Orwell",
    "1949",
    "150",
    "Dystopian, Fiction"
  );
  ReadButton.setAttribute("href", "/Books/In Spanish/1984.pdf");

  if (/android/i.test(OS)) {
    ReadButton.setAttribute(
      "href",
      "https://drive.google.com/file/d/1nXftw00U_3KEkg5_FGDoFU0W5cc1Z4md/view?usp=sharing"
    );
  }
}

function LaMetamorfosis() {
  openDescription(
    "La Metamorfosis",
    "/Book-Cover/In Spanish/La-Metamorfosis-Book-Cover.webp",
    "Franz Kafka",
    "1915",
    "37",
    "Fantasy, Fiction"
  );
  ReadButton.setAttribute("href", "/Books/In Spanish/La Metamorfosis.pdf");

  if (/android/i.test(OS)) {
    ReadButton.setAttribute(
      "href",
      "https://drive.google.com/file/d/1VMVrpmkNxYGFw8cXQdi8bOcuRu0-m0hV/view?usp=sharing"
    );
  }
}

function OrgulloyPrejuicio() {
  openDescription(
    "Orgullo y Prejuicio",
    "/Book-Cover/In Spanish/Orgullo-y-Prejuicio-Book-Cover.webp",
    "Jane Austen",
    "1813",
    "187",
    "Classics, Fiction, Romance"
  );
  ReadButton.setAttribute("href", "/Books/In Spanish/Orgullo y Prejuicio.pdf");

  if (/android/i.test(OS)) {
    ReadButton.setAttribute(
      "href",
      "https://drive.google.com/file/d/1G8GwaW0HZlDHBjtAIwkYUNTsycFYYIk7/view?usp=sharing"
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
