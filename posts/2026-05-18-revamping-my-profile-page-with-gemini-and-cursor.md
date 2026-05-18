---
title: Revamping my profile page with Gemini and Cursor
date: 2026-05-18
description: I removed thousands of lines of code to simplify my profile page
---

My profile page was created last fall when I started working through 100Devs, and for the time it worked. It was an HTML5 template that allowed me, in just a few hours, to download a template, edit information, and create a nice profile page. This worked great in 2022 when the 100devs videos were released, however now that AI tools exist and can quickly design and code, I eventually decided a change needed to be made.

## The Why
There were two things going on with my profile page using an HTML template. The first thing was it had about 2,000 lines of CSS and SASS code. That is a lot of lines, and most of it was very advanced. I didn't understand it, and it bothered me. Of course, it worked - the site looked great! But 2,000 lines of code I don't understand could lead to trouble down the road. After learning TailwindCSS, I knew I could remake this without any CSS customization.

The second reason was it was hard to maintain. When I added a new project, I had to search through a lot of code to find the links and images. The images specifically were a challenge, because I had to get the height and width pixels just right to fit the template's styling. If not, the image would be stretched or cut off. I was building new projects, but I never wanted to deal with updating my profile site which completely defeats the purpose of it!

## Making the updates
I ended up using Chat GPT to design a basic profile page. I downloaded the image once I got a result I liked, and added it to my directory. From there, I opened Cursor and launched Gemini CLI. I directed Gemini to intake the image file in my images folder, and use only vanilla TailwindCSS and HTML (from directions in my gemini.MD file) to recreate something close to it. Gemini was able to get it rougly 95% close, which looked great to me.

Because I had already used Netlify on my respository, I was able to re-add the necessary HTML attributes to restart my Contact Me form on the home page.

This time, I also decided to add an About me page! To get more experience with different AI tools, I decided to finally use the free Cursor agent that comes with the IDE. I had the agent review my index.html page and create an about.html page in that same style using just HTML and Tailwind. Cursor took a bit longer, and I saw it write code, delete it, and rewrite it slightly different a few times until it was happy. 

One thing I noticed about Cursor was it wrote slightly better code I think than Gemini. I saw aria attributes included in my Cursor code for example. But it did "think" for longer times than Gemini did. Both did the job pretty well though.

I was able to add some things myself that I felt didn't warrant using AI tokens for: updating navigation hyperlinks, adding images and linking to them, adding alt text, and linking my contact form to Netlify. This is how I'm enjoying AI development - using it for the harder or larger stuff, while I use my knowledge of the codebase to make smaller changes that don't require AI assistant. I think this is how the future will be. *We'll still need people making smaller changes to save AI tokens and money.* The more I can do myself quickly, the more AI tokens, resources, and money I can save.

## The result
Now I have a great looking profile page, built using about 400 lines of code total between two HTML pages, and I can easily update it or add more projects as I build them! You can check it out here: https://aaronmccollum.netlify.app/

## And lastly...
If you made it this far in the blog, thank you for reading! I am Aaron, an experienced low-code and web developer from the United States and currently living in South Korea. I make cool stuff and help organizations solve problems using code and my knowledge of AI tooling. Feel free to connect with me on [LinkedIn](https://www.linkedin.com/in/aaronmccollum/) or follow me on [Bluesky](https://bsky.app/profile/aaronmccollum.bsky.social) — happy to connect for a coffee chat as well!
