# Portfolio

### Initializing Application,

Clone this repository and run `npm install` and then `ng serve` to use.

title: Portfolio Application Technical Design Document
created at: Thu Aug 08 2024 13:14:42 GMT+0000 (Coordinated Universal Time)
updated at: Thu Aug 08 2024 13:16:02 GMT+0000 (Coordinated Universal Time)

---

# Portfolio Application Technical Design Document

> **Product Name:** Portfolio  
> **Version:** 1.0.0
> **Phase:** Ready for deploy
> **Date: **

## **Product Overview **

    Portfolio is a web application is intended to give information to employers or clients about myself. It is a simple web page created with Angular to develop further

## **Product Objectives **

    Objective of Portfolio is give information to employers or clients about myself. It is consist of details of myself, background, technical skills, contact information.

## Product Features

### Multiple language supported

    Application can be viewed in English and Turkish for now. Langauge can be changed if requested.

### Responsive

    Application is responsive, and as the number of visitors to the application increases, its "responsive" structure will be constantly improved.

Description

Description

## Application Architecture

    Application is created by using Angular 17 and uses dependency injection architecture on base. This allows me to build more modular and organized codebase to decrease complexity of app. Also in order to make application more "reactive", it uses Event-driven pattern for allowing to dynamically control and monitor the application.

### Modules

**Base Module**

This module is entry point of application. It is consist of page section components, Data service which is controls static data, Store module for managing the state of application, pipes for transforming data and Translation module for managing the application language. Rest modules is necessary for bootstrapping the application

```

const components = [
  SectionHeadingComponent,
  AppComponent,
  LandingComponent,
  NavigationBar,
  AboutComponent,
  ContactComponent,
];
const directives = [DropdownDirective];
const pipes = [LevelPipe];

@NgModule({
  declarations: [...components, ...directives, ...pipes],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CommonModule,
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot({
      languagex: LanguageReducers,
    }),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (http: HttpClient) => new TranslateHttpLoader(http),
        deps: [HttpClient],
      },
    }),
  ],
  providers: [DataService],
  bootstrap: [AppComponent],
})
export class PortfolioApp {}
```

Style Module

To style the pages, SCSS pre-processor is used for modularity. It allows to create spearate layer for modularize the stylesheets and easy maintenance. There is mainly 5 style modules:

1.  Typography
2.  Button
3.  Input
4.  Responsive
5.  Root

## Conclusion

Application will be developed further when a server for this application is available.

---
