# Self-Care Center 

### Abstract:
[//]: <> (Briefly describe what you built and its features. What problem is the app solving? How does this application solve that problem?)
The goal of this project was to create a website from scratch (we were given a directory and HTML skeleton to start) that replicates 'client' images of how the site should look and make it match as close as possible. The website is called Self Care Center and is a place users can go to receive an affirmation or mantra message. We also needed to add functionality so that the user can select which type of message to see, and then one optional extension. I chose the extension of User Never Sees a Repeated Message. As each message is displayed it is spliced from it's original array and moves into a 'used' version of that array. When all messages of that type have been displayed, the message box notifies the user, the 'used' array is cleared, all messages of that type move back into the original array and the process repeats. I also added minimal size scaling functionality (scaling for extremely narrow screens still needs work) and error handling if the user does not select a message type.

### Installation Instructions:
[//]: <> (What steps does a person have to take to get your app cloned down and running?)
1. Fork and clone this repo.
2. Type `cd self-care-center` to move into the root directory.
3. Run `open index.html` to view page in your browser
4. You should see a page titled 'Self Care Center' with options to select either an affirmation or a mantra to be shown.
5. Clicking 'receive message' before selecting a type should prompt you to select a type.
6. Once you have seen all the mantras or affirmations, the text box should inform you and tell you that it will begin showing you old messages again.
    
### Preview of App:
[//]: <> (Provide ONE gif or screenshot of your application - choose the "coolest" piece of functionality to show off.)
<img width="1431" alt="Screenshot 2022-12-18 at 3 46 46 PM" src="https://user-images.githubusercontent.com/24902544/208321982-a331929e-510e-4a8a-b11a-046a6c7dcbea.png">

### Context:
[//]: <> (Give some context for the project here. How long did you have to work on it? How far into the Turing program are you?)
We were given a little under a week to complete this project and it was assigned during week 3 of Mod 1. In total, I spent 15 - 20 hours working on this project, most of which was fine-tuning the CSS to match.

### Contributors:
[//]: <> (Who worked on this application? Link to their GitHubs.)
This was a solo project. You can see my other repos here: https://github.com/qrispi?tab=repositories

### Learning Goals:
[//]: <> (What were the learning goals of this project? What tech did you work with?)
The learning goals of this project were:
  - Gain experience building an application that utilizes HTML, CSS and JavaScript
  - Write HTML and CSS to match a provided comp
  - Understand how to listen to and respond to user events
  - Individualize your programming skill set

I worked with VS Code, Chrome dev tools and W3 schools tutorials to complete this project.

### Wins + Challenges:
[//]: <> (What are 2-3 wins you have from this project? What were some challenges you faced - and how did you get over them?)
The most challenging aspect of this project was getting the CSS to match the client spec for the project. I tried using a chrome extension ruler to measure out all elements of my project to compare but couldn't get it to work on my rendered page. So I ending up just making the screenshot of the client screen the same size as my rendered project and comparing them side by side until everything matched. A few big wins in this regard were figuring out to use multiple color stops in the gradient to make it match better, realizing I could change the size of the radio inputs themself, and using RGBa color format to change the opacity of text. Another big win was spending time refactoring CSS and JS. Changing my CSS class names to be more descriptive made the whole file much more readable and refactoring my JS functions to be more dynamic and reusable while also limiting them to one process each also made for a much cleaner and readable JS file.
