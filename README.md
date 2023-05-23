# JavaScript Show/Hide Element based on Date

This JavaScript file provides a function called `showMe()` that allows you to show or hide a specific element on a webpage based on a date comparison.

## Description

The `showMe()` function takes three parameters: `showZone`, `startTime`, and `endTime`. It performs the following steps:

1.  Retrieves the current date and stores it in the `nowDate` variable.
2.  Parses the URL parameters and checks if there is a `showme` parameter present.
3.  Defines a helper function called `addZeroToDate()` that adds a leading zero to a number if it has only one digit.
4.  Defines another helper function called `convertThisDate()` that converts a date string from the format `mm/dd/yyyy` to `yyyymmdd`.
5.  Retrieves the current year, month, and day from the `nowDate` variable and formats them with leading zeros.
6.  Constructs a `runAtDate` string using the formatted year, month, and day.
7.  Converts the `startTime` and `endTime` parameters to the `yyyymmdd` format using the `convertThisDate()` function.
8.  If the `showme` parameter exists, overrides the `runAtDate` with its value and converts it to the `yyyymmdd` format.
9.  Compares the `startTime` and `endTime` with the `runAtDate` to determine if the element should be shown or hidden.
10.  If the condition is met, uses plain JavaScript to select the element with the ID matching the `showZone` parameter and displays it by setting its `display` style property to "block".

## Usage

To use the `showMe()` function in your JavaScript code, follow these steps:

1.  Include the JavaScript file in your HTML document using a script tag: `<script src="path/to/script.js"></script>`.
2.  Call the `showMe()` function with the appropriate arguments, e.g. `showMe("elementId", "start_date", "end_date")`, where "elementId" is the ID of the element you want to show or hide, and "start\_date" and "end\_date" are the dates defining the range for displaying the element.
3.  Ensure that the `showMe()` function is called after the DOM has been loaded, either by placing the script at the end of the HTML document or by using an event listener like `DOMContentLoaded`.

Note: Make sure that the elements you want to show or hide have the CSS class "hide" and an ID matching the `showZone` parameter passed to the `showMe()` function.

## Example

Here's an example usage of the `showMe()` function:

```
showMe("myElement", "05/01/2023", "05/31/2023");
```

In this example, the function will check if the current date falls between May 1, 2023, and May 31, 2023. If it does, it will display the element with the ID "myElement" on the webpage.
