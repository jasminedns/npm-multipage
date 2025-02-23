function destination (name, location, description) {
    this.name = name,
    this.location = location,
    this.description = description
}

const cityGuideArray = [
    new destination("New York City","USA", `The bustling metropolis of New York City offers iconic landmarks such as Times Square, Central Park, 
        and the Statue of Liberty. Experience world-class dining, entertainment, and shopping in the city that never sleeps.`
    ),
    new destination("Sydney","Australia", `Sydney offers stunning coastal views, iconic structures like the Sydney Opera House and Sydney Harbour 
        Bridge, and beautiful beaches such as Bondi Beach. Explore vibrant neighborhoods, enjoy outdoor activities, and soak in the laid-back 
        atmosphere of this captivating city.`
    ),
    new destination("Barcelona","Spain", `Barcelona, a vibrant city known for its art and architecture, features the stunning Sagrada Família, 
        Park Güell, and the bustling La Rambla. Enjoy the Mediterranean atmosphere, delicious tapas, and the lively cultural scene.`
    ),
    new destination("Rio de Janeiro","Brazil", `Rio de Janeiro offers breathtaking landscapes, including the iconic Christ the Redeemer statue and 
        Sugarloaf Mountain. Enjoy the vibrant carnival atmosphere, beautiful beaches, and the rhythm of samba.`
    ),
    new destination("Copenhagen","Denmark", `Copenhagen, known for its charming canals, historic buildings, and modern design, features attractions 
        such as Tivoli Gardens, Nyhavn, and the Little Mermaid statue. Enjoy the city's relaxed atmosphere and innovative cuisine.`
    )
]

const natureSpotsArray = [ 
    new destination("Grand Canyon", "Arizona, USA", `One of the most iconic natural wonders, the Grand Canyon is known for its immense size and 
        stunning geological formations. Visitors can enjoy breathtaking views, hiking, and river rafting. Easily accessible for tourists with 
        numerous viewpoints, hiking trails, and guided tours available. There are options for everyone, from casual visitors to adventurous hikers.`
    ),
    new destination("Great Barrier Reef", "Queensland, Australia", `The world's largest coral reef system, the Great Barrier Reef is renowned for its
        vibrant marine life and crystal-clear waters. It's a paradise for snorkeling, diving, and marine exploration. Tourists can visit through guided 
        snorkeling and diving tours, as well as glass-bottom boat excursions. It's important to choose eco-friendly operators to help protect the reef's 
        delicate ecosystem.`
    ),
    new destination("Amazon Rainforest", "South America (spanning multiple countries)", `The Amazon Rainforest is the largest tropical rainforest in the
        world, home to an incredible diversity of flora and fauna. It's a vital ecosystem and a must-visit for nature enthusiasts. While visiting the 
        Amazon can be challenging due to its remote location and dense jungle, there are various eco-lodges and guided tours available, particularly in 
        countries like Brazil, Peru, and Ecuador. It's crucial to travel with responsible tour operators to minimize environmental impact.`
    ),
    new destination("Victoria Falls", "Border of Zambia and Zimbabwe", `Known as "The Smoke that Thunders," Victoria Falls is one of the largest and most
        famous waterfalls in the world. The sheer power and beauty of the falls make it a breathtaking sight. The falls can be visited from both Zambia 
        and Zimbabwe, with numerous viewpoints, walking trails, and activities like helicopter rides and rafting. The area around the falls is developed 
        for tourism, with plenty of accommodation options.`
    ),
    new destination("Mount Everest", "Border of Nepal and Tibet", `The highest mountain on Earth, Mount Everest attracts climbers and adventurers from
        around the globe. Its towering peak and challenging ascent make it a legendary destination. While scaling Mount Everest is a feat for experienced 
        climbers, the region is also accessible to tourists who want to trek to Everest Base Camp or explore the surrounding Himalayan landscapes. Proper 
        acclimatization and preparation are essential for trekking in high altitudes.`
    )
]

export {cityGuideArray, natureSpotsArray}
