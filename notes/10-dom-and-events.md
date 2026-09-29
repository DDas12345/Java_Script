# DOM and Events

The Document Object Model (DOM) represents the HTML structure of a web page as objects.

## Accessing Elements
```javascript
const heading = document.getElementById("title");
const items = document.querySelectorAll("li");
```

## Modifying Content
```javascript
heading.textContent = "Updated Heading";
```

## Changing Styles
```javascript
heading.style.color = "blue";
heading.style.fontSize = "24px";
```

## Adding Elements
```javascript
const newItem = document.createElement("li");
newItem.textContent = "New item";
document.body.appendChild(newItem);
```

## Event Listeners
```javascript
const button = document.getElementById("clickMe");

button.addEventListener("click", () => {
  alert("Button was clicked!");
});
```

## Common Events
- click
- submit
- input
- change
- keydown
- mouseover

## Example
```html
<button id="clickMe">Click Me</button>
<script>
  document.getElementById("clickMe").addEventListener("click", function () {
    console.log("Clicked!");
  });
</script>
```

## Summary
DOM manipulation and event handling allow JavaScript to make web pages interactive and responsive.
