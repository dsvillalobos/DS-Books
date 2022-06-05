//JavaScript

//Header
class Header extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <header class="Header">
                <h1 class="Title">
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
                <a href="./index.html" class="Option">
                    Home
                </a>
                <!-- Categories -->
                <!-- Adventure -->
                <a class="Option" href="./Adventure.html">
                    Adventure
                </a>
                <!-- Fiction -->
                <a class="Option" href="./Fiction.html">
                    Fiction
                </a>
            </div>
        `
    }
}

customElements.define("import-sidenav", Sidenav);
