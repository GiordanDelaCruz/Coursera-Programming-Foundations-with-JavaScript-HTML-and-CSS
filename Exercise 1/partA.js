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
var img = new SimpleImage("chapel.png");
var imgHeight = img.getHeight();
var imgWidth = img.getWidth();

// Printing the original image
print(img);

// Printing the img after applying the filter
ApplyFilterRGB(img);
print(img);


// Part A
function ApplyFilterRGB(img){
    // Loop through each pixel in the image, then apply a RGB filter accordingly
    for(var i= 0; i < imgHeight; i++){
        for(var j=0; j < imgWidth; j++){

            //Get Pixel
            var pixel = img.getPixel(j, i);

            if( pixel.getX() < Math.ceil(imgWidth/3) ){
                pixel.setRed(255);

            }else if ( pixel.getX() >= Math.ceil(imgWidth/3) && pixel.getX() < Math.ceil((2 * imgWidth)/3) ){
                pixel.setGreen(255);

            }else{
                pixel.setBlue(255);
            }
        }
    }
}// End of function
