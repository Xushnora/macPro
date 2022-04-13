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
      imgUrl: "./imgs/macbookAir.webp",
      imgSlider: ["imgs/macbookAir.webp", "imgs/macPink2.jpg", "imgs/macPink3.jpg", "imgs/macPink4.jpg", "imgs/macPink5.jpg"]
    },
    {
      name: "Silver",
      imgUrl: "imgs/macSilver1.jpg",
      imgSlider: ["imgs/macSilver1.jpg", "imgs/macSilver2.jpg", "imgs/macSilver3.jpg", "imgs/macSilver4.jpg", "imgs/macSilver5.jpg"]
    },
    {
      name: "Space Gray",
      imgUrl:  "imgs/macGrey1.jpg",
      imgSlider: ["imgs/macGrey1.jpg", "imgs/macGrey2.jpg", "imgs/macGrey3.jpg", "imgs/macGrey4.jpg", "imgs/macGrey5.jpg"],
    },
  ],
};

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
              price.innerHTML = total;
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
        price.innerHTML = item.price;
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
          price.innerHTML = el.price;
          el.active = true;
        }
      });
    });
    priceNew(macObj);
    addBtnRam(macObj);
  });
}

isAcitve(macObj);




















