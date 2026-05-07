# Ques 3: Generics

When we write code, one common problem is we don’t always know what type of data we will get. Sometimes it is a number, sometimes string, sometimes an object. If we write separate functions for each type, code becomes messy and repeated. This is where Generics in TypeScript comes in. Generics help us write reusable components and functions that still keep strict type checking, no matter what data we pass.

For example, imagine we are creating a function that returns the same value we pass into it. Without generics, we may need multiple functions. But with generics, only one function is enough.

```
function identity<T>(value: T): T {
    return value;
}

console.log(identity<string>("Hello"));
console.log(identity<number>(100));
```

Here, <T> acts like a temporary type. When we pass a string, T becomes string. When we pass a number, T becomes number. The important thing is the function still remains strictly typed, so wrong data types can be detected during compile time. This reduces many bugs before the program even runs.

Sometimes we want our generic function to be flexible but not too flexible. For example, if we want to access a property of the value we pass in, TypeScript will complain because it does not know what shape T has. This is where constraints come in. We can use the extends keyword to tell TypeScript that T must at least have certain properties.

```
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}
const user = { name: "Ali", age: 22 };
console.log(getProperty(user, "name"));
console.log(getProperty(user, "age")); 
```
Here K extends keyof T means K can only be a key that actually exists on T. So if we try to access a property that does not exist, TypeScript catches it immediately. This is a very practical use of generics in real projects.

In small projects, we might not feel the need for generics that much. But as the codebase grows, the value becomes very clear. Without generics, developers often fall back to using any type, which basically tells TypeScript to stop checking. This defeats the whole purpose of using TypeScript in the first place. Generics give us the best of both worlds — the flexibility to handle different data types and the safety of strict type checking.