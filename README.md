# TypeScript Type Mismatch Bug

This repository demonstrates a common TypeScript error related to type mismatches when passing arguments to functions.

The `bug.ts` file contains the buggy code, while `bugSolution.ts` provides a corrected version.

## Bug Description:

A function expects a single string argument, but an array of strings is passed.  TypeScript's type system correctly identifies this as an error.

## Solution:

The solution involves ensuring the correct type of data is passed to the function.  This might involve changing the function signature or preprocessing the input array.