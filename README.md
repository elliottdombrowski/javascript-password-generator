# javascript-password-generator
Password generator built with Javascript and HTML.

# HOMEWORK WEEK 03 - JAVASCRIPT PASSWORD GENERATOR

This is a password generator built with Javascript to print a password based off user input and criteria. 
It pulls from strings of Uppercase, Lowercase, Number, or Special characters.

# FUNCTIONS

When the end user interacts with "Generate Password" button, they will be given a number of prompts from which
to select their password criteria.
The end user must specify a password length of between 8-128 characters, and choose at least one type of character.
Once all criteria is met, a password will be written into the box onscreen.
If no criteria is met, user will be shown an alert prompting at least one criteria be chosen. Once alert is dismissed,
the script will end until "Generate Password" is clicked again.

I've written the prompts and input validation within a while loop- if user input is invalid, the loop will continue 
until input criteria is met.

The console log will display which character sets have been selected as password criteria, all user input, as well
as the index position of each randomly selected character.

## Screenshots

![Deployed application. Displays red button with EventListener to run script to generate password.](assets\imgs\deployedapp.png)

![Deployed application + console log displaying input validation and index position of randomly selected characters.](assets\imgs\deployedconsole.png)