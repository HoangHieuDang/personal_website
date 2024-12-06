const canvasEngineering = document.querySelector("#canvas-engineering")
const canvasArt = document.querySelector("#canvas-art")
const canvasMusic = document.querySelector("#canvas-music")
const canvasBackground = document.querySelector(".canvas-background")

const engineeringMenuDiv = document.querySelector("#engineering-div")
const artMenuDiv = document.querySelector("#art-div")
const musicMenuDiv = document.querySelector("#music-div")

let animationIdent = null /* a single global animation ID */
let animationBackgroundID = null

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

/*Randomly generate duplicates of same text with different attributes*/
function randomizeTexts(content, color, fontStyle, drawCanvas) {
    /* randomize how many repetition of the word will be generated */
    arrayOfTextObject = []
    /* randomize the size between 50 to 200*/
    minFontSize = 10
    maxFontSize = 65
    const ctx = drawCanvas.getContext("2d")
    let x = 0
    let y = 0
    while (y <= drawCanvas.height) {
        randSize = Math.floor(Math.random() * (maxFontSize - minFontSize + 1)) + minFontSize
        size = randSize.toString() + "px"
        /* randomize the opacity between float 0 and 1(1 exclusive)*/
        randOpacity = Math.random()
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

function animationTextDiv(arrayTxtObj, drawCanvas) {

    /* Define constant for max and min speed for the randomization*/
    MIN_VEL = 1
    MAX_VEL = 5
    const ctx = drawCanvas.getContext("2d")
    /* Define the animate function for the animation */
    xSpeed = Math.floor(Math.random() * (MAX_VEL - MIN_VEL + 1)) + MIN_VEL
    ySpeed = 0
    /* Text Object supposes to only move horizontally*/
    for (textObject of arrayTxtObj) {
        /* assign a random speed along x axis for each text object*/
        textObject.xSpeed = Math.floor(Math.random() * (MAX_VEL - MIN_VEL + 1)) + MIN_VEL
    }

    function animate() {
        /* clear canvas */
        const ctx = drawCanvas.getContext("2d")
        ctx.clearRect(0, 0, drawCanvas.width, drawCanvas.height);
        /* draw each text object on the canvas */
        /* go through the array of Text Object */
        /* Text Object supposes to only move horizontally along x axis */
        for (textObject of arrayTxtObj) {
            content = textObject.textContent;
            size = textObject.textSize;
            color = textObject.textColor;
            fontStyle = textObject.textFontStyle;
            opacity = textObject.textOpacity;
            /* assign the new location to draw on canvas*/
            x = textObject.xPos;
            y = textObject.yPos;
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
    responseDiv.addEventListener("mouseenter", () => {
        /*Animation starts here*/
        animationTextDiv(arrayOfTextObj, drawCanvas)
    })
    responseDiv.addEventListener("mouseleave", () => {
        /*Animation starts here*/
        cancelAnimationFrame(animationIdent)
        animationIdent = null
        //ctx.clearRect(0,0,canvasEngineering.width, canvasEngineering.height)
    })
}

/* Background Canvas animation */
function backgroundCanvasAnimation(drawCanvas) {
    const cbg = drawCanvas.getContext("2d")
    function drawContinousCurves() {

        /* Try to draw a parabol first */
        /*
        x = Math.floor(drawCanvas.width / 2)
        y = Math.floor(drawCanvas.height / 2)

        */
        drawCanvas.width = window.innerWidth
        drawCanvas.height = window.innerHeight
        xPos = 0
        yPos = 0
        a = 0.05
        thickness = 2
        function animate_curve() {
            //ctx.clearRect(0,0,drawCanvas.width, drawCanvas.height)
            //console.log("drawing", drawCanvas.width, drawCanvas.height, x, y)
            cbg.strokeStyle = "white";
            cbg.fillStyle = "white";
            cbg.fillRect(xPos, yPos, 5, 5);
            
            if (xPos < drawCanvas.width) {
                if (2 < thickness <= 3) {
                    thickness += 1
                } else (thickness -= 1)
                xPos += 1
                yPos = Math.floor(a * Math.pow(xPos, 2))
            }
            animationBackgroundID = requestAnimationFrame(animate_curve)
        }
        animate_curve()
        if (xPos >= drawCanvas.width) {
            cancelAnimationFrame(animationBackgroundID)
        }


    }
    drawContinousCurves()


}

canvasToWindowScale(canvasEngineering)
canvasToWindowScale(canvasArt)
canvasToWindowScale(canvasMusic)
canvasToWindowScale(canvasBackground)


makeRandomTextAnimation(engineeringMenuDiv, "Engineering", canvasEngineering)
makeRandomTextAnimation(artMenuDiv, "Visual Art", canvasArt)
makeRandomTextAnimation(musicMenuDiv, "Music Production", canvasMusic)
backgroundCanvasAnimation(canvasBackground)
