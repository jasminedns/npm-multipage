import express from "express";
import {cityGuideArray, natureSpotsArray} from "../data/destinationData.js";

const destinationRouter = express.Router();

destinationRouter.get("/", (req, res) => {
    res.render("pages/template", {
        headTitle: "Destinations",
        pageTitle: "Destinations",
        pageDescription: "Discover the magic of travel with our curated selection of stunning destinations. From ancient ruins that whisper stories of the past to serene temples offering a haven of tranquility, each destination provides a unique and unforgettable experience. Picture yourself basking in the sun on picturesque islands with iconic white-washed buildings and azure waters. Whether you're seeking adventure, relaxation, or cultural enrichment, our travel guide provides all the inspiration you need to embark on your next journey. Let the world be your oyster, and start exploring today!"
    })
})

for(let i = 0; i < cityGuideArray.length; i++){(cityGuideArray[i])}

destinationRouter.get("/city-guide", (req, res) => {
    res.render("pages/template", {
        headTitle: "City Guide",
        pageTitle: "City Guide",
        pageDescription: "Our City Guides offer a captivating journey through the heart of the world's most iconic urban destinations. Each guide is meticulously crafted to highlight the unique charm, culture, and attractions of the city, providing travelers with insightful recommendations and hidden gems. Whether you're interested in historical landmarks, bustling markets, vibrant nightlife, or serene parks, our City Guides ensure you make the most of your visit. Explore local cuisine, uncover intriguing stories, and discover the must-see sights that make each city a memorable adventure. Let our guides be your trusted companion in uncovering the essence of every city.",
        cityGuide: "subPage",
        cityGuideArray: cityGuideArray
    })
})

for(let i = 0; i < natureSpotsArray.length; i++){(natureSpotsArray[i])}

destinationRouter.get("/nature-spots", (req, res) => {
    res.render("pages/template", {
        headTitle: "Nature spots",
        pageTitle: "Nature spots",
        pageDescription: "Our Nature Spots section is your gateway to exploring the world's most breathtaking natural wonders. Whether you're seeking the tranquility of serene forests, the adventure of majestic waterfalls, or the awe of pristine lakes and deserts, we've got you covered. Each nature spot in our guide is carefully selected to showcase the stunning beauty and diverse landscapes that our planet has to offer. From the towering peaks of the Rockies to the vibrant coral reefs of the Great Barrier Reef, embark on a journey to discover the natural treasures that make our world so extraordinary. Let our Nature Spots guide inspire your next outdoor adventure and connect you with the untamed beauty of nature.",
        natureSpot: "subPage",
        natureSpotsArray: natureSpotsArray
    })
})





export default destinationRouter;