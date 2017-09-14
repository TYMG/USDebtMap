# Create Main Component

## Abstract
The goal is to create the Main component, which will contain a header, body, and footer. Initially the body will be just a div, but eventually both Map and Table Components will occupy that space. 
## Component Breakdown
### Controller
* **app.component.ts**
  
  Task: Remove all preexsting code. The App Component will bare as possible, removing unneccesary imports, fields, methods.
  * Methods:
    * public constructor
    * public ngOnInit(): void

### Template
* **app.component.html**
  
  Task: Remove all preexsting elements. Add a Static header and footer with a main div in between. Both the header and footer will take up 10% of the screen space. The main div take up the remaining space.
  
### Stylesheets
* **app.component.scss** 
  
  Task: Add style to the header and footer, color, font, etc. 

### Services
N/A

### Modules
N/A

### Config
* **.angular-cli.json**

  Task: Change the Angular-CLI defaults style extenstions setting to SCSS.
