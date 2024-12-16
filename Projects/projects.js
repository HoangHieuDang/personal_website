import { engineeringProjectHTML, artProjectHTML, musicProjectHTML } from "./projects-pages-contents.js"

/* Watch a tutorial for creating a small react project and use react framework */

const canvasEngineering = document.querySelector("#canvas-engineering")
const canvasArt = document.querySelector("#canvas-art")
const canvasMusic = document.querySelector("#canvas-music")
const canvasBackground = document.querySelector(".canvas-background")

const engineeringMenuDiv = document.querySelector("#engineering-div")
const artMenuDiv = document.querySelector("#art-div")
const musicMenuDiv = document.querySelector("#music-div")

const mainMenuDiv = document.querySelector(".main-menu-div")
const symbolImg = document.querySelectorAll(".image-symbol")
const h1Element = document.querySelector("h1")
const buttonsDiv = document.querySelector(".buttons-div")

const allCategoryButtons = document.querySelectorAll(".category-button")
const engineeringButton = document.querySelector("#engineering-button")
const artButton = document.querySelector("#art-button")
const musicButton = document.querySelector("#music-button")

const placeHolderDivs = document.querySelectorAll(".placeholder-div")
const engineeringPlaceholderDiv = document.querySelector("#engineering-placeholder")
const artPlaceholderDiv = document.querySelector("#art-placeholder")
const musicPlaceholderDiv = document.querySelector("#music-placeholder")

let isAMenuDivClicked = false
let textForAnimation = "none"
let activeMenuDiv
let activeCanvas
let activePlaceholder
let animationIdent = null /* a single global animation ID */
let animationBackgroundID = null

let responseDivList = [engineeringMenuDiv, artMenuDiv, musicMenuDiv]
let categoryButtonList = [engineeringButton, artButton, musicButton]

/*Fit the canvas's scale to browser's scale*/
function canvasToWindowScale(drawCanvas) {
    drawCanvas.width = window.innerWidth
    drawCanvas.height = window.innerHeight
}
/*Draw a single text */
function drawSingleText(drawCanvas, content, size, color, fontStyle, x, y, opacity) {
    const ctx = drawCanvas.getContext("2d")
    ctx.font = 'lighter' + ' ' + size + ' ' + fontStyle
    ctx.fillStyle = color;
    ctx.fillText(content, x, y); // Text, x, y
    ctx.globalAlpha = opacity
}

/* Randomly generate duplicates of same text with different attributes */
function randomizeTexts(content, color, fontStyle, drawCanvas) {
    /* randomize how many repetition of the word will be generated */
    let arrayOfTextObject = []
    /* randomize the size between 50 to 200*/
    const minFontSize = 10
    const maxFontSize = 65
    const ctx = drawCanvas.getContext("2d")
    let x = 0
    let y = 0
    while (y <= drawCanvas.height) {
        let randSize = Math.floor(Math.random() * (maxFontSize - minFontSize + 1)) + minFontSize
        let size = randSize.toString() + "px"
        /* randomize the opacity between float 0 and 1(1 exclusive)*/
        let randOpacity = Math.random()
        /* drawing the text from origin to the end of canvas height*/
        x = 0
        y = y + randSize + 5
        /* save the information of each text object into the array for further animation */
        arrayOfTextObject.push({
            textContent: content,
            textSize: size,
            textColor: color,
            textFontStyle: fontStyle,
            xPos: x,
            yPos: y,
            xSpeed: 0,
            ySpeed: 0,
            textOpacity: randOpacity
        })

    }
    return arrayOfTextObject

}
/* Animation for the array of randomized texts */
function animationTextDiv(arrayTxtObj, drawCanvas) {

    /* Define constant for max and min speed for the randomization*/
    const MIN_VEL = 1
    const MAX_VEL = 5
    const ctx = drawCanvas.getContext("2d")
    /* Define the animate function for the animation */
    let xSpeed = Math.floor(Math.random() * (MAX_VEL - MIN_VEL + 1)) + MIN_VEL
    let ySpeed = 0
    /* Text Object supposes to only move horizontally*/
    for (let textObject of arrayTxtObj) {
        /* assign a random speed along x axis for each text object*/
        textObject.xSpeed = Math.floor(Math.random() * (MAX_VEL - MIN_VEL + 1)) + MIN_VEL
    }

    function animate() {
        /* clear canvas */
        drawCanvas.width = window.innerWidth
        drawCanvas.height = window.innerHeight
        const ctx = drawCanvas.getContext("2d")
        ctx.clearRect(0, 0, drawCanvas.width, drawCanvas.height);
        /* draw each text object on the canvas */
        /* go through the array of Text Object */
        /* Text Object supposes to only move horizontally along x axis */
        for (let textObject of arrayTxtObj) {
            let content = textObject.textContent;
            let size = textObject.textSize;
            let color = textObject.textColor;
            let fontStyle = textObject.textFontStyle;
            let opacity = textObject.textOpacity;
            /* assign the new location to draw on canvas*/
            let x = textObject.xPos;
            let y = textObject.yPos;
            /* update the location of each text object in array*/
            textObject.xPos += textObject.xSpeed;
            textObject.yPos += textObject.ySpeed;
            if (textObject.xPos > drawCanvas.width) {
                textObject.xPos = 0;
            }
            drawSingleText(drawCanvas, content, size, color, fontStyle, x, y, opacity);
        }
        /* define speed in x and y axis*/
        // Request the next frame
        animationIdent = requestAnimationFrame(animate); //animation id to stop the animation
    }
    animate()

}

