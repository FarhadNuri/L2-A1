# Ques 4: Four Pillars of OOP

Object-Oriented Programming (OOP) helps manage large TypeScript projects by making code more organized, reusable, and easier to maintain. The four pillars of OOP — Inheritance, Polymorphism, Abstraction, and Encapsulation — reduce complexity by dividing logic into smaller and manageable parts. This makes development faster and reduces bugs in large applications.

## Inheritance

Inheritance helps reuse existing code. A child class can use properties and methods from a parent class instead of rewriting them again.

```
class Animal {
    sound() {
        console.log("Animal sound");
    }
}
class Dog extends Animal {}
const d = new Dog();
d.sound();
```
## Polymorphism

Polymorphism allows the same method to behave differently for different objects. This makes code flexible and scalable.

```
class Shape {
    draw() {
        console.log("Drawing shape");
    }
}

class Circle extends Shape {
    draw() {
        console.log("Drawing circle");
    }
}
```
## Abstraction

Abstraction hides unnecessary details and only shows important functionality. This reduces confusion in big projects.

```
abstract class Payment {
    abstract pay(): void;
}

class CardPayment extends Payment {
    pay() {
        console.log("Payment done");
    }
}
```
The user only knows payment happens, not the internal process.

## Encapsulation

Encapsulation protects data from direct access. Data is controlled using methods which improves security and stability.

````
class Account {
    private balance = 1000;

    getBalance() {
        return this.balance;
    }
}
```
Here, balance cannot be changed directly from outside the class.

Overall, these four pillars helps reduce complexity by making TypeScript code cleaner, safer, and easier to manage in large-scale projects.