//JavaScript

let OS = navigator.userAgent || navigator.vendor || window.opera;
let ReadButton = document.getElementById("Read-Button");

function _1984() {
    openDescription("1984", "/Book-Cover/1984-Book-Cover.webp", "George Orwell", "1949", "250", "Dystopian, Fiction");
    ReadButton.setAttribute("href", "/Books/Fiction/1984.pdf");

    if (/android/i.test(OS)) {
        ReadButton.setAttribute("href", "https://drive.google.com/file/d/12xPWzn2ctLUAY_a8ZivagmDsdc7rWo1V/view?usp=sharing");
    }
}

function TheInvisibleMan() {
    openDescription("The Invisible Man", "/Book-Cover/The-Invisible-Man-Book-Cover.webp", "H.G. Wells", "1897", "146", "Science Fiction, Horror");
    ReadButton.setAttribute("href", "/Books/Fiction/The Invisible Man.pdf");

    if (/android/i.test(OS)) {
        ReadButton.setAttribute("href", "https://drive.google.com/file/d/1kc8EnMKMEQQ8ARE74NHl3USDGOkVTLj6/view?usp=sharing");
    }
}

function TheBookThief() {
    openDescription("The Book Thief", "/Book-Cover/The-Book-Thief-Book-Cover.webp", "Markus Zusak", "2005", "576", "Fiction");
    ReadButton.setAttribute("href", "/Books/Fiction/The Book Thief.pdf");

    if (/android/i.test(OS)) {
        ReadButton.setAttribute("href", "https://drive.google.com/file/d/1oL3aueaLefJoKf1LL6gH0cOOs0AarM9i/view?usp=sharing");
    }
}

function Fahrenheit451() {
    openDescription("Fahrenheit 451", "/Book-Cover/Fahrenheit-451-Book-Cover.webp", "Ray Bradbury", "1953", "123", "Dystopian, Fiction");
    ReadButton.setAttribute("href", "/Books/Fiction/Fahrenheit 451.pdf");

    if (/android/i.test(OS)) {
        ReadButton.setAttribute("href", "https://drive.google.com/file/d/1kBUnFc-CTxgHODZMZ3f6C__PUVczpWxC/view?usp=sharing");
    }
}

function TheMartian() {
    openDescription("The Martian", "/Book-Cover/The-Martian-Book-Cover.webp", "Andy Weir", "2011", "318", "Fiction, Adventure");
    ReadButton.setAttribute("href", "/Books/Fiction/The Martian.pdf");

    if (/android/i.test(OS)) {
        ReadButton.setAttribute("href", "https://drive.google.com/file/d/1pFexoYN0ZOdp74EEjG_8LyN7eSs0xZXh/view?usp=sharing");
    }
}

function PrideandPrejudice() {
    openDescription("Pride and Prejudice", "/Book-Cover/Pride-and-Prejudice-Book-Cover.webp", "Jane Austen", "1813", "315", "Classics, Fiction, Romance");
    ReadButton.setAttribute("href", "/Books/Fiction/Pride and Prejudice.pdf");

    if (/android/i.test(OS)) {
        ReadButton.setAttribute("href", "https://drive.google.com/file/d/1K5j4om7pMKors0komr9rsx9feo_FFuAg/view?usp=sharing");
    }
}

function openDescription(Title, BookCover, Author, PublicationDate, Pages, Genre) {
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
