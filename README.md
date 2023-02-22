# Project: Technology Quote

Create a new React Native app project to display a technology quote when a button is pressed. That quote is: 

"Any sufficiently advanced technology is indistinguishable from magic. -- Arthur C. Clarke."
Here are screenshots showing the launch of the app, and the result after pressing the button:

![p1-tech-quote-launch.PNG](https://github.com/bell-kevin/technologyQuote/blob/main/readMePictures/p1-tech-quote-launch.PNG)

![p1-tech-quote-run.PNG](https://github.com/bell-kevin/technologyQuote/blob/main/readMePictures/p1-tech-quote-run.PNG)

## Background

In the video tutorial, you saw how to use the onPress() property of a button to respond to the press of that button. In this project, when the button is pressed, the text displayed above it changes. In the tutorial, you used "useState" to get the user input from the text input. In this project, you will use "useState" to track what data is displayed on the screen. 

The screen is very simple -- a Text component that displays a text variable, and a Button component that the user presses to display some different text. Using state, the text variable can have an initial value that tells the user to press the button, which will display when the app is launched. When the button is pressed, its onPress function calls the useState function that changes the text variable. Because the state changed, the screen will be rendered again, and the new text will be displayed.

Here is a look at that code:

   // declare a variable with useState
   const [outputText, setOutputText] = useState("Press The Button");
   // function to change the state when button is pressed
   function pressHandler() {
   setOutputText("Hello World!";
   }
   // display the screen
   <Text>{outputText}</Text>  // this is re-rendered when the state of outputText changes
   <Button title="Display Text" onPress={pressHandler} />

With this coding, the screen would appear with the initial state of the output text variable (on the left) and render again with the changed output text after the button is pressed (on the right):

![ButtonStart.PNG](https://github.com/bell-kevin/technologyQuote/blob/main/readMePictures/ButtonStart.PNG)     

![ButtonEnd.PNG](https://github.com/bell-kevin/technologyQuote/blob/main/readMePictures/ButtonEnd.PNG)

## Your Project

When the project launches, It should display "Press Button for Technology Quote", and when the button is pressed, display the quote provided above. Set the style for the overall screen to use a different background color than white. Add another style for the quote, which adds padding between the text and the button, adds style to the text, and use a width of 80% so the text appears more centered above the button. 

In this example, the background color for the app is "tan".  The font size was set to 24 and the font weight to "bold". There is padding on the bottom of the text of 18, to put some space between the text and the button. The width of the text is 80%, so the text doesn't touch the left and right edges. The text is center-aligned. Remember that the text is styled using JavaScript -- use the new-line characters of "\n" to make sure the phrases "Technology Quote" and "-- Arthur C. Clarke" start on new lines.

Your choices: background color (cannot be white), font size, font weight, amount of space between text and button (minimum value is 18), width of the quoted text (maximum value is 80%).

Take 2 screenshots as shown above.

Submission: Zip together the root folder and the 2 screenshots, and submit the single zipped folder.

### Reading: 

Storing Projects When you complete a React Native project, you should keep it on your storage device for a little while. There are multiple instances where one project will be the basis of another project. The Udemy course keeps building on the projects, so you definitely need to keep those around until you are done with that project in the course.

BUT -- React Native projects are huge. There is a folder, node_modules, that takes up most of the space. If you keep every project you create in this course, you would need at least 20GB of space, probably more. How can you manage this terrible drain on your storage?

That node_modules folder is automatically added when you create a new project. Once you are done with the project, you can delete that folder, node_modules, and the size of your project will shrink dramatically.

This does not destroy the project. If you find you need to run an old project again, which no longer has its node_modules folder, open it in Visual Studio Code, open a terminal, and type "npm install". This will load the node_modules folder again, and the project is whole and ready to run.

Note that when you delete that folder, it takes a noticeable amount of time, far more than it takes to reload it.

A good practice for course maintenance is to keep the project in its full state until you are sure you won't be using it in the next few days, then delete the node_modules folder.

== We're Using GitHub Under Protest ==

This project is currently hosted on GitHub.  This is not ideal; GitHub is a
proprietary, trade-secret system that is not Free and Open Souce Software
(FOSS).  We are deeply concerned about using a proprietary system like GitHub
to develop our FOSS project. I have a [website](https://bellKevin.me) where the
project contributors are actively discussing how we can move away from GitHub
in the long term.  We urge you to read about the [Give up GitHub](https://GiveUpGitHub.org) campaign 
from [the Software Freedom Conservancy](https://sfconservancy.org) to understand some of the reasons why GitHub is not 
a good place to host FOSS projects.

If you are a contributor who personally has already quit using GitHub, please
email me at **bellKevin@pm.me** for how to send us contributions without
using GitHub directly.

Any use of this project's code by GitHub Copilot, past or present, is done
without our permission.  We do not consent to GitHub's use of this project's
code in Copilot.

![Logo of the GiveUpGitHub campaign](https://sfconservancy.org/img/GiveUpGitHub.png)
