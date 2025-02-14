async function sumOfRow(arr: number[][], rowIdx: number): Promise<number> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (rowIdx < arr.length) {
                console.log(`Computing sum of row ${rowIdx}...`);
                const sum = arr[rowIdx].reduce((acc, num) => acc + num, 0);
                resolve(sum);
            } else {
                reject(`Row index ${rowIdx} is out of bounds`);
            }
        }, 0);
    });
}

async function sumAllRows(arr: number[][]): Promise<void> {
    try {
        const rowSums = await Promise.all(arr.map((_, index) => sumOfRow(arr, index)));

        console.log("Computing sum of all rows...");
        console.log("Row Sums:", rowSums);

        const totalSum = rowSums.reduce((acc, sum) => acc + sum, 0);
        console.log("Total Sum:", totalSum);
    } catch (error) {
        console.error("Error:", error);
    }
}

async function main2(): Promise<void> {
    console.log("Begin main...");
    const array2D_1 = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ];
    
    await sumAllRows(array2D_1);
    
    console.log("End main...");
}

// Run the async function
main2();
console.log("End main thread");