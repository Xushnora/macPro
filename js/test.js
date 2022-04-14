const macObj = {
  name: "Mac Book Air 13-inch",
  ram: [
    {
      name: `M1/8/256 Gold`,
      ramSize: 8,
      active: true,
      memory: [
        {
          name: `M1/8/256 Gold`,
          active: true,
          size: 256,
          price: 12000000,
        },
        {
          name: `M1/8/512 Gold`,
          active: false,
          size: 512,
          price: 15000000,
        },
      ],
    },
    {
      name: `M1/16/256 Gold`,
      ramSize: 16,
      active: false,
      memory: [
        {
          name: `M1/16/256 Gold`,
          active: true,
          size: 256,
          price: 17000000,
        },
        {
          name: `M1/16/512 Gold`,
          active: false,
          size: 512,
          price: 20000000,
        },
        {
          name: `M1/16/1TB Gold`,
          active: false,
          size: 1024,
          price: 21000000,
        },
      ],
    },
  ],
  colors: [
    {
      name: "Gold",
      color: '.yellow',
      imgUrl: "imgs/macbookAir.webp",
      imgSlider: ["imgs/macbookAir.webp", "imgs/macPink2.jpg", "imgs/macPink3.jpg", "imgs/macPink4.jpg", "imgs/macPink5.jpg"]
    },
    {
      name: "Silver",
      color: '.gray',
      imgUrl: "imgs/macSilver1.jpg",
      imgSlider: ["imgs/macSilver1.jpg", "imgs/macSilver2.jpg", "imgs/macSilver3.jpg", "imgs/macSilver4.jpg", "imgs/macSilver5.jpg"]
    },
    {
      name: "Space Gray",
      color: '.lightGray ',
      imgUrl:  "imgs/macGrey1.jpg",
      imgSlider: ["imgs/macGrey1.jpg", "imgs/macGrey2.jpg", "imgs/macGrey3.jpg", "imgs/macGrey4.jpg", "imgs/macGrey5.jpg"],
    },
  ],
  gold: [
    "imgs/macbookAir.webp",
    "imgs/macPink2.jpg", 
    "imgs/macPink3.jpg",
    "imgs/macPink4.jpg",
    "imgs/macPink5.jpg"
  ],
  silver: [
    "imgs/macSilver1.jpg", 
    "imgs/macSilver2.jpg", 
    "imgs/macSilver3.jpg", 
    "imgs/macSilver4.jpg", 
    "imgs/macSilver5.jpg"
  ],
  grey: [
    "imgs/macGrey1.jpg",
    "imgs/macGrey2.jpg", 
    "imgs/macGrey3.jpg", 
    "imgs/macGrey4.jpg", 
    "imgs/macGrey5.jpg"
  ]
};

const typeObj = [
  { 
    active: true,
    name: "Gold",
    imgSlider: ["imgs/macbookAir.webp", "imgs/macPink2.jpg", "imgs/macPink3.jpg", "imgs/macPink4.jpg", "imgs/macPink5.jpg"]
  },
  {
    active: false,
    name: "Silver",
    imgSlider: ["imgs/macGrey1.jpg", "imgs/macGrey2.jpg", "imgs/macGrey3.jpg", "imgs/macGrey4.jpg", "imgs/macGrey5.jpg"],
  },
  {
    active: false,
    name: "Space Gray",
    imgSlider: ["imgs/macGrey1.jpg", "imgs/macGrey2.jpg", "imgs/macGrey3.jpg", "imgs/macGrey4.jpg", "imgs/macGrey5.jpg"],
  }
]

const listBtn = document.querySelector('.listBtn');
const listMemory = document.querySelector('.listMemory');
const macName = document.querySelector('.macName');
// Price hisoblash uchun
const price = document.querySelector("#priceId");
const add = document.querySelector(".add");
const remove = document.querySelector(".remov")
const numberInput = document.querySelector('.numberInput');
price.innerHTML = 0;
let total = 1;
let count = 0;
numberInput.value = 1

function priceNew(macObj) {
  add.addEventListener('click', ()=> {
    macObj.ram.forEach((el) => {
      if (el.active) {
        el.memory.forEach((element) => {
          if (element.active) {
            count += 1;
            if(count <= 0){
              return
            } else {
              total = element.price*count;
              price.innerHTML = `${total} so'm`;
              numberInput.value = count;
            }
          }
        });
      }
    });
  });
  remove.addEventListener('click', ()=> {
    macObj.ram.forEach((el) => {
      if (el.active) {
        el.memory.forEach((element) => {
          if (element.active) {
            count--;
            if(count > 0){
              console.log(count);
              total = element.price*count;
              price.innerHTML = total;
              numberInput.value = count;
              console.log(total);
            } else {
              return;
            }
          }
        });
      }
    });
  })
}
priceNew(macObj);


// >>>>>>>>>>>>>> RAM CREATE <<<<<<<<<<<<<<<<

function addBtnRam(macObj) {
  listBtn.innerHTML = "";
  listMemory.innerHTML = "";
  macObj.ram.forEach((element) => {
    let btn = document.createElement("button");
    btn.className = "ramBtn";
    if (element.active) {
      btn.classList.add("active-btn");

      element.memory.forEach((item) => {
        let btn = document.createElement("button");
        btn.className = "memoryBtn";

        if (item.active) {
          btn.classList.add("active-btn");
        }
        btn.innerHTML = `${item.size}GB`;
        listMemory.appendChild(btn);
      });
    }
    btn.innerHTML = `${element.ramSize}GB`;
    listBtn.appendChild(btn);
  });
}
addBtnRam(macObj);

