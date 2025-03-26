# Algo Testing Suite

## About This Repo

This repository is a central place for me to work on various algorithm problems—all in one location. I created it not only to keep my algorithm practice organized but also to experiment with testing frameworks like Mocha and Chai. 

## Repository Structure

- **src/**  
  Contains the JavaScript files with the algorithm implementations. For example:
  - `recursion.js` – Functions solving recursion problems
  - `arrays.js` – Functions solving array problems (coming soon)
  - `strings.js` – Functions solving string problems (coming soon)

- **test/**  
  Contains the Mocha/Chai test files for each topic. For example:
  - `recursion.test.js` – Tests for the recursion problems
  - `arrays.test.js` – Tests for the array problems (coming soon)
  - `strings.test.js` – Tests for the string problems (coming soon)

- **HTML Files**  
  These HTML files load the corresponding source and test files in the browser so you can see your test results visually.
  - `recursion.html` – Opens tests for recursion practice problems
  - `arrays.html` – Opens tests for array practice problems (coming soon)
  - `strings.html` – Opens tests for string practice problems (coming soon)

## Getting Started

### Prerequisites

- **Live Server:**  
  It is recommended to use Live Server in Visual Studio Code (or any similar tool) to serve the HTML files. This ensures that the test results are automatically refreshed in the browser as you make changes.

- **Node.js and npm (Optional):**  
  If you want to run tests from the terminal instead of the browser, ensure you have Node.js installed.

### How to Run the Tests in the Browser

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/andymattgee/AlgoDSPractice.git
   cd AlgoDSPractice



2.	**Open the Correct HTML File with Live Server:**
	-	For recursion practice problems, open `recursion.htm` with Live Server.
	-	For array practice problems, open `arrays.html` with Live Server. (coming soon)
	-	For string practice problems, open `strings.html` with Live Server. (coming soon)

Example:
In Visual Studio Code, right-click on `recursion.html` and select **“Open with Live Server.”** This will launch your browser and display the test results for the recursion problems.

Running Tests in the Terminal **(Optional)**

If you prefer to run tests in the terminal using Mocha:
1.	Install Mocha and Chai as Dev Dependencies (if not already installed):

```npm install --save-dev mocha chai```


2.	Modify Your Test Files for Node:
Make sure your algorithm functions are exported from your source files (e.g., using module.exports) and that your test files require them.
3.	Update the Test Script in package.json:

``{
  "scripts": {
    "test": "mocha"
  }
}
``

4.	Run the Tests:

    ```bash 
        npm test git

This command will run all tests defined in the test/ folder and display the results in the terminal.


**License**

MIT License

