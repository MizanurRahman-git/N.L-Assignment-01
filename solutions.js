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
const pluckValues = (items, key) => {
    let result = [];
    for (const item of items) {
        result.push(item[key]);
    }
    return result;
};
class Employee {
    name;
    baseSalary;
    constructor(name, baseSalary) {
        this.name = name;
        this.baseSalary = baseSalary;
    }
    getDetails() {
        return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
    }
}
class Manager extends Employee {
    department;
    constructor(name, baseSalary, department) {
        super(name, baseSalary);
        this.department = department;
    }
    getRoleInfo() {
        return `Manager of ${this.department}: ${this.name}`;
    }
}
const validateAgeAsync = async (age) => {
    try {
        if (age < 18) {
            throw new Error("Access Denied: Must be 18 or older");
        }
        const result = await new Promise((resolve) => {
            setTimeout(() => {
                resolve("Access Granted");
            }, 1000);
        });
        return result;
    }
    catch (error) {
        if (error instanceof Error) {
            throw error;
        }
        else {
            throw new Error("Something Went Wrong");
        }
    }
};
export {};
