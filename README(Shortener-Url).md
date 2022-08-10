# Shortener URL
![Index page about Shortener URL](./public/img/shortener-url.png)

A Shortener URL Demo web application for users that can use this website to shorten all the long URL  
If you are interested in above please try it quickiy!!!

## Features
- Users can paste whose long URL convert to short URL
- Plus, Users can click the COPY button to copy above short URL or directly click the short URL link to redirect original long URL


### Technology
- template engine -> Using template engine to covert files from html-like to html for browser
- router -> Using http GET POST etc.. to do route
- MONGODB -> Using mongoose  help app.js  connect to database

### RESTful 
Compared to previous version, this version use the RESTful design pattern to reconstruction  routes of  app.js

## **install and running steps**

> After downldad or clone this URL of github
１.Use terminal in the project

```properties
cd 'file name'
```

２.install node modules

```properties
npm install
```

３.Set up MongoDB

```js
mongoose.connect('database_URI', { useNewUrlParser: true, useUnifiedTopology: true })
```
４.Run the project
> node
```properties
npm run start
```
> nodemon( if you need)
```properties
npm run dev
```

５.Browse the project on the browser

```
http://localhost:3000
```

If project is running , terminal will output
```
Listening on http://localhost:3000
```
If mongoDB is connecting , terminal will output 
```
mongodb connected
```
