//JavaScript

let OS = navigator.userAgent || navigator.vendor || window.opera;
let ReadButton = document.getElementById("Read-Button");

//New Books
function BlockchainforDummies() {
  openDescription(
    "Blockchain for<br>Dummies",
    "/Book-Cover/Tech/Blockchain-for-Dummies-Book-Cover.webp",
    "Tiana Laurence",
    "2017",
    "235",
    "Technology, Blockchain"
  );
  ReadButton.setAttribute("href", "/Books/Tech/Blockchain for Dummies.pdf");

  if (/android/i.test(OS)) {
    ReadButton.setAttribute(
      "href",
      "https://drive.google.com/file/d/1r3eL5poWc456BXBqhmHU5ZOA5eeuq_7k/view?usp=sharing"
    );
  }
}

function TheSoulofaNewMachine() {
  openDescription(
    "The Soul of a New<br>Machine",
    "/Book-Cover/Tech/The-Soul-of-a-New-Machine-Book-Cover.webp",
    "Tracy Kidder",
    "1981",
    "308",
    "Programming, Technology"
  );
  ReadButton.setAttribute("href", "/Books/Tech/The Soul of a New Machine.pdf");

  if (/android/i.test(OS)) {
    ReadButton.setAttribute(
      "href",
      "https://drive.google.com/file/d/1mkGt4I-EgvclraZ9tgFBGS36Tej10IZx/view?usp=sharing"
    );
  }
}

function HelloWorld() {
  openDescription(
    "Hello World",
    "/Book-Cover/Tech/Hello-World-Book-Cover.webp",
    "Hannah Fry",
    "2018",
    "250",
    "Technology, Science"
  );
  ReadButton.setAttribute("href", "/Books/Tech/Hello World.pdf");

  if (/android/i.test(OS)) {
    ReadButton.setAttribute(
      "href",
      "https://drive.google.com/file/d/1AeS-Otp3bZwBBhcy9k1dXYNLL7GKrcb5/view?usp=sharing"
    );
  }
}

function SteveJobs() {
  openDescription(
    "Steve Jobs",
    "/Book-Cover/Tech/Steve-Jobs-Book-Cover.webp",
    "Walter Isaacson",
    "2011",
    "343",
    "Technology, Science"
  );
  ReadButton.setAttribute("href", "/Books/Tech/Steve Jobs.pdf");

  if (/android/i.test(OS)) {
    ReadButton.setAttribute(
      "href",
      "https://drive.google.com/file/d/1Rqi4-yHFjjB-MG0CKW9q5bXTT4w1QiBT/view?usp=sharing"
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
