# General Design Document

# High Level
From 1999 to 2016 there is data on the different types of Debt. This MEAN Stack project will use D3.js to display that data in a visually appealing fashion,using a map of the United States and a table. And the site should be responsive in order to accomodate mobile phones and tablets alike. 

![Shit Tier Wireframe](Wireframes/Photos/Wireframes_V1.jpg "Basic Wireframe")


# Pages
This project should have about 2-3 pages. The Main Page, How it works, and maybe an About Us Page. 

So the main page will consist of a couple elements, a header, the Animated US Map, the Animated Table, and a footer. 

The How it Works can just be a technical explanation or two of how some of the cooler things were done.

## Main Page
### Header
Simple Header that will contain the links to the other pages. The header should be a fixed to the top of the page.

### Animated US Map
![Shit Tier Wireframe](Wireframes/Photos/US_State_Debt_Map.jpg "Basic Wireframe")
The Animated US Map is one of the mediums that will be used to show the user the State Debt Data (SDD). Each State will be represented on the Map.
Each State will be color coded depending on amount of debt that state has. The Heat Index (HI) will indicate to the user what color means what. The HI will reside to the right of the map. Below the HI will be the year. Slider?

#### Component Breakdown
(Note: Nested List Items Are Considered Child Elements)
![Shit Tier Wireframe](Wireframes/Component_Breakdown/US_State_Debt_Map_CB.png)
* Title (Top, Strawberry)
* US Map (Middle, Green)
  * Drawer Toggle (Below Map; Lavender)
* Heat Index (Far Right, Sky Blue)
* Year (Far Right; Lower, Yellow)
* Drawer (Bottom, Orange)
  * Year Slider (Far Left, Strawberry)
  * Debt Type DD (Second from Left, Sea Green)
  * Speed Toggle (Third from Left, Purple)
  * Playback Button (Far Right, Pink)


#### Component Relationship
(Note: Some Relationships will not be displayed in the image, as concepts evolved over time)
![Shit Tier Wireframe](Wireframes/Component_Relationship/US_State_Debt_Map_CR.png)
* Drawer Toggle -> Drawer  (Below Map; Lavender)

  The Drawer Toggle begans as a button style to be a down arrow, When the user clicks the down arrow, the drawer will pop down. Once the drawer is exposed, the Drawer Toggle button is then styled to be an up arrow. When the user clicks the up arrow, the drawer will dissapear, and the Up Arrow becomes a down arrow again. If the US Map is in the middle of auto-play, it will continue to play, but once the animation ends, auto-play will be disabled.
  
  * Secondary Actions
  
    Once the Drawer is closed, the US Map begins to auto-play every 10 seconds. 
    
* Year Slider -> Year; US Map (Drawer; Strawberry)

  The Slider will directly affect the year and map animation simultaneously through manual control. The Slider will begin at 1999 and end at 2016. As the Slider is moved from left to right, the colors in US Map will change according to the year that is displayed.
  * Secondary Actions
  
* Debt Type DD -> Header; US Map (Drawer; Sea Green)

  The Debt Type DD contains a list of the different type of debts, once one is chosen, the header will change to reflect the selection. And the US Map will adjust to prepare for itself to playback that debt type.
  
* Speed DD -> US Map (Drawer; Purple)

  The Speed DD contains a list of speeds, once one is chosen, the US Map will update its speed for the next playback.
  
* Playback -> US Map (Drawer; Pink)
  
  The Playback is a button that once pressed will trigger the US Map Animation based on the type and speed options that were selected.
  
  * Secondary Action
    
    The playback button is pressed, the slider should slide over accordingly.

#### The Animation

From 1999 to 2016 there is data on the different types of Debt. The site will show that data on the map using the colors which 
will change as the years go up or down. The color transitions should relatively smooth from year to year. The year should be animated as well, such as a scroll up down.


### Animated Table 
![Shit Tier Wireframe](Wireframes/Photos/Animated_Table.jpg "Basic Wireframe")
The Animated table is the second medium that will be used to show the user the SDD. The Table will have the States as the rows and the Years as the columns. There will be a drop down that has the different types of debt and the population. Depending on what is selected in the drop down, the table will display that data. 

To help the user read the data easier, table will color code the data in different ways. 
* Highlights By Year Using Timed Intervals
  * Color Coating much like the states
  * Plain Yellow
* Show and Hide States 
  * Fade States In And Out as need to help user focus.
  * Fuzzy Hide

#### Component Breakdown
(Note: Nested List Items Are Considered Child Elements)
![Shit Tier Wireframe](Wireframes/Component_Breakdown/Animated_Table_CB.png)
* Animated Table (Middle; Green)
  * Table Header (Top; Blue)
  * Table (Center; Yellow)
    * Table Row (Middle Rect; Light Blue)
      * Table Cell (Far Left; Peach)
* Table Control Panel (Far Right; Red)
  * Debt Type DD (Top; Orange)
  * Presentation DD (2nd Top; Sea Green)
  * Speed DD (3rd Top; Purple)
  * Playback (Bottom; Pink)

#### Component Relationship
(Note: Some Relationships will not be displayed in the image, as concepts evolved over time)
![Shit Tier Wireframe](Wireframes/Component_Relationship/Animated_Table_CR.png)
* Debt Type DD -> Header; US Map (White; Top Right)

  The Debt Type DD contains a list of the different type of debts, once one is chosen, the header will change to reflect the selection. The Animated Table will display the data of the new type selection.
  
* Presentation Type -> Table Row; Table Cell

  The Presentation Type DD contains a list of the different coloring options the animated table can use highlight the data (see above). Once a selection is made, a new directive that adds the selected highlight behavoir will be added to the table cell, while the previous selection will be removed.  

   Additionally, if the 'Color Code All' option which applies the color coding to the table all at once, is selected, then the Speed DD and Playback Components are hidden. (Note: The far right highlighting of the three columns represents what that would look like, but it would be apply throughout the table)
   
* Speed DD -> Animated Table; Table Cell (Sea Green; Far Right)

  The Speed DD will control the amount time each cell is colored for. The Columns represents the years as to give a vertical highlighting effect. 
  
* Playback ->  Animated Table; Table Cell (Blue; Bottom)

  The Playback Button will start the highlight effect. The highlighting will proceed from left to right. 
  
#### The Animation

A vertical highlighting effect that will proceed from left to right based on the selection the user makes.  

### Footer
It will contain the Bibliographic citation of the source we pulled this data from. 

## Inspiration
I've taken inspiration from a number of sources, they include:
* [The Forced Migration of Enslaved People](http://dsl.richmond.edu/panorama/forcedmigration/#tab=1&narratives=true&cotton=true&sugar=true&labels=false&decade=1810&loc=6/-9.601/12.775)
