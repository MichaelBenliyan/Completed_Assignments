# Codesmithers Unite!!

### Our goal in this challenge is to create a text based adventure game that allows users to test their javascript knowledge!

To do this we're going to really dig in depth on how node works and what's happening behind the scenes.

First things first lets take a look at the file `package.json`.
This is a file that defines all the things we need for this node **package** we're building. 
> Notice I used the word package! That means that we could build a package and release just like all the other packages we've been using!

Take a look at this file, its just a JSON object and most of it should be self explanatory, there are a couple parts that are really important
* scripts
* dependencies

# Scripts
> I'm sticking to the script, I'm putting that organic feeling back in the game. -Kendrick Lamar

Scripts are just little shortcuts that let us run certain things like `npm start` or `npm test` without having to type a really long command. Theres nothing magical about these words they're just the ones that node allows by default (other ones have to be prefaced with `run-script`). If you wanted you could define a script that starts with `npm run-script banana`! 

Right now the `test` script is pointing to a program in node modules called `mocha` and using it to run a file `test/gameSpec.js`. Mocha is testing framework well worth researching later in the course. Right now this script won't work though, we don't have a `mocha` file or even a `node_modules` folder! To create these, we need to install our **dependencies**

# Dependencies
>If I have seen further, it is by standing on the shoulders of giants. - Isaac Newton

Dependencies are just pieces of code that we need to survive! There is no need to reinvent the wheel every time, the best programmers use others work and improve upon it, incorporating tons of different packages and using them to do novel things! These are all **dependencies** or things that our code needs to run. 

**We don't have them installed by default however we have to install them.** `npm` install looks for a `package.json` by default and will install any dependencies in there, but what if we want to add a new package?

We can run `npm install package_name`. We can also run this with a `--save` flag. 

**Try installing the `jquery` package with the `--save` flag and take a look at your package.json....**

Do a little research and see what happens when you install a node package with a `-g` flag....

## Alright now we're ready to rock!
You'll need to use the native Node `readline` package to get cracking, and you'll want to do a little research on its methods [readline](https://nodejs.org/api/readline.html) .

Get started I've got some simple tests you can run with `npm test` but pay attention to the failing messages of the tests, I've got a certain gameflow I'm expecting, you can follow mine to get started but once you get the tests passing feel free to expand and build your own.

**HINT** take a look at javascripts, `eval` method.

## Electives
* Look into creating a server that runs your game so you can `telnet` in from another terminal. Make it so that I can play it too!
* Investigate outputting color in the terminal with node

### Steps

1. `npm install` to download all the dependencies
2. Open up the empty file `game.js` and start writing our code in there
3. **Write our output by using `terminal.write` rather than `console.log`**
4. Pass one test, open up the test file and change `xit` to `it` on the next one
