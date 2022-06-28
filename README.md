# Basic Angular 14 App template:

## What's major changes in version 14? <br>

- Typed Reactive form : By adding UnTypedFormGroup and UnTypedFormControl the FormGroup, formControl, and related classes include type definitions enabling TypeScript to catch many common errors.<br>
- Standalone Component : The term “standalone” refers to components, directives, or pipes that can be used independently of NgModule, this Fetures is optional in this version. <br>

## What's template contain? <br>

this template building with this two Major changes and cleaning structure of files, <br>
lazy loading which is helpful to have seperate component which are loaded as needed, <br>
contain three layout (admin , auth for login page , blank for not-found page), <br>
bootstrap version 4

## What's file structure of template ?

We use MVC pattern in this template
<br> which contain major three folders : <br>

- Shared : which contain all folders that shared in project , Layouts and Model (which contain all interfaces you will use in project) also you can add the shared Components and Directives or Pipe <br>
  <br>
- Core : which contain services , also you can add interceptors, and each service must be singelton. <br>
  <br>
- View : which contain a main folders, each folders implement a one Faeture of project, each main folder contain a sub folders which represented the one page of feature of main folder, and imported in the routes file of that main folder. <br>
  each folder of view contain a routes file to loaded just a component we needed. <br>

in App folder , the app.component.ts is represented the main file which bootstraping in main.ts, contain the imported Module which must run with project. <br> in main.ts we bootstraping the AppComponent and routing for project.
