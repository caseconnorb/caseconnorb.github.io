This assignment was one of the biggest ones I’ve done yet. I created a wide variety of functions for my objects to carry out.

I began by creating a box within a box. The inner box is based on the size of the outer one, and both of their sizes are determined by whatever numbers are set for them in the sketch.js. In this case, they are both 50. I created variables for them in my Box function in my box.js file, and then used those variables in prototypes to modify them. The first one is the drawBox() prototype, which draws both boxes and gives them each a different fill. These exact values are determined by other prototype functions. The boxes also start in a random location.

Next, there is the colorChange() prototype. This makes the color fill variables of the boxes change in a smooth fashion, which the red, green, and blue values scaling up and down through their possible values. The fill values for the smaller boxes are based off of the larger fills using an abs() command, so they will also change smoothly in relation to them. The initial values of all of these colors are random, so all the boxes will be a different shade.

Next is the sizeChange() prototype. This causes the length and width of the innermost box to expand and retract. These start in different orientations, so the inner box can either move its width and height simultaneously or inversely. Finally, there is the move() prototype. This makes the boxes move around the screen. When they hit an edge, they will bounce off of it, as well as change their speed to a new value in a defined group.

There is also an additional function defined in sketch.js. This function is called backgroundMod(), and, in keeping with the theme, it makes the color of the background fade between black and white.
