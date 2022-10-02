# University of California-Berkeley, Full-Stack Bootcamp, Challenge #3
## Password Generator

## Assignment
This week's Challenge requires you to modify starter code to create an application that enables employees to generate random passwords based on criteria that they’ve selected. This app will run in the browser and will feature dynamically updated HTML and CSS powered by JavaScript code that you write. It will have a clean and polished, responsive user interface that adapts to multiple screen sizes.

The password can include special characters. If you’re unfamiliar with these, see this [list of password special characters](https://www.owasp.org/index.php/Password_special_characters) from the OWASP Foundation.
## User Story
```
AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security
```
## Acceptance Criteria Requested
```
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
```
## Motivation
Given how many requirements are placed on password selection these days, it is helpful to have the computer generate a random string, at a desired length, to be used as a password.

## What I learned
This was our first project utilizing elements of JavaScript. In addition to the coding aspect, this project also required logic in the form of understanding how many different combinations would be possible, how to ensure the arrays in question maintain their appropriate lengths while still being able to randomize. In doing this, I recognize that there may be more efficient ways at deriving the randomized string however that was not necessarily left to the client on how the password is formed and randomized.

## Mock-Up
The following images show the web application's appearance and functionality (with only lower case and number characters:

![Screen Shot 2022-10-02 at 11 21 11 AM](https://user-images.githubusercontent.com/112341062/193469916-d93265e5-1058-4dc8-bc20-7cc5c5d68bf9.png)
![Screen Shot 2022-10-02 at 11 21 26 AM](https://user-images.githubusercontent.com/112341062/193469918-dcccac13-41a3-4228-ab9d-01fa401ed213.png)
![Screen Shot 2022-10-02 at 11 21 33 AM](https://user-images.githubusercontent.com/112341062/193469919-9605a9ff-33db-4f5d-aadf-786d08daf8f6.jpg)
![Screen Shot 2022-10-02 at 11 21 33 AM](https://user-images.githubusercontent.com/112341062/193469920-245d7a44-4256-4fb7-a584-70b0d4f2088b.png)
![Screen Shot 2022-10-02 at 11 21 51 AM](https://user-images.githubusercontent.com/112341062/193469921-492a1303-144d-46fe-8285-13dd04e58433.png)

## License
MIT License utilized for this repository
