//JavaScript

let OS = navigator.userAgent || navigator.vendor || window.opera;
let ReadButton = document.getElementById("Read-Button");

function TheFaultinourStars() {
    openDescription("The Fault in our Stars", "/Book-Cover/The-Fault-in-our-Stars-Book-Cover.jpg", "John Green", "2012", "201", "Romance");
    ReadButton.setAttribute("href", "/Books/Romance/The Fault in our Stars.pdf");

    if (/android/i.test(OS)) {
        ReadButton.setAttribute("href", "https://drive.google.com/file/d/1G_8MqG336GJsEmIozWzoOo0_oXt7h9Z9/view?usp=sharing");
    }
}

function BookLovers() {
    openDescription("Book Lovers", "/Book-Cover/Book-Lovers-Book-Cover.jpg", "Emily Henry", "2022", "346", "Romance");
    ReadButton.setAttribute("href", "/Books/Romance/Book Lovers.pdf");

    if (/android/i.test(OS)) {
        ReadButton.setAttribute("href", "https://drive.google.com/file/d/1xqUl_cS4oX3Mt2XQxEApZOtMwMcJhOgD/view?usp=sharing");
    }
}

function PrideandPrejudice() {
    openDescription("Pride and Prejudice", "/Book-Cover/Pride-and-Prejudice-Book-Cover.jpg", "Jane Austen", "1813", "315", "Classics, Fiction, Romance");
    ReadButton.setAttribute("href", "/Books/Romance/Pride and Prejudice.pdf");

    if (/android/i.test(OS)) {
        ReadButton.setAttribute("href", "https://drive.google.com/file/d/1UyoE-3UmPNCMWAnZSzSmiVdd3rBw6evf/view?usp=sharing");
    }
}

function JaneEyre() {
    openDescription("Jane Eyre", "/Book-Cover/Jane-Eyre-Book-Cover.jpg", "Charlotte Brontë", "1847", "508", "Classics, Romance, Fiction");
    ReadButton.setAttribute("href", "/Books/Romance/Jane Eyre.pdf");

    if (/android/i.test(OS)) {
        ReadButton.setAttribute("href", "https://drive.google.com/file/d/1DT8dG4WwhJL7h6gYDaj7z3lIbn06NpA7/view?usp=sharing");
    }
}

function Emma() {
    openDescription("Emma", "/Book-Cover/Emma-Book-Cover.jpg", "Jane Austen", "1815", "381", "Romance, Classics");
    ReadButton.setAttribute("href", "/Books/Romance/Emma.pdf");

    if (/android/i.test(OS)) {
        ReadButton.setAttribute("href", "https://drive.google.com/file/d/1lnCwnva5xiKtYmI2lk9aq5CbgO_WM7_f/view?usp=sharing");
    }
}

function ThePhantomoftheOpera() {
    openDescription("The Phantom of the<br>Opera", "/Book-Cover/The-Phantom-of-the-Opera-Book-Cover.jpg", "Gaston Leroux", "1909", "255", "Horror, Fiction, Romance");
    ReadButton.setAttribute("href", "/Books/Romance/The Phantom of the Opera.pdf");

    if (/android/i.test(OS)) {
        ReadButton.setAttribute("href", "https://drive.google.com/file/d/1Q9aI5e0epZmL_hAdy4T_5hDhU3q9bTJG/view?usp=sharing");
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
