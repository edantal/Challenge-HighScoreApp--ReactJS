## Run app with json-server

> Run json-server on terminal (api runs on port 3006)
```
npm run server
```
> After server is running open new terminal and run react app
```
npm start
```

# Create a React component called HighScoreApp

1. a button, which adjusts the users score by a number between -100 and 100 when clicked
2. display of the current score
3. an input field, labeled 'Name', where the user can type their name
4. a submit button that will make a POST request (to dummy endpoint here) to save their score, name, and number of times they clicked to reach that score

**Caveat: the user can only click a maximum of 10 times before submitting their score; once they submit their score, the click counter gets reset to 0, and the name input field is cleared.

# Take-home exercise

First, set up a React app in a github repo that you can share with Cobalt engineering, and move your starter code from the in-person exercise there.
Then, complete any part of the previous exercise that didn’t get finished during the in-person interview. Please commit these changes so we can review the first milestone.
Pay special attention to user-friendliness by providing error feedback and making it easy to use the app. E. g. if a score can't be submitted, let the user know why

# Continue with additional requirements

1. Style the page; for inspiration you can visit: cobalt.io and designsystem.cobalt.io. 
2. Add messaging to let the user know how many clicks they have left, and if they have reached the maximum number of 10 clicks.
3. Add a dummied data fetch, assuming that the API service will send you the proper data as an array of objects.  The results will NOT be sorted, and can contain from 0+ records.
Example:
[{name: "Jane Doe", totalPoints: 157, clicks: 5},
{name: "Lily Allen", totalPoints: 234, clicks: 8},
{name: "John Smith", totalPoints: 390, clicks: 10}]
4.  Display a leaderboard table of the top 10 total points scores, showing:: name, score, number of clicks, average points per click.
5. Create a real-time update of the table, so that if the person playing achieves a score that puts them in the leaderboard, show their position in the table.  However, the data should be validated - so that if the inputs are empty the submit button cannot be clicked, and if the name already appears in the list, it is updated rather than duplicated. (they still need to click `Send it!` button to save their score), and adjust other positions accordingly (knocking the lowest score out of the display)
6. Write a couple tests, and note why you chose to cover these particular areas of code. 

# Option: Developer's choice 

If you like - rather than limit the number of clicks to 10 and prevent additional button clicks, reset the points counter to 0 on every 10th click of the button. Provide a brief explanation in comments what are the pros and cons of each restriction, in terms of usability and user experience.

# Bonus
- Give the user the option to toggle the table display between the top 10 total points, or the top 10 avg points per click. Add whatever UI elements/messaging are necessary to accomplish this.
- Make the style responsive to various page widths
- What API parameters would you request be made available, to optimize data processing on the front end?  Assume those parameters are made available to you, and incorporate them into your code. 
