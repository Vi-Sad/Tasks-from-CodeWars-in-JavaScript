// Помощник по римским цифрам

// Напишите две функции, которые преобразуют римскую цифру в целое значение и обратно. 
// Для каждой функции будет проверяться несколько значений римской цифры.

// Современные римские цифры записываются путем выражения каждой цифры отдельно, 
// начиная с самой левой цифры и пропуская любую цифру со значением, равным нулю. Римскими цифрами:

// 1990 визуализируется: 1000=M, 900=CM, 90=XC; в результате MCMXC,
// 2008 записывается как 2000=MM, 8=VIII; или MMVIII,
// 1666 все римские символы используются в порядке убывания: MDCLXVI.

// Диапазон входных данных: 1 <= n < 4000
// В этом ката 4 должно быть представлено как IV, А НЕ как IIII ("четверка часовщиков").

// Примеры:

// to roman:
// 2000 -> "MM"
// 1666 -> "MDCLXVI"
//   86 -> "LXXXVI"
//    1 -> "I"

// from roman:
// "MM"      -> 2000
// "MDCLXVI" -> 1666
// "LXXXVI"  ->   86
// "I"       ->    1

// Справка:

// +--------+-------+
// | Symbol | Value |
// +--------+-------+
// |    M   |  1000 |
// |   CM   |   900 |
// |    D   |   500 |
// |   CD   |   400 |
// |    C   |   100 |
// |   XC   |    90 |
// |    L   |    50 |
// |   XL   |    40 |
// |    X   |    10 |
// |   IX   |     9 |
// |    V   |     5 |
// |   IV   |     4 |
// |    I   |     1 |
// +--------+-------+

// ----------------------------------------------------------------------------------------------------------------

// Решение:

const romanNums = {
    0: '',
    1: 'I',
    2: 'II',
    3: 'III',
    4: 'IV',
    5: 'V',
    6: 'VI',
    7: 'VII',
    8: 'VIII',
    9: 'IX',

    10: 'X',
    20: 'XX',
    30: 'XXX',
    40: 'XL',
    50: 'L',
    60: 'LX',
    70: 'LXX',
    80: 'LXXX',
    90: 'XC',

    100: 'C',
    200: 'CC',
    300: 'CCC',
    400: 'CD',
    500: 'D',
    600: 'DC',
    700: 'DCC',
    800: 'DCCC',
    900: 'CM',

    1000: 'M',
    2000: 'MM',
    3000: 'MMM',
    4000: 'MV',
}

class RomanNumerals {

    // 1 => I
    static toRoman(num) {
        num = String(num)
        if (num in romanNums) {
            return romanNums[num];
        } else {
            let res = ''
            for (let i = 0; i < num.length; i++) {
                if (romanNums[num[i] + '0'.repeat(num.length - 1 - i)] != undefined) {
                    res += romanNums[num[i] + '0'.repeat(num.length - 1 - i)]
                }
            }
            return res;
        }
    }

    // I => 1
    static fromRoman(str) {
        let res = []
        let mainRes = 0
        for (const key in romanNums) {
            if (romanNums.hasOwnProperty(key)) {
                if (str == romanNums[key]) {
                    return Number(key)
                } else {
                    for (let i = 0; i < str.length; i++) {
                        for (const key in romanNums) {
                            if (str[i] == romanNums[key]) {
                                res.push(Number(key))
                            }
                        }
                    }
                    break
                }
            }
        }
        for (let i = 0; i < res.length; i++) {
            if (res[i + 1] == undefined) {
                mainRes += res[i]
            } else {
                if (res[i] < res[i + 1]) {
                    mainRes -= res[i]
                } else {
                    mainRes += res[i]
                }
            }
        }
        return mainRes;
    }
}
