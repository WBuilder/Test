var matrixExample = [
   [ 1, 2, 3, 4 ],
   [ 4, 5, 6, 5 ],
   [ 7, 8, 9, 7 ],
   [ 7, 8, 9, 7 ]
 ];

function sumUpDiagonals(matrix)
{
    var N = matrix.length;
    var sumMainDiag = 0, sumSecondDiag = 0;
    
    for(let i = 0; i < N; i++ ) {
        if( N != matrix[i].length )
        {
            console.log("this matrix isn't square");
            return false;
        }
        sumMainDiag += matrix[i][i];
        sumSecondDiag += matrix[i][N-1-i];
    }
    return [sumMainDiag, sumSecondDiag];
}

console.log(sumUpDiagonals(matrixExample));