/* 
When hovering over the menu div, following animation should occur:
the words for the equivalent menu div should appear randomly and 
move horizontally from left to right when the mouse enters the div

when the mouse leaves the div, the animation stops and only continues
when the mouse enters the div again.

The texts should reappear from the left again when they when out of 
the right frame
*/
function makeRandomTextAnimation(responseDiv, text, drawCanvas) {

    const arrayOfTextObj = randomizeTexts(text, "white", "font-custom-adequate", drawCanvas)
    /* Once a Menu Div was chosen 
    animation of active menu div should always be running 
    with or without hovering mouse*/
    responseDiv.addEventListener("mouseenter", () => {
        /*Animation starts here*/
        if (isAMenuDivClicked == false) {
            animationTextDiv(arrayOfTextObj, drawCanvas)
        }
    })
    responseDiv.addEventListener("mouseleave", () => {
        /*Animation starts here*/
        if (isAMenuDivClicked == false) {
            cancelAnimationFrame(animationIdent)
            animationIdent = null
        }

    })

}

/* Background Canvas animation 
Using Bezier Curves to animate a moving wave
The entire length of one wave is broken into interval
Each Interval is a bezier curve with 2 end points as 2 fixed points for the curve
There are 2 Pivot Points (Weight Points) for each Bezier Curve
The Pivot points of each curve move along the y-axis back and forth
*/
function backgroundCanvasAnimation(drawCanvas) {
    const cbg = drawCanvas.getContext("2d")
    let cp1x = 0
    let cp2x = 0
    let cp1y = 0
    let cp2y = 0
    let ya1 = 0
    let ya2 = 0
    let yInterval = 10
    let switchDirYa1 = false
    let switchDirYa2 = false
    let counter = 0

    function animate_curve() {
        drawCanvas.width = window.innerWidth
        drawCanvas.height = window.innerHeight
        cbg.clearRect(0, 0, drawCanvas.width, drawCanvas.height)
        let xPos = 0
        let yPos = 0
        let xPrev = 0
        let yPrev = 0
        let yInterval = 50
        let xInterval = 50
        cbg.moveTo(xPos, yPos)
        cbg.strokeStyle = "white";
        cbg.fillStyle = "white";
        let maxDrawWidth = Math.floor(drawCanvas.width)
        let yPosList = [30, 70]
        cbg.beginPath();
        yPosList.forEach((yPosItem) => {
            yInterval = 0
            while (yInterval < 500) {
                xPos = -250
                yPos = yPosItem
                cbg.moveTo(xPos, yPos)

                while (xPos < maxDrawWidth) {
                    xPrev = xPos
                    yPrev = yPos
                    xPos += 200
                    yPos += yInterval
                    cp1x = Math.floor((xPos - xPrev) / 6) + xPrev
                    cp2x = Math.floor((xPos - xPrev) / 6 * 5) + xPrev
                    cp1y = Math.floor((yPos - yPrev) / 3) + yPrev + ya1
                    cp2y = Math.floor((yPos - yPrev) / 3 * 2) + yPrev + ya2
                    cbg.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, xPos, yPos)
                    cbg.stroke()
                }
                yInterval += 50
            }
            /* Define the speed and movement of the pivot points */
            let movementYa1 = 200
            let speedYa = 0.5
            if (ya1 < movementYa1 && switchDirYa1 == false) {
                ya1 += speedYa
                ya2 -= speedYa
            } else if (ya1 == movementYa1 && switchDirYa1 == false) {
                switchDirYa1 = !switchDirYa1
            } else if (ya1 > - movementYa1 && switchDirYa1 == true) {
                ya1 -= speedYa
                ya2 += speedYa
            } else if (ya1 == - movementYa1 && switchDirYa1 == true) {
                switchDirYa1 = !switchDirYa1
            }
        })
        animationBackgroundID = requestAnimationFrame(animate_curve)
    }
    animate_curve()
}
/* This function describes what happens when a menu div got clicked and chosen for the first time*/
function selectCategory() {

    responseDivList.forEach((responseDivItem) => {

        console.log(isAMenuDivClicked)
        responseDivItem.addEventListener("click", () => {
            /* the if-statement with the boolean isAMenuDivClicked makes the on-click behaviour of responseDivIte
            to happen only once*/
            if (isAMenuDivClicked == false) {
                /* set the global flag to signal whether a menu div was choosen to true */
                isAMenuDivClicked = true

                /* cancel all animations and get rid of mouseenter and mouseleave animation behaviour */
                cancelAnimationFrame(animationIdent)
                animationIdent = null

                /* find out which canvas is the active canvas and the text for animation*/

                if (responseDivItem == engineeringMenuDiv) {
                    activeCanvas = canvasEngineering
                    textForAnimation = "Engineering"
                }
                else if (responseDivItem == artMenuDiv) {
                    activeCanvas = canvasArt
                    textForAnimation = "Visual Art"
                }
                else if (responseDivItem == musicMenuDiv) {
                    activeCanvas = canvasMusic
                    textForAnimation = "Music Production"
                }
                /* generate duplicates of a text randomly
                and start animation again but this time without mouseleave and mouseenter behaviour */
                const arrayOfText = randomizeTexts(textForAnimation, "white", "font-custom-adequate", activeCanvas)
                animationTextDiv(arrayOfText, activeCanvas)

                /* start a new animation with
                Save the recently clicked Menu Div Item to the global variable active Menu Div
                 */
                activeMenuDiv = responseDivItem

                /* Make the main menu div which contains the images has a height of the viewport */
                mainMenuDiv.style.height = "100vh"

                /* Make background canvas has the height of the viewport */
                //canvasBackground.style.height = "100vh"
                /* Blurred out all symbol images */
                symbolImg.forEach((img) => {
                    img.style.opacity = 0
                    img.style.display = "none"
                })

                /* Collapsing other non-selected image divs */
                responseDivList.forEach((item) => {
                    if (item != responseDivItem) {
                        item.style.width = "1em"
                        item.style.opacity = 0
                        item.style.display = "none"
                    } else {
                        item.style.width = "100%"
                        item.style.height = "100%"
                        item.style.transform = "scale(1)"
                        item.style.border = "0px"
                        item.style.opacity = 0.7
                    }
                })

                /* Reduce margin-bottom of h1 to make space for category buttons*/
                h1Element.style.marginBottom = "1em"

                /* Reveal the buttons-div and category buttons */
                allCategoryButtons.forEach((categoryButton) => {
                    categoryButton.style.display = "inline"
                    categoryButton.style.opacity = 1

                })
                /* Canvas Opacity reduced */
                const canvasGroup = document.querySelectorAll(".canvas-group")
                canvasGroup.forEach((canvas) => {
                    canvas.style.opacity = 0.1

                })

                /* styling the button of the choosen menu div*/
                if (responseDivItem == engineeringMenuDiv) {
                    engineeringButton.style.border = "1px"
                    engineeringButton.style.backgroundColor = "#3a3a3a"
                } else if (responseDivItem == artMenuDiv) {
                    artButton.style.border = "1px"
                    artButton.style.backgroundColor = "#3a3a3a"
                } else if (responseDivItem == musicMenuDiv) {
                    musicButton.style.border = "1px"
                    musicButton.style.backgroundColor = "#3a3a3a"
                }

                buttonsDiv.style.display = "flex"
                buttonsDiv.style.justifyContent = "center"
                /* loading the html content in the placeholder div to the equivalenet menu div*/
                activePlaceholderHandler()
                console.log("i am in response div clicked event")
            }
        })

    })

}

