function evaluatePostfix(expression) {
    const stack = [];
    
    for (let token of expression) {
        if (!isNaN(token)) {
            stack.push(Number(token));
        } else {
            let b = stack.pop();
            let a = stack.pop();
            
            switch (token) {
                case '+': stack.push(a + b); break;
                case '-': stack.push(a - b); break;
                case '*': stack.push(a * b); break;
                case '/': stack.push(a / b); break;
                default: throw new Error(`Invalid operator: ${token}`);
            }
        }
    }
    
    return stack.pop();
}

// Example usage:
const expression = ["2", "1", "+", "3", "*"]; // Equivalent to (2 + 1) * 3
console.log(evaluatePostfix(expression)); // Output: 9

const expression2 = ["4", "13", "5", "/", "+"]; // Equivalent to 4 + (13 / 5)
console.log(evaluatePostfix(expression2)); // Output: 6.6

/*
As a React developer with 5 years of experience, you may be expected to implement a postfix (Reverse Polish Notation - RPN) expression evaluator in JavaScript. Here's an efficient solution using a stack:  

### **Postfix Expression Evaluator in JavaScript**
```javascript
function evaluatePostfix(expression) {
    const stack = [];
    
    for (let token of expression) {
        if (!isNaN(token)) {
            stack.push(Number(token));
        } else {
            let b = stack.pop();
            let a = stack.pop();
            
            switch (token) {
                case '+': stack.push(a + b); break;
                case '-': stack.push(a - b); break;
                case '*': stack.push(a * b); break;
                case '/': stack.push(a / b); break;
                default: throw new Error(`Invalid operator: ${token}`);
            }
        }
    }
    
    return stack.pop();
}

// Example usage:
const expression = ["2", "1", "+", "3", "*"]; // Equivalent to (2 + 1) * 3
console.log(evaluatePostfix(expression)); // Output: 9

const expression2 = ["4", "13", "5", "/", "+"]; // Equivalent to 4 + (13 / 5)
console.log(evaluatePostfix(expression2)); // Output: 6.6
```

### **Explanation:**
1. Use a **stack** to store operands.
2. Iterate through the **postfix expression**:
   - If a number is encountered, push it onto the stack.
   - If an operator is encountered, pop the last two numbers, apply the operation, and push the result back.
3. The final result will be the last remaining element in the stack.

### **Time Complexity:**  
- **O(n)** where **n** is the length of the expression.

### **Follow-Up for Interviews:**
- How would you handle **negative numbers** or **multi-digit numbers** in a string-based expression?
- Can you modify this to evaluate expressions **without spaces** (like `"231*+9-"`)?
- How would you handle **floating point operations** more accurately?

Would you like a React-based UI to visualize this evaluation? 🚀
*/
