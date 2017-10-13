# Create Map Component

## Abstract
Create a Map Component that will occupy the component-container inside the Main Component.

## Component Breakdown
### Controller
* **map.component.ts**
  The component file will contain just the ngOnInit() and constructor.


### Template
* **map.component.html**
  This file will serve as the scoffolding of the main-map-container div which will contain divs for each of the following future components just to intially lay out the border:

  * Title
  * US Map
  * Heat Index
  * Year
  * Drawer



* **app.component.html**
  I'm going to add the Map Component to the app__component-container div

### Stylesheets
* **map.component.scss**
  * Write classes for all the component divs in order to create the style which will arrange the divs according to the Wireframe.

### Specs
* map.component.spec.ts
  * Will test the following items:
    * Was the Title div created?
      * Query for the Title class div?
      * Query for style? Order, Etc
    * Was the US Map div created?
      * Query for the Us Map class div?
      * Query for style?
    * Was the Heat Index div created?
      * Query for the Heat Index class div?
      * Query for style?
    * Was the Year div created?
      * Query for the Year class div?
      * Query for style?
    * Was the Drawer div created?
      * Query for the Drawer class div?
      * Query for style?


### Services
N/A

### Modules
* **app.module.ts**
  Adding the map component to declarations
### Config
N/A