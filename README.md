Lumel Assessment -  https://lumel-app.netlify.app/

This project was created to fulfill the Lumel assessment requirements. The app includes functionality for handling 
hierarchical data with interactive input fields, 
allocation percentage buttons, and variance calculations.

Project Features
1. Table Structure:
The table contains two columns: Label and Value.
Rows are hierarchical, and each parent row may have child rows.
A Grand Total Row sums up all the values in the table.

2. Input Fields & Buttons:
Each row has an input field to accept numeric values.
Allocation % Button: Increases the current row's value by a user-defined percentage ,Updates the relevant subtotals.
Allocation Val Button: Sets the row's value to the number typed by the user, Updates the relevant subtotals.

3. Variance Display:
After either button is clicked, the variance percentage is calculated based on the original value and displayed in the UI.

4. Hierarchy & Subtotals:
Changes to child rows automatically update the parent row’s subtotal.
The hierarchy supports multiple levels, and subtotals are updated accordingly when values change.


Pending Functionality - When a child row value changes, the parent row’s percentage of the updated value is recalculated and displayed.
