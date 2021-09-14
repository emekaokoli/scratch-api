# MyReads App

RESTful API that allow search in multiple clinic providers and display results from all the available clinics by any of the following:

Clinic Name
State [ex: "CA" or "California"]
Availability [ex: from:09:00, to:20:00]

This is including search by multiple criteria in the same time like search by state and availability together.

## TL;DR

To get started developing right away:

- install all project dependencies with `npm install`
- start the development server with `npm start`

## PROJECT FILES AND DIRECTORY

```bash
├── CONTRIBUTING.md
├── README.md - This file.
├── package.json # npm package manager file. .
├── bin - Express and server config.
├── app.js - The server entry point.
│  
└── controllers
    ├── clinic.controllers.js # controller for the api services.
    └──
│  
└── db
    ├── dental.js # api link for dental clinics with json files.
    └── vet.js # api link for vet clinics with json files.
    │  
└── models
    ├── clinicModel.js # api link for dental clinics with json files.
    └── vet.js # api link for vet clinics with json files.
    │  
└── routes
    ├── clinic.routes.js # routes to the server entry point.
    └── vet.js # api link for vet clinics with json files.
└── utils
    ├── clinic.finder.js # makes sure the right search in the request body returns correct answer/response.
    └── normalizeResponse.js # normalizes api output in a better format.
    └── responseOk.js # outputs request response.
    └── validate.js # validates and clean data coming in and going out of the db/json.
```

## Backend Server

To simplify your development process, we've provided a backend server for you to develop against. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods you will need to perform necessary operations on the backend:

- [`getAll`](#getall)
- [`update`](#update)
- [`search`](#search)

### `getAll`

Method Signature:

```js
getAll();
```

- Returns a Promise which resolves to a JSON object containing a collection of book objects.
- This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf);
```

- book: `<Object>` containing at minimum an `id` attribute
- shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]
- Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query);
```

- query: `<String>`
- Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
- These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Important

The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## nodejs and express

This project was bootstrapped with [nodejs and express generator](https://expressjs.com/en/starter/generator.html). You can find more information on how to perform common tasks [here](https://expressjs.com/en/guide/routing.html).

## Contributing

This repository is for demo purpose only but I will definitely accept pull requests.
