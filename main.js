const Prev = document.querySelector("#prev-btn");
const Next = document.querySelector("#next-btn");
const book = document.querySelector("#Frame");

const pages = [];

Prev.addEventListener("click", page_prev);
Next.addEventListener("click", page_next);

let curr = 1;
let npages = 14;
let mpages = npages + 1;

for(let i = 1; i <= npages; i++) {
    pages.push(document.querySelector(`#pg${i}`));
  } 

function openBook() {
    book.style.transform = "translateX(50%)";
    Prev.style.transform = "translateX(-180px)";
    Next.style.transform = "translateX(180px)";
}

function closeBook(isAtBeginning) {
    if(isAtBeginning) {
        book.style.transform = "translateX(0%)";
    } else {
        book.style.transform = "translateX(100%)";
    }
    
    Prev.style.transform = "translateX(0px)";
    Next.style.transform = "translateX(0px)";
}

function page_next() {
    if(curr < mpages) {
        if(curr === 1) {
            openBook();
        }
        pages[curr-1].classList.add("flipped");
        pages[curr-1].style.zIndex = curr;
        if(curr === mpages-1) {
            closeBook(false);
        }
        curr++;
    }
}

function page_prev() {
    if(curr > 1) {
        curr--;
        if(curr === 1) {
            closeBook(true);
        }
        pages[curr-1].classList.remove("flipped");
        pages[curr-1].style.zIndex = mpages-curr;
    }
}