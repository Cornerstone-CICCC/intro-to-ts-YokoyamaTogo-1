# First TypeScript

### Step 1: Install TypeScript Globally or Locally

Open a terminal and run the following command to install TypeScript.

**Option 1: Global Installation**

```bash
npm install -g typescript
```

**Option 2: Local Repository Installation**

```bash
npm init -y
npm install typescript
```

### Step 2: Create a TypeScript File

Create a new file called `first-typescript.ts` in the repository root directory and paste the TypeScript code provided earlier into this file.

```ts
// Type assignment for numbers
const age: number = 30;

// Type inference for a boolean
const isStudent = true;

// Type assignment for a string
const username: string = "Alice";

// Function that uses type assignment and type inference
const greet = (user: string, isStudent: boolean): string => {
  if (isStudent) {
    return `Hello, ${user}! Are you enjoying your studies?`;
  } else {
    return `Hello, ${user}! How can I assist you today?`;
  }
};

// Using the function with type inference
const greetingForAlice = greet(username, isStudent);

// Output the results
console.log(`Age: ${age}`);
console.log(`Greeting for Alice: ${greetingForAlice}`);

export {};
```

### Step 3: Compile TypeScript Code

Use the TypeScript compiler (tsc) to compile the TypeScript code into JavaScript:

**Option 1: With globally installed TypeScript**

```bash
tsc first-typescript.ts
```

**Option 2: With locally installed TypeScript**

```bash
npx tsc first-typescript.ts
```

This will generate an `first-typescript.js` file.

### Step 4: Run the JavaScript Code

Now, you can run the compiled JavaScript code using Node.js:

```bash
node first-typescript.js
```

You should see the output in the terminal based on the code in the `first-typescript.js` file.

Feel free to replace `first-typescript.ts` and `first-typescript.js` with different file names if you prefer. The key point is to compile the TypeScript code into JavaScript using the TypeScript compiler (`tsc`) and then run the resulting JavaScript code using Node.js.

# Exercise: Working with Primitive Data Types and Functions

Create any `index.ts` file and follow the same steps as mentioned in the previous example to set up, compile, and run this TypeScript exercise. Adjust the function calls and arguments to experiment with different inputs and understand how these functions manipulate primitive data types.

1. **Number Manipulation:**

   a. Create a TypeScript function named `doubleNumber` that takes a number as a parameter and returns the double of that number.

   b. Create a TypeScript function named `squareNumber` that takes a number as a parameter and returns the square of that number.

2. **Boolean Logic:**

   a. Create a TypeScript function named `isEven` that takes a number as a parameter and returns true if the number is even and false if it's odd.

   b. Create a TypeScript function named `isAdult` that takes an age (number) as a parameter and returns true if the age is 18 or above (considering adults), and false otherwise.

3. **String Manipulation:**

   a. Create a TypeScript function named `reverseString` that takes a string as a parameter and returns the reversed string.

   b. Create a TypeScript function named `capitalizeString` that takes a string as a parameter and returns the string in capitalized form.

4. **Usage and Output:**

   a. Call each of the functions with appropriate arguments and display the results.
