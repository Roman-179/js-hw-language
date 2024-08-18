import { en } from "./js/en.js";
import { fr } from "./js/fr.js";
import { refs } from "./js/refs.js";
import { es } from "./js/es.js";

// const {
//   btn: { btn_en, btn_es, btn_fr, main_btn, main_btn2, discover },
//   text: {
//     main_text,
//     description,
//     stat_desc1,
//     stat_desc2,
//     stat_desc3,
//     stat_desc4,
//     stat_desc5,
//     stat_desc6,
//     element1,
//     element2,
//     element3,
//     element4,
//   },
//   title: { head_desc, stats_head, we, brands, contact },
// } = refs;

// function changeLanguage(lang) {
//   main_btn.textContent = lang.main_btn;
//   main_btn2.textContent = lang.main_btn2;
//   discover.textContent = lang.discover;
//   main_text.textContent = lang.main_text;
//   description.textContent = lang.description;
//   stat_desc1.textContent = lang.stat_desc1;
//   stat_desc2.textContent = lang.stat_desc2;
//   stat_desc3.textContent = lang.stat_desc3;
//   stat_desc4.textContent = lang.stat_desc4;
//   stat_desc5.textContent = lang.stat_desc5;
//   stat_desc6.textContent = lang.stat_desc6;
//   element1.textContent = lang.element1;
//   element2.textContent = lang.element2;
//   element3.textContent = lang.element3;
//   element4.textContent = lang.element4;
//   head_desc.textContent = lang.head_desc;
//   stats_head.textContent = lang.stats_head;
//   we.textContent = lang.we;
//   brands.textContent = lang.brands;
//   contact.textContent = lang.contact;
// }

const {
  btn: { btn_en, btn_es, btn_fr, main_btn, main_btn2, discover },
  ...elements
} = refs;

function changeLanguage(lang) {
  console.log(elements);
  Object.keys(elements).forEach((key) => {
    const subElements = elements[key];
    console.log("subElements", subElements);
    Object.keys(subElements).forEach((subKey) => {
      console.log("subKey", subKey);
      subElements[subKey].textContent = lang[subKey];
    });
  });
}

const languages = { en, es, fr };
const button = { btn_en, btn_es, btn_fr };

Object.keys(button).forEach((key) => {
  button[key].addEventListener("click", (e) => {
    const langCode = key.split("_")[1];
    changeLanguage(languages[langCode]);

    Object.keys(button).forEach((btnKey) => {
      button[btnKey].classList.remove("active");
    });

    e.target.classList.add("active");
  });
});
