const macBox = [{
        id: 1,
        nomi: `Gold`,
        imgUrl: "./imgs/macbookAir.webp",
        imgSlider: ["imgs/macbookAir.webp", "imgs/macPink2.jpg", "imgs/macPink3.jpg", "imgs/macPink4.jpg", "imgs/macPink5.jpg"],
        ram: [{
                GB: 8,
                xotira: [{
                        name: `M1/8/256 Gold`,
                        gbXotira: 256,
                        price: 12497000
                    },
                    {
                        name: `M1/8/512 Gold`,
                        gbXotira: 512,
                        price: 15066000
                    }
                ]
            },
            {
                GB: 16,
                xotira: [{
                        name: `M1/16/256 Gold`,
                        gbXotira: 256,
                        price: `16 935 000`
                    },
                    {
                        name: `M1/16/512 Gold`,
                        gbXotira: 512,
                        price: `19 270 500`
                    },
                    {
                        name: `M1/16/1tb Gold`,
                        gbXotira: 1,
                        price: `22 497 000`
                    }
                ]
            }
        ],

    },
    {
        id: 2,
        nomi: `Silver`,
        imgUrl: "imgs/macSilver1.jpg",
        imgSlider: ["imgs/macSilver1.jpg", "imgs/macSilver2.jpg", "imgs/macSilver3.jpg", "imgs/macSilver4.jpg", "imgs/macSilver5.jpg"],
        ram: [{
                GB: 8,
                xotira: [{
                        name: `M1/8/256 Silver`,
                        gbXotira: 256,
                        price: 12497000
                    },
                    {
                        name: `M1/8/512 Silver`,
                        gbXotira: 512,
                        price: 15066000
                    },
                    {
                        name: `M1/16/1tb Silver`,
                        gbXotira: 1,
                        price: `22 497 000`
                    }
                ]
            },
            {
                GB: 16,
                xotira: [{
                        name: `M1/16/256 Silver`,
                        gbXotira: 256,
                        price: `16 935 000`
                    },
                    {
                        name: `M1/16/512 Silver`,
                        gbXotira: 512,
                        price: `19 270 500`
                    },
                    {
                        name: `M1/16/1tb Silver`,
                        gbXotira: 1,
                        price: `22 497 000`
                    }
                ]
            }
        ],

    },
    {
        id: 3,
        nomi: `Grey`,
        imgUrl: "imgs/macGrey1.jpg",
        imgSlider: ["imgs/macGrey1.jpg", "imgs/macGrey2.jpg", "imgs/macGrey3.jpg", "imgs/macGrey4.jpg", "imgs/macGrey5.jpg"],
        ram: [{
                GB: 8,
                xotira: [{
                        name: `M1/8/256 Grey`,
                        gbXotira: 256,
                        price: 12497000
                    },
                    {
                        name: `M1/8/512 Grey`,
                        gbXotira: 512,
                        price: 15066000
                    }
                ]
            },
            {
                GB: 16,
                xotira: [{
                        name: `M1/16/256 Grey`,
                        gbXotira: 256,
                        price: `16 935 000`
                    },
                    {
                        name: `M1/16/512 Grey`,
                        gbXotira: 512,
                        price: `19 270 500`
                    },
                    {
                        name: `M1/16/1tb Grey`,
                        gbXotira: 1,
                        price: `22 497 000`
                    }
                ]
            }
        ],

    }
];

const rightBox = document.querySelector('.rightBox');

// RENDER BTN block

function renderButtons() {
    let box = document.createElement('div');
    box.innerHTML = `
        <div>
        <h1 class="mac__title">MacBook Air 13-inch</h1>
        <div class="macNameBox">
            <h2 class="macName">M1/8/512 Gold</h2>
        </div>
        <div class="ram">
            <h4 class="ram__title">Ram</h4>
            <div class="ramBtnBox">
                <button id="ramOne" class="ramBtn borderActive">8GB</button>
                <button id="ramTwo" class="ramBtn">16GB</button>
            </div>
        </div>
        <div class="xotira">
            <h4 class="ram__title">Xotira hajmi</h4>
            <div class="ramBtnBox">
                <button id="memoryOne" class="ramBtn borderActive">256GB</button>
                <button id="memoryTwo" class="ramBtn">512GB</button>
                <button id="memoryThree" class="ramBtn noneBtn">1TB</button>
            </div>
        </div>
        <div class="color">
            <h4 class="color__title">Ranglar</h4>
            <div class="colorBtnBox">
                <button class="goldBtn color-btn borderActive"> 
                    <span class="yellow"></span>
                    <p class="color-name">Tilla rang</p>
                </button>
                <button class="grayBtn color-btn">
                    <span class="gray"></span>
                    <p class="color-name">Kumush rang</p>
                </button>
                <button class="lightGrayBtn color-btn">
                    <span class="lightGray"></span>
                    <p class="color-name"> Kosmik kulrang</p>
                </button>
            </div>
        </div>
        <div class="addBox">
            <div class="add-btn-box">
                <button class="minusBtn">
                    <i class='bx bx-minus'></i>
                </button>
                <input class="numberInput" type="number" value="1">
                <button class="plusBtn">
                    <i class='bx bx-plus'></i>
                </button>
            </div>
        </div>
        <div class="price">
            <h3 class="price-title">15 066 000 so'm</h3>
            <p class="price-text">17 627 500 so'm</p>
        </div>
        <button class="add-basket-btn">Savatchaga qo'shish</button>
        <button class="combars-btn">Taqqoslash</button>
    </div>
        `
    rightBox.appendChild(box);
}

