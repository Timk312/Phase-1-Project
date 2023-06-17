# Phase-1-Project
## My github,blog,and video for the project 
https://github.com/Timk312/Phase-1-Project

https://timk312.hashnode.dev/what-is-a-fetch-api-request

https://youtu.be/pSVi6it7_t8
## How to use the application
### Finding BMI
Filling out the Height and Weight forms will display that info as well as your BMI .
This will also change the background color depending on your results. (green if below 30, and red if above 30)
### Entering a meal
Enter the last meal you consumed and hit the Submit Meal button. 
If the meal is already in the database it will update the summary with the calories, and raise your goal depending on if your food submitted is a Meal or a Snack.
If the meal is not found, an alert will tell you to enter the meal manually.
### Entering a meal manually
Fill out the forms input meal and input calories of the last meal you consumed, and select wether it is a meal or a snack. 
Then hit the button add to database to add it. 
Try entering the meal again, and it will update the summary since it is now in the database.
If your total calories consumed are less than your calorie goals, the summary will light up green.
If your total calories consumed are more than your calorie goals, the summary will light up red.
### Finding your average Energy levels
Each time you consume a meal select from 1 to 5 depending on how you are feeling.
The summary will keep track and return the average of how you have been feeling.
### Relaxed or Strict diet
Using the arrow left and arrow right keys you can toggle between if you are on a strict diet or not.
This will change the color of the selected diet to green, and will update your goals to fit the selected diet.
#### Bonus
At the bottom of the index.js file I added a advertisement that interacts with the fetch api via a pokedex api.
By default this ad is hidden, but by commenting out the code that hides it:
The advertisement will appear at the top left, allowing you to enter a number from 1 to 1010 and submitting that to discover which pokemon id matches the number entered.
