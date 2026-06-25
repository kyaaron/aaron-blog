---
title: AI Prompting Techniques for Success
date: 2026-06-25
description: Prompting techniques I've used to help return better responses
---

I've been using LLM tools and AI CLI tools for awhile now and have slowly but surely been improving how I prompt these agents and LLM tools. Token management has been a big focus recently in the AI world, with companies like [Uber infamously blowing through their annual AI budget](https://finance.yahoo.com/sectors/technology/articles/uber-burned-entire-2026-ai-180347400.html) in just four months, and [Meta and Amazon removing their leaderboards](https://www.cnet.com/tech/services-and-software/amazon-ai-leaderboard-tokenmaxxing/) for AI usage. In short, tokens are expensive. And it cost a lot of money for both inbound and outbound token usage.

As AI costs continue to rise, I think the value of a software engineer in the future will be on how efficent they can be with using AI tools, maximizing output while minimizing the tokens used to get the outcome they want. The outcome is the goal here. The better the outcome, the quicker we can get what we need and have better software. If I can get this outcome in an efficient way, I'm saving the company money. Money that could be spent (hopefully) on employee benefits and improving the culture.

So I've outlined how I've been working to improve my prompting and usage of AI tools, both for my own reference and for anyone else who is interested.

## #1 Learn the Fundamentals
Coding and learning software development is still important. Pay no attention to the LinkedIn shitposting from self-claimed "thought leaders" saying otherwise. Learning a language, knowing the framework you want to work in, knowing how the web works, knowing basics on computer networking and hardware...all of this is useful. I still use freeCodeCamp, Youtube, books, and articles to improve my coding game. And yes, Claude helps me learn as well. It is crucial I think to still understand how the code works under the hood. Vibe coders who try to one-shot an app can only ever get so far. Learning to code teaches the vocabulary and the mindset you need to prompt an LLM or agent better. And the better the prompt, the better the outcome. So if you're wondering if it's still worth learning to code, take heart. It is.

## #2 Do simple fixes yourself
You don't need AI for everything. Again, ignore the LinkedIn shitposting. You do not need AI for every little fix. When you use AI, make sure you understand what it's doing (going back to #1 above), and know your codebase. If you need to adjust the font size, update coloring, or change the reference of something in Javascript, you don't always need AI to do it for you. Just go in there yourself, make the change, and push the code. The more experience you get, the more you can quickly do on your own. This skill will be incredibly valuable. I've made a few changes to this blog on the UI front without needing AI to do it, mainly because I put time into learning Tailwind and CSS, so some of the UI updates come from head and hands instead of from Gemini or Claude.

## #3 Define how you want your output returned
In my experience using LLM tools especially, they are by default instructed to return a lot of information. This is probably a strategy. First, they want to give a great response to make you happy so you keep coming back. But also, the more output they give, the more tokens they use. And really, the verbose replies that LLM tools like Chat GPT and Claude use are fairly unnecessary. I asked ChatGPT how it would define "context" when working with AI tools, and it returned enough text to nearly fill up a whole Microsoft Word page. That's a bit much don't you think?

But you can define how you want your output returned. Instead of "Define 'context' when working with AI tools", you can instead say "Define 'context' when working with AI tools. Your answer should only be 2-3 sentences in length with a one sentence example at the end." This extra instruction drastically reduces your outcome length, reducing the tokens used, and makes it easier to read.

In coding terms, you can define how you want the LLM to solve a problem you are giving it. "Solve this using built-in JavaScript array methods" or "Return a solution without using third-party npm packages" can be a great way to reduce the back and forth between you and your agent.

## #4 Separate out your code from your prompt
The UI/UX for LLMs and agents is improving each month it seems. They have built-in formatting for inputting code. With Claude for example, I can use backticks (`) to input inline code, and I can use three backticks (```) to start a multi-line code block. Then with my mouse, I can click the space below it to continue with my prompt. This also works when asking about error codes - I can copy and paste an error code between backticks to differentiate it from my question inside my prompt.

## #5 Roleplay
One of my favorite things to do when using an agent or LLM is to start my prompt/conversation with "I am a software developer on a team with you, and you are my senior developer lead." This establishes roles to you and the agent and will adjust how your agent responds. In this particular example, the agent is more apt to explain vocabulary, reasoning, and general knowledge about the tool or language I'm using, without me having to follow up and ask for clarification.

Giving roles to your LLM or agent will affect how they respond to you, and I've found it to be very useful to save time. Fun fact: The first prompt I ever gave to an LLM was in early 2023 when I used ChatGPT for the first time, and I unknowingly did this. I told ChatGPT: "You are Yosimite Sam from the Looney Tunes. Teach me how to make homemade pancakes." I remember chuckling when the opening part of the prompt began with "Now listen up here you varmit!"

Combining this tactic with #2 above (defining the output method) will yield a much more powerful prompt, even if you don't do anything else.

## #6 Review your stats at the end
CLI tools usually give you a usage/efficiency report when you close out. I love this. What I do is copy/paste the report into an LLM tool and ask it how efficient I was today and ways I can improve my efficiency using that specific CLI tool. One big takeaway from doing this has been to combine the tactics mentioned above when I write my initial prompt. It will make for a longer prompt at the start, but ideally it prevents the back and forth and further thinking/processing the LLM or agent has to do. This is how you can save a lot of tokens.

## #7 Just keep doing it
Keep using the tools. Use Antigravity CLI to build a project from start to finish, then turn around and use Cursor's agent. Which one produces better code? Which one achieved your desired outcome quicker without the back and forth? Which one is faster at response? At the time of this writing, I've been unimpressed with Antigravity CLI and have moved to Cursor, since Cursor's agent has been faster and had better network connections. 

The more you use the tools though, the more you'll get better at prompting, efficient coding, and token saving. We don't want to tokenmaxx y'all. That will crush your wallet, or drain the company account. 

So there! These are seven techniques I've been using with AI to improve my prompting, return better outputs, and build quicker and more efficiently without trying to max the tokens I'm alloted on any of my AI plans (spoiler: I'm on free plans). 

## And Lastly...
If you made it this far in the blog, thank you for reading! I am Aaron, an experienced low-code and web developer from the United States and currently living in South Korea. I make cool stuff and help organizations solve problems using code and my knowledge of AI tooling. Feel free to connect with me on [LinkedIn](https://www.linkedin.com/in/aaronmccollum/) or follow me on [Bluesky](https://bsky.app/profile/aaronmccollum.bsky.social) — happy to connect for a coffee chat as well!
