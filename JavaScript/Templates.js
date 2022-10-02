//JavaScript

//Header
class Header extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
            <header class="Header">
                <h1 class="Title scale-in-center">
                    <a href="javascript:void(0)" onclick="openSidenav()">
                        <i class="bi bi-book-fill"></i>
                        DS Books
                    </a>
                </h1>
            </header>
        `;
  }
}

customElements.define("import-header", Header);

//Sidenav
class Sidenav extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
            <div class="Sidenav" id="Sidenav">
                <!-- Close Button -->
                <a href="javascript:void(0)" class="CloseBTN" onclick="closeSidenav()">
                    <i class="bi bi-x-lg"></i>
                </a>
                <!-- Home -->
                <li class="Option">
                    <a href="/index.html">
                        Home
                    </a>
                </li>
                <!-- Categories -->
                <!-- Adventure -->
                <li class="Option">
                    <a href="/Category/Adventure.html">
                        Adventure
                    </a>
                </li>
                <!-- Fiction -->
                <li class="Option">
                    <a href="/Category/Fiction.html">
                        Fiction
                    </a>
                </li>
                <!-- Romance -->
                <li class="Option">
                    <a href="/Category/Romance.html">
                        Romance
                    </a>
                </li>
                <!-- Thriller -->
                <li class="Option">
                    <a href="/Category/Thriller.html">
                        Thriller
                    </a>
                </li>
                <!-- Tech -->
                <li class="Option">
                    <a href="/Category/Tech.html">
                        Tech
                    </a>
                </li>
                <!-- About -->
                <li class="Option">
                    <a href="/Pages/About.html">
                        About
                    </a>
                </li>
            </div>
        `;
  }
}

customElements.define("import-sidenav", Sidenav);

//Book Description
class BookDescriptionBox extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
            <div class="Book-Description" id="Book-Description">
                <!-- Close Button -->
                <a href="javascript:void(0)" class="CloseBTN-Description" onclick="closeDescription()">
                    <i class="bi bi-arrow-left"></i>
                </a>
                <!-- Book Title -->
                <h2 class="Book-Title" id="Book-Title"></h2>
                <!-- Book Cover -->
                <div class="Book-Cover-Description">
                    <img class="Book-Cover" id="Book-Cover" src="" alt="Book Cover">
                </div>
                <!-- Author -->
                <div class="Description-Text">
                    <h3 class="Description-Subheading">
                        Author
                    </h3>
                    <span id="Author"></span>
                </div>
                <!-- Publication Date -->
                <div class="Description-Text">
                    <h3 class="Description-Subheading">
                        Publication Date
                    </h3>
                    <span id="Publication-Date"></span>
                </div>
                <!-- Pages -->
                <div class="Description-Text">
                    <h3 class="Description-Subheading">
                        Pages
                    </h3>
                    <span id="Pages"></span>
                </div>
                <!-- Genre -->
                <div class="Description-Text">
                    <h3 class="Description-Subheading">
                        Genre
                    </h3>
                    <span id="Genre"></span>
                </div>
                <!-- Read Button -->
                <a id="Read-Button" href="">
                    <button class="Read-Button">
                        <i class="bi bi-book-fill"></i>
                        Read
                    </button>
                </a>
            </div>
        `;
  }
}

customElements.define("import-book-description", BookDescriptionBox);
