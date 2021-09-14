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
├── README.md - This file.
├── package.json # npm package manager file. .
├── bin - Express and server config.
├── app.js - The server entry point.
│  
└── controllers
    ├── clinic.controllers.js # Returns a Promise which resolves to a JSON object containing a collection to the screen/console.
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
    ├── clinic.finder.js # promised returns a collections of response sends to the controllers request body returns correct answer/response.
    └── normalizeResponse.js # normalizes api output in a better format.
    └── responseOk.js # outputs request response.
    └── validate.js # validates and clean data coming in and going out of the db/json.
    └── evaluateFilterForEntry.js # evaluates search params, check for types and returns the searched fields as requested.
```

## how to use 

to test, the api allows search by req.body  or query from the [`DENTAL_API.js`](db/dental.js) and [`VET_API.js`](db/vet.js)perform necessary operations on the backend:

### `Copy and paste the URL below in postman`

{
  "name": "Mayo Clinic",
  "stateName": "Florida",
  "availability":  {
    "from": "09:00",
    "to": "20:00"
  },
 "clinicName": "National Veterinary Clinic",
  "stateCode": "CA",
   "opening": {
    "from": "15:00",
    "to": "22:30"
  }
}

or ### `using query string,copy and past the URL below into postman but you will need to comment out the conflicting variable names in req.body of the clinicController` 

 localhost:5000/api/v1/search/?availability[from]=09:00&availability[to]=20:00


- [`searchAll`](#searchAll)
- [`findAll`](#findAll)
- [`search`](#search)

### `getAll`

Method Signature:

```js
findAll();
```

- Returns a Promise which resolves to a JSON object containing a collection of clinic objects.
- This collection the attributes of the location and of each clinic in their respective state with time availability and office hours.

### `searchAll`

Method Signature:

```js
searchAll(name,stateName,availability,clinicName, stateCode, opening, resolve, reject);

```

- opening: `<Object>` containing at minimum an `time` attribute
- availability: `<Object>` contains  `time` attribute
- stateCode: `<String>` contains  `state shortcode` attribute
- stateName: `<String>` contains  `state name` attribute
- clinicName: `<String>` contains  `clinic name` attribute
- name: `<String>` contains  `name` attribute
- Returns a Promise which resolves to a JSON object containing the response data of the get request

### `search endpoint`

Method Signature:

```js
search(query);
```

- query: `<String>` localhost:5000/api/v1/search/?availability[from]=11:00&availability[to]=20:00
- req.body: `<String>` { "clinicName": "Good Health Home","name": "Mayo Clinic","availability": {
    "from": "09:00",  "to": "20:00"}, "opening": {   "from": "15:00", "to": "20:00"}}
- Returns a Promise which resolves to a JSON object containing a requests performed by the user
- These search strings do not have a specific way to search but its strict about the search paramters. You'll need to make sure that the search keywords have the correct stateName, name, availability, opening time and stateCode appropriately.

## Important

The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in api and cannot go beyond that. That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for alabama or pentagon clinic don't come back with any results.

## nodejs and express

This project was bootstrapped with [nodejs and express generator](https://expressjs.com/en/starter/generator.html). You can find more information on how to perform common tasks [here](https://expressjs.com/en/guide/routing.html).

## Contributing

This repository is for demo purpose only but I will definitely accept pull requests.
