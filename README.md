# Getting Started with CC Show

This is a demo app and was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). It is using React v18 and Typescript.

It uses [MSW](https://mswjs.io/) for mocking and testing purposes.

It demonstrates the use of [RTK Query](https://redux-toolkit.js.org/rtk-query/overview) with typescript and tests. 

It also has some form validation and a number of other features. 

I've also tried to be mindful of Kent C Dodds Testing Trophy approach [Write tests. Not too many. Mostly integration](https://kentcdodds.com/blog/write-tests)

I have discovered some limitations of CSS Modules with a dynamic active class so have reverted some of the CSS to regular CSS, there's probably a solution to this but I don't know it yet. Normally I would use SCSS for CSS but the create react app doesn't recommend this approach. 

I've put the images into the public folder, something I wouldn't normally do as it would badly affect performance. The reason they are there is because I don't know how to import dynamic images yet. I've mocked the data /src/mocks/countries-data.ts and the http requests /src/mocks/handlers.ts, this is a guess as to what the backend would return and in orde for it to be more realistic I would have a conversation with one of the backenders to get the correct error response codes and format of the data.

There is still a lot to do, breaking components into smaller components, removing duplication and a lot more tests to write. I am proud of some parts of the code whereas other parts could do with a litle TLC...

## Running the App

In the command prompt or terminal clone the app

#### `git clone https://github.com/cherry15/cc-show.git`

CD into the folder

#### `cd cc-show`

And install dependencies

#### `npm i`

You will also need to set up and initialise mock service worker [MSW](https://mswjs.io/)

## Available Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

#### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

