import express from "express";
import traveltips from "../data/traveltipsData.js";

let packingArray = traveltips.packing;
let safetyArray = traveltips.safety;

const travelTips = express.Router();

travelTips.get("/", (req, res) => {
    res.render("pages/template", {
        headTitle: "Travel Tips",
        pageTitle: "Travel Tips",
        pageDescription: "Our Travel Tips page is your ultimate guide to making the most of your adventures. We cover a wide range of topics to help you travel smarter, safer, and more comfortably. Discover essential packing advice, including what to bring and how to pack efficiently. Learn about safety precautions to take while on the road, such as staying aware of your surroundings and safeguarding your belongings. Get insider tips on navigating different cultures, finding the best local cuisine, and exploring off-the-beaten-path destinations. Whether you're a seasoned traveler or a first-timer, our travel tips are designed to enhance your journey and ensure a memorable experience. Happy travels!",
        tips: "subPage"
    })
})

travelTips.get("/packing-tips", (req, res) => {
    res.render("pages/template", {
        headTitle: "Packing Tips",
        pageTitle: "Packing Tips",
        pageDescription: "Our Packing Tips page offers practical and detailed advice to ensure you are well-prepared for your journey. From versatile clothing and essential travel documents to toiletries, medications, and tech gadgets, we've got you covered. Learn how to pack efficiently and effectively, with tips on layering clothing for varying weather, safeguarding important documents, and organizing your toiletries. Additionally, our recommendations include packing a basic first aid kit, necessary electronics, and a travel adapter. Follow our tips to travel with confidence and ease!",
        packingTips: "subPage",
        packingArray: packingArray
    })
})

travelTips.get("/safety-tips", (req, res) => {
    res.render("pages/template", {
        headTitle: "Safety Tips",
        pageTitle: "Safety Tips",
        pageDescription: "Our Safety Tips page is your go-to resource for staying safe and secure during your travels. From advice on staying aware of your surroundings and avoiding risky areas, to tips on keeping your personal belongings secure and using public transportation safely, we've got you covered. We emphasize the importance of having a backup plan and knowing emergency contact numbers for each destination. Additionally, we provide guidance on staying healthy, such as staying hydrated, practicing good hygiene, and being mindful of local health advisories. Follow our safety tips to ensure a smooth and worry-free journey!",
        SafetyTips: "subPage",
        safetyArray: safetyArray
    })
})

export default travelTips;