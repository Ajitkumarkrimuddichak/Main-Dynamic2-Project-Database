//vvi project hai youtub Learn Code With ka video hai
const express = require("express");
const app = express();
const hbs = require("hbs")
const mongoose = require("mongoose")
const bodyParser = require('body-parser')
const routes = require('./routes/main')
const Detail = require("./models/Detail")
const Slider = require("./models/Slider")
const Service = require("./models/Service")

//body-parser npm packege to get data from Frented page
app.use(bodyParser.urlencoded({
    extended:true
}))

//static/css/style.css
app.use('/static', express.static("public"))

app.use('', routes)

//template engine
app.set('view engine', 'hbs')
app.set("views", "views")
hbs.registerPartials("views/partials")

//db connections
mongoose.connect("mongodb://localhost/website_tut", () => {
    console.log("db connected")
    //One time only run and store data in mongoose dubara data nahi jaye db me isi liye comment
    // Detail.create({
    //     brandName: "Karma Lab",
    //     brandIconUrl: "https://lh3.googleusercontent.com/p/AF1QipMb0lzH5vbx5XogJs9HDRSvMTMYXeBXrAtglzBt=s680-w680-h510",
    //     links: [
    //         {
    //             label: "Home",
    //             url: "/"
    //         },
    //         {
    //             label: "Services",
    //             url: "/services"
    //         },
    //         {
    //             label: "Gallery",
    //             url: "/gallery"
    //         },
    //         {
    //             label: "About",
    //             url: "/about"
    //         },
    //         {
    //             label: "Contact Us",
    //             url: "/contact-us"
    //         },
    //     ]
    //})



    // slider  code one time run only karate hai dada base me save karane ke liye data
    // Slider.create([
    //     {
    //         title:'Learn JavaScript in very easy manner',
    //         subTitle:'JavaScript is one of the most popular programmming Language',
    //         imageUrl:"/static/images/img.png"
    //     },
    //     {
    //         title:'Learn PHP in very easy manner',
    //         subTitle:'JavaScript is one of the most popular programmming Language',
    //         imageUrl:"/static/images/20191209_222411.jpg"
    //     },
    //     {
    //         title:'Learn Node.js  in very easy manner',
    //         subTitle:'JavaScript is one of the most popular programmming Language',
    //         imageUrl:"/static/images/DSC_0016.JPG"
    //     },
    // ])


    // services cards code one time run only karate hai dada base me save karane ke liye data
    // Service.create([
    //     {
    //         icon:'fab fa-accusoft',
    //         title:'Provide Best Courses',
    //         description:'We proivde courses thst helps our student in learning',
    //         linkText:'https://www.learncodewithdurgesh.com',
    //         link:'Check'
    //     },
    //     {
    //         icon:'fab fa-affiliatetheme',
    //         title:'Learn Project Courses',
    //         description:'We proivde courses thst helps our student in learning',
    //         linkText:'https://www.learncodewithdurgesh.com',
    //         link:'Learn'
    //     },
    //     {
    //         icon:'fab fa-accusoft',
    //         title:'Provide Best Courses',
    //         description:'We proivde courses thst helps our student in learning',
    //         linkText:'https://www.learncodewithdurgesh.com',
    //         link:'Check'
    //     }  
    // ])


})

app.listen(process.env.PORT | 5556, () => {
    console.log("server running port number 5556");
});