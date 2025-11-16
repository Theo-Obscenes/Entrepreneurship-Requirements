const a4 = document.getElementById('a4');

let red = 255;
let blue = 0;
let green = 0;

function color(){
    if (red == 255 && blue != 255 && green == 0){ // add blue
        blue += 3;
    } else if (blue == 255 && red != 0 && green == 0){ // minus red
        red -= 3;
    } else if (blue == 255 && green != 255 && red == 0){ //add green
        green += 3;
    } else if (green == 255 && blue != 0 && red == 0){ // minus blue
        blue -= 3;
    } else if (green == 255 && red != 255 && blue == 0){ // add red
        red += 3;
    } else if (red == 255 && green != 0 && blue == 0){ // minus green
        green -= 3;
    } 

    a4.style.backgroundColor = "rgb(" + red + ", " + blue + ", " + green + ")";
}

setInterval(color, 5);

// Move aspect shit

const badges = document.querySelectorAll('.badge');
const badge = document.getElementsByClassName('badge');

const maxTop = 200 - 20;
const minTop = 0;
const maxLeft = 170 - 20;
const minLeft = 0;

const stepTop = [];
const stepLeft = [];

badges.forEach(element => {
    stepTop.push(1);
});
badges.forEach(element => {
    stepLeft.push(1);
});

function move(){
    // new code
    const topBadgeArray = [];
    const leftBadgeArray = [];
    
    badges.forEach(element => {
        topBadgeArray.push(element.style.top);
    });
    badges.forEach(element => {
        leftBadgeArray.push(element.style.left);
    });
    
    
    
//   console.log(topBadgeArray);
//   console.log(leftBadgeArray);
//   console.log(stepTop);
//   console.log(stepLeft);

   for(i = 0; i != topBadgeArray.length; i++){

        if (topBadgeArray[i] == ''){
            topBadgeArray[i] = '0';
        }

        let currentTop = parseInt(topBadgeArray[i])
        currentTop = currentTop + stepTop[i];
        badge[i].style.top = currentTop + 'mm';

        if (parseInt(topBadgeArray[i]) >= maxTop){
            stepTop[i] = -1;
        } else if (parseInt(topBadgeArray[i]) <= minTop){
            stepTop[i] = 1
        }
    }

   for(i = 0; i != leftBadgeArray.length; i++){

        if (leftBadgeArray[i] == ''){
            leftBadgeArray[i] = '0';
        }

        let currentLeft = parseInt(leftBadgeArray[i])
        currentLeft = currentLeft + stepLeft[i];
        badge[i].style.left = currentLeft + 'mm';

        if (parseInt(leftBadgeArray[i]) >= maxLeft){
            stepLeft[i] = -1;
        } else if (parseInt(leftBadgeArray[i]) <= minLeft){
            stepLeft[i] = 1
        }
    }

}

setInterval(move, 20);   
