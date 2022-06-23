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

### Tattoo Shop Mock-Up V2
A re-design of a past project.

Main page: [/views/portfolio/tattoo-shop-v2.ejs](/views/portfolio/tattoo-shop-v2.ejs)

Worker 1: [/views/portfolio/tattoo-shop-v2/worker1.ejs](/views/portfolio/tattoo-shop-v2/worker1.ejs)

Worker 2: [/views/portfolio/tattoo-shop-v2/worker2.ejs](/views/portfolio/tattoo-shop-v2/worker2.ejs)

Worker 3: [/views/portfolio/tattoo-shop-v2/worker3.ejs](/views/portfolio/tattoo-shop-v2/worker3.ejs)

Style: [/public/styles/portfolio/tattoo-shop-v2/styles.css](/public/styles/portfolio/tattoo-shop-v2/styles.css)

Worker style: [/public/styles/portfolio/tattoo-shop-v2/worker.css](/public/styles/portfolio/tattoo-shop-v2/worker.css)

Script: [/public/scripts/portfolio/tattoo-shop-v2/script.js](/public/scripts/portfolio/tattoo-shop-v2/script.js)

Image viewer script: [/public/scripts/portfolio/tattoo-shop-v2/imageViewer.js](/public/scripts/portfolio/tattoo-shop-v2/imageViewer.js)

### Twitter Clone CRUD
A twitter clone with full CRUD and randomly generated users with randomly generated tweets.

Main page: [/views/portfolio/twitter-clone.ejs](/views/portfolio/twitter-clone.ejs)

Users page: [/views/portfolio/twitter-clone/users.ejs](/views/portfolio/twitter-clone/users.ejs)

Profile page: [/views/portfolio/twitter-clone/profile.ejs](/views/portfolio/twitter-clone/profile.ejs)

Edit page: [/views/portfolio/twitter-clone/edit.ejs](/views/portfolio/twitter-clone/edit.ejs)

Style: [/public/styles/portfolio/twitter-clone/styles.css](/public/styles/portfolio/twitter-clone/styles.css)

Script: [/public/scripts/portfolio/twitter-clone/script.js](/public/scripts/portfolio/twitter-clone/script.js)

Generate users script: [/seeds/generateUsers.js](/seeds/generateUsers.js)

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

### Bootstrap Landing Page
A simple landing page made with Bootstrap.

Main page: [/views/portfolio/landing-page.ejs](/views/portfolio/landing-page.ejs)

Style: [/public/styles/portfolio/landing-page/styles.css](/public/styles/portfolio/landing-page/styles.css)

Script: [/public/scripts/portfolio/landing-page/script.js](/public/scripts/portfolio/landing-page/script.js)

### Tattoo Shop Mock-Up
A tattoo shop mock-up website with worker info and a gallery with all their work. Has an image viewer to view the images and cycle through them using Javascript.

Main page: [/views/portfolio/tattoo-shop.ejs](/views/portfolio/tattoo-shop.ejs)

Style: [/public/styles/portfolio/tattoo-shop/styles.css](/public/styles/portfolio/tattoo-shop/styles.css)

Script: [/public/scripts/portfolio/tattoo-shop/script.js](/public/scripts/portfolio/tattoo-shop/script.js)
