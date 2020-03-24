# Written questions

The following questions are intended to be answered with written answers (no coding required) and should re-enforce some of the learning you have completed.

1. Which part is the file extension of the package.json file?

    A1. *.JSON

2. What does JSON stand for?

    A2. JavaScript Object Notation

3. What is the purpose of JSON?

    A3. JSON format/file is used for structoring data in an object model where we have a "keys" and a "values" against them; Keys are strings and they define the property's name, value of which can be strings, num, bool, obj, etc.

4. What does the package.json file do?

    A4. A key responsibility of .JSON files is managing the installation of the code dependencies in our projects.

5. How do you install dependencies in a project after first cloning it from Github?

    A5. npm install "dependancy name"

6. What does "forking" mean in the context of Github?

    A6. Copy the project in my own repo.

7. What data types do you know?

    A7. num(int, double, float, dec, dem), string, boolean(true, false), array([1, "2", etc.]), object({key: value})

8. What is the difference between primitive and complex data types, and can you give examples of each?

    A8. Primitive are the data types that can hold only one value like num's they can be equal to only one at a given time, strings and boolean's as well.

    Complex data type like arrays and objects can contain multiple values at a time;

9. What would be the best data type for representing whether a user is logged into the system or not?

    A9. Boolean - either `true` or `false`

10. How would you create a variable whose value could not be changed?

    A10. By using the keyword `const`.

11. What would be the outcome of running this code?

```javascript
const firstName = "Sandra";

function sayHello(name) {
  console.log("Hello, " + firstName);
}

sayHello("Sally");
```

A11. `Hello Sandra`; We have defined `firstName` outside of the function, it has global scope, that's why no error will be thrown on us. Where the `name` parameter of the function was defined, but never used.

12. What would be the outcome of running this code?

```javascript

function getFullName(firstName, lastName) {
  const fullName = firstName + " " + lastName;
  return fullName;
}

const result = getFullname("Sally", "Jennings");

console.log(fullName);
```

A12. `undefined` fullName is out of scope;

13. If you wanted to see what dependencies were required in this project, where would you to to look for a list?

    A13. package.json 

    "devDependencies": {
    "eslint": "^6.8.0",
    "jest": "^24.9.0"
  }

14. When you install dependencies, what directory is created?

    A14. node_modules

15. How can you write comments in your code?

    A15. 
    
    // one line comment

    /* multiple 
    line 
    comment */