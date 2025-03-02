const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".about__container .section__header", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".about__container .section__description", {
  ...scrollRevealOption,
  delay: 500,
  interval: 500,
});
ScrollReveal().reveal(".about__container img", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".service__container .section__header", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".service__container .section__description", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".service__card", {
  duration: 1000,
  delay: 1000,
  interval: 500,
});

const swiper = new Swiper(".swiper", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
  },
});

ScrollReveal().reveal(".blog__content .section__header", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".blog__content h4", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".blog__content p", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".blog__content .blog__btn", {
  ...scrollRevealOption,
  delay: 1500,
});

const instagram = document.querySelector(".instagram__flex");

Array.from(instagram.children).forEach((item) => {
  const duplicateNode = item.cloneNode(true);
  duplicateNode.setAttribute("aria-hidden", true);
  instagram.appendChild(duplicateNode);
});

// Image arrays for each category
const babyshowerImages = [
  'assets/images/babyshower/IMG_1.JPG',
  'assets/images/babyshower/IMG_2.JPG',
  'assets/images/babyshower/IMG_3.JPG',
  'assets/images/babyshower/IMG_9599.JPG',
  'assets/images/babyshower/IMG_9611.JPG',
  'assets/images/babyshower/IMG_9613.JPG',
  'assets/images/babyshower/IMG_9614.JPG',
  'assets/images/babyshower/IMG_9646.JPG',
  'assets/images/babyshower/IMG_9675.JPG',
  'assets/images/babyshower/IMG-20240527-WA0003.jpg',
  'assets/images/babyshower/IMG-20240527-WA0004.jpg',
  'assets/images/babyshower/IMG-20240527-WA0007.jpg',
  'assets/images/babyshower/IMG-20240527-WA0008.jpg',
  'assets/images/babyshower/IMG-20240527-WA0013.jpg',
  'assets/images/babyshower/IMG-20240527-WA0015.jpg',
  'assets/images/babyshower/IMG-20240527-WA0016.jpg',
  'assets/images/babyshower/IMG-20240527-WA0017.jpg',
];

const birthdayImages = [
  'assets/images/brithday/1.JPG',
  'assets/images/brithday/2.JPG',
  'assets/images/brithday/3.JPG',
  'assets/images/brithday/4.JPG',
  'assets/images/brithday/5.JPG',
  'assets/images/brithday/6.JPG',
  'assets/images/brithday/7.JPG',
  'assets/images/brithday/8.JPG',
  'assets/images/brithday/9.JPG',
  'assets/images/brithday/10.JPG',
  'assets/images/brithday/11.JPG',
  'assets/images/brithday/12.JPG',
  'assets/images/brithday/13.JPG',
  'assets/images/brithday/14.JPG',
  'assets/images/brithday/15.JPG',
  'assets/images/brithday/16.JPG',
  'assets/images/brithday/17.JPG',
  'assets/images/brithday/18.JPG',
  'assets/images/brithday/19.JPG',
  'assets/images/brithday/20.JPG',
  'assets/images/brithday/21.JPG',
  'assets/images/brithday/22.JPG',
  'assets/images/brithday/23.JPG',
  'assets/images/brithday/24.JPG',
  'assets/images/brithday/25.JPG',
  'assets/images/brithday/26.JPG',
  'assets/images/brithday/27.JPG',
  'assets/images/brithday/28.JPG',
  'assets/images/brithday/29.JPG',
  'assets/images/brithday/30.JPG',
  'assets/images/brithday/31.JPG',
  'assets/images/brithday/32.JPG',
  'assets/images/brithday/33.JPG',
  'assets/images/brithday/34.JPG',
  'assets/images/brithday/35.JPG',
  'assets/images/brithday/36.JPG',
  'assets/images/brithday/37.JPG',
  'assets/images/brithday/38.JPG',
  'assets/images/brithday/39.jpg',
  'assets/images/brithday/40.jpg',
  'assets/images/brithday/41.jpg',
  'assets/images/brithday/42.jpg',
  'assets/images/brithday/43.jpg',
  'assets/images/brithday/44.JPG',
  'assets/images/brithday/45.JPG',
  'assets/images/brithday/46.JPG',
  'assets/images/brithday/47.JPG',
  'assets/images/brithday/48.JPG',
  'assets/images/brithday/49.JPG',
  'assets/images/brithday/50.JPG',
  'assets/images/brithday/51.JPG',
  'assets/images/brithday/52.JPG',

  // Add all your birthday images here
];

