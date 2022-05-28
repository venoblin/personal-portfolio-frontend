# Personal-Portfolio
This is my personal web portfolio showcasing my skills as a website developer. 

Technologies used:
* NodeJs
* Express
* EJS
* Html
* Css
* Javascript

# Projects
All of my projects are set up to be inserted as the body of [views/layouts/boilerplate.ejs](views/layouts/boilerplate.ejs),  in the server-side when rendering the page; the project name is passed to the boilerplate so it can be used to get the corresponding stylesheet and script.

Server-side:
```
router.get('/:project', (req, res) => {
  const { project } = req.params;
  
  res.render(`portfolio/${project}`, { project });
});
```
As long as we use the **/public/styles/PROJECT-NAME/style.css** & **/public/scripts/PROJECT-NAME/script.css** file path conventions the layout will grab the correct files for each project.

In our boilerplate file:
```
<link rel="stylesheet" href="/styles/portfolio/<%= project %>/styles.css">
<script src="/scripts/portfolio/<%= project %>/script.js"></script>
```

## Tattoo Shop Mock-Up
Main page: [/views/portfolio/tattoo-shop.ejs](/views/portfolio/tattoo-shop.ejs)

Style: [/public/styles/portfolio/tattoo-shop/styles.css](/public/styles/portfolio/tattoo-shop/styles.css)

Script: [/public/scripts/portfolio/tattoo-shop/script.js](/public/scripts/portfolio/tattoo-shop/script.js)

## Twitter Clone CRUD
Main page: [/views/portfolio/twitter-clone.ejs](/views/portfolio/twitter-clone.ejs)

Users page: [/views/portfolio/twitter-clone/users.ejs](/views/portfolio/twitter-clone/users.ejs)

Profile page: [/views/portfolio/twitter-clone/profile.ejs](/views/portfolio/twitter-clone/profile.ejs)

Edit page: [/views/portfolio/twitter-clone/edit.ejs](/views/portfolio/twitter-clone/edit.ejs)

Style: [/public/styles/portfolio/twitter-clone/styles.css](/public/styles/portfolio/twitter-clone/styles.css)

Script: [/public/scripts/portfolio/twitter-clone/script.js](/public/scripts/portfolio/twitter-clone/script.js)


