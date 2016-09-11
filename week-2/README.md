For this assignment, I made several different elements to fufill the requirements.

The first requirement was an element controlled by the mouse. For this, I created two ellipses connected by a line. The outer one follows the mouse cursor directly, while the inner one is between the mouse and the center. I used mouseX and mouseY to create the outer circle, map to modify mouseX and mouseY for the inner circle, and line to connect the two points.

I also had to make an element that changes over time without mouse input. For this, I made a rectangle in the center of the page, and used random() to make its x position, y position, height, and width change randomly within a few values of each other, causing the rectangle to move erratically.

Finaly, I had to make an element that was different every time the sketch is run. I wanted to make the background a random color each time the sketch ran, but there was a problem; I needed to set the background in the startup function, but if it was there, it would mean that the moving shapes would keep creating more of themseleves and fill the screen. I solved this by creating variables for the color outside of both functions, setting them to random in the startup function, and then calling them again in the draw function. This allowed me a background set to random at startup that still refreshed itself.
