// Генератор хэштегов
//
// Команда маркетинга тратит слишком много времени на ввод хэштегов.
//     Давайте поможем им с помощью нашего собственного генератора хэштегов!
//
//     Вот в чем дело:
//
//     Оно должно начинаться с хэштега (#).
// Первая буква во всех словах должна быть заглавной.
//     Если конечный результат длиннее 140 символов, он должен возвращать false.
//     Если входные данные или результат представляют собой пустую строку, они должны возвращать false.
//     Примеры
// " Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
// "    Hello     World   "                  =>  "#HelloWorld"
// ""                                        =>  false

// ----------------------------------------------------------------------------------------------------------

// Решение:

function generateHashtag(str) {
    str = str.split(' ')
    let strSort = []
    for (let i = 0; i < str.length; i++) {
        if (str[i] != '') {
            strSort.push(str[i])
        }
    }
    if (strSort.length != 0) {
        str = strSort
    }
    if (str == '' || str == ' ') {
        return false
    } else {
        let newStr = ['#']
        for (let i = 0; i < str.length; i++) {
            if (str[i] != '') {
                newStr.push(str[i][0].toUpperCase())
                newStr.push(str[i].slice(1).toLowerCase())
            }
        }
        if (newStr.join('').length > 140 || newStr.join('').length <= 1) {
            console.log(newStr.join('').length)
            return false
        } else {
            return newStr.join('');
        }
    }
}
