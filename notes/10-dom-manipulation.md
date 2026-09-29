# DOM Manipulation

The Document Object Model (DOM) is a tree-like representation of the HTML structure in a browser. JavaScript can interact with the DOM to update content, styles, and behavior.

## 1. Selecting Elements

```javascript
const heading = document.getElementById("heading");
const items = document.querySelectorAll("li");
const firstItem = document.querySelector("li");
```

### Common selectors
- `getElementById()`
- `querySelector()`
- `querySelectorAll()`
- `getElementsByClassName()`
- `getElementsByTagName()`

## 2. Changing Text

```javascript
heading.textContent = "New heading";
```

## 3. Changing HTML

```javascript
firstItem.innerHTML = "<strong>Updated</strong>";
```

## 4. Changing Styles

```javascript
heading.style.color = "blue";
heading.style.fontSize = "24px";
```

## 5. Adding and Removing Classes

```javascript
heading.classList.add("active");
heading.classList.remove("hidden");
heading.classList.toggle("visible");
```

## 6. Creating Elements

```javascript
const newItem = document.createElement("li");
newItem.textContent = "New item";
```

Append it to a parent element:

```javascript
const list = document.querySelector("ul");
list.appendChild(newItem);
```

## 7. Event Handling

```javascript
button.addEventListener("click", () => {
  console.log("Button clicked!");
});
```

## 8. Event Object

```javascript
button.addEventListener("click", (event) => {
  console.log(event.target);
});
```

## 9. Form Handling

```javascript
const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("Form submitted");
});
```

## Summary
DOM manipulation allows JavaScript to dynamically change the browser page. It is one of the core skills for interactive web development.
