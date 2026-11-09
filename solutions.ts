const multiplyValue = (value: number, multiplier?: number) => {
  if (multiplier === undefined) {
    return value * 2;
  } else {
    return value * multiplier;
  }
};

const processInput = (value: string | number | boolean) => {
  if (typeof value === "string") {
    return value.trim().toLowerCase();
  } else if (typeof value === "number") {
    return value * 10;
  } else if (typeof value === "boolean") {
    if (value === true) {
      return "Active";
    } else if (value === false) {
      return "Inactive";
    }
  }
};

const formatCoordinate = ([latitude, longitude, locationName]: readonly [
  number,
  number,
  string,
]) => {
  return `Location: ${locationName} (${latitude}, ${longitude})`;
};

const concatenateArrays = <T>(...arrays: T[][]) => {
  let result = [];

  for (const array of arrays) {
    for (const item of array) {
      result.push(item);
    }
  }

  return result;
};

interface Course {
  title: string;
  students: number;
  isPublished: boolean;
}

const getPopularCourses = (courses: Course[], minStudents: number) => {
  let result = [];

  for (const course of courses) {
    if (course.isPublished === true && course.students >= minStudents) {
      result.push(course);
    }
  }

  return result;
};

const pluckValues = <T, K extends keyof T>(items: T[], key: K): T[K][] => {
  let result: T[K][] = [];

  for (const item of items) {
    result.push(item[key]);
  }

  return result;
};

class Employee {
  protected name: string;
  private baseSalary: number;

  constructor(name: string, baseSalary: number) {
    this.name = name;
    this.baseSalary = baseSalary;
  }

  getDetails(): string {
    return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
  }
}

class Manager extends Employee {
  private department: string;

  constructor(name: string, baseSalary: number, department: string) {
    super(name, baseSalary);
    this.department = department;
  }

  getRoleInfo(): string {
    return `Manager of ${this.department}: ${this.name}`;
  }
}

const validateAgeAsync = async (age: number): Promise<string> => {
  try {
    if (age < 18) {
      throw new Error("Access Denied: Must be 18 or older");
    }

    const result = await new Promise<string>((resolve) => {
      setTimeout(() => {
        resolve("Access Granted");
      }, 1000);
    });

    return result;
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    } else {
      throw new Error("Something Went Wrong");
    }
  }
};
