# Infinite Render Loop in React

This repository demonstrates a common yet easily missed error in React: an infinite render loop caused by improper use of the `useEffect` hook.

## The Bug

The `bug.js` file contains a React component that attempts to increment a state variable using `useEffect` without the correct dependency array, resulting in an infinite render loop. The loop occurs because the component renders, `useEffect` is called, and `setCount` is called. This causes another render, another `useEffect` call, and so on.

## The Solution

The `bugSolution.js` file demonstrates how to fix the issue. The key is to use the dependency array to ensure `useEffect` only runs when a specific dependency changes. In this case, we use an empty dependency array `[]`, which means the effect only runs once after the initial render. Alternatively, we could also update this array to specify a certain condition that will break the infinite loop.

## How to Run

1. Clone this repository
2. Navigate to the repository directory
3. Run `npm install` to install necessary packages
4. Run `npm start` to start the development server