/* When a category button got clicked, its equivalent menu-div should be loaded */
/* Describes what happends when the category buttons are clicked*/
function categoryButtonClicked() {
    categoryButtonList.forEach((buttonItem) => {
        buttonItem.addEventListener("click", () => {
            buttonItem.style.border = "1px"
            buttonItem.style.backgroundColor = "#3a3a3a"

            if (buttonItem == engineeringButton) {
                activeMenuDiv = engineeringMenuDiv
                activeCanvas = canvasEngineering
                textForAnimation = "Engineering"
            } else if (buttonItem == artButton) {
                activeMenuDiv = artMenuDiv
                activeCanvas = canvasArt
                textForAnimation = "Visual Art"
            } else if (buttonItem == musicButton) {
                activeMenuDiv = musicMenuDiv
                activeCanvas = canvasMusic
                textForAnimation = "Music Production"
            }
            /* Stop and start new animation again for the new active menu div */
            cancelAnimationFrame(animationIdent)
            animationIdent = null
            const arrayOfText = randomizeTexts(textForAnimation, "white", "font-custom-adequate", activeCanvas)
            animationTextDiv(arrayOfText, activeCanvas)
            /* Restyling the buttons when unclicked and clicked */
            categoryButtonList.forEach((otherButtonItem) => {
                if (otherButtonItem != buttonItem) {
                    otherButtonItem.style.border = 0
                    otherButtonItem.style.backgroundColor = "transparent"
                }
            })
            /* switch the Div as a response to the currently chosen MenuDiv */
            responseDivList.forEach((item) => {
                if (item != activeMenuDiv) {
                    item.style.width = "1em"
                    item.style.opacity = 0
                    item.style.display = "none"
                } else {
                    item.style.display = "inline"
                    item.style.opacity = 0.7
                    item.style.width = "100%"
                    item.style.height = "100%"
                    item.style.transform = "scale(1)"
                    item.style.border = "0px"
                }
            })
            /* Load the HTML Content into the placeholder div of the active Menu Div*/
            activePlaceholderHandler()

        })
    })
}
/* 
This function will update the activePlaceholder for the information according to 
which menu Div is currently active: 
example: when the engineeringMenuDiv is selected. the engineeringPlaceholderDiv should be visible
to show information about engineering project.
*/

