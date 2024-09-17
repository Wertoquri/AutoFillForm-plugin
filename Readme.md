# Form Autofill Plugin

## Description

This plugin automatically fills out forms based on previously entered data, saving them to the browser's local storage.

## How to use

1. Download `form-autofill.js` to your Web site.
2. Add `<script src="path/to/form-autofill.js" defer></script>` to the section `<head>` of your HTML document.

### HTML buttstock

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Auto-fill form</title>
    <script src="path/to/form-autofill.js" defer></script>
</head>
<body>
    <form id="myForm">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name"><br>

        <label for="email">Email:</label>
        <input type="email" id="email" name="email"><br>

        <label for="message">Message:</label>
        <textarea id="message" name="message"></textarea><br>

        <button type="submit">Submit</button>
    </form>
</body>
</html>
