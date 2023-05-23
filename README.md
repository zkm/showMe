# JavaScript Show/Hide Element based on Date

This JavaScript file provides a function called `showMe()` that allows you to show or hide a specific element on a webpage based on a date comparison.

## Description

The `showMe()` function takes three parameters: `showZone`, `startTime`, and `endTime`. It performs the following steps:

1.  Retrieves the current date and stores it in the `currentDate` variable.
2.  Converts the `startTime` and `endTime` parameters to `Date` objects.
3.  Compares the `currentDate` with the `startTime` and `endTime` to determine if the element should be shown or hidden.
4.  If the condition is met, it sets the `display` style property of the element with the ID matching the `showZone` parameter to "block", showing the element. Otherwise, it sets the style property to "none", hiding the element.

## Usage

To use the `showMe()` function in your JavaScript code, follow these steps:

1.  Include the JavaScript file in your HTML document using a script tag: `<script src="path/to/script.js"></script>`.
2.  Add the appropriate CSS class and data attributes to the elements you want to show or hide. For example:

htmlCopy code

```html 
  <div class="hide" id="div_1" data-start="5/1/2023" data-end="5/15/2050">
    Date: 5/1/2023 &ndash; 5/15/2050
  </div>
```

In this example, the element has the class "hide", an ID of "div\_1", and data attributes specifying the start and end dates.

3.  Ensure that the `showMe()` function is called after the DOM has been loaded. The function is automatically called when the DOMContentLoaded event is triggered. For example:

javascriptCopy code

```javascript
  document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll(".hide");   
    elements.forEach((element) => {     
      const showZone = element.id;     
      const startTime = element.dataset.start;     
      const endTime = element.dataset.end;     
      showMe(showZone, startTime, endTime);   
     }); 
  });
```

This code selects all elements with the class "hide", retrieves their ID, start date, and end date from the data attributes, and calls the `showMe()` function for each element.

Note: Make sure that the elements you want to show or hide have the appropriate ID matching the `showZone` parameter passed to the `showMe()` function.

## Example

Here's an example usage of the `showMe()` function:

```html 
<div class="hide" id="div_1" data-start="5/1/2023" data-end="5/15/2050">
  Date: 5/1/2023 &ndash; 5/15/2050
</div> 
<script src="js/script.js"></script>
```

In this example, the function will check if the current date falls between May 1, 2023, and May 15, 2050. If it does, it will display the element with the ID "div\_1" on the webpage.
