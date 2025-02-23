import express from "express";

const travelTips = express.Router();

travelTips.get("/", (req, res) => {
    res.render("pages/template", {
        headTitle: "Travel Tips"
    })
})

export default travelTips;