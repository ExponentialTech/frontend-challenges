## How to run
npm install
-Adds all the node modules.

npm run dev
-Will create a local dev environment for server code. 
-Will compile and open front-end code in a local browser for testing.

## Introduction

React Material Table with Percent Score Bar Graph

Initial framework is from https://github.com/crsandeep/simple-react-full-stack which was in turn inspired by https://github.com/facebook/create-react-app. This framework gives a bit more flexibility with webpack settings.

This table application uses a React version of the Material Table plugin from Angular (https://github.com/mbrn/material-table).

Material Table gives a clean table structure with pagination and sortable headers. It has enough flexibility to write your own Components as well and plug them into your table. Using custom components, Material Table options, and SCSS the table design looks close to the table.sketch design (and has potential to keep getting closer!)

## Quick Start

Will need latest LTS of node / npm to build and run this project.

# Install dependencies (while in project folder)
npm install

# Start dev server
npm run dev

I think the dev server should be enough for this project. But of course webpack can get this built for production in no time as well!

# Build for production
npm run build

# Start production server
npm start

## File Structure and Quick Walkthrough

The main files live in the /src directory. The two directories here are the client side files and server side files.

The server side code is all contained within server/index.js. This is just a simple api to read and send revenue.json on a get request. A test can be run to make sure the api endpoint is getting a 200 response (npm run test). This uses jest to test.

The starting point for the client side code is client/index.js. Here we use react dom to initialize our first component which reders to the #root id found in the static public/index.html.

The App.js file is where the fetch http request is made to our Node server's api endpoint labeled 'api/getCompanyData'.

App.js then renders a new react component from Table.js. This component is also where the Material Table component is used and options are set.

Within the Material Table props, two more custom components are used, these are DataBar and Paginate.

DataBar uses the ESG score to render a simple bar chart. Using HSL color values, it passes the percentage difference to HSL's third parameter. This allows dynamic shading of the charts to occur.

Paginate extends Material Table's existing Pagination component's props to render the custom html similar to the sketch design. 

The secondary headers for column pairs are rendered in app.scss using :before pseudo. Would like to make this more dynamic with a new component in future revisions. 

Majority of Node server settings can be found within the webpack.config.js file. And nodemon is a nice utility for watching changes in server side code while using the dev environment.
