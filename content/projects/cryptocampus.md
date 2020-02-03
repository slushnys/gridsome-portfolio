---
title: A trading academy Crypto Campus
date: 2017-01-27T18:55:10.079Z
description: A membership integration through WordPress and WooCommerce in order to grand access for users to a priviledged discord server after the payment.
# description: This company taught people about cryptocurrency and trading in general by providing study materials consisting of video lectures, individual and group calls as well as a community on discord.
featuredImage: "/img/cryptocampus-job.png"
tags: [PHP, JavaScript, Discord API, Slack API, WordPress, WooCommerce]
---

## Introduction

While this project was very spontaneous and short, it was indeed a fun experience to work with and learn more about WordPress internals, WooCommerce memberships, Discord and slack API's.

The requirements of the project were to integrate and automate membership purchase through the website with a channel for communications such as Slack or Discord.

## Technology stack

The whole project was built in WordPress, so that was a prerequisite. I had to integrate hooks for events that happened - e.g. purchase of a membership so that the user would automatically get invited to the discord channel with certain priviledges the moment that the payment has been verified.

### Design decisions

After in-depth research I've chosen to take on discord due to a more accesable and flexible API that I could use to my advantage in order to grant discord server access to the members that have paid and revoke it to ones that haven't or the membership has expired.
