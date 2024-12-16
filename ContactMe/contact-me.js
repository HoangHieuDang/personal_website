const canvasBackground = document.querySelector(".canvas-background")

function backgroundCanvasAnimation(drawCanvas) {
    const cbg = drawCanvas.getContext("2d")
    cp1x = 0
    cp2x = 0
    cp1y = 0
    cp2y = 0
    ya1 = 0
    ya2 = 0
    yInterval = 10
    switchDirYa1 = false
    switchDirYa2 = false
    counter = 0

    function animate_curve() {
        drawCanvas.width = window.innerWidth
        drawCanvas.height = window.innerHeight
        cbg.clearRect(0, 0, drawCanvas.width, drawCanvas.height)
        xPos = 0
        yPos = 0
        yInterval = 50
        xInterval = 50
        cbg.moveTo(xPos, yPos)
        cbg.strokeStyle = "white";
        cbg.fillStyle = "white";
        maxDrawWidth = Math.floor(drawCanvas.width)
        yPosList = [30, 70]
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
            movementYa1 = 200
            speedYa = 0.5
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
backgroundCanvasAnimation(canvasBackground)

