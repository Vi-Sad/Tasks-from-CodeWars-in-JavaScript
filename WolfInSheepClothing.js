// Волк в овечьей шкуре

// Волки были вновь завезены в Великобританию. Вы занимаетесь разведением овец, и теперь вас преследуют волки, которые притворяются овцами. 
// К счастью, вы хорошо их обнаруживаете.
// Предупредите овцу, стоящую перед волком, о том, что ее собираются съесть. 
// Помните, что вы стоите в начале очереди которая находится в конце ряда:

// [sheep, sheep, sheep, sheep, sheep, wolf, sheep, sheep]      (YOU ARE HERE AT THE FRONT OF THE QUEUE)
//    7      6      5      4      3            2      1

// Если волк - ближайшее к вам животное, верните "Pls go away and stop eating my sheep". 
// В противном случае верните "Oi! Sheep number N! You are about to be eaten by a wolf!", где N позиция овцы в очереди.

// Примечание: в массиве всегда будет ровно один wolf.

// Примеры:

// Ввод: ["sheep", "sheep", "sheep", "wolf", "sheep"]
// Вывод: "Oi! Sheep number 1! You are about to be eaten by a wolf!"

// Ввод: ["sheep", "sheep", "wolf"]
// Вывод: "Pls go away and stop eating my sheep"

// ----------------------------------------------------------------------------------------------------------------------------------------

// Решение:

function warnTheSheep(queue) {
    for (let i = 0; i < queue.length; i++) {
        if (queue.at(-1) == 'wolf') {
            return 'Pls go away and stop eating my sheep';
        } else {
            if (queue[i] == 'wolf') {
                return `Oi! Sheep number ${queue.length - i - 1}! You are about to be eaten by a wolf!`;
            }
        }
    }
}