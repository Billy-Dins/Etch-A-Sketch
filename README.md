## Odin Project
This page was built using [The Odin Project curriculum](https://www.theodinproject.com/lessons/foundations-etch-a-sketch).
The intent of this project was to create an etch-a-sketch with emphasis on DOM manipulation and have it display on a webpage.

## Challenges
As this was my first project without a solid starting point, it took me a while to figure out the logic behind how it would work as there was a couple features I really wanted to include.
The primary feature I struggled with was having a grid that was adaptive and changeable by the user. Ultimately I solved this problem by using a range input that displayed a number in which I squared to determine the area of the etch-a-sketch canvas.
Challenges I came across at the time and was not able to solve were;
1. make the mouseover color hold its value even when the grid size is updated.
2. Add a darken button that darkens the grid squares on each pass

At the time I didn't understand scope and it's effect on variables so instead of declaring a pixel color variable for the mouse cursor in the global scope and manipulating it within the color selector functions, I declared a pixel color variable within each function which at the time, I could not figure out how to return to the global scope. This in hindsight is the solution to both the above mentioned problems.

### Available to view:
https://billy-dins.github.io/todo-list/