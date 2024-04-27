let card = document.querySelector('.trend');
let card2 = document.getElementById('trendSec');
let mainPage = document.querySelector('.main');
let blog = document.querySelector('.trends');
let about = document.querySelector('.about');
let contact = document.querySelector('.contact');

// navbar
function showSidebar() {
  const sidebar = document.querySelector('.sidebar');
  sidebar.style.display = 'flex';
  console.log(sidebar);
}
function hidesidebar() {
  const sidebar = document.querySelector('.sidebar');
  sidebar.style.display = 'none';
}
function homes() {
  mainPage.style.display = 'flex';
  const x = window.matchMedia('(max-width: 768px)');
  if (x.matches) {
    document.querySelector('.main').style.display = 'block';
  } else {
    document.querySelector('.main').style.display = 'flex';
  }
  blog.style.display = 'block';
  card.style.display = 'block';
  card2.style.display = 'block';
  contact.style.display = 'none';

  document.querySelector('.cart').style.display = 'none';

  document.getElementById('blog').style.color = 'black';
  document.getElementById('home').style.color = 'rgb(2,173,173)';
  document.getElementById('shop').style.color = 'black';
  document.getElementById('contact').style.color = 'black';
  document.getElementById('about').style.color = 'black';
}
function shops() {
  mainPage.style.display = 'none';
  card.style.display = 'block';
  card2.style.display = 'block';
  about.style.display = 'none';
  blog.style.display = 'none';
  contact.style.display = 'none';

  document.querySelector('.cart').style.display = 'none';

  document.getElementById('blog').style.color = 'black';
  document.getElementById('home').style.color = 'black';
  document.getElementById('shop').style.color = 'rgb(2,173,173)';
  document.getElementById('contact').style.color = 'black';
  document.getElementById('about').style.color = 'black';
}

function blogs() {
  mainPage.style.display = 'none';
  blog.style.display = 'block';
  card.style.display = 'none';
  card2.style.display = 'none';
  about.style.display = 'none';
  contact.style.display = 'none';

  document.querySelector('.cart').style.display = 'none';

  document.getElementById('blog').style.color = 'rgb(2,173,173)';
  document.getElementById('home').style.color = 'black';
  document.getElementById('shop').style.color = 'black';
  document.getElementById('contact').style.color = 'black';
  document.getElementById('about').style.color = 'black';
}

function abouts() {
  mainPage.style.display = 'none';
  blog.style.display = 'none';
  card.style.display = 'none';
  card2.style.display = 'none';
  about.style.display = 'block';
  contact.style.display = 'none';

  document.querySelector('.cart').style.display = 'none';

  document.getElementById('blog').style.color = 'black';
  document.getElementById('home').style.color = 'black';
  document.getElementById('shop').style.color = 'black';
  document.getElementById('contact').style.color = 'black';
  document.getElementById('about').style.color = 'rgb(2,173,173)';
}

function contacts() {
  mainPage.style.display = 'none';
  blog.style.display = 'none';
  card.style.display = 'none';
  card2.style.display = 'none';
  about.style.display = 'none';
  contact.style.display = 'block';
  document.querySelector('.cart').style.display = 'none';

  document.getElementById('blog').style.color = 'black';
  document.getElementById('home').style.color = 'black';
  document.getElementById('shop').style.color = 'black';
  document.getElementById('contact').style.color = 'black';
  document.getElementById('about').style.color = 'black';
  document.getElementById('contact').style.color = 'rgb(2,173,173)';
}

function show(img) {
  let newImg = document.getElementById('newImg');
  console.log(img);
  newImg.style.width = '500px';
  newImg.style.margin = '50px';
  newImg.src = img.src;
  document.querySelector('.cart').style.display = 'flex';
  const x = window.matchMedia('(max-width: 768px)');
  if (x.matches) {
    // If media query matches
    document.querySelector('.cart').style.display = 'block';
  } else {
    document.querySelector('.cart').style.display = 'flex';
  }
  mainPage.style.display = 'none';
  blog.style.display = 'none';
  card.style.display = 'none';
  card2.style.display = 'none';
  about.style.display = 'none';
  contact.style.display = 'none';
}

addEventListener('resize', backs);

function backs() {
  mainPage.style.display = 'flex';
  const x = window.matchMedia('(max-width: 768px)');
  if (x.matches) {
    document.querySelector('.main').style.display = 'block';
  } else {
    document.querySelector('.main').style.display = 'flex';
  }
  blog.style.display = 'none';
  card.style.display = 'block';
  card2.style.display = 'block';
  about.style.display = 'none';
  contact.style.display = 'none';
  document.querySelector('.cart').style.display = 'none';

  document.getElementById('blog').style.color = 'black';
  document.getElementById('home').style.color = 'rgb(2,173,173)';
  document.getElementById('shop').style.color = 'black';
  // document.getElementById('contact').style.color = 'black';
  document.getElementById('about').style.color = 'black';
  document.getElementById('contact').style.color = 'none';
}

function addCart() {
  alert('Add to Cart');
  location.reload();
}
