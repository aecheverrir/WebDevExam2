# Exam 2 WebDev
> WebApp that allows you to visualize bus schedules


## Bugs de John

- change `const maxDate = new Date(minDate.getTime() + 22*60*60*1000); // minDate + 24 hours` to `const maxDate = new Date(minDate.getTime() + 24*60*60*1000); // minDate + 24 hours` 22 -> 24 hours

- change `const minDate = d3.min(buses[1], d => d.date);` to `const minDate = d3.min(buses[1], d => d.date);` buses[1] -> buses[0]

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Visit](#visit)
- [License](#license)

---

## Prerequisites

- NodeJS
- NPM
- Meteor

## Installation

- clone the repo on your console, instructions [below](#clone)
- use `cd WebDevExam2` to enter the main folder
- use `npm install` to install npm dependencies
- use `meteor` to run the server locally at port you defined or otherwise it's port 3000 (mongo will run in the next port, 3001 in this case)

## Clone

- Clone this repo to your local machine using git typing this in your cosole: `git clone https://github.com/aecheverrir/WebDevExam2.git`

---


## Visit

Currently deployed with heroku: <a href="http://webdevexam2.herokuapp.com/" target="_blank">**WebDevExam2**</a>

---

## License

[![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](http://badges.mit-license.org)

- **[MIT license](http://opensource.org/licenses/mit-license.php)**
- Copyright 2018 © 
