import express from "express";
import destinationRouter from "./routes/destinations.js";
import travelTips from "./routes/travel-tips.js"
import * as path from "path";

const app = express();
const PORT = 3003;
const __dirName = path.resolve();

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirName, "public")));


app.get("/", (req, res) => {
    res.render("pages/index.ejs", {
        headTitle: "home",
        backgroundImage: "/images/background/homepage.jpg",
        romeImage: "/images/rome.jpg",
        kyotoImage: "/images/kyoto.jpg",
        santoriniImage: "/images/santorini.jpg",
    })
})

app.use("/destinations", destinationRouter)
app.use("/travel-tips", travelTips)

app.listen(PORT, () => console.log(`Listening to port ${PORT}`));


