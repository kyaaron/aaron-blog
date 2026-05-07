---
title: Creating my first API
date: 2026-05-07
description: I created my first web API using Express and Render
---

## 100Devs course progress
I have made it up to class 38 in 100Devs. Up to this point, we have covered HTML, CSS, JavaScript, Web APIs, async JavaScript, and Github. The last few classes have covered NodeJS and now Express, with small projects to set up our own Node server and then set up our own small Express server. Class 38 took it one more step by creating a small API for rapper names and hosting it on Heroku. This lesson was from 2022, and unfortunately Heroku no longer offers a free tier to host an API.

But other options exist! Using the Express template from class, I first had to think of an API that would be fun to build. I settled on an API that returns information on all the Cleveland Browns starting quarterbacks since 1999. There are (sadly) way too many of them, which makes for a solid data set to use. 

In my server.js file, where my Express server code is written, I added an object and included the first three starting quarterbacks to test. Then I included an `app.get()` for an index.html page (that I haven't built out yet but will get around to eventually), and I added another `app.get()` to get the API information. If the API query matches an object in my quarterbacks parent object, it responds with a JSON file: `res.json(quarterbacks[quarterback])`.

That was the easy part. Next was figuring out how to test it locally. Since it was only running on my local machine, using the web version of Postman wasn't going to work. Postman does come with a desktop agent that allows you to use Postman to test local APIs. So I downloaded that onto my computer and started it up. My API worked!

## How to host it?
Then I had to figure out how I would host it on the web and make it public for anyone to use. Claude recommended a list of potential services I could use for free. The first one I checked out was Amazon Lambda. However Lambda was going to require me to do several tasks to get it set up and ensure it was free. But Lambda would also connect to a Gateway API that would eventually start charging me. There were ways around it, but I felt like I'd always be looking over my shoulder in case the API for some reason got super popular. I didn't want to be on the hook for an unexpected bill!

So Claude recommended a few other options: Cloudflare Workers, Vercel, Netlify, Render, and Google Cloud all came back as options. I checked out Cloudflare next, as it is a popular company and the backbone for most of the internet. I created a Cloudflare account and started doing some research on using it to host my API. And that's where I ran into another issue: Cloudflare does not play well with Node and Express APIs. It wouldn't be able to understand my `app.listen()` functions. I decided to move on to another option.

I went to Render next, and things quickly improved. I created a Render account, then made a new web service project, and connected my Github repo to the Web Service. Then I deployed it. It was that easy! (And Render didn't ask me to write this about them, they literally have no idea I exist). Once I got my API deployed and received the URL to use, I went back to Postman and tested it after closing my desktop agent. The new URL worked! My API was officially published.

I don't know if I'm going to keep this API active for a long time. This was more of an expiriment to see if I could set something up. I'll most likely find a different set of data to make a more serious API and use Render to deploy that instead. But this was a fun first project and has been a great learning project for Express, web APIs, and different hosting platforms. 

## And lastly...
If you made it this far in the blog, thank you for reading! I am Aaron, an experienced low-code and web developer from the United States and currently living in South Korea. I make cool stuff and help organizations solve problems using code and my knowledge of AI tooling. Feel free to connect with me on [LinkedIn](https://www.linkedin.com/in/aaronmccollum/) or follow me on [Bluesky](https://bsky.app/profile/aaronmccollum.bsky.social) — happy to connect for a coffee chat as well!
