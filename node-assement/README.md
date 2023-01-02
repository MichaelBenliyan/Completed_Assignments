# Node-Assessment

## Summary
The node assessment will be used to assess your understanding of the material provided
in the previous few units, in this case `Node.js` and `express`.

At the end of the period, commit your work and submit a pull request.

## How do I get started

1. Run `npm install`

1. Start your server with `npm start`

## How do I submit my work

1. When you are finished with your work, submit a **Pull Request** to your branch, the same exact way you submit hack hours.

## Style Guide
In addition to the functionality, we are going to start assessing the
readability and best practices of your code by testing it with a custom
linter configuration. The following rules should be adhered to as closely
as possible:

- [ ] Indentation set to 2 **spaces** (not tabs)
- [ ] Prefer single quotes to double quotes for strings
- [ ] Prefer const
- [ ] Use semicolons after each expression
- [ ] Do not define any unused variables
- [ ] Make sure there are no syntax errors in your code
- [ ] Properly indent by 2 spaces for each nested block

## Challenges

Modify the files in the `server` directory to create the following functionality. Read the instructions carefully as status codes and headers may be different for each route.

*IMPORTANT*
  - DO NOT MODIFY THE FILES IN THE `/client` FOLDER IN ANY WAY. You only need to modify `/server.js` and `controller.js` to complete this assessment.
  - You must use Express to complete this assessment.
  - Do not use the `express.static` middleware to serve static files.


1. Create a *GET* route for the url `/colors`
  - the route should respond to *GET* requests to `/colors` by sending the file `colors.html` located in the `client` folder
  - Your response should include a status code of 200.
2. You'll see a dropdown menu on the page you just served. When you select an option from this menu, the frontend will make a POST request to the `/colors` route, sending the selected option as the request body. (You can look at how this request is being sent in the `colors.html` file's script tag.) Create a route to handle this POST request.
3. We want to perform some logic on the data that's being sent from the frontend before we send a response back. We'll do this using Express middleware and a controller - which you'll write in the `controller.js` file.
  - In `controller.js`, give the `controller` object a method called `getColor`. 
  - `getColor` should get the string that was sent on the request body and find its matching property on the `options` object. (There is one item on the dropdown menu that is not present in this object. Make sure to handle cases in which the data from the request can't be found!)
  - Export the `getColor` function so that you can use it in your `server.js` file.
4. After `getColor` runs, end the request/response cycle with a function that sends the correct color back to the frontend in a JSON object.
  - This function **must** be defined in the `server.js` file.
  - Hint: make sure the JSON object you're sending back matches the format that the frontend is expecting!
5. Now, add some styling! When the browser loads the HTML for `colors.html`, it's going to make another request to your server for `styles.css`. Make sure this request works.
  - Your server must send the file `styles.css` located in the `client` folder when a request to `/styles.css` arrives
  - Make sure your response includes the correct status code.
1. Add a 404 handler to your server such that if a request comes in to *ANY* route not listed above the 404 page is sent
  - Your server must send the file `404.html` located in the `client` folder
  - This time, the response status code must be `404`
