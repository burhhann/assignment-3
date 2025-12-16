# University Grading System
## File Structure
- **main.js**: Runs the program and displays the analytics report.
- **models.js**: Contains the `Student` class and handles ID security.
- **analytics.js**: Helper functions for calculating averages and filtering students.
- **database.js**: Simulates a server delay to fetch student data.
## Challenges
The most difficult part was using `Object.defineProperty` correctly to stop the ID from being modified. Also, managing the asynchronous callback to ensure data was ready before processing took some effort.
