# Purpose

A simple, ecommerce React web app that demonstrates a customer rewards program.

-A retailer offers a rewards program to its customers, awarding points based on each recorded purchase.

-A customer receives 2 points for every dollar spent over $100 in each transaction, plus 1 point for every dollar spent over $50 in each transaction
(e.g. a $120 purchase = 2x$20 + 1x$50 = 90 points).

## Getting Started

Install dependcies using 'npm i' in the root directory.

Start the App with 'npm start'.

## Guide to the App

There is no backend for this app. It is all implemented on the front-end with React JS.
The data sets are located in the '/src/data' folder.

purchasesData.js contains dummy records of every transaction during a three-month period.
The format of the transaction record data is:
[
{
id: 1,
user: 1,
amount: 20.00,
month: 1,
},
{
id: 2,
user: 2,
amount: 12.50,
month: 1,
},
]

We will filter this record and display the total points of each month(3 month period) for the current user.
The user is able to purchase items, checkout and be able to check the the new points total.

The user is assigned an integer and represents a user. For this purpose if this demo app, there are only 2 users:
{
1: "John",
2: "Jane",
}

The amount is represented as a floating number. Because Javascript has issues with adding floating numbers(it uses approximation),
we will convert the sum with the 'fixed()' function to a string, then convert it back to a floating type.

The month is represented as an intger value. 'January' is represnted by 1.
{
1: "January",
2: "February",
3: "March",
4: "April",
5: "May",
6: "June",
7: "July",
8: "August",
9: "September",
10: "October",
11: "November",
12: "December",
};
We will use this since we are using an integer value to represent month but we need to show the user what month it is.

The heart of this app is in the 'Points' component.
It contains functions which takes the transaction record data set and filters it to points total per month per user for the last 3 months.

function getPoints();
function calculatePoints();
