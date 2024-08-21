const students = new Map([
    [101, {name: 'Alice', scores: [{date: '2023-01-10', score: 88}, {date: '2023-02-15', score: 92}]}],
    [102, {name: 'Bob', scores: [{date: '2023-01-12', score: 75}, {date: '2023-03-10', score: 82}]}],
    [103, {name: 'Charlie', scores: [{date: '2023-01-11', score: 91}]}],
    [104, {
        name: 'David',
        scores: [{date: '2023-01-09', score: 83}, {date: '2023-02-14', score: 87}, {date: '2023-03-20', score: 90}]
    }],
]);

// 计算平均分
function calculateAverageScores(students) {
    const map = new Map();
    for (let [key, {scores}] of students) {
        let averageItem = 0;
        scores.forEach(({score}) => averageItem += score)
        const average = Math.round((averageItem / scores.length) * 100) / 100;
        map.set(key, average);
    }
    return map;
}
const averageScores = calculateAverageScores(students);
console.log('averageScores', averageScores);
// 输出示例: Map(4) { 101 => 90, 102 => 78.5, 103 => 91, 104 => 86.67 }


// 查找最高平均分的学生
function findTopStudent(averageScores) {
    let maxNum = {
        studentId: null,
        averageScore: null
    };
    for (let [key, value] of averageScores) {
        if (maxNum.averageScore === null || maxNum.averageScore < value) {
            maxNum.averageScore = value;
            maxNum.studentId = key;
        }
    }
    return maxNum;
}
const topStudent = findTopStudent(averageScores);
console.log('topStudent', topStudent);
// 输出示例: { studentId: 103, averageScore: 91 }


// 按平均分排序
function sortStudentsByAverage(averageScores) {
    const sorted = [];
    for (let [key, value] of averageScores) {
        const item = {studentId: key, averageScore: value};
        sorted.push(item);
    }
    return sorted.sort((a, b) => b.averageScore - a.averageScore);
}
const sortedStudents = sortStudentsByAverage(averageScores);
console.log('sortedStudents', sortedStudents);
// 输出示例: [{ studentId: 103, averageScore: 91 }, { studentId: 101, averageScore: 90 }, { studentId: 104, averageScore: 86.67 }, { studentId: 102, averageScore: 78.5 }]


// 按考试次数筛选学生
function filterStudentsByExams(students, numberOfExams) {
    const numExams = []
    for (let [key, {scores}] of students) {
        if(scores.length >= numberOfExams){
            numExams.push(key);
        }
    }
    return numExams;
}
const filteredStudents = filterStudentsByExams(students, 2);
console.log('filteredStudents', filteredStudents);
// 输出示例: [101, 102, 104]

