My solution of React Developer Test Assignment

## Run project 
git clone https://github.com/obabichev/flayla-test-obabichev.git
cd flayla-test-obabichev/
npm start

## What I did
- Retrieve new/reset old Token to avoid downloading the same data twice
- Created page with drop-down-selector of category and table of downloaded questions
- Special button to download more question until we download all of them
- Created page with detailed information of question
- Loaders for all async operations
- Error handling of all network requests
- "Page not fount" page with "Go Home" for wrong urls

## Dirty hacks
- Unfortunately opentdb provides questions without id..., I decided to add unique ids for them on the frontend side. 
It allows to compare them and navigate by id. 
But it is not possible to open detailed page without downloading list of questions. 
If user directly open page with detailed question by url, application will not be able to download question and user will have to return to page with questions table.  

## Used libraries

#### he 

opentdb offer to download data in different formats. I decided to use HTML codes and this library allows to decode received data

#### history

I use this library to get browser history object and work with it directly

#### lodash

It is useful library to work with collections cleaner

#### prop-types

This library is used to validate existing and type of props in components

#### react-router-dom

Router is used to create dynamic routing between pages

#### react-select

I decided that it will be too complicated for this task to try to make own drop-down-selector and found one of realization with good stats

#### redux-thunk

Small library to process async operations in redux environment

#### reselect

Simple library to prepare data from store for components in declarative way. Also caches results of selectors.

## Available Scripts

### `npm start`

### `npm run build`

