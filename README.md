# YvesBlue Frontend Challenge

Here is a challenge we would like you to complete to help assess and show off your frontend skills. This is an example of a real world problem you would need to solve while working at YvesBlue. We do not expect you to spend more than a couple of hours on this project.

## Getting Started
* You will need [NodeJS 10.x+](https://nodejs.org/en/).
* Please do all of your work on a feature branch.
* Use `yarn install` to install the correct packages.
* Use `yarn start` to start the development server.
* You can view the application at http://localhost:3000.

## Application Design
[![YvesBlue Table](/public/table.png?raw=true "YvesBlue Table")](https://www.figma.com/file/itPY0qbfyHZG1EmsavVno5/Frontend-Assessment)

## Instructions
* Please recreate the table (illustrated above) utilizing React.
* You can view the public design file in [Figma](https://www.figma.com/file/itPY0qbfyHZG1EmsavVno5/Frontend-Assessment).
* All required fonts can be included directly from [Google Fonts](https://fonts.google.com/).
* We’re trying to keep pace with the React community, and are implementing most of new components utilizing React Hooks. We would encourage you to do so for this project.
* We want to see how you manage state without using external libraries.
* For styling, you can use any libraries you want; we encourage you to use the libraries you’re most familiar with, as long as you’re writing your own styles (i.e., not utilizing frameworks like Bootstrap, SemanticUI, Blueprint, etc.).
* We are looking at this deliverable as if it was a "miniature product", so therefore, please organize your code as you would expect to do so in a larger application, utilizing best practices for file organization, architecture, documentation, etc.
* The [included data file](/public/data.json?raw=true) includes 250 records to populate.
* Writing tests is not a requirement, but is highly encouraged. You can use any testing framework you are comfortable with.

## Acceptance Criteria
In order to complete the challenge, all acceptance criteria must be met:
* The table should be sortable by each column (note that the last column&mdash;the ESG Score and graph&mdash;are considered one column.)
* The table should be able to be paged through using the Previous and Next buttons.
* The ESG Score chart should be "heat mapped" where the base color is `rgb(0, 27, 66)`, but the opacity is the ESG score (on a scale of 0 to 100.)
* The ESG Score bar's width should be sized relative to the ESG score (on a scale of 0 to 100.)

## Submission
When you are ready to submit your solution, please follow these instructions:
* Commit all of your work to the feature branch, including all of your source code, configuration files, etc.
* Zip up the folder (minus the `node_modules` folder, please!) and submit it to us via e-mail. _(Note, the zip file should be smaller than a couple of megabytes. If you zip the folder up and it is very large, you likely forgot to remove the `node_modules` folder.)_
