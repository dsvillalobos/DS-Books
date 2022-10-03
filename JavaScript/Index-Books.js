//JavaScript

//Top Categories
class TopCategoriesSlider extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <div class="Slider">
          <!-- Adventure -->
          <div class="Card">
            <a href="/Category/Adventure.html">
              <img class="scale-in-center" src="/Images/Category-IMG/Adventure.webp" alt="Adventure" />
            </a>
          </div>
          <!-- Fiction -->
          <div class="Card">
            <a href="/Category/Fiction.html">
              <img class="scale-in-center" src="/Images/Category-IMG/Fiction.webp" alt="Fiction" />
            </a>
          </div>
          <!-- Romance -->
          <div class="Card">
            <a href="/Category/Romance.html">
              <img class="scale-in-center" src="/Images/Category-IMG/Romance.webp" alt="Romance" />
            </a>
          </div>
          <!-- Thriller -->
          <div class="Card">
            <a href="/Category/Thriller.html">
              <img class="scale-in-center" src="/Images/Category-IMG/Thriller.webp" alt="Thriller" />
            </a>
          </div>
        </div>
    `;
  }
}

customElements.define("import-top-categories", TopCategoriesSlider);

//Trending Books
class TrendingBooks extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <div class="Slider">
          <!-- The Martian -->
          <div class="Card">
            <a href="javascript:void(0)" onclick="TheMartian()">
              <img
                class="Card-Book scale-in-center"
                src="/Book-Cover/Adventure/The-Martian-Book-Cover.webp"
                alt="The Martian"
              />
            </a>
          </div>
          <!-- 11.22.63 -->
          <div class="Card">
            <a href="javascript:void(0)" onclick="_112263()">
              <img
                class="Card-Book scale-in-center"
                src="/Book-Cover/Thriller/11.22.63-Book-Cover.webp"
                alt="11.22.63"
              />
            </a>
          </div>
          <!-- The Book Thief -->
          <div class="Card">
            <a href="javascript:void(0)" onclick="TheBookThief()">
              <img
                class="Card-Book scale-in-center"
                src="/Book-Cover/Fiction/The-Book-Thief-Book-Cover.webp"
                alt="The Book Thief"
              />
            </a>
          </div>
          <!-- 1984 -->
          <div class="Card">
            <a href="javascript:void(0)" onclick="_1984()">
              <img
                class="Card-Book scale-in-center"
                src="/Book-Cover/Fiction/1984-Book-Cover.webp"
                alt="1984"
              />
            </a>
          </div>
          <!-- Pride and Prejudice -->
          <div class="Card">
            <a href="javascript:void(0)" onclick="PrideandPrejudice()">
              <img
                class="Card-Book scale-in-center"
                src="/Book-Cover/Fiction/Pride-and-Prejudice-Book-Cover.webp"
                alt="Pride and Prejudice"
              />
            </a>
          </div>
        </div>
    `;
  }
}

customElements.define("import-trending-books", TrendingBooks);

//New Books
class NewBooks extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <div class="Slider">
          <!-- Life after Google -->
          <div class="Card">
            <a href="javascript:void(0)" onclick="LifeafterGoogle()">
              <img
                class="Card-Book scale-in-center"
                src="/Book-Cover/Tech/Life-after-Google-Book-Cover.webp"
                alt="Life after Google"
            /></a>
          </div>
          <!-- The Four -->
          <div class="Card">
            <a href="javascript:void(0)" onclick="TheFour()">
              <img
                class="Card-Book scale-in-center"
                src="/Book-Cover/Tech/The-Four-Book-Cover.webp"
                alt="The Four"
              />
            </a>
          </div>
          <!-- Hello World -->
          <div class="Card">
            <a href="javascript:void(0)" onclick="HelloWorld()">
              <img
                class="Card-Book scale-in-center"
                src="/Book-Cover/Tech/Hello-World-Book-Cover.webp"
                alt="Hello World"
              />
            </a>
          </div>
          <!-- Steve Jobs -->
          <div class="Card">
            <a href="javascript:void(0)" onclick="SteveJobs()">
              <img
                class="Card-Book scale-in-center"
                src="/Book-Cover/Tech/Steve-Jobs-Book-Cover.webp"
                alt="Steve Jobs"
              />
            </a>
          </div>
        </div>
    `;
  }
}

customElements.define("import-new-books", NewBooks);

let OS = navigator.userAgent || navigator.vendor || window.opera;
let ReadButton = document.getElementById("Read-Button");

//New Books
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
