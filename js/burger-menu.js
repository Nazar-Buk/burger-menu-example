const menu = document.querySelector(".menu__body"); // Декстопне меню
const menuBtn = document.querySelector(".menu__icon"); // іконка бургера (обгортка рисочок)
const body = document.body;
// const test = document.querySelectorAll(".menu__link"); // вибраємо і запихаємо в масив всі елементи із ".menu__link"

// console.log(test, "test");
// console.log(menu, "menu");
// console.log(menuBtn, "menuBtn");
// console.log(body, "body");

if (menu && menuBtn) {
  menuBtn.addEventListener("click", () => {
    menu.classList.toggle("active"); // до десктопного меню буде додаватися або забиратися клас active
    menuBtn.classList.toggle("active");
    body.classList.toggle("lock");
  });

  // Щоб при кліку на сірий фон, менюха закривалася
  menu.addEventListener("click", (e) => {
    if (e.target.classList.contains("menu__body")) {
      menu.classList.remove("active");
      menuBtn.classList.remove("active");
      body.classList.remove("lock");
    }
  });

  // Вибрав всі елементи із класом .menu__link (це мої пункти меню) та повішав на них подію "click",
  // тепер меню закриється при вибиранні пункту меню, а також можна скролити сайт

  menu.querySelectorAll(".menu__link").forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.remove("active");
      menuBtn.classList.remove("active");
      body.classList.remove("lock");
    });
  });
}

// Плавна прокрутка
// a[href*='#']  ====> вибрав всі силки в котрих всі атрибути href мають решітку #

const anchors = document.querySelectorAll("a[href*='#']");

anchors.forEach((anchor) => {
  //   console.log(anchor);
  anchor.addEventListener("click", (event) => {
    event.preventDefault(); // видаляємо стандартну поведінку браузера, а саме забороняю перезагружання сторінки,
    // бо лінка вміє перезавантажувати її

    // .getAttribute("href") ----> отримуємо те що в атрибуті href
    // .substring(1) ----> видаляємо перший символ, в даному випадку це решітка #
    const blockID = anchor.getAttribute("href").substring(1);

    // Плавна прокрутка власною персоною
    document.getElementById(blockID).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
});
