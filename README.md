
# Whether Weather Website

## Overview
Developed for the higher diploma in computer science at SETU. using JavaScript, HTML, and Bulma (CSS framework).
Website is deployed through Netlify and can be found here: [Whether Weather](https://whetherweathervillaca.netlify.app/).
- JavaScript: Model–view–controller (MVC), Arrays, methods, events, Object-oriented programming (OOP), URL Parameters, APIs, Data handling.
- HTML concepts: use of Divisions, Sections, IDs, Classes, naming of folders and files, and Appropriate use of semantics.
- Bulma concepts: Columns, Navbar, color palette, form items, table, box, card.  
- Nunjucks concepts: templating, layouts, partials, DRY/WET. 
- Site Generator: Eleventy. 
- Deployment: Netlify.

---

## Features
- 3 HTML pages:  Dashboard, City focus, and Settings.
- Navigation bar/burger (Bulma framework)
1. ***Dashboard***
    -  9 Cities available, and click on the city card to go to the city focus and see details about the weather
2. ***City Focus***
    - Hourly forecast for the next 6 or 12 hours from the current hour of the current day
    - City location map embedded 
    - 7 Days forecast - Click on the day card to get more details about that specific day 
    - Day weather details - It changes according to the day card you click on. 
3. ***Settings***
    - City checkboxes: enable/disable a city that is shown on the dashboard page 
    - Preferences
        1. Button - Reset all preferences: - it will clear up the local storage. 
        2. Show Map (Default: enabled): hide/show Embedded map on city focus
        3. Show 12-hour forecast ( Default: enabled): if enabled, show hourly forecast for the next 12 hours, otherwise it shows only 6 hours
        4. Show Rain (Default: enabled): Show the rain precipitation probability on both the hourly forecast and the daily weather details 
        5. Show Feels Like (Default: enabled): Show the max feels like temperature on both hourly forecast and day weather details 
        6. Dark Theme (Default: enabled): Select dark theme for the website; otherwise, it is light. 

4. ***WEBSITE hidden functions below:***
    - CITIES selected on the settings page are stored in the local storage and loaded on the next access.
    - PREFERENCES selected on the settings page are stored in the local storage and loaded on the next access.
    - LAST SEEN CITY is saved in the local storage and loaded on the next access.
    - DEFAULT CITY is the first one in the list. 

---

## Technologies Used

- **Frontend**: HTML, JavaScript, BULMA (CSS Framework), eleventy, Node, Nunjucks 
- **Backend**: Netlify for hosting
- **Database**: Localy stored, JSON. 
- **API**: Not Implemented

---

## Usage

1. Open the command prompt and select the folder where you saved the files. Example: C:\Users\(USER)\WhetherWeather202501
2. When inside the folder, use the eleventy command below ( [Eleventy](https://www.11ty.dev/docs/) needs to be installed)
```
eleventy --serve
```
3. Open your browser and visit `http://localhost:8080`.
4. The home webpage will open and then use the navigation bar to go through the pages. 

---

## Project Structure

```
WhetherWeather202501/
├── _includes/
│   ├── footer.njk
│   ├── header.njk
│   └── mainLayout.njk
├── _site/
├── images/
├── js/
│   ├── components/
|   |           └── weather-item.js
│   ├── data-definition.pdf
│   ├── generalFunctions.js
│   ├── navbar.js
│   ├── weather_data.js
│   └── weatherProject.js
├── node_modules/
├── .elenventy.js
├── cityFocus.njk
├── GithubCommitHistory.csv
├── index.njk
├── package-lock.json
├── package.json
├── preferences.njk
├── README.md
└── reflection.pdf
```

---

## Contributors
- **Tiago Linhares Villaca** - HDIP in computer science Student with a passion for coding.

---

## Acknowledgments

- [w3schools](https://www.w3schools.com) to search uses and examples for HTML tags and JavaScript.
- [Bulma CSS Framework](https://bulma.io/) styles for navigation bar, checkboxes, table, boxes, cards and etc.
- [andrewborstein.com](https://andrewborstein.com/blog/moving-my-blog-to-eleventy-part-2/) used to solve this continuous deployment error between Github and Netlify when using 11ty [eleventy not found"](https://answers.netlify.com/t/eleventy-non-zero-exit-code-127-error/66900) 
- [developer.mozilla.org](https://developer.mozilla.org/en-US/docs/Web/JavaScript) used to search uses exemples for Java Script.
- [freecodecamp](https://www.freecodecamp.org/news/javascript-refresh-page-how-to-reload-a-page-in-js/) - code for reloading a page in Java Script.
- Weather icons from [flaticon](https://www.flaticon.com/).
- Readme template from [comp1800](https://github.com/comp1800/web_template).
- Instructions to export git commit history [adamthebig](https://gist.github.com/adamthebig/9d2cf1281797c3f9f958#file-git-commit-log-sh)

---

## Limitations and Future Work
### Limitations

- Currently, the website is only designed for desktops. 
- Database is on client side, localy stored and accessed. 
- Temperature unit is only celcius. 
- only 7 days forecast.
- only 9 cities available. 


### Future Work

- Implement an API to get live data and then add more cities to the website. 
- Implement fahrenheit (F) unit for temperature. 
- Improve the website layout and make it more responsive for different screen sizes. 
- Increase the forecast to 15 days ahead. 

---

## License

Copyright (c) 2011-2024 GitHub Inc.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
