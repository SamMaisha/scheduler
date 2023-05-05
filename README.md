# Interview Scheduler

## Overview

Welcome to Interview Scheduler, a dynamic single-page application built using React, that allows users to book technical interviews between students and mentors!

Interview Scheduler allows the user to manage interviews, book/edit/cancel appointments. We combine a concise API with a WebSocket server to build a real-time experience

Follow the instructions below to get started!

## Setup

Install dependencies with `npm install`.

## Running Webpack Development Server

```sh
npm start
```

## Connect to Scheduler-API

Fork and clone the [scheduler-api](https://github.com/lighthouse-labs/scheduler-api) into a new directory

Follow the README.md instructions. This will involve a few steps, including:

- installing dependencies
- creating the database
- creating a .env.development file in the root directory
- seeding the database
- running the server

Once you have set up connection to the API, the api is served at `http://localhost:8001` and the interview scheduler is served at `http://localhost:8000`

!["Scheduler Overview"](https://github.com/SamMaisha/scheduler/blob/master/docs/interview-scheduler-overview.png?raw=true)

!["Appointment Create"](https://github.com/SamMaisha/scheduler/blob/master/docs/appointment-create.png?raw=true)

!["Appointment edit form"](https://github.com/SamMaisha/scheduler/blob/master/docs/interview-form-edit.png?raw=true)
