const { request } = require("express");
const { response } = require("express");
const express = require("express");
const { route } = require('express/lib/application');
const async = require("hbs/lib/async");
const Detail = require("../models/Detail");
const Service = require("../models/Service");
const Slider = require("../models/Slider");
const Contact =require("../models/Contact");


const routes = express.Router()

routes.get("/", async (req,res) => {
    //get data in mongoose se(data la rahe hai) object aa raha hai use pass kar rahe hai view pe  
   const details = await Detail.findOne({"_id":"637927b22fef59d00a804174"})
   //console.log(details);

   //slider ka code
   const slides = await Slider.find()
  // console.log(slides)

 // get data service
 const services = await Service.find()
 //console.log(services)



    res.render("index",{
        //niche vala se line se view pe data jayega
        details:details,
        //slider image or tilel frent page pe bhej diye hai
        slides:slides,
        //servic page data
        services:services
    });
});


routes.get('/gallery', async (req,res) => {
    const details = await Detail.findOne({"_id":"637927b22fef59d00a804174"});
    res.render("gallery",{
        details:details,
    });
});

//this is contact form
routes.post("/process-contact-form", async(request,response) =>{
    console.log("fome is submited")
    console.log(request.body)
    //save the data to db
    try{
        const data =await Contact.create(request.body)
        console.log(data)
        response.redirect("/")

    }catch(e)
    {
        console.log(e)
        response.redirect("/")
    }
})


module.exports = routes;