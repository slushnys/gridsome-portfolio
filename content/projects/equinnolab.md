---
title: Equinnolab - Innovation centre for equestrian sports
date: 2020-01-28T18:55:10.079Z
description: The company is among the leading companies in growth thats expanding rapidly and has many awards. While it was fun to work with all the talented people, there were also quite some technical challenges as well.
featuredImage: /img/equinnolab-job.png
tags:
  [
    Computer Vision,
    OpenCV,
    "Python",
    "Django",
    "Flask",
    "JavaScript",
    "Node.js",
    "Vue.js",
    "PostgreSQL",
    "Kubernetes",
    Vuetify,
    GCP,
    WebAssembly,
    Emscripten,
  ]
---

## Introduction

Before I came to the company I was told that some engineers have already had started and implemented user interface with some functionality for the web, however when I got there and started analyzing what has been done, I haven't found much of anything concerning web implementation. Therefore I had a fresh slade and could use a framework of my choice.

After talks and discussions with the owner of the company we went to design the architecture for initial product on how things should work, which parts should be connected and communication between them.

## Technology stack

Product was mainly built using Vue.js (JavaScript) for the frontend and Django (Python) with Express including socket.io (Node.js) for the backend.

In order to be able to scale the application to many upcominmg users I've decided to use Kubernetes for fast deployments and horizontal scaling when needed.

### Frontend

Frontend was a lot of fun to work with as I'm a highly visual person, but the highlight of it all was TypeScript. I really pushed my limits to learn and integrate TypeScript into the platform in order to use the benefits of typing for javascript. This have helped me to prevent bugs and find the bugs that have been hidden within the system because I started the project with ES2015 implementation rather than beginning with TypeScript.

### Backend

Backend was yet another topic worth discussing but I'll keep it short. To start the initial version of prototype, I've kept it simple using Djano framework which I easily expanded upon and defined various external API that could be reached only when authenticated.

On top of that, there was a need for video processing functionality to receive frames of video into the frontend which was achieved by using connecting the two with websockets.

### Challenges

It was a challenge to learn OpenCV - a library for computer vision written in C++. As it was a requirement to analyze videos in order to extract data from them, I decided to port the library to web using WebAssembly with the help of Emscripten.

### Microservice approach

Rather than having a big monolith application I went to a microservice approach where I would split certain functionality to keep it independat. Like that the workflow and progress was more noticeable, issues were easier to track and implement, the code was clean and organized as well.
