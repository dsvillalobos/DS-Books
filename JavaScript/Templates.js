//JavaScript

//Header
class Header extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <header class="Header">
                <h1 class="Title animate__bounceIn">
                    <a href="javascript:void(0)" onclick="openSidenav()">
                        <i class="bi bi-book-fill"></i>
                        DS Books
                    </a>
                </h1>
            </header>
        `
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
                <a href="/index.html" class="Option">
                    Home
                </a>
                <!-- Categories -->
                <!-- Adventure -->
                <a class="Option" href="/Category/Adventure.html">
                    Adventure
                </a>
                <!-- Fiction -->
                <a class="Option" href="/Category/Fiction.html">
                    Fiction
                </a>
                <!-- Romance -->
                <a class="Option" href="/Category/Romance.html">
                    Romance
                </a>
                <!-- Thriller -->
                <a class="Option" href="/Category/Thriller.html">
                    Thriller
                </a>
            </div>
        `
    }
}

customElements.define("import-sidenav", Sidenav);

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
        `
    }
}

customElements.define("import-book-description", BookDescriptionBox);
