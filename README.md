# Music Box

## About project

Music Box is a Web App for music collectors who buy music in the form of analog records. Music Box allow people track their music collection, upload albums to the database and search for new music.

## Live Demo

live demo: https://eprikhodko.github.io/music-box/

## Video Overview

https://user-images.githubusercontent.com/74785156/147227788-fe7adc6b-1c19-45b1-9cb8-13538330e512.mp4

## Contents

- [About Project](#about-project)
- [Live Demo](#live-demo)
- [Video Overview](#video-overview)
- [General Info](#general-info)
- [Technologies](#technologies)
- [Features](#features)
- [How I worked on this project](#how-I-worked-on-this-project)
- [To-Do](#to-do)

## General Info

I have built this project with the aim to dive deep into React, React Hooks, JavaScript ES6+ syntax, Routing, Styled Components, and make a "real-world", fullstack application with authentication and realtime database provided by Firebase.
This application uses React for a frontend and Firebase services for a backend, which are:

- Firebase authentication system
- Firestore database
- Firebase Storage for file uploads

While working on this project I learned a lot of modern core web developing concepts which are:

- Developing user-facing features using React.js and React Hooks
- Thorough understanding of React.js and its principles
- Building reusable components for future use
- Translating designs and wireframes into code
- Fetching data from server with async/await
- Authenticating and creating user profiles in database
- Uploading files to server from frontend
- Signing up and log in users via forms
- Familiarity with code versioning tool such as Git
- And much more

## Technologies

Project created with:

- React 17.0.2
- Firebase 9.2.0
- React Router 5.3.0
- Styled Components 5.3.1

## Features

Features for unauthenticated users:

- view recently added albums
- view album details
- view music catalog
- search albums through database

for authenticated users only:

- add/remove albums to/from collection and wishlist
- upload new albums to the database
- view all albums uploaded by the current user

## How I worked on this project

- I received designs of the website which were made in Figma:

![screenshot of figma designs](assets/figma-designs.png)

- Next I created project in a Click-Up kanban board and broke down designs into smaller tasks

![screenshot of click-up board](assets/click-up-tasks.png)

- Then I began to work on tasks that I created for myself
- During the rest of the work on this project I continued to break big features into smaller tasks and then implemented them one by one
- I also used feature branches and Pull Requests to keep my work well structured and organized: [Here is a link to example PR](https://github.com/eprikhodko/music-box/pull/18)

## To-Do

- make UI interactions more smooth
- add Russian language support
