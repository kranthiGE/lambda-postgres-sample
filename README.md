# Sample Lambda function to fetch items from DynamoDB
Author: Kranthi Kiran  
Created On: 29-Mar-2020  
 
This is a sample lambda function code to fetch items from dynamodb based on 2 input parameters.
a limit to specify the number of items to be pulled and nextKey value to offer pagination
***
## Getting Setup

### Installing project dependencies

This project uses NPM to manage software dependencies. NPM Relies on the package.json file located in the root of this repository. After cloning, open your terminal and run:
```bash
npm install
xcode-select --install ## ran this command to fix installation issues
```
>_tip_: **npm i** is shorthand for **npm install**
```bash
npm i -g typescript
npm i -g ts-node
```