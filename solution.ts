function filterEvenNumbers(numbers: number[]): number[] {
    const nums: number[] = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            nums.push(numbers[i]);
        }
    }
    return nums;
}   

function reverseString(str: string): string {
    let rev: string = '';
    for (let i = str.length - 1; i >= 0; i--) {
        rev += str[i];
    }   
    return rev;
}

type StringOrNumber = string | number;
function checkType(value: StringOrNumber): string {
    if (typeof value === "string") {
        return "String";
    } else {
        return "Number";
    }
}

type genericObject<T> = { [key: string]: T; }
function getProperty(obj: genericObject<any>, key: string): object {
    return obj[key];
}

interface Book {
    title: string;
    author: string;
    publishedYear: number;
}

function toggleReadStatus<T extends Book>(book: T): T & { isRead: boolean } {
    return {
        ...book,
        isRead: true
    };
}

class Person {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

class Student extends Person {
    grade: string;
    constructor(name: string, age: number, grade: string) {
        super(name, age); 
        this.grade = grade;
    }
    getDetails(): string {
        return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
    }
}

function getIntersection(arr1: number[], arr2: number[]): number[] {
    const result: number[] = [];
    for (let item of arr1) {
        if (arr2.includes(item)) {
            result.push(item);
        }
    }
    return result;
}
