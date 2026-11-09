# TypeScript Problem Solving

A collection of practical TypeScript exercises covering functions, type
safety, generics, arrays, object-oriented programming, and asynchronous
operations.

## Problems Solved

### 1. Multiply a Value with an Optional Multiplier

**Concepts:** Functions, optional parameters, `undefined`, conditional
logic.

The `multiplyValue()` function multiplies a number by a provided
multiplier. If no multiplier is given, it uses `2` as the default
multiplier.

### 2. Process Different Input Types

**Concepts:** Union types, `typeof`, type narrowing.

The `processInput()` function accepts a string, number, or boolean. It
converts strings to lowercase after trimming whitespace, multiplies
numbers by `10`, and converts booleans into `"Active"` or `"Inactive"`.

### 3. Format Coordinates

**Concepts:** Tuples, `readonly`, template literals.

The `formatCoordinate()` function receives latitude, longitude, and a
location name through a tuple. It returns a formatted location string.
The `readonly` modifier prevents the tuple from being changed through
this parameter.

### 4. Concatenate Multiple Arrays

**Concepts:** Generics, rest parameters, loops.

The generic `concatenateArrays()` function accepts multiple arrays and
combines their items into one array. Its generic type allows it to work
with different item types while preserving type information.

### 5. Find Popular Courses

**Concepts:** Interfaces, object types, arrays, conditions.

A `Course` interface defines the structure of a course. The
`getPopularCourses()` function returns only published courses whose
student count meets or exceeds the given minimum.

### 6. Extract Values by Object Key

**Concepts:** Generics, `keyof`, generic constraints, indexed access
types.

The `pluckValues()` function extracts one selected property from every
object in an array. `K extends keyof T` makes sure the selected key
exists on the object, while `T[K]` describes the type of the extracted
values.

### 7. Employee and Manager Classes

**Concepts:** Classes, constructors, inheritance, `private`,
`protected`, `super`.

The `Employee` class stores an employee's name and base salary. The
`Manager` class extends it and adds a department. This demonstrates how
inheritance allows a class to reuse and extend another class.

### 8. Validate Age Asynchronously

**Concepts:** `async/await`, Promises, `try/catch`, error handling.

The `validateAgeAsync()` function checks whether a person is at least 18
years old. It throws an error if the age is below 18. Otherwise, it
waits for a Promise and returns `"Access Granted"`. The `catch` block
checks whether the caught value is an `Error` before rethrowing it.

## TypeScript Concepts Practiced

-   Functions, optional parameters, and return values
-   Union types and type narrowing
-   Tuples and readonly types
-   Generics and rest parameters
-   Interfaces and object structures
-   Array iteration and filtering
-   `keyof` and indexed access types
-   Classes, inheritance, and access modifiers
-   Promises, `async/await`, and error handling

## How to Run

Make sure Node.js is installed. Install TypeScript and `ts-node`:

``` bash
npm install -D typescript ts-node
```

Save the exercises in a file such as `solutions.ts`, then run:

``` bash
npx ts-node solutions.ts
```

Or compile the file with the TypeScript compiler:

``` bash
npx tsc solutions.ts
```

## Learning Goal

These exercises are designed to build a practical understanding of
TypeScript and show how its type system helps make JavaScript code
safer, clearer, and easier to maintain.

## Author

**Mizanur Rahman**
