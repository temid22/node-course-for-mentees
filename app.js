const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const blogRoutes = require('./routes/blogRoutes');

// express app 
const app = express();

// connect to mongoDB
const dbURI = 'mongodb+srv://temid22:Olumide1@temicluster.rgtxi.mongodb.net/Temid22?retryWrites=true&w=majority'
mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => app.listen(3000))
  .catch((err) => console.log(err));

  // register view engine
app.set('view engine', 'ejs');

// middleware & static files
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

app.use((req, res, next) => {
  res.locals.path = req.path;
  next();
});

// mongoose & mongo tests
// app.get('/add-blog', (req, res) => {
//   const blog = new Blog({
//     title: 'new blog 2',
//     snippet: 'about my new blog',
//     body: 'more about my new blog bla bla blaaaaaa fuck off'
//   })

//   blog.save()
//     .then(result => {
//       res.send(result);
//     })
//     .catch(err => {
//       console.log(err);
//     });
// });

// app.get('/all-blogs', (req, res) => {
//   Blog.find()
//     .then(result => {
//       res.send(result);
//     })
//     .catch(err => {
//       console.log(err);
//     });
// });

// app.get('/single-blog', (req, res) => {
//   Blog.findById('62895ed981b32103244f6141')
//     .then(result => {
//       res.send(result);
//     })
//     .catch(err => {
//       console.log(err);
//     });
// });

//routes
app.get('/', (req, res) => {
    const blogs = [
      {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'},
      {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur'},
      {title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    ];
    res.render('blogs/index', { title: 'Home', blogs });
  });
  
  app.get('/about', (req, res) => {
    res.render('about', { title: 'About' });
  });
  
  // blog routes
app.use('/blogs', blogRoutes);

  
  // 404 page
  app.use((req, res) => {
    res.status(404).render('404', { title: '404' });
  });
