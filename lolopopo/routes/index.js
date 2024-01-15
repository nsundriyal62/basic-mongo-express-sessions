var express = require('express');
var router = express.Router();
const userModel = require("./users");


router.get('/', function(req, res, next) {
  res.cookie("age",19);
  req.session.ban=true;
  res.render('index', { title: 'Naveen' });
});


router.get('/read', function(req, res, next) {
  console.log(req.cookies.age);
  res.send("cookie read");
});

router.get('/checkban', function(req, res) {
  console.log(req.session);
  res.send("console check kar laude");
});

router.get('/create', async function(req, res) { // here we write async because await always written with async
  const createduser= await userModel.create({ //here await is used to make this sync
    username:"naveen",
    age:21,
    name:"nabda"
  });
  res.send(createduser);
});

router.get('/alluser', async function(req, res) {
  let allusers= await userModel.find();
  res.send(allusers);
});


router.get('/alluser', async function(req, res) {
  let allusers= await userModel.findone({username: "harsh"}); // for chossing a particular one
  res.send(allusers);
});


router.get('/delete', async function(req, res) {
   let deleteuser= await userModel.findOneAndDelete({username: "naveen"});
  res.send(deleteuser );
});


router.get('/reset', async function(req, res) {
  await userModel.deleteMany({}); // Remove all documents from the collection
  res.send('Database reset successful');
});


module.exports = router;
