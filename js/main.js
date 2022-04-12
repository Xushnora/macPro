const macBox = [
    {
        id: 1,
        nomi: `Gold`,
        imgUrl: "./imgs/macbookAir.webp",
        imgSlider: ["imgs/macbookAir.webp", "imgs/macPink2.jpg", "imgs/macPink3.jpg", "imgs/macPink4.jpg", "imgs/macPink5.jpg"],
        ram: [
            {
                GB: 8,
                xotira: [
                    {
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
                xotira: [
                    {
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
        ram: [
            {
                GB: 8,
                xotira: [
                    {
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
                xotira: [
                    {
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
        ram: [
            {
                GB: 8,
                xotira: [
                    {
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
                xotira: [
                    {
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

// >>>>>>>>>>>>>>>> RAM BTN <<<<<<<<<<<<<<<<<<<

const ramOneBtn = document.querySelector('#ramOne');
const ramTwoBtn = document.querySelector('#ramTwo');
const macTitle = document.querySelector('.macName');

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