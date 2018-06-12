let str1 = "at",
    str2 = "cat";
let chs1 = str1.split(''),
    chs2 = str2.split('');
let sum = 0;
let mat = [
    []
];
const min = (a, b, c) => {
    if (a < b) {
        if (a < c) return a;
        else return c;
    } else {
        if (b < c) return b;
        else return c;
    }
}
mat[0][0] = 0
for (let i = 0; i <= chs1.length; i++) {
    for (let j = 0; j <= chs2.length; j++) {
        if (i == 0 && j == 0) continue;
        if (i == 0) {
            mat[i].push(j);
            continue;
        }
        if (j == 0) {
            mat.push([i]);
            continue;
        }
        if (chs1[i - 1] == chs2[j - 1]) {
            mat[i].push(mat[i - 1][j - 1]);
            continue;
        }
        mat[i].push(1 + min(mat[i - 1][j - 1], mat[i][j - 1], mat[i - 1][j]));

    }
}
let i = mat.length - 1;
let j = mat[i].length - 1;
while (i > 0 || j > 0) {
    if (i == 0 && j > 0) {
        sum += chs2[j - 1].charCodeAt(0);
        j--;
    } else if (i > 0 && j == 0) {
        sum += chs1[i - 1].charCodeAt(0);
        i--;
    } else if (mat[i - 1][j - 1] != mat[i][j]) {
        sum += chs1[i - 1].charCodeAt(0);
        sum += chs2[j - 1].charCodeAt(0);
        if (i == 1) { j--; continue; }
        if (j == 1) { i--; continue; }
        let currMin = min(mat[i - 1][j - 1], mat[i - 1][j], mat[i][j - 1]);
        if (mat[i - 1][j - 1] == currMin) {
            i--;
            j--;
        } else if (mat[i][j - 1] == currMin) {
            j--;
        } else if (mat[i - 1][j] == currMin) {
            i--;
        }
    } else {
        if (mat[i][j - 1] < mat[i][j]) {
            sum += chs2[j - 1].charCodeAt(0);
            j--;
        } else if (mat[i - 1][j] < mat[i][j]) {
            sum += chs1[i - 1].charCodeAt(0);
            i--;
        } else {
            i--;
            j--;
        }
    }
    if (i === 1 && j === 1) {
        sum += chs1[i - 1].charCodeAt(0);
        sum += chs2[j - 1].charCodeAt(0);
        break;
    }
}
console.log(sum);