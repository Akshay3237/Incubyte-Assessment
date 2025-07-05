#  String Calculator (TDD Kata)

A JavaScript implementation of the classic **String Calculator Kata**, designed to demonstrate **Test-Driven Development (TDD)** practices. This project parses and adds numbers from strings using flexible delimiters, proper error handling, and tracking features.

---

##  Features

-  Add numbers in a string using commas and newlines
-  Support custom delimiters, including multi-character delimiters
-  Handle any number of values
-  Ignore numbers greater than 1000
-  Throw exceptions on negative numbers (with full list)
-  Track how many times `add()` was called
-  Supports multiple custom delimiters (`[*][%]`)
-  Full Jest test suite

---

##  Sample Usage

```js
const StringCalculator = require('./index');
const calc = new StringCalculator();

calc.add("1,2,3");                  // 6
calc.add("1\n2,3");                 // 6
calc.add("//;\n1;2");              // 3
calc.add("//[***]\n1***2***3");    // 6
calc.add("//[*][%]\n1*2%3");       // 6
calc.GetCalledCount();             // 5
```

---

##  Exceptions

- **Non-numeric input** → throws `"Non-numeric is not allowed!"`
- **Negative numbers** → throws `"negative numbers not allowed -x,-y,..."`
- **Invalid input (e.g., empty tokens)** → same non-numeric error

---

##  File Structure

```
.
├── index.js            # StringCalculator class
├── index.test.js       # All test cases using Jest
├── assets              # having screen shots
├── node_modules        # Contains all modules related jest test suite
├── .gitignore          # Contains only node_modules for ignoreing
├── Incubyte-TDD-Assessment.pdf #Contain evolution of code by me
├──package.json         # Contains package and project related configurtion
└── README.md           # Which you are reading 

```

---

##  Test Coverage

The project includes test cases for:

| Feature                                  | Test ✅ |
|------------------------------------------|--------|
| Empty input returns 0                    | ✅     |
| Single number                            | ✅     |
| Non-numeric input throws exception       | ✅     |
| Comma-separated numbers                  | ✅     |
| Newline-separated numbers                | ✅     |
| Mixed newline and comma                  | ✅     |
| Custom single-char delimiters (`//;\n`)  | ✅     |
| Negative numbers exception               | ✅     |
| Numbers >1000 are ignored                | ✅     |
| Count how many times `add()` was called  | ✅     |
| Multi-char delimiters (`[***]`)          | ✅     |
| Multiple delimiters (`[*][%]`)           | ✅     |
| Multi-long delimiters (`[**][%%]`)       | ✅     |

---

## 🧪 Run Tests

To run the test suite:

```bash
npm install
npm run test
```

All tests are written using **Jest**.

---

##  References

This kata is originally described by Roy Osherove:  
 [The String Calculator Kata](https://osherove.com/tdd-kata-1/)

---

##  Author
 Akshay 
> Let's build something amazing 

