# TypeScript Advanced Lab

## Overview

This repository contains solutions for the **TypeScript Advanced** module practical tasks. The exercises cover advanced TypeScript concepts including Generics, Enums, Union Types, Intersection Types, Type Guards, Narrowing, and Working with Modules.

The goal of this lab is to strengthen understanding of TypeScript's advanced type system and demonstrate how these features improve type safety, maintainability, and developer experience in real-world applications.

---

## Learning Objectives

By completing this lab, you will be able to:

* Create and use generic functions and interfaces.
* Apply generic constraints for safer APIs.
* Work with string enums and const enums.
* Use union and intersection types effectively.
* Implement discriminated unions and exhaustive checks.
* Create custom type guards.
* Understand TypeScript narrowing and control flow analysis.
* Organize code using ES modules.
* Write reusable and type-safe TypeScript code.

---

## Project Structure

```text
typescript-advanced-lab/
│
├── src/
│   ├── generics/
│   ├── enums/
│   ├── unions/
│   ├── intersections/
│   ├── type-guards/
│   ├── narrowing/
│   └── modules/
│
├── tsconfig.json
├── package.json
└── README.md
```

---

# Generics

## Task 1: Generic First Function

Implemented:

```ts
function first<T>(arr: T[]): T | undefined
```

### Concepts Practiced

* Generic functions
* Type inference
* Reusable type-safe APIs

### Expected Outcome

TypeScript automatically infers:

```ts
const a = first(["a", "b"]); // string | undefined
const b = first([1, 2]);     // number | undefined
```

---

## Task 2: Generic Pair Interface and Swap Function

Implemented:

```ts
interface Pair<T, U>
```

and

```ts
function swap<T, U>(
  pair: Pair<T, U>
): Pair<U, T>
```

### Concepts Practiced

* Multiple generic parameters
* Generic interfaces
* Type transformations

---

## Task 3: Generic Pick Function

Implemented:

```ts
function pick<T, K extends keyof T>(
  obj: T,
  keys: K[]
): Pick<T, K>
```

### Concepts Practiced

* Generic constraints
* keyof operator
* Utility types

### Expected Outcome

```ts
const result = pick(obj, ["a", "c"]);
```

Only selected properties are available.

---

# Enums

## Task 1: String Enum

Created:

```ts
enum Direction
```

### Concepts Practiced

* String enums
* Strong typing
* Compile-time validation

---

## Task 2: Const Enum

Created:

```ts
const enum Status
```

### Concepts Practiced

* Compile-time enum inlining
* Runtime optimization

### Observation

After compilation:

```js
console.log(1);
```

No enum object exists at runtime.

---

## Task 3: String Literal Union Alternative

Implemented:

```ts
type Direction =
  | "Up"
  | "Down"
  | "Left"
  | "Right";
```

### Comparison

#### Advantage

* Smaller generated JavaScript
* Better tree-shaking

#### Disadvantage

* No runtime object access

---

# Union Types

## Task 1: formatId()

Implemented:

```ts
function formatId(
  id: string | number
): string
```

### Concepts Practiced

* Union types
* Type-safe APIs

---

## Task 2: Shape Area Calculator

Created:

```ts
Circle
Square
```

and

```ts
type Shape = Circle | Square
```

### Concepts Practiced

* Discriminated unions
* Type narrowing

---

## Task 3: Exhaustive Union Handling

Added:

```ts
Triangle
```

and implemented:

```ts
never
```

based exhaustiveness checking.

### Concepts Practiced

* Compile-time safety
* Exhaustive switch statements

---

# Intersection Types

## Task 1: Timestamped Contact

Created:

```ts
type TimestampedContact =
  Named & Timestamped
```

### Concepts Practiced

* Type composition
* Intersection types

---

## Task 2: withLogging()

Implemented:

```ts
function withLogging<T extends object>()
```

### Concepts Practiced

* Generic intersections
* Object augmentation

---

## Task 3: Conflicting Intersections

Investigated:

```ts
{ id: string } &
{ id: number }
```

### Observation

TypeScript resolves:

```ts
id: never
```

because a value cannot be both string and number simultaneously.

---

# Type Guards

## Task 1: User Defined Type Guard

Implemented:

```ts
function isString(
  val: unknown
): val is string
```

### Concepts Practiced

* Custom type guards
* Safe narrowing

---

## Task 2: Fish vs Bird

Implemented:

```ts
function isFish()
```

using:

```ts
in
```

operator.

### Concepts Practiced

* Property existence checks
* Union narrowing

---

## Task 3: Exhaustive typeof Handling

Handled:

```ts
string
number
boolean
```

using:

```ts
typeof
```

and:

```ts
never
```

checks.

---

# Narrowing

## Task 1: Nullish Value Handling

Handled:

```ts
string | null | undefined
```

without using:

```ts
!
```

(non-null assertions).

### Concepts Practiced

* Truthiness narrowing
* Explicit null checks

---

## Task 2: Result Union

Created:

```ts
Success
Failure
```

with:

```ts
kind
```

discriminants.

### Concepts Practiced

* Discriminated unions
* Exhaustive switch handling

---

## Task 3: Combined Narrowing

Handled:

```ts
string
number
null
undefined
```

using:

* Equality checks
* typeof checks
* Control flow analysis

---

# Working with Modules

## Task 1: Named Exports

Implemented:

```ts
export function add()
export function multiply()
```

### Concepts Practiced

* Named exports
* Named imports

---

## Task 2: Default and Named Exports

Implemented:

```ts
export default
export const
export function
```

and imported using:

```ts
import DefaultName
import { named }
import * as Module
```

### Concepts Practiced

* Default exports
* Namespace imports
* Module organization

---

## Task 3: Namespace Migration

Converted:

```ts
namespace MathUtils
```

to:

```ts
export function
```

based ES modules.

### Concepts Practiced

* Modern module systems
* ES module syntax

---

# Technologies Used

* TypeScript
* Node.js
* ES Modules

---

# Installation

Clone the repository:

```bash
git clone <repository-url>
```

Move into the project:

```bash
cd typescript-advanced-lab
```

Install dependencies:

```bash
npm install
```

---

# Compile TypeScript

```bash
npx tsc
```

---

# Run Generated JavaScript

Example:

```bash
node dist/generics/task1-first.js
```

Adjust paths according to your tsconfig configuration.

---

# Key Concepts Covered

* Generics
* Generic Constraints
* Utility Types
* Enums
* Const Enums
* Union Types
* Discriminated Unions
* Exhaustiveness Checks
* Intersection Types
* Type Guards
* Control Flow Analysis
* Narrowing
* ES Modules
* Named Exports
* Default Exports

---

# Outcome

This lab demonstrates practical usage of advanced TypeScript features commonly used in enterprise applications, React projects, Node.js backends, and large-scale codebases. The implementation focuses on type safety, code reusability, and maintainability while following modern TypeScript best practices.
