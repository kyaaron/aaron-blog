---
title: Creating my first Discord AI bot
date: 2026-09-01
description: Using Discord.py and Llama 3.2 to create a Discord bot that talks to you
---

I've been in the freeCodeCamp discord community for awhile (highly recommend by the way). The community manager of the Discord community, Naomi, has done a masterful job creating Discord bots that help with community maintenance and interaction. For awhile I have wondered how to do that, and I mentally placed it on my coding to-do list. I finally got the kick I needed when I saw a recent tutorial post on freeCodeCamp's blog on how to create these bots. While Naomi (I think) uses DiscordJS, the tutorial uses Discord.py, so I went with that.

Tutorial link: https://www.freecodecamp.org/news/how-to-build-a-basic-discord-bot-with-python/

I initially followed the tutorial almost verbatim. I have no interest in actually making a full StoryBot, but it was great to try it out and get it working. I will say though, the tutorial does leave a few key things out which I'm sure the author figured the user had already done or would do on their own.

One was how to actually add your Discord bot to your community. In the Discord developers dashboard, click into your application for the bot and then click OAuth2 on the left side. From there, you can use the permission checkboxes to generate a OAuth URL. Once you put that in your browser, it will connect with your Discord community (app or web interface, depending if the app is installed) and you will go through the final flow to add the bot to your community. It's almost like sending someone an invite link, except the link is generated in OAuth2 and you paste it into your browser to get started. Once I figured that part out, it wasn't hard.

The tutorial at the end uses Hugging Face to link to an inference provider. I tried that out and didn't mind it, but I was already familiar with Llama 3.2 and had it installed on my laptop, so I decided to use Llama 3.2 instead. One thing to note about Llama 3.2 that I figured out - it's only good with data through December 2023. I was testing it later with some queries about movies coming out this summer, and I was confused with the answers. But for basic queries, it's pretty good.

So I used the tutorial template and went to create my own Discord application and bot. I called it HAL 9000 after the 2001 A Space Odyssey antagonist. I created my bot, wrote the code in Discord.py with Claude, and connected it to my Discord community. After a little back and forth to fix some bugs, it worked! While Claude assisted with troubleshooting, I made sure to manually type in the code, as I'm still getting used to the Discord.py syntax. With future updates, I'll be looking to use Cursor to help add features.

One recommendation I have, if you want to try this yourself, is to create a #bot-test channel in your community. This prevents your main channel from being spammed with a lot of tests. If your friends or users start using it, great! But maybe make a side channel you can delete later to run all the tests.

At the time of this writing, what I haven't done is connect with a cloud server to keep my bot on 24/7. Right now, I run it off my laptop. It's not perfect, but it does work for my friends. I find that running it locally does not give you great runtime. It disconnects and reconnects often, and the bot does not always respond when tagged in a post like it should. Cloud providers mostly cost money, but I believe Render has a free option which was recommended for me to try.

All in all, I loved doing this. I'm getting into building more projects with some AI capabilities and getting comfortable with Python and using Ollama. This is a great beginner project to get started with that.

## And Lastly...
If you made it this far in the blog, thank you for reading! I am Aaron, an experienced low-code and web developer from the United States and currently living in South Korea. I make cool stuff and help organizations solve problems using code and my knowledge of AI tooling. Feel free to connect with me on [LinkedIn](https://www.linkedin.com/in/aaronmccollum/) or follow me on [Bluesky](https://bsky.app/profile/aaronmccollum.bsky.social) — happy to connect for a coffee chat as well!
