const grades = [
    { name: "Макар",     score: 85 },
    { name: "Денис",     score: 92 },
    { name: "Анна",      score: 78 },
    { name: "Даша",      score: 88 },
    { name: "Студент_X", score: 45 }
];
// средний балл
function calculateAverage(data) {
    let sum = 0;
    for (const student of data) {
        sum += student.score;
    }
    return sum / data.length;
}
// лучший студент
function findTopStudent(data) {
    let top = data[0];
    for (const student of data) {
        if (student.score > top.score) {
            top = student;
        }
    }
    return top.name;
}
// должники
function filterFailed(data, passScore) {
    const failed = [];
    for (const student of data) {
        if (student.score < passScore) {
            failed.push(student.name);
        }
    }
    return failed;
}
// буквенные оценки
function addLetterGrade(data) {
    const result = [];
    for (const student of data) {
        let letter;
        if (student.score >= 90) {
            letter = "A";
        } else if (student.score >= 75) {
            letter = "B";
        } else {
            letter = "C";
        }
        result.push({ ...student, letter });
    }
    return result;
}

console.log("Средний балл группы:", calculateAverage(grades));
console.log("Лучший студент:", findTopStudent(grades));
console.log("Список должников:", filterFailed(grades, 60));
console.log("Оценки с буквами:", addLetterGrade(grades));