let addName = 0;
listBtn.addEventListener("click", (e) => {
  total = 0;
  macObj.ram.forEach((element) => {
    element.active = false;
    addName = e.target.innerHTML.slice(0, e.target.innerHTML.length - 2);
    if (
      element.ramSize == addName) {
      macName.innerHTML = `M1/${addName}/256/Gold`
      element.active = true;
      element.memory.forEach(item =>{
        // console.log(item.price);
        price.innerHTML = `${item.price} so'm`;
      })
    }
  });
  isAcitve(macObj);
  priceNew(macObj);
  addBtnRam(macObj);
});

let memoryNameAdd = 0;
function isAcitve(macObj) {
  total = 0;
  listMemory.addEventListener("click", (e) => {
    macObj.ram.forEach((element) => {
      // element.memory.active = false;
      element.memory.forEach((el) => {
        el.active = false;
        memoryNameAdd = e.target.innerHTML.slice(0, e.target.innerHTML.length - 2);
        if (el.size == memoryNameAdd) {
          macName.innerHTML = `M1/${addName}/${memoryNameAdd}/Gold`
          price.innerHTML = `${el.price} so'm`;
          el.active = true;
        }
      });
    });
    priceNew(macObj);
    addBtnRam(macObj);
  });
}

isAcitve(macObj);

let sliderList = document.querySelector('.slider-list');
let macImgList = document.querySelector('.macImgList');
// let macImgItem = document.querySelectorAll('.macImgItem');

function biggerGold(macObj) {
  macObj.gold.forEach(item => {
    let li = document.createElement('li');
    li.className = 'macImgItem';
    li.innerHTML = `
    <img class="macImg" src="${item}" alt="mac">
    `
    macImgList.appendChild(li);
  })
}
biggerGold(macObj)

function biggerSilver(macObj) {
  macObj.silver.forEach(item => {
    let li = document.createElement('li');
    li.className = 'macImgItem';
    li.innerHTML = `
    <img class="macImg" src="${item}" alt="mac">
    `
    macImgList.appendChild(li);
  })
}
// biggerSilver(macObj);

function biggerGrey(macObj) {
  macObj.grey.forEach(item => {
    let li = document.createElement('li');
    li.className = 'macImgItem';
    li.innerHTML = `
    <img class="macImg" src="${item}" alt="mac">
    `
    macImgList.appendChild(li);
  })
}
// biggerGrey(macObj);

function goldList(macObj) {
  macObj.gold.forEach(item => {
    let li = document.createElement('li');
    li.className = 'slider-item';
    li.innerHTML = `
    <img src="${item}" alt="mac">
    `
    sliderList.appendChild(li);
  })
}
goldList(macObj)
function silverList(macObj) {
  macObj.silver.forEach(item => {
    let li = document.createElement('li');
    li.className = 'slider-item';
    li.innerHTML = `
    <img src="${item}" alt="mac">
    `
    sliderList.appendChild(li);
  })
}
// silverList(macObj);
function greyList(macObj) {
  macObj.grey.forEach(item => {
    let li = document.createElement('li');
    li.className = 'slider-item';
    li.innerHTML = `
    <img src="${item}" alt="mac">
    `
    sliderList.appendChild(li);
  })
}
// greyList(macObj);
console.log(macObj.gold[0]);




// slider uchun BUTTON COLORS

const colorBtnBox = document.querySelector('.colorBtnBox');
let colorBtn = document.querySelectorAll('.color-btn');
let macBox = document.querySelector('.macBox');

colorBtn[0].addEventListener('click', (e)=> {
  sliderList.innerHTML = "";
  macImgList.innerHTML = "";
  colorBtn[0].classList.add('borderActive');
  colorBtn[1].classList.remove('borderActive');
  colorBtn[2].classList.remove('borderActive');
  
  biggerGold(macObj);
  goldList(macObj)
})


colorBtn[1].addEventListener('click', (e)=> {
  sliderList.innerHTML = "";
  macImgList.innerHTML = "";
  colorBtn[1].classList.add('borderActive');
  colorBtn[0].classList.remove('borderActive');
  colorBtn[2].classList.remove('borderActive');

  biggerSilver(macObj);
  silverList(macObj);

})


colorBtn[2].addEventListener('click', (e)=> {
  sliderList.innerHTML = "";
  macImgList.innerHTML = "";
  colorBtn[2].classList.add('borderActive');
  colorBtn[0].classList.remove('borderActive');
  colorBtn[1].classList.remove('borderActive');

  greyList(macObj);
  biggerGrey(macObj);

})


// console.log(sliderItems.length);

// let temp = 500;
// let count2 = 0;
// sliderItems.forEach((_, index) => {
//   sliderItems[index].addEventListener('click', ()=>{
//     count2++;
//     if(count2 == index) {
//       macImgList.style.transform = `translateX(${temp}px)`;
//       console.log('ok');
//     } else {
//       macImgList.style.transform = `translateX(-${temp}px)`;
//       console.log('no');
//     }
//   })
// })

function carousel() {
  let sliderItems = document.querySelectorAll('.slider-item');
  sliderItems.forEach((item, index) => {
    item.addEventListener('click', ()=> {
      sliderItems.forEach((value) => {
        value.classList.remove('active-item');
      })
      item.classList.add('active-item');
      macImgList.style.transform = `
      translateX(${-index *500}px)`
    })
  })
}
carousel()
















