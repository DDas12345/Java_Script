# Asynchronous JavaScript

JavaScript is single-threaded, but it can handle asynchronous operations using callbacks, promises, and async/await.

## 1. Why Asynchronous Programming?

Some operations such as network requests, file reading, or timers take time. JavaScript should not block the entire program while waiting.

## 2. Callbacks

```javascript
setTimeout(() => {
  console.log("This runs later");
}, 1000);
```

Callbacks are functions passed into another function to run later.

## 3. Promises

A promise represents a value that may be available later.

```javascript
const promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Success"), 1000);
});

promise.then((value) => console.log(value));
```

### Promise states
- `pending`
- `fulfilled`
- `rejected`

## 4. Async/Await

```javascript
async function fetchData() {
  const result = await new Promise((resolve) => {
    setTimeout(() => resolve("Loaded"), 1000);
  });

  console.log(result);
}

fetchData();
```

`await` pauses the execution of an async function until the promise resolves.

## 5. Error Handling

```javascript
async function load() {
  try {
    const data = await fetchData();
    console.log(data);
  } catch (error) {
    console.log("Error:", error);
  }
}
```

## 6. `fetch()` API

```javascript
fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.log(error));
```

## 7. Event Loop

The event loop allows JavaScript to continue executing other code while waiting for asynchronous tasks.

## Summary
Asynchronous JavaScript allows applications to handle time-consuming operations without freezing the user interface. Promises and async/await make this flow easier to manage.
