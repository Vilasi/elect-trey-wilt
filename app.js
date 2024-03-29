const navbar = document.querySelector('#navbar');
const navItems = document.querySelectorAll('.nav-item');
const header = document.querySelector('#header');
const headerChildDivs = document.querySelectorAll('#header div');
const engagementSection = document.querySelector('#engagement-section');
const engagementSectionWhatIPlan = document.querySelector(
  '#engagement-section-what-i-plan'
);
const degreeList = document.querySelectorAll('.degree-list');
const degreeListSmall = document.querySelectorAll('.degree-list-little-text');
const educationArticle = document.querySelector('#education-article');
const educationArticleChildDivs = document.querySelectorAll(
  '#education-article div'
);
const eventCards = document.querySelectorAll('.events-cards-container .card');

//* Get the widths of the events cards and set them equal to the width of the largest one
//Get all card widths
const widthRepo = [];
for (let card of eventCards) {
  const info = card.getBoundingClientRect();

  widthRepo.push(Math.ceil(info.width));
}
//Set all cards equal to the width of the widest card
const largestWidth = Math.max(...widthRepo);
for (let card of eventCards) {
  card.style.minWidth = `${largestWidth}px`;
}

//* Add/Remove Navbar. Change nav-item margins
function responsiveResizing(innerWidth) {
  if (innerWidth <= '992') {
    navbar.classList.add('d-none');

    //* Change font-size of degree-list
    for (let degree of degreeList) {
      degree.classList.add('font-size-5');
      degree.classList.remove('font-size-4');
    }

    //* Add flex-wrap to education article
    educationArticle.classList.add('flex-wrap');

    //* Increase education article child divs width to 100%
    for (let div of educationArticleChildDivs) {
      div.classList.remove('w-50');
    }

    //* Remove margin-right on first education article child div
    educationArticleChildDivs[0].classList.remove('me-5');
  } else {
    navbar.classList.remove('d-none');

    //* Change font-size of degree-list
    for (let degree of degreeList) {
      degree.classList.add('font-size-4');
      degree.classList.remove('font-size-5');
    }

    //* Remove flex-wrap from education article
    educationArticle.classList.remove('flex-wrap');

    //* Decrease education article child divs width to 50%
    for (let div of educationArticleChildDivs) {
      div.classList.add('w-50');
    }

    //* Add margin-right on first education article child div
    educationArticleChildDivs[0].classList.add('me-5');
  }

  if (innerWidth < '800') {
    header.classList.add('flex-column');
    headerChildDivs[0].classList.add('border-right-none');

    for (let div of headerChildDivs) {
      div.classList.remove('w-50');
    }
  } else {
    header.classList.remove('flex-column');
    headerChildDivs[0].classList.remove('border-right-none');
    for (let div of headerChildDivs) {
      div.classList.add('w-50');
    }
  }

  if (innerWidth < '576') {
    engagementSection.classList.add('flex-column');
    engagementSectionWhatIPlan.classList.add('d-none');
  } else {
    engagementSection.classList.remove('flex-column');
    engagementSectionWhatIPlan.classList.remove('d-none');
  }

  //Hello future developer, enjoy your stay :)
  console.log('hiyua!');
}
responsiveResizing(window.innerWidth);

//*Trigger navbar add/removal on window resize event
window.addEventListener('resize', () => {
  responsiveResizing(window.innerWidth);
});

//* Navbar height = 56px
//*----40px + 8px padding on top/bottom

//*Events to trigger on scroll
window.addEventListener('scroll', () => {
  //* Remove Navbar on scroll
  if (window.scrollY > 5 && window.innerWidth >= '992') {
    navbar.classList.add('d-none');
  } else if (window.scrollY < 5 && window.innerWidth >= '992') {
    navbar.classList.remove('d-none');
  }
});
