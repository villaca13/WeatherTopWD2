
# Weather Top

## Overview
Developed for the higher diploma in computer science at SETU. using Node js, JavaScript, HTML, Bulma (CSS framework) and Handlebars js.
Website is deployed through Render and can be found here: [Whether Top](https://weathertopwd2.onrender.com).

- JavaScript: Node, Arrays, methods, events, Object-oriented programming (OOP), URL Parameters, Data handling.
- Architecture: Model–view–controller (MVC).
- HTML concepts: use of Divisions, Sections, IDs, Classes, naming of folders and files, and Appropriate use of semantics.
- Bulma concepts: Columns, Navbar, color palette, form items, table, box, card.  
- HandleBars concepts: templating, layouts, partials, DRY/WET.  
- Deployment: Render.
- API`s: OpenWeather, Leaflet maps, Frappe Charts.

---

## Features
- pages:  About, Dashboard, Station view, User Details, Log in, Sign up.
- Navigation bar (Bulma framework)
1. ***Sign up***
    - Create a new account
2. ***Log in***
    - Log in your account
3. ***Dashboard***
    - STATIONS: List of stations added and ordered alphabetically. it can be open or deleted. give information about the current weather and Min/Max of the records.
    - MAP: map with station markers showing where in the world is being tracked. 
    - ADD/SEARCH(EXTRA) STATION: Station can be added manually if the details are entered. Extra funcionality is added to search a certain location in a list of cities. If there is an exact match, form is populated with the first value found.
    - (EXTRA) AVAILABLE STATIONS - AUTO ADD STATION: After using search, a list of cities is returned from the query and bacome available to auto add if needed.  
4. ***Dashboard/Station View***
    - WEATHER STATION: give information about the current weather and Min/Max of the records.
    - TREND TEMPERATURE: give information about the trend temperature for the following hours of the day.  
    - RECORDS: list of records added.
    - ADD RECORD: records can be added manually or deleted by clicking on the icons/button.
    - AUTO GENERATING READING: API is used to get the current weather information about certain location and saved in the database as a new record.
5. ***About***
    - Company details   
6. ***User Details***
    - VIEW/EDIT User Details: Details can be amended. EMAIL CANNOT be changed.

---

## Technologies Used

- **Frontend**: HTML, JavaScript, BULMA (CSS Framework), Node, handlebars
- **Backend**: Render for hosting
- **Database**: Local Server, JSON.
- **Architecture**: Model–view–controller (MVC).
- **API**: OpenWeather, Leaflet maps, Frappe Charts.

---

## Usage

1. Open the command prompt and select the folder where you saved the files. Example: C:\Users\(USER)\WeatherTopWD2
2. Use npm(node) to install adicional packages like (daysjs, axios and etc..) 
3. Open your browser and visit `http://localhost:4000`.
4. The home webpage will open and then use the navigation bar to log in. 

---

## Project Structure

```
WhetherWeather202501/
├── controllers/
│   ├── about-controller.js
│   ├── accounts-controller.js
│   ├── report-controller.js
│   ├── station-controller.js
│   └── user-detail-controller.js
├── images/
├── models/
│   ├── city-store.js
│   ├── city.list.json
│   ├── object-store.js
│   ├── report-store.js
│   ├── reports.json
│   ├── station-store.js
│   ├── stations.json
│   ├── user-store.js
│   └── users.json
├── node_modules/
├── utils/
│   └── utils-store.js
├── views/
│   ├── layouts/
│   └── partials/
|        └── Icons/
├── .gitignore
├── package-lock.json
├── package.json
├── README.md
├── routes.js
└── server.js
```

---

## Contributors
- **Tiago Linhares Villaca** - HDIP in computer science Student with a passion for coding.

---

## Acknowledgments

- [w3schools](https://www.w3schools.com) to search uses and examples for HTML tags and JavaScript.
- [Bulma CSS Framework](https://bulma.io/) styles for navigation bar, checkboxes, table, boxes, cards and etc.
- [Frappe charts](https://frappe.io/charts/docs) API to add charts to the webpage.
- [Leafletjs Maps](https://leafletjs.com/) API to add maps with layers to webpage. 
- [Open Weather](https://openweathermap.org/current) API to get weather information.
- [Iconfy](https://iconify.design/) Where the icons are from.
- [Extract Max/Min function from json file](https://stackoverflow.com/questions/69479035/how-to-find-the-min-max-of-values-in-an-array-of-json-objects-javascript) function to get max/min values of an array of jason objects.
- Readme template from [comp1800](https://github.com/comp1800/web_template).

---

## Limitations and Future Work
### Limitations

- Currently, the website is only designed for desktops. 
- Database is created in json.
- Passwords are not checked but stored. 
- Only current weather and no forecast.
- Website seems to have a slow response time to time and when the dashboard is rendering


### Future Work

- A database in SQL or NONSQL. 
- Implement Weather Forescast for up to 15 days ahead. 
- Improvements to the performance.
- Increase the forecast to 15 days ahead. 

---

## License

Copyright (c) 2011-2024 GitHub Inc.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
