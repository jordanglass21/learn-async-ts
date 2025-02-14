async function checkNegativeInRow(row: number[], rowIdx: number): Promise<number | null> {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`Checking row ${rowIdx}...`);
            if (row.some(num => num < 0)) {
                console.log(`Row ${rowIdx} contains a negative number.`);
                resolve(rowIdx);
            } else {
                resolve(null);
            }
        }, 0);
    });
}

async function findNegativeRows(arr: number[][]): Promise<void> {
    console.log("Starting negative row search...");

    try {
        // Process all rows concurrently
        const results = await Promise.all(arr.map((row, index) => checkNegativeInRow(row, index)));

        // Filter out null values (rows without negatives)
        const negativeRows = results.filter((rowIdx): rowIdx is number => rowIdx !== null);

        if (negativeRows.length > 0) {
            console.log("Rows with negative numbers:", negativeRows);
        } else {
            console.log("No rows contain negative numbers.");
        }
    } catch (error) {
        console.error("Error while searching for negative numbers:", error);
    }

    console.log("Negative row search completed.");
}

const array2D_3 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, -9]
];

// Run the function
findNegativeRows(array2D_3);
console.log("End main thread");


