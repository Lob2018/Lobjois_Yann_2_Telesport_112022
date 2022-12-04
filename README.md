[![forthebadge](https://forthebadge.com/images/badges/made-with-typescript.svg)](https://forthebadge.com)

# OlympicGamesStarter

## Technologies

- JS
- SCSS
- Angular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.1.3.

Don't forget to install your node_modules before starting (`npm install`).

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Where to start

As you can see, an architecture has already been defined for the project. It is just a suggestion, you can choose to use your own. The predefined architecture includes (in addition to the default angular architecture) the following:

- `components` folder: contains every reusable components
- `pages` folder: contains components used for routing
- `core` folder: contains the business logic (`services` and `models` folders)

I suggest you to start by understanding this starter code. Pay an extra attention to the `app-routing.module.ts` and the `olympic.service.ts`.

Once mastered, you should continue by creating the typescript interfaces inside the `models` folder. As you can see I already created two files corresponding to the data included inside the `olympic.json`. With your interfaces, improve the code by replacing every `any` by the corresponding interface.

## Reference colors

| Color                     | Hex                                                              | Contrast ratio (AA) |
| ------------------------- | ---------------------------------------------------------------- | ------------------- |
| Primary font color        | ![#6C6C6C](https://via.placeholder.com/10/6C6C6C?text=+) #6C6C6C | 5.25 : 1            |
| Secondary font color      | ![#000000](https://via.placeholder.com/10/000000?text=+) #000000 |                     |
| White                     | ![#FFFFFF](https://via.placeholder.com/10/FFFFFF?text=+) #FFFFFF |                     |
| Primary color             | ![#04838f](https://via.placeholder.com/10/04838f?text=+) #04838f | 4.51 : 1            |
| Color #1 (Italy)          | ![#956065](https://via.placeholder.com/10/956065?text=+) #956065 | 5.07 : 1            |
| Color #2 (Germany)        | ![#793d52](https://via.placeholder.com/10/793d52?text=+) #793d52 | 8.06 : 1            |
| Color #3 (United States)  | ![#89a1db](https://via.placeholder.com/10/89a1db?text=+) #89a1db | 2.56 : 1            |
| Color #4 (France)         | ![#9780a1](https://via.placeholder.com/10/9780a1?text=+) #9780a1 | 3.54 : 1            |
| Color #5 (United Kingdom) | ![#bfe0f1](https://via.placeholder.com/10/bfe0f1?text=+) #bfe0f1 | 1.38 : 1            |
| Color #6 (Spain)          | ![#b8cbe7](https://via.placeholder.com/10/b8cbe7?text=+) #b8cbe7 | 1.64 : 1            |

## Typo

- Google Fonts links for Content Delivery Network : [Montserrat](https://fonts.google.com/specimen/Montserrat?preview.text=Medals%20per%20Country&preview.text_type=custom)

- Desktop :

| Header                    | Title 1                   | Title 2         | Body highlight  | Body            |
| ------------------------- | ------------------------- | --------------- | --------------- | --------------- |
| Montserrat Semi-bold 72px | Montserrat Semi-bold 24px | Montserrat 24px | Montserrat 20px | Montserrat 20px |

- Mobile :

| Header                    | Title 1                   | Title 2         | Body highlight            | Body            |
| ------------------------- | ------------------------- | --------------- | ------------------------- | --------------- |
| Montserrat Semi-bold 40px | Montserrat Semi-bold 20px | Montserrat 20px | Montserrat Semi-bold 16px | Opens Sans 16px |

## Contribute to the project

OlympicGamesStarter is a personal training project.

## Authors

Our code squad : Yann

## Licensing

**_All Rights Reserved_**