function activePlaceholderHandler() {
    activePlaceholder = activeMenuDiv.querySelector(".placeholder-div")
    if (activePlaceholder == engineeringPlaceholderDiv) {
        activePlaceholder.innerHTML = engineeringProjectHTML
    } else if (activePlaceholder == artPlaceholderDiv) {
        activePlaceholder.innerHTML = artProjectHTML
    } else if (activePlaceholder == musicPlaceholderDiv) {
        activePlaceholder.innerHTML = musicProjectHTML
    }
    const allSubpageEntryDivs = activePlaceholder.querySelectorAll(".subpage-entry-div")
    if (!allSubpageEntryDivs) {
        console.log("The subpage for the active menuDiv is not loaded into the placeholder div yet!")
    }
    else {
        allSubpageEntryDivs.forEach(element => {
            const uiArrowDown = element.querySelector(".ui-arrow-down-img")
            const uiArrowUp = element.querySelector(".ui-arrow-up-img")
            const entryDetailDiv = element.querySelector(".entry-detail-div")
            let isentryDetailDivHidden = true
            entryDetailDiv.style.display = "none"
            element.addEventListener("click", () => {
                if (entryDetailDiv.style.display == "none") {
                    console.log("i am here!")
                    isentryDetailDivHidden = false
                    entryDetailDiv.style.display = "block"
                    entryDetailDiv.style.opacity = 1
                    uiArrowDown.style.opacity = 0
                    uiArrowUp.style.display = "block"
                    uiArrowUp.style.opacity = 1
                    console.log(entryDetailDiv.style.display)
                    console.log(entryDetailDiv.style.opacity)

                } else {
                    isentryDetailDivHidden = true
                    entryDetailDiv.style.opacity = 0
                    entryDetailDiv.style.display = "none"
                    uiArrowUp.style.display = "none"
                    uiArrowUp.style.opacity = 0
                    uiArrowDown.style.opacity = 1
                }
                element.addEventListener("hover", () => {
                    if (isentryDetailDivHidden) {
                        uiArrowDown.style.opacity = 1
                    }
                })
                element.addEventListener("mouseleave", () => {
                    uiArrowDown.style.opacity = 0
                })
                element.addEventListener("mouseenter", () => {
                    if (isentryDetailDivHidden) {
                        uiArrowDown.style.opacity = 1
                    }
                })

            })
        })
    }
}




/* Check if the device is a touch device or not */

/*
if ("ontouchstart" in document.documentElement) {
    alert("handy")
    console.log("your device is a touch screen device.");
}
else {
    console.log("your device is NOT a touch device");
}
*/

canvasToWindowScale(canvasEngineering)
canvasToWindowScale(canvasArt)
canvasToWindowScale(canvasMusic)
canvasToWindowScale(canvasBackground)

makeRandomTextAnimation(engineeringMenuDiv, "Engineering", canvasEngineering)
makeRandomTextAnimation(artMenuDiv, "Visual Art", canvasArt)
makeRandomTextAnimation(musicMenuDiv, "Music Production", canvasMusic)
backgroundCanvasAnimation(canvasBackground)

selectCategory()
categoryButtonClicked()

