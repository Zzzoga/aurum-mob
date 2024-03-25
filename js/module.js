let literOneFloorCurrentNum = 3
let literTwoFloorCurrentNum = 3
let literThreeFloorCurrentNum = 4
let literFourFloorCurrentNum = 4

const literOne = document.querySelector('.liter__1')
const literTwo = document.querySelector('.liter__2')
const literThree = document.querySelector('.liter__3')
const literFour = document.querySelector('.liter__4')

const literOneArrowUp = document.querySelector('.liter__1 .arrow.up')
const literOneArrowDown = document.querySelector('.liter__1 .arrow.down')
const literOneFloorNum = document.querySelector('.liter__1 .current__num')

const literTwoArrowUp = document.querySelector('.liter__2 .arrow.up')
const literTwoArrowDown = document.querySelector('.liter__2 .arrow.down')
const literTwoFloorNum = document.querySelector('.liter__2 .current__num')

const literThreeArrowUp = document.querySelector('.liter__3 .arrow.up')
const literThreeArrowDown = document.querySelector('.liter__3 .arrow.down')
const literThreeFloorNum = document.querySelector('.liter__3 .current__num')

const literFourArrowUp = document.querySelector('.liter__4 .arrow.up')
const literFourArrowDown = document.querySelector('.liter__4 .arrow.down')
const literFourFloorNum = document.querySelector('.liter__4 .current__num')

const literOneFloorSVG = document.querySelectorAll('.liter__1 .floors__container svg path')
const literTwoFloorSVG = document.querySelectorAll('.liter__2 .floors__container svg path')
const literThreeFloorSVG = document.querySelectorAll('.liter__3 .floors__container svg path')
const literFourFloorSVG = document.querySelectorAll('.liter__4 .floors__container svg path')

function changeCurrentFloorNum(up, down, min, max, current, writeElement, svgList) {
    up.addEventListener('click', e => {
        e.preventDefault()
        if (current >= max) {
            current += 0
        } else if (current < max) {
            current += 1
        }

        writeElement.innerHTML = current
        svgList.forEach(path => {
            path.classList.remove('active')
        })
        svgList.forEach(path => {
            if (path.dataset.floor == current) {
                path.classList.add('active')
            }
        })
    })

    down.addEventListener('click', e => {
        e.preventDefault()
        if (current <= min) {
            current += 0
        } else if (current > min) {
            current -= 1
        }
        
        writeElement.innerHTML = current
        svgList.forEach(path => {
            path.classList.remove('active')
        })
        svgList.forEach(path => {
            if (path.dataset.floor == current) {
                path.classList.add('active')
            }
        })
    })
}

changeCurrentFloorNum(literOneArrowUp, literOneArrowDown, 3, 12, literOneFloorCurrentNum, literOneFloorNum, literOneFloorSVG)
changeCurrentFloorNum(literTwoArrowUp, literTwoArrowDown, 3, 15, literTwoFloorCurrentNum, literTwoFloorNum, literTwoFloorSVG)
changeCurrentFloorNum(literThreeArrowUp, literThreeArrowDown, 4, 18, literThreeFloorCurrentNum, literThreeFloorNum, literThreeFloorSVG)
changeCurrentFloorNum(literFourArrowUp, literFourArrowDown, 4, 21, literFourFloorCurrentNum, literFourFloorNum, literFourFloorSVG)