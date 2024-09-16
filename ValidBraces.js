// Допустимые фигурные скобки

// Напишите функцию, которая принимает строку фигурных скобок и определяет, допустим ли порядок их расположения. 
// Она должна возвращать значения true , если строка допустима, и false , если она недопустима.
// Все входные строки будут непустыми и будут состоять только из круглых скобок и фигурных скобок: ()[]{}.

// Что считается действительным?
// Строка фигурных скобок считается допустимой, если все фигурные скобки сочетаются с правильной фигурной скобкой.

// Примеры:

// "(){}[]"   =>  True
// "([{}])"   =>  True
// "(}"       =>  False
// "[(])"     =>  False
// "[({})](]" =>  False

// -------------------------------------------------------------------------------------------------------------------

// Решение:

function validBraces(braces) {
    key9 = 0; // '('
    key0 = 0; // ')'
    keyBracket1 = 0; // '['
    keyBracket2 = 0; // ']'
    keyBracketShift1 = 0; // '{'
    keyBracketShift2 = 0; // '}'
    for (let i = 0; i < braces.length; i++) {
        if (braces[i] == '(') {
            key9++;
        } else if (braces[i] == ')') {
            key0++;
        } else if (braces[i] == '[') {
            keyBracket1++;
        } else if (braces[i] == ']') {
            keyBracket2++;
        } else if (braces[i] == '{') {
            keyBracketShift1++;
        } else {
            keyBracketShift2++;
        }
    }
    if (key9 == key0 && keyBracket1 == keyBracket2 && keyBracketShift1 == keyBracketShift2) {
        let keys90 = []; // indexes '(' and ')'
        let keysBracket12 = []; // indexes '[' and ']'
        let keysBracketShift12 = []; // indexes '{' and '}'
        let keysAllBool = [];
        const sortAllKeys = (a, b) => a - b;
        // start ('(' || '[' || '{')
        for (let i = 0; i < braces.length; i++) {
            if (braces[i] == '(') {
                keys90.push(i);
            } else if (braces[i] == '[') {
                keysBracket12.push(i);
            } else if (braces[i] == '{') {
                keysBracketShift12.push(i);
            }
        }
        // end (')' || ']' || '}')
        for (let i = 0; i < braces.length; i++) {
            if (braces[i] == ')') {
                keys90.push(i);
            } else if (braces[i] == ']') {
                keysBracket12.push(i);
            } else if (braces[i] == '}') {
                keysBracketShift12.push(i);
            }
        }
        // validation check
        keys90.sort(sortAllKeys);
        keysBracket12.sort(sortAllKeys);
        keysBracketShift12.sort(sortAllKeys);
        // check '(' and ')' (keys90)
        for (let i = 0; i < keys90.length; i++) {
            if (i % 2 == 0) {
                if (braces.slice(keys90[i], keys90.at(i + 1) + 1).length % 2 == 0 &&
                    braces.slice(keys90[i], keys90.at(i + 1) + 1).at(0) == '(' &&
                    braces.slice(keys90[i], keys90.at(i + 1) + 1).at(-1) == ')') {
                    keysAllBool.push(true);
                } else if (braces.slice(keys90[i], keys90.at(i + 1) + 1).at(0) == '(' &&
                    braces.slice(keys90[i], keys90.at(i + 1) + 1).at(1) == '(' ||
                    braces.slice(keys90[i], keys90.at(i + 1) + 1).at(0) == ')' &&
                    braces.slice(keys90[i], keys90.at(i + 1) + 1).at(1) == ')') {
                    keysAllBool.push(true);
                } else {
                    keysAllBool.push(false);
                }
            }
        }
        // check '[' and ']' (keysBracket12)
        for (let i = 0; i < keysBracket12.length; i++) {
            if (i % 2 == 0) {
                if (braces.slice(keysBracket12[i], keysBracket12.at(i + 1) + 1).length % 2 == 0 &&
                    braces.slice(keysBracket12[i], keysBracket12.at(i + 1) + 1).at(0) == '[' &&
                    braces.slice(keysBracket12[i], keysBracket12.at(i + 1) + 1).at(-1) == ']') {
                    keysAllBool.push(true);
                } else if (braces.slice(keysBracket12[i], keysBracket12.at(i + 1) + 1).at(0) == '[' &&
                    braces.slice(keysBracket12[i], keysBracket12.at(i + 1) + 1).at(1) == '[' ||
                    braces.slice(keysBracket12[i], keysBracket12.at(i + 1) + 1).at(0) == ']' &&
                    braces.slice(keysBracket12[i], keysBracket12.at(i + 1) + 1).at(1) == ']') {
                    keysAllBool.push(true);
                } else {
                    keysAllBool.push(false);
                }
            }
        }
        // check '{' and '}' (keysBracketShift12)
        for (let i = 0; i < keysBracketShift12.length; i++) {
            if (i % 2 == 0) {
                if (braces.slice(keysBracketShift12[i], keysBracketShift12.at(i + 1) + 1).length % 2 == 0 &&
                    braces.slice(keysBracketShift12[i], keysBracketShift12.at(i + 1) + 1).at(0) == '{' &&
                    braces.slice(keysBracketShift12[i], keysBracketShift12.at(i + 1) + 1).at(-1) == '}') {
                    keysAllBool.push(true);
                } else if (braces.slice(keysBracketShift12[i], keysBracketShift12.at(i + 1) + 1).at(0) == '{' &&
                    braces.slice(keysBracketShift12[i], keysBracketShift12.at(i + 1) + 1).at(1) == '{' ||
                    braces.slice(keysBracketShift12[i], keysBracketShift12.at(i + 1) + 1).at(0) == '}' &&
                    braces.slice(keysBracketShift12[i], keysBracketShift12.at(i + 1) + 1).at(1) == '}') {
                    keysAllBool.push(true);
                } else {
                    keysAllBool.push(false);
                }
            }
        }
        // main result
        if (!keysAllBool.includes(false)) {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
}

