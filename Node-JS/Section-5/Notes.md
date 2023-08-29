------- What is Express JS ------------
- Server logic is complex
- Developers only want to focus on business logic code
- we don't want to deal with the overhead of listening for data, parsing it out, etc
- Could technically stick to vanilla js. There's also Adonis.js laravel inspired. Sails.js

------ Installing Express JS ----------
- The app const, which is the result of calling the express function, results in a function that can be passed to http package aka the requesthandler


------ Express JS Adding Middleware ----------
- express automatically sets the content-type to text-html, can still setHeader but can also rely on default 

------ Express JS Behind the scenes ----------

------ Parsing Incoming Request ----------
- use body-parser package to parse incoming data in one line.
- 

------ Limiting Middleware Execution to POST Requests ----------
- app.get & app.post to only handle get and post request 

------ Using Express Router ----------
- app.get and post look for exact route matches so order doesn't matter unlike when you do use.

------ Adding 404 ----------
- response has method status to give status. Convienvce Method

------ Serving Html ----------
- path core library
- add views to view folder to serve simple html for sample routes