//JavaScript

let OS = navigator.userAgent || navigator.vendor || window.opera;
let ReadButton = document.getElementById("Read-Button");

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

function TreasureIsland() {
  openDescription(
    "Treasure Island",
    "/Book-Cover/Kids/Treasure-Island-Book-Cover.webp",
    "Robert Louis Stevenson",
    "1883",
    "266",
    "Adventure, Fiction"
  );
  ReadButton.setAttribute("href", "/Books/Kids/Treasure Island.pdf");

  if (/android/i.test(OS)) {
    ReadButton.setAttribute(
      "href",
      "https://drive.google.com/file/d/1Saim-MwUnHqiYMZFkSzI7iCf5mfqvaq0/view?usp=sharing"
    );
  }
}

function AliceinWonderland() {
  openDescription(
    "Alice in Wonderland",
    "/Book-Cover/Kids/Alice-in-Wonderland-Book-Cover.webp",
    "Lewis Carroll",
    "1865",
    "120",
    "Fantasy"
  );
  ReadButton.setAttribute("href", "/Books/Kids/Alice in Wonderland.pdf");

  if (/android/i.test(OS)) {
    ReadButton.setAttribute(
      "href",
      "https://drive.google.com/file/d/1hLFGTzPFtyPPUjIeEeCs0Jc_H5pSgmpG/view?usp=sharing"
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

function TheGiftoftheMagi() {
  openDescription(
    "The Gift of the Magi",
    "/Book-Cover/Kids/The-Gift-of-the-Magi-Book-Cover.webp",
    "O. Henry",
    "1905",
    "20",
    "Holiday Fiction"
  );
  ReadButton.setAttribute("href", "/Books/Kids/The Gift of the Magi.pdf");

  if (/android/i.test(OS)) {
    ReadButton.setAttribute(
      "href",
      "https://drive.google.com/file/d/145BqIPDuirqc8b45kare41D-K-8l9BVW/view?usp=sharing"
    );
  }
}

function TheWizardOfOz() {
  openDescription(
    "The Wonderful Wizard<br>of Oz",
    "/Book-Cover/Kids/The-Wonderful-Wizard-of-Oz-Book-Cover.webp",
    "L. Frank Baum",
    "1900",
    "123",
    "Fantasy, Fiction"
  );
  ReadButton.setAttribute("href", "/Books/Kids/The Wonderful Wizard of Oz.pdf");

  if (/android/i.test(OS)) {
    ReadButton.setAttribute(
      "href",
      "https://drive.google.com/file/d/1JPSyhacW1pEBOHxlGCDXTAffWeDPSbNc/view?usp=sharing"
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
