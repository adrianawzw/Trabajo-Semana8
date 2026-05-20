// grade.js

export const calculateAverage = (grades) => {
    const total = grades.reduce((acc, grade) => acc + grade, 0);

    return total / grades.length;
};

export const validateGrade = (grade) => {
    return grade >= 0 && grade <= 20;
};