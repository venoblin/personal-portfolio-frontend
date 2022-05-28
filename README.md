# Personal-Portfolio
This is my personal web portfolio showcasing my skills as a website developer. All of my projects are set up to be inserted as the body of [views/layouts/boilerplate.ejs](views/layouts/boilerplate.ejs),  in the server-side when rendering the page; the project name is passed to the boilerplate so it can get the corresponding stylesheat and script.<br/>

Server-side:
```
router.get('/:project', (req, res) => {
  const { project } = req.params;
  
  res.render(`portfolio/${project}`, { project });
});
```


