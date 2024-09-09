// Два к одному

// Возьмите 2 строки s1 и s2 включая только буквы из a Для z. 
// Возвращает новую отсортированную строку (по возрастанию в алфавитном порядке), 
// максимально длинную, содержащую разные буквы - каждая берется только один раз - из s1 или s2.

// Примеры:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

// ---------------------------------------------------------------------------------------------------

// Решение:

function longest(s1, s2) {
    s1AndS2 = s1 + s2;
    s1AndS2 = s1AndS2.split('').sort()
    let s1AndS2DelDuplicate = new Set(s1AndS2);
    let s1AndS2Array = Array.from(s1AndS2DelDuplicate);
    return s1AndS2Array.join('');
}