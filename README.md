# Personal-Portfolio
This is my personal web portfolio showcasing my skills as a website developer. 

Technologies used:
* NodeJs
* Express
* EJS
* Html
* Css
* Javascript
* Axios

# Projects
All of my projects are set up to be inserted as the body of [views/layouts/boilerplate.ejs](views/layouts/boilerplate.ejs),  in the server-side when rendering the page; the project name is passed to the boilerplate so it can be used to get the corresponding stylesheet and script.

Server-side:
```
router.get('/:project', (req, res) => {
  const { project } = req.params;
  
  res.render(`portfolio/${project}`, { project });
});
```
As long as we use the **/public/styles/PROJECT-NAME/style.css** & **/public/scripts/PROJECT-NAME/script.js** file path conventions the layout will grab the correct files for each project.

In our boilerplate file:
```
<link rel="stylesheet" href="/styles/portfolio/<%= project %>/styles.css">
<script src="/scripts/portfolio/<%= project %>/script.js"></script>
```

### Tattoo Shop Mock-Up
Main page: [/views/portfolio/tattoo-shop.ejs](/views/portfolio/tattoo-shop.ejs)

Style: [/public/styles/portfolio/tattoo-shop/styles.css](/public/styles/portfolio/tattoo-shop/styles.css)

Script: [/public/scripts/portfolio/tattoo-shop/script.js](/public/scripts/portfolio/tattoo-shop/script.js)

### Twitter Clone CRUD
Main page: [/views/portfolio/twitter-clone.ejs](/views/portfolio/twitter-clone.ejs)

Users page: [/views/portfolio/twitter-clone/users.ejs](/views/portfolio/twitter-clone/users.ejs)

Profile page: [/views/portfolio/twitter-clone/profile.ejs](/views/portfolio/twitter-clone/profile.ejs)

Edit page: [/views/portfolio/twitter-clone/edit.ejs](/views/portfolio/twitter-clone/edit.ejs)

Style: [/public/styles/portfolio/twitter-clone/styles.css](/public/styles/portfolio/twitter-clone/styles.css)

Script: [/public/scripts/portfolio/twitter-clone/script.js](/public/scripts/portfolio/twitter-clone/script.js)

Generate users script: [/utils/twitter-clone/twitterStorage.js](/utils/twitter-clone/twitterStorage.js)

RESTful routes: [/routes/twitterRoutes.js](/routes/twitterRoutes.js)
| URL                          | HTTP verb | Desc                                    |
| ---------------------------- | --------- | --------------------------------------- |
| /tweets                      | GET       | Displays all tweets                     |
| /tweets                      | POST      | Posts a new tweet                       |
| /users                       | GET       | Displays all users                      |
| /users/:userId               | GET       | Displays a specific user                |
| /users/:userId/:tweetId/edit | GET       | Shows edit form                         |
| /users/:userId/:tweetId      | PATCH     | Patches a specific tweet then redirects |
| /users/:userId/:tweetId      | DELETE    | Deletes a specific tweet then redirects |

### Weather App
Weather app that uses an api (Yahoo Weather) to look up the weather in a location using a zip-code and display it along with the date, location, and summary.

Main page: [/views/portfolio/weather.ejs](/views/portfolio/weather.ejs)

Style: [/public/styles/portfolio/weather/styles.css](/public/styles/portfolio/weather/styles.css)

Script: [/public/scripts/portfolio/weather/script.js](/public/scripts/portfolio/weather/script.js)

Routes: [/routes/weatherRoutes.js](/routes/weatherRoutes.js)





