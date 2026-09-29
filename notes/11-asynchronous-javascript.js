// Asynchronous JavaScript

// 1. Callback example
function fetchData(callback) {
  setTimeout(() => {
    callback("Data loaded");
  }, 1000);
}

fetchData((result) => {
  console.log(result);
});

// 2. Promise example
const promiseExample = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise resolved successfully");
  }, 1000);
});

promiseExample
  .then((value) => console.log(value))
  .catch((error) => console.log(error));

// 3. Async / Await example
async function loadUser() {
  try {
    const value = await promiseExample;
    console.log("Awaited value:", value);
  } catch (error) {
    console.log("Error:", error);
  }
}

loadUser();

// Summary
// Async JavaScript helps handle long-running tasks without blocking the main thread.
