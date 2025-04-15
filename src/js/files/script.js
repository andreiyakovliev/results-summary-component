// Підключення функціоналу "Чертоги Фрілансера"
import { data } from "isotope-layout";
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";

//=============== Отримання данних ===============//

fetch('./data/data.json')
   .then(response => response.json())
   .then(data => {
      data.forEach((item, index) => {
         const category = document.querySelectorAll('.component__summary-text')[index];
         // console.log(category);
         const score = document.querySelectorAll('.component__summary-score span')[index];
         // console.log(score);
         const icon = document.querySelectorAll('.component__summary-icon')[index];
         console.log(icon);

         category.textContent = item.category;
         score.textContent = item.score;
         icon.src = item.icon;
      });

      const scores = data.map(item => item.score);
      console.log(scores);

      const score = document.querySelector('.component__score-avrg span');

      const average = arr => arr.reduce((sum, num) => sum + num, 0) / arr.length;

      score.textContent = Math.round(average(scores));

      // score.textContent = 0;

      // button.addEventListener('click', () => {
      //    score.textContent = Math.round(average(scores));
      // });



   })
   .catch(error => {
      console.error('Помилка:', error);
   });


//=============== Вирахування середнього значення ===============//

const button = document.querySelector('.button');
console.log(button);