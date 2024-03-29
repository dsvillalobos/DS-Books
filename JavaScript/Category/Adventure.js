//JavaScript

let OS = navigator.userAgent || navigator.vendor || window.opera;
let ReadButton = document.getElementById("Read-Button");

function TreasureIsland() {
  openDescription(
    "Treasure Island",
    "/Book-Cover/Adventure/Treasure-Island-Book-Cover.webp",
    "Robert Louis Stevenson",
    "1883",
    "266",
    "Adventure, Fiction"
  );
  ReadButton.setAttribute("href", "/Books/Adventure/Treasure Island.pdf");

  if (/android/i.test(OS)) {
    ReadButton.setAttribute(
      "href",
      "https://drive.google.com/file/d/1wNzji0R7rSPdVp-v-_D81xvcNX_TSfNC/view?usp=sharing"
    );
  }
}

function _20000LeaguesUndertheSea() {
  openDescription(
    "20000 Leagues Under<br>the Sea",
    "/Book-Cover/Adventure/20000-Leagues-Under-The-Sea-Book-Cover.webp",
    "Jules Verne",
    "1870",
    "297",
    "Science Fiction, Adventure"
  );
  ReadButton.setAttribute(
    "href",
    "/Books/Adventure/20000 Leagues Under the Sea.pdf"
  );

  if (/android/i.test(OS)) {
    ReadButton.setAttribute(
      "href",
      "https://drive.google.com/file/d/14-1JckltR7_iewDNl1RLoc1ON-VMezPM/view?usp=sharing"
    );
  }
}

function TheWarofTheWorlds() {
  openDescription(
    "The War of the Worlds",
    "/Book-Cover/Adventure/The-War-of-the-Worlds-Book-Cover.webp",
    "H.G. Wells",
    "1897",
    "157",
    "Adventure, Fiction"
  );
  ReadButton.setAttribute("href", "/Books/Adventure/The War of the Worlds.pdf");

  if (/android/i.test(OS)) {
    ReadButton.setAttribute(
      "href",
      "https://drive.google.com/file/d/1kPvnnYvoz4CSoZ9KomdQuHvTILw5hg3e/view?usp=sharing"
    );
  }
}

function AroundtheWorldinEightyDays() {
  openDescription(
    "Around the World in<br>Eighty Days",
    "/Book-Cover/Adventure/Around-the-World-in-Eighty-Days-Book-Cover.webp",
    "Jules Verne",
    "1872",
    "201",
    "Adventure"
  );
  ReadButton.setAttribute(
    "href",
    "/Books/Adventure/Around the World in 80 Days.pdf"
  );

  if (/android/i.test(OS)) {
    ReadButton.setAttribute(
      "href",
      "https://drive.google.com/file/d/1xhrKhcNQ7zNcRHb0wWKtLwdQFmXMN15W/view?usp=sharing"
    );
  }
}

function TheAlchemist() {
  openDescription(
    "The Alchemist",
    "/Book-Cover/Adventure/The-Alchemist-Book-Cover.webp",
    "Paulo Coelho",
    "1988",
    "125",
    "Quest, Adventure, Fantasy"
  );
  ReadButton.setAttribute("href", "/Books/Adventure/The Alchemist.pdf");

  if (/android/i.test(OS)) {
    ReadButton.setAttribute(
      "href",
      "https://drive.google.com/file/d/1jbHTVur345RfHEPjEB7HoygPhbcM_upW/view?usp=sharing"
    );
  }
}

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
