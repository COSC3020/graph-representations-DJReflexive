# Graph Representations

Implement a function that converts an adjacency matrix to an adjacency list for
a directed unweighted graph using the template in `code.js`. Test your new
function; I've provided some basic testing code that uses
[jsverify](https://jsverify.github.io/) in `code.test.js`. Now, the test code
does contain the solution, so you can have a look at it if you get stuck, but
try not to peek before attempting to solve it on your own.

## Runtime Analysis

What is the runtime complexity of the conversion that you implemented? Does it
depend on the number of vertices, the number of edges, or both?

Describe your reasoning and the conclusion you've come to. Your reasoning is the
most important part. Add your answer to this markdown file.

## Bonus

Implement a function to convert an adjacency list to an adjacency matrix and
analyze it as above.


# My Runtime Analysis

My implementation of convertToAdjList take an adjacency matrix and converts 
it into an adjacency list. It uses two nested for loops to complete this, 
both taking a complexity of $\Theta(n)$ by themselves. However, since these 
two loops are nested, this means there is n operations happening n times. 
This leads to a final complexity of $\Theta(n^2)$ for the whole algorithm. 

Conceptually this makes sense too. Since we have to look at every element 
within the matrix to convert it to the list, and the matrix has a size of 
$|V|^2$, of course it would take n^2 operations to look at every single 
element.


# Sources

- https://www.freecodecamp.org/news/javascript-2d-arrays/: For how to work with 2D arrays.

# Plagiarism Acknowledgement

I certify that I have listed all sources used to complete this exercise, 
including the use of any Large Language Models. All of the work is my own, 
except where stated otherwise. I am aware that plagiarism carries severe 
penalties and that if plagiarism is suspected, charges may be filed against 
me without prior notice.