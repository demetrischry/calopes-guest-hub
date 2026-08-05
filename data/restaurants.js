const restaurantsData = [

    /* =================================
       DISCOVER KALLEPEIA
    ================================= */

    {
        name: "Monastiraki Tavern",

        category: "kallepeia",

        badge: "Traditional",

        location: "Kallepeia",

        subtitle: "Greek & Cypriot Cuisine",

        typeIcon: "utensils",

        distance: "2 min",

        description:
            "A welcoming village tavern where you can enjoy authentic Greek and Cypriot flavours just moments from Calopes Suites.",

        image:
            "images/restaurants/monastiraki.jpg",

        mapsLink:
            "https://www.google.com/maps/search/?api=1&query=Monastiraki+Tavern+Kallepeia+Cyprus",

        phone: "",

        website: ""
    },

    {
        name: "Kika's Garden",

        category: "kallepeia",

        badge: "Garden Brunch",

        location: "Kallepeia",

        subtitle: "Homemade Food & Brunch",

        typeIcon: "utensils",

        distance: "3 min",

        description:
            "A peaceful garden setting, perfect for a relaxed breakfast or brunch with homemade dishes and carefully selected local produce.",

        image:
            "images/restaurants/kikas.jpg",

        mapsLink:
            "https://www.google.com/maps/search/?api=1&query=Kika%27s+Garden+Kallepeia+Cyprus",

        phone:
            "+35799459400",

        website: ""
    },

    {
        name: "Taverna Tou Christaki",

        category: "kallepeia",

        badge: "Family Tavern",

        location: "Kallepeia",

        subtitle: "Authentic Cypriot Cuisine",

        typeIcon: "utensils",

        distance: "2 min",

        description:
            "A family-run tavern where traditional recipes and genuine Cypriot hospitality come together in the heart of Kallepeia.",

        image:
            "images/restaurants/christaki.jpg",

        mapsLink:
            "https://www.google.com/maps/search/?api=1&query=Taverna+Tou+Christaki+Kallepeia+Cyprus",

        phone: "",

        website: ""
    },


    /* =================================
       AUTHENTIC CYPRIOT TAVERNS
    ================================= */

    {
        name: "Agora Tavern",

        category: "cypriot-taverns",

        badge: "Cypriot Meze",

        location: "Paphos Old Town",

        subtitle: "Traditional Cypriot Cuisine",

        typeIcon: "utensils",

        distance: "25 min",

        description:
            "A lively traditional tavern in Paphos Old Town, well suited to guests who want to experience a generous Cypriot meze.",

        image:
            "images/restaurants/agora.jpg",

        mapsLink:
            "https://www.google.com/maps/search/?api=1&query=Agora+Tavern+Paphos+Cyprus",

        phone:
            "+35799611817",

        website: ""
    },

    {
        name: "Pagkratios Tavern",

        category: "cypriot-taverns",

        badge: "Traditional Meze",

        location: "Paphos",

        subtitle: "Authentic Cypriot Cuisine",

        typeIcon: "utensils",

        distance: "25 min",

        description:
            "A warm and welcoming tavern offering traditional Cypriot meze and a relaxed local dining experience in Paphos.",

        image:
            "images/restaurants/pagkratios.jpg",

        mapsLink:
            "https://www.google.com/maps/search/?api=1&query=Pagkratios+Tavern+Paphos+Cyprus",

        phone: "",

        website: ""
    },

    {
        name: "Aristo's Tavern",

        category: "cypriot-taverns",

        badge: "Charcoal Grill",

        location: "Tsada",

        subtitle: "Traditional Grill House",

        typeIcon: "utensils",

        distance: "10 min",

        description:
            "A cosy local tavern known for charcoal-grilled specialities, homemade dishes and genuine Cypriot hospitality.",

        image:
            "images/restaurants/aristos.jpg",

        mapsLink:
            "https://www.google.com/maps/search/?api=1&query=Aristo%27s+Tavern+Tsada+Cyprus",

        phone: "",

        website: ""
    },

    {
        name: "Letymbou Tavern",

        category: "cypriot-taverns",

        badge: "Village Cuisine",

        location: "Letymbou",

        subtitle: "Traditional Cypriot Cuisine",

        typeIcon: "utensils",

        distance: "10 min",

        description:
            "A charming village tavern offering homemade Cypriot food in the peaceful surroundings of nearby Letymbou.",

        image:
            "images/restaurants/letymbou.jpg",

        mapsLink:
            "https://www.google.com/maps/search/?api=1&query=Letymbou+Tavern+Cyprus",

        phone:
            "+35726642614",

        website:
            "https://letymboutavern.com/"
    },

    {
        name: "Gerolakkos Tavern",

        category: "cypriot-taverns",

        badge: "Rustic Dining",

        location: "Tsada",

        subtitle: "Traditional Cypriot Cuisine",

        typeIcon: "utensils",

        distance: "12 min",

        description:
            "A relaxed countryside tavern serving traditional dishes in a rustic setting with beautiful views around Tsada.",

        image:
            "images/restaurants/gerolakkos.jpg",

        mapsLink:
            "https://www.google.com/maps/search/?api=1&query=The+Fountain+of+Gerolakkos+Tsada+Cyprus",

        phone:
            "+35799330781",

        website: ""
    },


    /* =================================
       PREMIUM DINING
    ================================= */

    {
        name: "Amaracus",

        category: "premium",

        badge: "Fine Dining",

        location: "Minthis Resort, Tsada",

        subtitle: "Modern Mediterranean Cuisine",

        typeIcon: "utensils",

        distance: "10 min",

        description:
            "A refined dining experience at Minthis Resort, combining creative Mediterranean cuisine with elegant surroundings.",

        image:
            "images/restaurants/amaracus.jpg",

        mapsLink:
            "https://www.google.com/maps/search/?api=1&query=Amaracus+Restaurant+Minthis+Resort+Cyprus",

        phone:
            "+35726842273",

        website:
            "https://www.minthisresort.com/dining/"
    },

    {
        name: "Noiro by the Sea",

        category: "premium",

        badge: "Sea View",

        location: "Paphos Coast",

        subtitle: "Mediterranean Seaside Dining",

        typeIcon: "utensils",

        distance: "35 min",

        description:
            "Stylish seaside dining with beautiful coastal views, a relaxed atmosphere and Mediterranean-inspired flavours.",

        image:
            "images/restaurants/noiro-by-the-sea.jpg",

        mapsLink:
            "https://www.google.com/maps/search/?api=1&query=Noiro+by+the+Sea+Paphos+Cyprus",

        phone: "",

        website: ""
    },

    {
        name: "Duomo Restaurant",

        category: "premium",

        badge: "Italian Cuisine",

        location: "Tombs of the Kings, Paphos",

        subtitle: "Modern Italian Dining",

        typeIcon: "utensils",

        distance: "25 min",

        description:
            "A contemporary Italian restaurant serving freshly prepared pasta, seafood, meat dishes and classic Italian favourites.",

        image:
            "images/restaurants/duomo.jpg",

        mapsLink:
            "https://www.google.com/maps/search/?api=1&query=Duomo+Italian+Restaurant+Paphos+Cyprus",

        phone:
            "+35799473931",

        website:
            "https://www.duomo.com.cy/"
    }

];