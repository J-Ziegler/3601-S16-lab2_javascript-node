#Lab Tasks

For lab tasks from here on out, questions that require exploration and responding to on this markdown page will be in bolded text. You should respond to them directly within this markdown file. Markdown is effectively a plaintext, lighweight markup language that is designed to be converted into HTML; more simply, it's some text and symbols you can put into a document that will turn into pretty HTML.
Tasks that specify work to do without a written response will be bulleted.
If you're ever confused about what you need to do for a given task, ask.

## Part #1: exploring the node.js project
Study the project you have cloned. Run it according to the instrucitons in the README, including running the tests. Answer the following questions by editing this file.  This will give you a chance to play with markdown.

> Protip: Using Google to gain additional knowledge or support your conjectures about how something works is great! It's important that you think about everything and come to an understanding, though, so don't use Google as a scapegoat to get the questions done quickly or you will regret it!

#####What is the purpose of app.js? Explain what happens when a user is trying to access a page "kittens", when a user is trying to access the page "petForm", and when the user submits a form on "petForm". Explain what a "route" is.

> Purpose of app.js: Acts as an action-listener to control the web page by managing client-side requests and responses.

> Kittens rather than sending a new web page, it is sending text saying that the webpage is under construction.

> petForm sends the user to a new page that displays a form.

> When submitting to petForm, it takes what you have submitted and displays the length of the string.

> A route is the process for taking an incoming request, and delivering it to whatever function, page, etc. that it needs to go.

#####What is the contents of the "public" folder? What is each of the html files there and how are they referenced in app.js?

> The public folder contains everything that the client would use.

#####In your project change the message that appears when the user is trying to access the page "kittens". Describe what you did and how it worked.

> We edited app.js under the line app.get(/kittens....

#####Also change the message that a user sees when they are trying to find a page that doesn't exist.

> Added a 404.html page that redirects to the main page

#####Describe what happens when you submit a form on petForm page. What are the form parameters in petForm? What is the method for the form? Where is the form submission handled in the project? How are parameters extracted? How is the resulting message generated? How is this different from accessing the page petForm the first time (to see the form)?

> petForm sends the user to a new page that displays a form.

> When submitting to petForm, it takes what you have submitted and displays the length of the string.

> The form parameters are new pet and submit

> The method is post, http post transaction

> /petform submission is handled in app.js

> The app.js function references parameters by name. Specifically, newPet is referenced by req.body.newPet

> The function generates a String based on the input, by calling out to a stringLength() function.

> The first time you view the page, you view the interactive HTML page displaying the form. When you press submit, the server sends you the resultant String instead.

#####Where is client-side Javascript defined? Name file(s) in which it is used.

> In public/javascript. The sendAlert() function is used in index.html, and the other two functions are used in clientJavascript.spec.js

#####Where is server-side Javascript helper file defined? Where can it be used? Add a function to it and experiment with where you can call this function.

> In the project directory.

#####What is the purpose of package.json file? What's in it, and what does it mean?

> Lists all the behind-the-scenes requirements. Test instructions, package requirements, etc.

#####What's in .gitgnore file? What's the purpose of it?

> Tells git to ignore files that aren't relevant. Often these include local installations, software junk, and build files.

## Part #2: exploring testing

#####Find the testing file, describe where it is located and what it is testing. Run karma (the testing engine) as specified in the Readme and describe results. Do not edit any files at this time.

> Found the testing file. It is ./public/javascript/clientJavascript.spec.js, and tests the functionality of the functions in clientJavascript.js.

#####After having set up Travis CI with your forked project, play around the page for your project (build history, settings, branches, etc) and describe at least 3 features you think would be useful when troubleshooting a broken project.

> You can see which commits are passing and failing at any time. It also mentions who sent the commits, so you can witch hunt. <Pitchforks!>

> You can set it to build pull requests, which would stop you from breaking things in the first place.

> You can view the success/failure of any of your branches, to see where problems may have come from.

> BONUS: Things it does wrong? Sends me emails every 5 seconds about every single build status, and won't let me disable the emails. My phone has been buzzing all lab. (To be fair I fixed it, but it's still annoying I can't do it at the account level. I could add 500 people to my list and it'd bother them too...)

#####What was the build status of your project right after you got everything set up? Use Travis to find any problems, and describe what failed, if anything. (Which files, what lines, why did failure occur, etc.)

> The project was failing 1 test. Specifically, it said "Expected 'kittens' to be 'Not Kittens!' This test is located in ./public/javascript/clientJavascript.spec.js. The test failed because it was checking for exact matching, and the Strings did not match.

#####Fix any problems described in the previous question. Describe how you fixed them. Push your fix to GitHub and post a link to the passing build (from build history) here.

> We fixed it by asserting that the strings would NOT match. You could make it pass in various ways, but this one is ours.
> https://github.com/J-Ziegler/3601-S16-lab2_javascript-node/commit/c46bb343bf33d5567eaf99db08ada2fc0986ec95

- Study jasmine testing syntax. Think of a Javascript function, describe its behavior by writing tests for it (this is test-driven development, or TDD). Add the function, run the tests. (Actually do this. Don't forget to commit your changes!)

## Part #3: adding a GPA calculator

- Add a page to the project (don't forget to add it to git) that has a form for letter grades and credits for three classes.

- In TDD fashion, add tests for functions needed to compute the GPA and then implement the functions themselves. Note, however, that karma doesn't work with exports, so after you have tested the functions, you would need to create copies of them that you are exporting. This is awkward and will be fixed in subsequent node setups. Also make sure to add the file that you are testing to karma.conf.js.

> We wrote our stuff into the clientJavascript testing file for convenience.

- Add a route to app.js to display the GPA on the resulting page.

- Add the basic html to the send so that the GPA is displayed as an html page. Don't add too much: later we will be using various libraries to take care of generating html.

- As you are working, don't forget to change drivers in pair-programming, practice TDD, write comments, and make frequent commits. As before, at the end just push all the changes to github.
