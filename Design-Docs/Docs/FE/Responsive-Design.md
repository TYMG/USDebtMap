# Responsive Design Strategy 

## Location
Main Page
------
![Shit Tier Wireframe](Wireframes/Photos/Wireframes_V1.jpg "Basic Wireframe")
The Main Page will consists of two components, the US Map and the Aminated Table.

The first step in developing the Front End UI is considering responsive design. Laying the foundation in the early stages will save us pain later.

The goal of this Story is write a responsive stylesheet using SASS. To represent the differnt viewpoints using colors to represent the different viewpoints.
 
Note: Since we're actually getting started with actually building the app, I'm going to get rid of current UI, in order to build the foundations of the new UI.

## Tasks
* Configure Angular CLI to use SASS instead of CSS
    * Rename styles.css to main.scss 
* Update app.component.html
    * Delete legacy app code
    * Create main div
        * Using SASS and Media Queries, apply coloring to main
    

## Tech
To complete this I need the following:
* LESS

## Tests
* Mess with the window dimesions and check to make sure the color of the window changes accordingly. 

[Testing DOM Events Using jQuery and Jasmine 2.0](http://www.htmlgoodies.com/beyond/javascript/js-ref/testing-dom-events-using-jquery-and-jasmine-2.0.html)

Add Jasmine-jQuery to devDependecies

https://karma-runner.github.io/1.0/config/configuration-file.html

https://karma-runner.github.io/1.0/config/plugins.html

https://www.npmjs.com/package/karma-jasmine-jquery 


I ran into an issue with VScode recognizing most of jasmine and jasmine-jquery's syntax, so i had to add typings to the project.

https://microsoft.github.io/TypeSearch/
https://www.npmjs.com/package/@types/jasmine-jquery
https://github.com/Microsoft/TypeScript/issues/11620
https://stackoverflow.com/questions/39661373/how-to-automatically-add-types-declaration-for-a-library-to-tsconfig-json-in-typ#39662456

adding     "types" : ["jquery","jquery-jasmine","jasmine"], worked!