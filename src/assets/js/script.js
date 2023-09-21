"use strict";
const projects = [
  {
    name: "Application for hotel management",
    category: "Mobile Applications",
    interval: "Sept 2020 - Jun 2021",
    technologies: "Flutter, Dart, Firebase, Android Studio",
    description:
      "The solution proposed by this application to facilitate the management of a hotel is a cross-platform application that allows, depending on the role of the logged in user to perform different operations such as booking a room, viewing the history, adding reviews, approve reservations, view user or staff profiles, or even view statistics on monthly bookings, receipts or expenses.",
  },
  {
    name: "Wellness and fitness App",
    category: "Mobile Development",
    interval: "May 2020",
    technologies: "Java, Android Studio",
    description:
      "This Android app was created with the purpose of having in one app the main habits that can improve our lifestyle, more specifically the app suggests according to each person's profile a plan of healthy recipes, a set of daily snacks but also a workout that can be done at home. <br/> <br/> The app is built in Android Studio with Java, authentication and account management is handled by Fireabse, and networks, snacks and workouts are handled by the backend written in C#.",
  },
  {
    name: "Login & Register & Forgot Password pages",
    category: "Web Development",
    interval: "Jun 2023",
    technologies: "HTML, CSS, JS",
    description:
      "Over time we have created various components that I can reuse in other projects, and one of these components is the classic flow that any larger application should have, namely login, registration or forget password page. <br/>In the attached picture you can see such an example made in HTML, CSS and JS. <br/> <br/>It wasn't difficult to do as long as you keep a color palette that blends well together, keep the look of the page elements as clean as possible, add padding and margins and last but not least make your pages responsive! What does this mean? It means not to have fixed sizes for the elements of the page (fields, images, text), and that depending on the size of the screen on which the page is viewed to look good, to shrink or enlarge the elements as needed and to be as visible and user friendly as possible regardless of the device. ",
  },
  {
    name: "Online shopping app",
    category: "Web Development",
    interval: "Jun 2023 - Jul 2023",
    technologies: "React, HTML, SCSS, JavaScript",
    description: "This application is a prototype of an online shopping website made in React, with the aim of learning and expanding my knowledge in other areas than what I have done so far, namely Angular. ",
  },
  {
    name: "Recipes Prediction App",
    category: "Web Development",
    interval: "Sep 2023 - Present",
    technologies: "Angular PWA, Tailwind, Firebase, RestAPI with Java, Spring Boot, PostgreSQL, Docker, Python",
    description: "Do you face the problem of food every day? Do you waste minutes or even hours looking for something you like? Have you found something you like the way it looks but don't have the ingredients or don't have enough time to prepare it? This app helps you recommend recipes based on your profile and preferences (age, height, weight, favorite foods, allergens, favorite type of food, favorite cuisine, etc). <br/> What is the first step? <br/>A user will be able to create their personalised profile and select the following: <br/> - Age, Height, Weight, Gender <br/> - Preferred cuisine (American, Kid-friendly, Italian, Asian, Mexican, Southern&Soul food, French, Southwestern, Barbecue, Indian, Chinese, Mediterranean, Greek, English, Spanish, Moroccan, Swedish) <br/> - Allergies: Wheat-free, Dairy-free, peanut-free, tree nut-free, sufite-free, soy-free, sesame-free, seafood-free, egg-free, gluten-free <br/> - Do you follow any of the following diets? (Vegetarian, Low Fodmap, Vegan, Paleo, Pescetarian, Ketogenic) <br/> - Are there any ingredients you don't want to see in the recommended recipes? (alcohol, avocado, bacon, bananas, beef, brussels sprouts, cilantro, coconut, eggplant, fish, mayonnaise, mushrooms, olives, onions, pork, potatoes, seafood, shrimp, sugar, tomatoes) <br/> - Your level of cooking skills: beginner, intermediate, advanced <br/> - How would you rate your daily physical effort? Sedentary, Slightly active, Moderately active, Very active, Super active <br/> - What is the reason for ",
  },
];

// element toggle function
const elementToggleFunc = function (elem) {
  elem.classList.toggle("active");
};

// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () {
  elementToggleFunc(sidebar);
});

// testimonials variables
const projectsItem = document.querySelectorAll("[data-projects-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalSubtitle = document.querySelector("[data-modal-subtitle]");
const modalTime = document.querySelector("[data-modal-time]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
};

// add click event to all modal items
for (let i = 0; i < projectsItem.length; i++) {
  projectsItem[i].addEventListener("click", function () {
    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = projects[i].name;
    modalSubtitle.innerHTML = projects[i].technologies;
    modalTime.innerHTML = projects[i].interval;
    modalText.innerHTML = projects[i].description;

    testimonialsModalFunc();
  });
}

// add click event to modal close button
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);

// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () {
  elementToggleFunc(this);
});

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {
    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);
  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {
  for (let i = 0; i < filterItems.length; i++) {
    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }
  }
};

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {
  filterBtn[i].addEventListener("click", function () {
    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;
  });
}

// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {
    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }
  });
}

// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {
    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }
  });
}