renderButtons();

// RENDER IMG block

const leftBox = document.querySelector('.leftBox');

function renderImg() {
    let box = document.createElement('div');
    box.innerHTML = `
    <div>
        <div class="macBox">
            <img class="macImg" src="./imgs/macbookAir.webp" alt="mac">
        </div>
        <div class="desc-modalBox">
            <button class="decs-modal">
                <i class='bx bx-fullscreen'></i>
            </button>
        </div>
        <div class="slider-img">
            <ul class="slider-list">
                <li class="slider-item active-item">
                    <img src="imgs/macbookAir.webp" alt="mac">
                </li>
                <li class="slider-item">
                    <img src="imgs/macPink2.jpg" alt="mac">
                </li>
                <li class="slider-item">
                    <img src="imgs/macPink3.jpg" alt="mac">
                </li>
                <li class="slider-item">
                    <img src="imgs/macPink4.jpg" alt="mac">
                </li>
                <li class="slider-item">
                    <img src="imgs/macPink5.jpg" alt="mac">
                </li>
            </ul>
        </div>
    </div>
    `
    leftBox.appendChild(box);
}

renderImg()


// >>>>>>>>>>>>>>>> RAM BTN <<<<<<<<<<<<<<<<<<<

const ramOneBtn = document.querySelector('#ramOne');
const ramTwoBtn = document.querySelector('#ramTwo');
const macTitle = document.querySelector('.macName');
const priceTitle = document.querySelector('.price-title');

ramOneBtn.addEventListener('click', renderOne);
ramTwoBtn.addEventListener('click', renderTwo);

function renderOne() {
    ramOneBtn.style.borderColor = "blue";
    ramTwoBtn.style.borderColor = "#888";
    memoryThree.style.display = "none";
    macTitle.innerHTML = `M1/8/256 Silver`
}

function renderTwo() {
    ramTwoBtn.style.borderColor = "blue";
    ramOneBtn.style.borderColor = "#888";
    memoryThree.style.display = "block";
    macTitle.innerHTML = `M1/16/256 Silver`
}

// macBox.forEach((item) => {
//     item.ram.forEach((element) => {
//         console.log(element);
//     })

// })


// >>>>>>>>>>>>>>>> MEMORY (XOTIRA) BTN <<<<<<<<<<<<<<<<<<<

const memoryOne = document.querySelector('#memoryOne');
const memoryTwo = document.querySelector('#memoryTwo');
const memoryThree = document.querySelector('#memoryThree');

memoryOne.addEventListener('click', () => {
    memoryOne.classList.add('borderActive');
    memoryTwo.classList.remove('borderActive');
    memoryThree.classList.remove('borderActive');
})
memoryTwo.addEventListener('click', () => {
    memoryTwo.classList.add('borderActive');
    memoryOne.classList.remove('borderActive');
    memoryThree.classList.remove('borderActive');
})
memoryThree.addEventListener('click', () => {
    memoryThree.classList.add('borderActive');
    memoryOne.classList.remove('borderActive');
    memoryTwo.classList.remove('borderActive');
})

// >>>>>>>>>>>> COLOR & IMG <<<<<<<<<<<<<<<

const goldBtn = document.querySelector('.goldBtn');
const silverBtn = document.querySelector('.grayBtn');
const greyBtn = document.querySelector('.lightGrayBtn');

const colorList = document.querySelector('.slider-list');
const sliderItem = document.querySelector('.slider-item');
const macsBox = document.querySelector('.macBox');

goldBtn.addEventListener('click', goldColor);
silverBtn.addEventListener('click', silverColor);
greyBtn.addEventListener('click', greyColor);


function goldColor() {
    goldBtn.style.borderColor = "blue";
    silverBtn.style.borderColor = "#888";
    greyBtn.style.borderColor = "#888";

    macsBox.innerHTML = `<img class="macImg" src="${macBox[0].imgUrl}" alt="mac">`

}

function silverColor() {
    silverBtn.style.borderColor = "blue";
    greyBtn.style.borderColor = "#888";
    goldBtn.style.borderColor = "#888";

    macsBox.innerHTML = `<img class="macImg" src="${macBox[1].imgUrl}" alt="mac">`

}

function greyColor() {
    goldBtn.style.borderColor = "#888";
    silverBtn.style.borderColor = "#888";
    greyBtn.style.borderColor = "blue";

    macsBox.innerHTML = `<img class="macImg" src="${macBox[2].imgUrl}" alt="mac">`

}


// >>>>>>>>>>>> PRICE HISOBLASH <<<<<<<<<<<<<<<<

const minusBtn = document.querySelector('.minusBtn');
const plusBtn = document.querySelector('.plusBtn');
const numberInput = document.querySelector('.numberInput');

console.log(numberInput.value);