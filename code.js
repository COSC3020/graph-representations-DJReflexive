
function convertToAdjList(adjMatrix) {
    let adjList = [];
    let size = adjMatrix.length; // the size of the matrix so (size x size)
                                 // is the size of the matrix.

    // Convert from matrix to list
    for (let i = 0; i < size; i++) {
        let buffer = [];

        for (let j = 0; j < adjMatrix.length; j++) {
            if (adjMatrix[i][j] != 0) { // If it has an edge
                buffer.push(j);
            }
        }

        adjList.push(buffer);
    }

    return adjList; // Return a list of lists
}
