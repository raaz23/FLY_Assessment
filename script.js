const HeroContactUs = document.querySelector(".hero-contact-us");
const body = document.querySelector("body");

// first section for form
HeroContactUs.addEventListener("click", () => {
  const div = document.createElement("div");
  div.classList.add("segment");
  div.innerHTML = ` 
        <form class="ui form" action="https://getform.io/f/pbmqlweb" method="POST">
            <div class="close">X</div>
            <h1>Talk with Fyle's</h1>
            <div class="mb-3">
                <label for="email" class="form-label emailLabel">Email</label>
                <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Work Email" required>
                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div class="row">
                <div class="col-md-6 mb-4">
                    <label for="first" class="form-label firstLabel">First Name</label>
                    <input type="text" class="form-control" name="first-name" placeholder="First Name" id="first" required>
                </div>
                <div class="col-md-6 mb-4">
                    <label for="last" class="form-label lastLabel">Last Name</label>
                    <input type="text" class="form-control" name="last-name" placeholder="Last Name" id="last" required>
                </div>
            </div>
            <div class="mb-5 form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1" required>
                <label class="form-check-label" for="exampleCheck1">I agree to Fyle's terms and conditions and provide consent to send me communication.</label>
            </div>
            <button class="ui button btn btn-danger formBtn" type="submit">Contact Us</button>
        </form>`;
  document.body.append(div);

  // closing form
  const close = div.querySelector(".close");
  close.addEventListener("click", () => {
    div.remove();
  });

  // this is for form placeholder and label

  const emailLabel = document.querySelector(".form-label.emailLabel");
  const firstLabel = document.querySelector(".form-label.firstLabel");
  const lastLabel = document.querySelector(".form-label.lastLabel");
  const formLabel = document.querySelectorAll(".form-label");

  formLabel.forEach((label) => {
    const input = label.nextElementSibling;

    input.addEventListener("input", () => {
      if (label.classList.contains("emailLabel")) {
        emailLabel.style.opacity = 1;
        console.log(emailLabel);
      } else if (
        label.classList.contains("firstLabel") ||
        label.classList.contains("lastLabel")
      ) {
        firstLabel.style.opacity = 1;
        lastLabel.style.opacity = 1;
        console.log(firstLabel);
      } else {
        label.style.display = "none";
      }
    });
  });
});

//second section for sliding image and hover image

let slideImages = document.querySelectorAll(".slides img");

let next = document.querySelector(".next");
let prev = document.querySelector(".prev");

let dots = document.querySelectorAll(".dot");
let counter = 0;

// next button for sliding Image
next.addEventListener("click", slideNext);
function slideNext() {
  slideImages[counter].classList.remove("active");
  slideImages[counter].style.animation = "next1 0.5s ease-in forwards";

  if (counter >= slideImages.length - 1) {
    counter = 0;
  } else {
    counter++;
  }

  slideImages[counter].classList.add("active");
  slideImages[counter].style.animation = "next2 0.5s ease-in forwards";
  indicators();
}

// previous button for sliding Image
prev.addEventListener("click", slidePrev);
function slidePrev() {
  slideImages[counter].classList.remove("active");
  slideImages[counter].style.animation = "prev1 0.5s ease-in forwards";

  if (counter == 0) {
    counter = slideImages.length - 1;
  } else {
    counter--;
  }

  slideImages[counter].classList.add("active");
  slideImages[counter].style.animation = "prev2 0.5s ease-in forwards";
  indicators();
}

// Auto sliding
let autoSlidingInterval;
function autoSliding() {
  autoSlidingInterval = setInterval(slideNext, 3000);
}
autoSliding();

// stop auto slide while mouse hovering
const container = document.querySelector(".slide-container");
container.addEventListener("mouseover", function () {
  clearInterval(autoSlidingInterval);
});

container.addEventListener("mouseout", autoSliding);

// dot function for active
function indicators() {
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  dots[counter].className += " active";
}

// fot functionality for changing image and dot
function switchImage(currentImage) {
  let imageId = parseInt(currentImage.getAttribute("attr"));

  if (imageId !== counter) {
    slideImages[counter].classList.remove("active");
    if (imageId > counter) {
      slideImages[counter].style.animation = "next1 0.5s ease-in forwards";
      slideImages[imageId].style.animation = "next2 0.5s ease-in forwards";
    } else {
      slideImages[counter].style.animation = "prev1 0.5s ease-in forwards";
      slideImages[imageId].style.animation = "prev2 0.5s ease-in forwards";
    }
    counter = imageId;
    slideImages[counter].classList.add("active");
    indicators();
  }
}

// change img to other hover-content , i mean changing hovering content with img
let slide = document.querySelectorAll(".slide");
slide.forEach((slide) => {
  slide.addEventListener("mouseover", (e) => {
    let img = e.currentTarget.querySelector("img");
    let hoverContent = e.currentTarget.querySelector(".hover-content");

    img.classList.add("hide");
    hoverContent.classList.remove("hide");
    hoverContent.classList.add("show");
  });

  slide.addEventListener("mouseleave", (e) => {
    let img = e.currentTarget.querySelector("img");
    let hoverContent = e.currentTarget.querySelector(".hover-content");

    img.classList.remove("hide");
    hoverContent.classList.remove("show");
    hoverContent.classList.add("hide");
  });
});

/* third section  */

// this is for change image according to the content
document.addEventListener("DOMContentLoaded", function () {
  const contentItems = document.querySelectorAll(".content-item");
  const images = document.querySelectorAll(".img-container img");

  contentItems.forEach((item) => {
    item.addEventListener("click", function () {
      const targetId = this.getAttribute("data-target");

      contentItems.forEach((item) => {
        item.classList.remove("active");
      });

      this.classList.add("active");

      images.forEach((img) => {
        img.classList.remove("active");
        if (img.getAttribute("id") === targetId) {
          img.classList.add("active");
        }
      });
    });
  });
});

/*--------------------------------------------end of the js code for assignment-------------------------------------------------*/
