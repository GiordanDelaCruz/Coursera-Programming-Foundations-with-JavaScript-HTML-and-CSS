/**
*   This code contains my solution to one of the programming exercises in regards to the "Programming Foundations
*   with JavaScript, HTML and CSS"course on Coursera by Duke University.
*
*   This code is the solution for Part A in "Programming Exercise: Modifying Images — [Week 2]"
*
*   Note: To run this code, please save and run it with the following;
*         Link: https://www.dukelearntoprogram.com//course1/example/index.php
*/

// Get image, height, and width
var img = new SimpleImage("duke_blue_devil.png");
var imgHeight = img.getHeight();
var imgWidth = img.getWidth();

// Printing the original image
print(img);

// Applying the setBlueYellow function
setBlueYellow(img);
print(img);

// Part C
function setBlueYellow(img){
    // Loop through each pixel in the image, then apply a RGB filter accordingly
    for(var i= 0; i < imgHeight; i++){
        for(var j=0; j < imgWidth; j++){

            //Get Pixel
            var pixel = img.getPixel(j, i);

            if( pixel.getRed() == 0 &&  pixel.getGreen() == 51 && pixel.getBlue() == 227 ){
                pixel.setRed(255);
                pixel.setGreen(255);
                pixel.setBlue(0);

            }
        }
    }
}// End of function
