React Component Testing Documentation

This documentation provides an overview of the test cases written using the @testing-library/react library for various React components. The test cases are designed to ensure the correct behavior and functionality of the components.

1. ButtonTesting Component Test

Test Description

Objective: Verify that the button click event updates the component as expected.

Steps:
Render the ButtonTesting component.
Simulate a button click event.
Check if the text "updated" is present in the document.

2. ImageTesting Component Test

Test Description
Objective: Ensure the presence of the image element in the ImageTesting component.
Steps:
Render the ImageTesting component.
Get the image element by its title attribute.
Check if the image element is present in the document.

3. InputTesting Component Test

Test Description
Objective: Validate the input box and its behavior on change.
Steps:
Render the InputTesting component.
Get the input element by its role and placeholder text.
Check if the input element and its placeholder are present in the document.
Check specific attributes of the input element (name, id, type).
Simulate a change event on the input element and check if the input value is updated.

4. TextTesting Component Test

Test Description
Objective: Confirm the presence of specific text in the TextTesting component.
Steps:
Render the TextTesting component.
Get the text element containing "Text testing" case-insensitively.
Check if the text element is present in the document.
