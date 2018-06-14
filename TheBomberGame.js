function bomberMan(n, grid) {

    if (n == 1) return grid;
    const arr = grid.map(line => line.split('').map(ltr => ltr == 'O' ? 2 : 0))
    console.log(arr);
    for (c = 0; c < (n % 4) + 3; c++) {
        for (i = 0; i < arr.length; i++) {
            for (j = 0; j < arr.length; j++) {
                if (arr[i][j] == -1) {
                    arr[i][j] = 0;
                } else if (arr[i][j] == 0) {
                    arr[i][j] = 3;
                } else {
                    if (arr[i][j] == 1) {
                        if (i > 0)
                            arr[i - 1][j] = 0
                        if (j > 0)
                            arr[i][j - 1] = 0

                        if (i < (arr.length - 1) && arr[i + 1][j] != 1)
                            arr[i + 1][j] = -1
                        if (j < arr[i].length - 1 && arr[i][j + 1] != 1)
                            arr[i][j + 1] = -1
                    }
                    arr[i][j] -= 1
                }
            }
        }
    }
    const toStr = (accumulator, currentValue) => accumulator + currentValue == 0 ? '.' : 'O';

    const chars = arr.map(arr => (arr.reduce(toStr)));
    return chars;
}
bomberMan(3, [".......", "...O...", "....O..", ".......", "OO.....", "OO....."]);