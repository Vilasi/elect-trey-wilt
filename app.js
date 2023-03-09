const navbar = document.querySelector('#navbar');
const navItems = document.querySelectorAll('.nav-item');
const header = document.querySelector('#header');
const headerChildDivs = document.querySelectorAll('#header div');

console.log(headerChildDivs);

//* Add/Remove Navbar. Change nav-item margins
function resizeElements(innerWidth) {
  if (innerWidth <= '992') {
    navbar.classList.add('d-none');
  } else {
    navbar.classList.remove('d-none');
  }

  if (innerWidth < '1275') {
    for (let item of navItems) {
      item.classList.remove('me-5');
      item.classList.add('me-4');
    }
  } else {
    for (let item of navItems) {
      item.classList.remove('me-4');
      item.classList.add('me-5');
    }
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

  console.log('hiyua!');
}
resizeElements(window.innerWidth);

//*Trigger navbar add/removal on window resize event
window.addEventListener('resize', () => {
  resizeElements(window.innerWidth);
});

//* Navbar height = 56px
//*----40px + 8px padding on top/bottom

//TODO Navbar @1275px change margin on .nav-item
