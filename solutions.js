const multiplyValue = (value, multiplier) => {
    if (multiplier === undefined) {
        return value * 2;
    }
    else {
        return value * multiplier;
    }
};
const processInput = (value) => {
    if (typeof value === "string") {
        return value.trim().toLowerCase();
    }
    else if (typeof value === "number") {
        return value * 10;
    }
    else if (typeof value === "boolean") {
        if (value === true) {
            return "Active";
        }
        else if (value === false) {
            return "Inactive";
        }
    }
};
const formatCoordinate = ([latitude, longitude, locationName]) => {
    return `Location: ${locationName} (${latitude}, ${longitude})`;
};
const concatenateArrays = (...arrays) => {
    let result = [];
    for (const array of arrays) {
        for (const item of array) {
            result.push(item);
        }
    }
    return result;
};
const getPopularCourses = (courses, minStudents) => {
    let result = [];
    for (const course of courses) {
        if (course.isPublished === true && course.students >= minStudents) {
            result.push(course);
        }
    }
    return result;
};
export {};
