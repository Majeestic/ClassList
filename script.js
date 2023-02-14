const btns = document.querySelectorAll('button');
const wrapper = document.querySelector('.btn-block');

// console.log(btns[0].classList.length); //Дает количество классов 
// console.log(btns[0].classList.item(1)); // выдает имя класса под индексом 
// console.log(btns[1].classList.add('red')); // добовляет класс
// console.log(btns[0].classList.remove('blue')); // удаляет класс
// console.log(btns[0].classList.toggle('blue'));// меняет класс

// console.log(btns[1].classList.contains('red')) // contains проверяет есть ли такой класс или нет
// if(btns[1].classList.contains('red')) {
//   console.log('cool')
// }

// btns[0].addEventListener('click', () => {
//   // if(!btns[1].classList.contains('red')) {
//   //   btns[1].classList.add('red');
//   //   console.log('1')
//   // }else {
//   //   btns[1].classList.remove('red');
//   //   console.log('0');
//   // 
//   btns[1].classList.toggle('red')
// })


//  ********************** Делегирование событий ************************

// wrapper.addEventListener('click', (event) => {
//   if(event.target && event.target.tagName == 'BUTTON') {
//     console.log('click');
//   }
// })
// wrapper.addEventListener('click', (event) => {
//   if(event.target && event.target.classList.contains('blue')) {
//     console.log('click');
//     // const btn = document.createElement('button');
//     // btn.classList.add('red');
//     // wrapper.append(btn);
//   }
// })

// без делегирование работать forEach не будет у созданных динамически
// btns.forEach((btn) => {
//   btn.addEventListener('click', () => {
//     console.log('ckick');
//   });
// });

wrapper.addEventListener('click', (e) => {
  if(e.target && e.target.matches('button.blue')) {
    console.log('hi')
  }
})

const btn = document.createElement('button');
btn.classList.add('red');
wrapper.append(btn);
