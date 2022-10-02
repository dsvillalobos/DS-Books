//JavaScript

let OS = navigator.userAgent || navigator.vendor || window.opera;
let ReadButton = document.getElementById("Read-Button");

function TheFour() {
  openDescription(
    "The Four",
    "/Book-Cover/Tech/The-Four-Book-Cover.webp",
    "Scott Galloway",
    "2017",
    "239",
    "Technology, Science"
  );
  ReadButton.setAttribute("href", "/Books/Tech/The Four.pdf");

  if (/android/i.test(OS)) {
    ReadButton.setAttribute(
      "href",
      "https://drive.google.com/file/d/1mqtRciIwCkuF6CFhrA9sAR254KBFKDfh/view?usp=sharing"
    );
  }
}

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

function LifeafterGoogle() {
  openDescription(
    "Life after Google",
    "/Book-Cover/Tech/Life-after-Google-Book-Cover.webp",
    "George Gilder",
    "2018",
    "278",
    "Technology, Blockchain"
  );
  ReadButton.setAttribute("href", "/Books/Tech/Life after Google.pdf");

  if (/android/i.test(OS)) {
    ReadButton.setAttribute(
      "href",
      "https://drive.google.com/file/d/1DmxTONSaQjdZdlpIL0y6Rr87KIjbamoT/view?usp=sharing"
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

class TechBooks extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
          <!-- 1st Book Row -->
          <div class="Book-Row">
              <!-- The Four -->
              <a href="javascript:void(0)" onclick="TheFour()">
                  <img
                  class="First-Book"
                  src="/Book-Cover/Tech/The-Four-Book-Cover.webp"
                  alt="The Four"
                  loading="lazy"
                  />
              </a>
              <!-- Blockchain for Dummies -->
              <a href="javascript:void(0)" onclick="BlockchainforDummies()">
                  <img
                  class="Second-Book"
                  src="/Book-Cover/Tech/Blockchain-for-Dummies-Book-Cover.webp"
                  alt="Blockchain for Dummies"
                  loading="lazy"
                  />
              </a>
              </div>
              <!-- 2nd Book Row -->
              <div class="Book-Row">
              <!-- Steve Jobs -->
              <a href="javascript:void(0)" onclick="SteveJobs()">
                  <img
                  class="First-Book"
                  src="/Book-Cover/Tech/Steve-Jobs-Book-Cover.webp"
                  alt="Steve Jobs"
                  loading="lazy"
                  />
              </a>
              <!-- Life after Google -->
              <a href="javascript:void(0)" onclick="LifeafterGoogle()">
                  <img
                  class="Second-Book"
                  src="/Book-Cover/Tech/Life-after-Google-Book-Cover.webp"
                  alt="Life after Google"
                  loading="lazy"
              /></a>
              </div>
              <!-- 3rd Book Row -->
              <div class="Book-Row">
              <!-- The Soul of a New Machine -->
              <a href="javascript:void(0)" onclick="TheSoulofaNewMachine()">
                  <img
                  class="First-Book"
                  src="/Book-Cover/Tech/The-Soul-of-a-New-Machine-Book-Cover.webp"
                  alt="The Soul of a New Machine"
                  loading="lazy"
                  />
              </a>
              <!-- Hello World -->
              <a href="javascript:void(0)" onclick="HelloWorld()">
                  <img
                  class="Second-Book"
                  src="/Book-Cover/Tech/Hello-World-Book-Cover.webp"
                  alt="Hello World"
                  loading="lazy"
                  />
              </a>
          </div>
      `;
  }
}

customElements.define("import-tech-books", TechBooks);
