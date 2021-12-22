# Music Box

## About project

Music Box is a Web App for music collectors who buy music in the form of analog records. Music Box allow people track their music collection, upload albums to the database and search for new music. 

https://user-images.githubusercontent.com/74785156/147135584-9eaf8d5a-2848-4b2e-a9d7-346d74b5251b.mp4

## Contents

- [General Info](#general-info)
- [Live Demo](#live-demo)
- [Technologies](#technologies)
- [Features](#features)
- [To-Do](#to-do)

## General Info

This project is a database of information about music artists and albums, a music library. I have built it with the aim to dive deep into React and make a "real-world" application with authentication and realtime database provided by Firebase.
This application uses Firebase authentication system, Firestore for database and Firebase Storage for image uploads.

## Live Demo

live demo: https://eprikhodko.github.io/music-box/

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

- add/remove albums to/from collection
- upload new albums to the database
- view all albums uploaded by the current user

## How I worked on this project

- I received designs of the website which were made in Figma:

 ![screenshot of figma designs](assets/figma-designs.png)
 
- Next I created project in a Click-Up kanban board and broke down designs into smaller tasks: 

![screenshot of click-up board](assets/click-up-tasks.png)

- During the rest of the work on this project I continued to break big features into the smaller tasks and then implemented them one by one.
- I also used feature branches and Pull Requests: [Link to example PR](https://github.com/eprikhodko/music-box/pull/18)

## To-Do

- add Russian language support
