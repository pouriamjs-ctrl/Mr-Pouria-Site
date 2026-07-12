const btns = document.querySelectorAll('.theme-toggle');  // بجای getElementById

btns.forEach(btn => {
    btn.addEventListener('click', () => {
        document.documentElement.classList.toggle('dark');
        const isDark = document.documentElement.classList.contains('dark');
        localStorage.theme = isDark ? 'dark' : 'light';
    });
});

// ////////////////////////////////////////////////////////////////////////////////////////////////////////

// Toggle Submenu
const submenuBtns = document.querySelectorAll('.submenu-open-btn');

submenuBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const submenu = btn.closest('div').nextElementSibling;
    
    // بستن بقیه منوها
    document.querySelectorAll('.submenu').forEach(menu => {
      if (menu !== submenu) {
        menu.classList.add('hidden');
      }
    });

    // باز/بستن منوی فعلی
    submenu.classList.toggle('hidden');

    // چرخش آیکون فلش
    btn.querySelector('svg').classList.toggle('rotate-180');
  });
});

// بستن منو با کلیک بیرون از آن
document.addEventListener('click', (e) => {
  if (!e.target.closest('li')) {
    document.querySelectorAll('.submenu').forEach(menu => {
      menu.classList.add('hidden');
    });
  }
});

// /////////////////////////////////////////////////////////////////////////////////////////////////////////////

const menuBar = document.querySelector('[href="#barse3"]').closest('div')
const menuClose = document.querySelector('[href="#xmark"]').closest('div')
const mobileMenu = document.querySelector('.fixed.top0.bottom-0')

// باز کردن منو
menuBar.addEventListener('click', () => {
  mobileMenu.classList.remove('hidden')
})

// بستن منو
menuClose.addEventListener('click', () => {
  mobileMenu.classList.add('hidden')
})

// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const menuBtn = document.querySelector('svg:has(use[href="#barse3"])')
const closeBtn = document.querySelector('svg:has(use[href="#xmark"])')

const overlay = document.getElementById('overlay');

menuBtn.addEventListener('click', () => {
  mobileMenu.classList.remove('translate-x-full')
  overlay.classList.remove('invisible', 'opacity-0')
})

const closeMenu = () => {
  mobileMenu.classList.add('translate-x-full')
  overlay.classList.add('invisible', 'opacity-0')
}

closeBtn.addEventListener('click', closeMenu)
overlay.addEventListener('click', closeMenu)




// /////////////////////////////////////////////////////////
const cartBtn = document.getElementById('cart-btn');
const cartMenu = document.getElementById('cart-menu');
const cartCloseBtn = document.getElementById('cart-close-btn');
// const overlay = document.getElementById('overlay');

cartBtn.addEventListener('click', () => {
  cartMenu.classList.remove('-translate-x-full');
  overlay.classList.remove('invisible', 'opacity-0');
  overlay.classList.add('opacity-100');
});

cartCloseBtn.addEventListener('click', () => {
  cartMenu.classList.add('-translate-x-full');
  overlay.classList.remove('opacity-100');
  overlay.classList.add('opacity-0');
  setTimeout(() => overlay.classList.add('invisible'), 300);
});

overlay.addEventListener('click', () => {
  cartMenu.classList.add('-translate-x-full');
  overlay.classList.remove('opacity-100');
  overlay.classList.add('opacity-0');
  setTimeout(() => overlay.classList.add('invisible'), 300);
});