const engagementImages = [
  'assets/images/engagement/1.JPG',
  'assets/images/engagement/2.JPG',
  'assets/images/engagement/3.JPG',
  'assets/images/engagement/4.JPG',
  'assets/images/engagement/5.JPG',
  'assets/images/engagement/6.JPG',
  'assets/images/engagement/7.JPG',
  'assets/images/engagement/8.JPG',
  'assets/images/engagement/9.JPG',
  'assets/images/engagement/10.JPG',
  'assets/images/engagement/11.JPG',
  'assets/images/engagement/12.JPG',
  'assets/images/engagement/13.JPG',
  'assets/images/engagement/14.JPG',
  'assets/images/engagement/15.JPG',
  'assets/images/engagement/16.JPG',
  'assets/images/engagement/17.JPG',
  'assets/images/engagement/18.JPG',
  'assets/images/engagement/19.JPG',
  'assets/images/engagement/20.JPG',
  'assets/images/engagement/21.JPG',
  'assets/images/engagement/22.JPG',
  'assets/images/engagement/23.JPG',
  'assets/images/engagement/24.JPG',
  'assets/images/engagement/25.JPG',
  'assets/images/engagement/26.JPG',
  'assets/images/engagement/27.JPG',
  'assets/images/engagement/28.JPG',
  'assets/images/engagement/29.JPG',
  'assets/images/engagement/30.JPG',
  'assets/images/engagement/31.JPG',
  'assets/images/engagement/32.JPG',
  'assets/images/engagement/33.JPG',
  'assets/images/engagement/34.JPG',
  'assets/images/engagement/35.JPG',
  'assets/images/engagement/36.JPG',
  'assets/images/engagement/37.JPG',
  'assets/images/engagement/38.JPG',
  'assets/images/engagement/39.JPG',
  'assets/images/engagement/40.JPG',
  'assets/images/engagement/41.JPG',
  'assets/images/engagement/42.JPG',
  'assets/images/engagement/43.JPG',
  'assets/images/engagement/44.JPG',
  'assets/images/engagement/45.JPG',

  // Add all your engagement images here
];

// New gallery images array
const galleryImages = ['assets/images/brithday/1.JPG',
  'assets/images/brithday/2.JPG',
  'assets/images/brithday/3.JPG',
  'assets/images/brithday/4.JPG',
  'assets/images/brithday/5.JPG',
  'assets/images/brithday/6.JPG',
  'assets/images/brithday/7.JPG',
  'assets/images/engagement/40.JPG',
  'assets/images/engagement/41.JPG',
  'assets/images/engagement/42.JPG',
  'assets/images/engagement/43.JPG',
  'assets/images/gallery/1.JPG',
  'assets/images/gallery/2.JPG',
  'assets/images/gallery/3.JPG',
  'assets/images/gallery/4.JPG',
  'assets/images/gallery/4.JPG',
  'assets/images/gallery/5.JPG',
  'assets/images/gallery/6.JPG',
  'assets/images/gallery/7.JPG',
  'assets/images/gallery/8.JPG',
  'assets/images/gallery/9.JPG',
  // Add more gallery images as needed
];

const weddingImages = [
  'assets/images/wedding/111.jpg',
  'assets/images/wedding/2.jpg',
  'assets/images/wedding/3.jpg',
  'assets/images/wedding/4.jpg',
  'assets/images/wedding/5.jpg',
  'assets/images/wedding/6.jpg',
  'assets/images/wedding/7.jpg',
  'assets/images/wedding/8.jpg',
  'assets/images/wedding/9.jpg',
  'assets/images/wedding/10.jpg',
  'assets/images/wedding/11.jpg',
  'assets/images/wedding/12.jpg',
  'assets/images/wedding/13.jpg',
  'assets/images/wedding/14.jpg',
  'assets/images/wedding/15.jpg',
  'assets/images/wedding/16.jpg',
]

const haliImages = [
  'assets/images/haldi/1.jpg',
  'assets/images/haldi/2.jpg',
  'assets/images/haldi/3.jpg',
  'assets/images/haldi/4.jpg',
]
function openLightbox(category) {
  const lightbox = document.getElementById('lightbox');
  const grid = document.querySelector('.lightbox-grid');

  // Clear existing content
  grid.innerHTML = '';

  // Select the appropriate image array based on category
  let images;
  let altText;

  switch (category) {
    case 'babyshower':
      images = babyshowerImages;
      altText = 'Babyshower photo';
      break;
    case 'birthday':
      images = birthdayImages;
      altText = 'Birthday photo';
      break;
    case 'engagement':
      images = engagementImages;
      altText = 'Engagement photo';
      break;
    case 'wedding':
      images = weddingImages;
      altText = 'wedding photos';
      break;
    case 'haldi':
      images = haliImages;
      altText = 'Haldi photos';
      break;
    case 'gallery':
      images = galleryImages;
      altText = 'Gallery photo';
      break;
    default:
      images = [];
      altText = 'Photo';
  }

  // Add all images to the grid
  images.forEach(imageSrc => {
    const img = document.createElement('img');
    img.src = imageSrc;
    img.alt = altText;
    grid.appendChild(img);
  });

  // Show lightbox
  lightbox.style.display = 'block';

  // Prevent body scrolling
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  document.getElementById('lightbox').style.display = 'none';
  document.body.style.overflow = 'auto';
}

// Close lightbox when clicking outside the grid
document.getElementById('lightbox').addEventListener('click', function (e) {
  if (e.target === this) {
    closeLightbox();
  }
});

// Add keyboard navigation for closing
document.addEventListener('keydown', function (e) {
  if (document.getElementById('lightbox').style.display === 'block') {
    if (e.key === 'Escape') {
      closeLightbox();
    }
  }
});


