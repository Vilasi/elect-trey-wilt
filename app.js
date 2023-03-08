const navbar = document.querySelector('#navbar');
console.log(navbar);

//* Add/Remove Navbar
function addRemoveNavbar(innerWidth) {
  if (innerWidth <= '992') {
    navbar.classList.add('d-none');
  } else {
    navbar.classList.remove('d-none');
  }

  console.log('hiyua!');
}
addRemoveNavbar(window.innerWidth);

//*Trigger navbar add/removal on window resize event
window.addEventListener('resize', () => {
  addRemoveNavbar(window.innerWidth);
});

//* Navbar height = 56px
//*----40px + 8px padding on top/bottom
