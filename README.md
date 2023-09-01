# CMPE 255 - Assignment 1
## Using ChatGPT to Perform Data Science
### Medium Article
https://medium.com/@sjkchang/using-chatgpt-to-preform-data-mining-93aca6f8c192
### Takeaways for Data Science Use
I found ChatGPT to be very impressive for its use in data science. It manages to generate what seem to be robust reports, that seem to be mostly error free. It is of course possible that errors are being made that I cannot spot due to my limited knowledge in this space

## Using GPT-Engineer and Github Copilot to Write Code
### GPT-Engineer Takeaways
I found that in its current state GPT-Engineer is not very capable. When it was described, I was expecting it to be able to generate a project with a somewhat complex file structure, along with its core classes. However, this is not the case. GPT-Engineer always generated its code into a single folder, and all the  non-trivial projects I tried to have it generate, could not run. I tried to have it generate a simple CRUD web-application, audio proccesing tools, image processing tools, and content aggregators. It failed to create runnable projects for any of these, and trying to get what it generated to run was a headache of dealing with bad dependancies, bugs and errors. I do not believe that GPT-Engineer is useful in its current state as it requires more effort to fix the bugs and dependancy errors it creates than if I were to manually scaffold a project from scratch. 

### Copilot takeaways
I found that Copilot was an excellent productivity tool. Because Copilot can really only do so much at a time, it is only really useful as a very good auto-complete, but I find that is a very useful use case. Additionally, because it can only make suggestions for a small amount of the codebase at once, it becomes much easier to track down any errors it may have made. I would rather create a project from scratch, using copilot to write the tedious/trivial bits of code than use GPT-Engineer

### Conways Game Of Life
Because of the limitations of GPT-Engineer, I settled on a rather trivial project, an in browser implementation of Conway's Game of Life. 

If you are unfamiliar this explains the rules: https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life
#### Video Demo
[![Watch the video](https://github.com/sjkchang/CMPE-255-assignment-1/blob/master/mq3.jpg)](https://youtu.be/nfPTJaWg1gw)