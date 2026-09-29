# Asynchronous JavaScript

JavaScript is single-threaded, but it can handle asynchronous work using callbacks, promises, and async/await.

## Why Asynchronous?
Some tasks take time, such as:
- fetching data from APIs
- reading files
- waiting for user input
- network requests

## Callback Function
```javascript
function fetchData(callback) {
  setTimeout(() => {
    callback("Data received");
  }, 1000);
}

fetchData((message) => {
  console.log(message);
});
```

## Promises
```javascript
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Success");
  }, 1000);
});

promise.then((value) => console.log(value));
```

## Async/Await
```javascript
async function loadData() {
  const result = await new Promise((resolve) => {
    setTimeout(() => resolve("Loaded"), 1000);
  });

  console.log(result);
}

loadData();
```

## Fetch API
```javascript
fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error(error));
```

## Event Loop
The JavaScript event loop handles asynchronous tasks by moving them to the queue when the current task finishes.

## Summary
Async JavaScript allows the program to continue working while waiting for slower operations to complete. Promises and async/await are the standard modern approach.
