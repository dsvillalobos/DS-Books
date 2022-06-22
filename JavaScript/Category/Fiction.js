//JavaScript

let UserAgent = navigator.userAgent || navigator.vendor || window.opera;

let BookDescription = document.getElementById("Book-Description");
let BookTitle = document.getElementById("Book-Title");
let BookCover = document.getElementById("Book-Cover");
let Author = document.getElementById("Author");
let publicationDate = document.getElementById("Publication-Date");
let Pages = document.getElementById("Pages");
let Genre = document.getElementById("Genre");
let ReadButton = document.getElementById("Read-Button");

//1984
function open1984() {
    BookDescription.style.width = "100%";
    BookTitle.innerHTML = "1984";
    BookCover.setAttribute("src", "/Book-Cover/1984-Book-Cover.jpg");
    Author.innerHTML = "George Orwell";
    publicationDate.innerHTML = "1949";
    Pages.innerHTML = "250";
    Genre.innerHTML = "Dystopian, Political Fiction";
    ReadButton.setAttribute("href", "/Books/Fiction/1984.pdf");

    if (/android/i.test(UserAgent)) {
        ReadButton.setAttribute("href", "https://drive.google.com/file/d/12xPWzn2ctLUAY_a8ZivagmDsdc7rWo1V/view?usp=sharing");
    }
}

//The Invisible Man
function openTheInvisibleMan() {
    BookDescription.style.width = "100%";
    BookTitle.innerHTML = "The Invisible Man";
    BookCover.setAttribute("src", "/Book-Cover/The-Invisible-Man-Book-Cover.jpg");
    Author.innerHTML = "H.G. Wells";
    publicationDate.innerHTML = "1897";
    Pages.innerHTML = "146";
    Genre.innerHTML = "Science Fiction, Horror";
    ReadButton.setAttribute("href", "/Books/Fiction/The Invisible Man.pdf");

    if (/android/i.test(UserAgent)) {
        ReadButton.setAttribute("href", "https://drive.google.com/file/d/1kc8EnMKMEQQ8ARE74NHl3USDGOkVTLj6/view?usp=sharing");
    }
}

//The Book Thief
function openTheBookThief() {
    BookDescription.style.width = "100%";
    BookTitle.innerHTML = "The Book Thief";
    BookCover.setAttribute("src", "/Book-Cover/The-Book-Thief-Book-Cover.jpg");
    Author.innerHTML = "Markus Zusak";
    publicationDate.innerHTML = "2005";
    Pages.innerHTML = "576";
    Genre.innerHTML = "Young Adult Fiction";
    ReadButton.setAttribute("href", "/Books/Fiction/The Book Thief.pdf");

    if (/android/i.test(UserAgent)) {
        ReadButton.setAttribute("href", "https://drive.google.com/file/d/1oL3aueaLefJoKf1LL6gH0cOOs0AarM9i/view?usp=sharing");
    }
}

//Fahrenheit 451
function openFahrenheit451() {
    BookDescription.style.width = "100%";
    BookTitle.innerHTML = "Fahrenheit 451";
    BookCover.setAttribute("src", "/Book-Cover/Fahrenheit-451-Book-Cover.jpg");
    Author.innerHTML = "Ray Bradbury";
    publicationDate.innerHTML = "1953";
    Pages.innerHTML = "123";
    Genre.innerHTML = "Fiction, Classics";
    ReadButton.setAttribute("href", "/Books/Fiction/Fahrenheit 451.pdf");

    if (/android/i.test(UserAgent)) {
        ReadButton.setAttribute("href", "https://drive.google.com/file/d/1kBUnFc-CTxgHODZMZ3f6C__PUVczpWxC/view?usp=sharing");
    }
}

//The Martian
function openTheMartian() {
    BookDescription.style.width = "100%";
    BookTitle.innerHTML = "The Martian";
    BookCover.setAttribute("src", "/Book-Cover/The-Martian-Book-Cover.jpg");
    Author.innerHTML = "Andy Weir";
    publicationDate.innerHTML = "2011";
    Pages.innerHTML = "318";
    Genre.innerHTML = "Science Fiction, Adventure";
    ReadButton.setAttribute("href", "/Books/Fiction/The Martian.pdf");

    if (/android/i.test(UserAgent)) {
        ReadButton.setAttribute("href", "https://drive.google.com/file/d/1pFexoYN0ZOdp74EEjG_8LyN7eSs0xZXh/view?usp=sharing");
    }
}

//Pride and Prejudice
function openPrideandPrejudice() {
    BookDescription.style.width = "100%";
    BookTitle.innerHTML = "Pride and Prejudice";
    BookCover.setAttribute("src", "/Book-Cover/Pride-and-Prejudice-Book-Cover.jpg");
    Author.innerHTML = "Jane Austen";
    publicationDate.innerHTML = "1813";
    Pages.innerHTML = "315";
    Genre.innerHTML = "Fiction, Historical Romance";
    ReadButton.setAttribute("href", "/Books/Fiction/Pride and Prejudice.pdf");

    if (/android/i.test(UserAgent)) {
        ReadButton.setAttribute("href", "https://drive.google.com/file/d/1K5j4om7pMKors0komr9rsx9feo_FFuAg/view?usp=sharing");
    }
}

//Close Description
function closeDescription() {
    BookDescription.style.width = "0%";
}
