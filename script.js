// Attractions data by city
const attractionsData = {
    Turin: [
        { name: "Mole Antonelliana", type: "Museum", description: "Iconic symbol of Turin, housing the National Cinema Museum with stunning city views from the top.", address: "Via Montebello, 20" },
        { name: "Royal Palace of Turin", type: "Historic Site", description: "Former residence of the House of Savoy, now a UNESCO World Heritage site with opulent royal apartments.", address: "Piazzetta Reale, 1" },
        { name: "Egyptian Museum", type: "Museum", description: "One of the world's most important collections of Egyptian antiquities outside of Cairo.", address: "Via Accademia delle Scienze, 6" },
        { name: "Palazzo Madama", type: "Museum", description: "Baroque palace housing the Civic Museum of Ancient Art with collections spanning from the Middle Ages to the Baroque period.", address: "Piazza Castello" },
        { name: "Basilica of Superga", type: "Religious Site", description: "Baroque basilica on a hilltop offering panoramic views of Turin and the Alps.", address: "Strada della Basilica di Superga, 73" },
        { name: "Cathedral of Saint John the Baptist", type: "Religious Site", description: "Renaissance cathedral housing the famous Shroud of Turin (replica on display).", address: "Piazza San Giovanni" },
        { name: "Valentino Park", type: "Park", description: "Large public park along the Po River, perfect for walking, cycling, and picnics.", address: "Corso Massimo d'Azeglio" },
        { name: "Medieval Village", type: "Historic Site", description: "Reconstructed medieval village within Valentino Park, created for the 1884 Italian General Exhibition.", address: "Parco del Valentino" },
        { name: "Lingotto", type: "Cultural Venue", description: "Former Fiat factory transformed into a modern complex with shopping, hotels, and the Pinacoteca Giovanni e Marella Agnelli.", address: "Via Nizza, 230" },
        { name: "National Automobile Museum", type: "Museum", description: "Extensive collection of automobiles showcasing the history of Italian and international car manufacturing.", address: "Corso Unità d'Italia, 40" },
        { name: "Piazza Castello", type: "Historic Site", description: "Main square of Turin, surrounded by important buildings including the Royal Palace and Palazzo Madama.", address: "Piazza Castello" },
        { name: "Via Roma", type: "Shopping", description: "Elegant shopping street connecting Piazza Castello to Piazza Carlo Felice, lined with luxury boutiques.", address: "Via Roma" },
        { name: "Porta Palatina", type: "Historic Site", description: "Ancient Roman gate, one of the best-preserved Roman structures in northern Italy.", address: "Via Porta Palatina" },
        { name: "Church of San Lorenzo", type: "Religious Site", description: "Baroque church with stunning dome and elaborate interior decoration.", address: "Via Palazzo di Città, 4" },
        { name: "Museo Nazionale del Risorgimento", type: "Museum", description: "Museum dedicated to the Italian unification movement, located in the historic Palazzo Carignano.", address: "Via Accademia delle Scienze, 5" },
        { name: "Palazzo Carignano", type: "Historic Site", description: "Baroque palace that was the birthplace of the first King of Italy and seat of the first Italian Parliament.", address: "Via Accademia delle Scienze, 5" },
        { name: "Villa della Regina", type: "Historic Site", description: "Baroque villa and gardens, former residence of the Savoy queens, with beautiful terraced gardens.", address: "Strada Santa Margherita, 79" },
        { name: "Castello del Valentino", type: "Historic Site", description: "17th-century castle in Valentino Park, now housing the Architecture Faculty of the Polytechnic University.", address: "Viale Mattioli, 39" },
        { name: "Museo della Sindone", type: "Museum", description: "Museum dedicated to the Shroud of Turin, exploring its history and scientific studies.", address: "Via San Domenico, 28" },
        { name: "Piazza San Carlo", type: "Historic Site", description: "Elegant square known as the 'drawing room of Turin', surrounded by historic cafes and palaces.", address: "Piazza San Carlo" },
        { name: "GAM - Modern Art Gallery", type: "Museum", description: "Gallery featuring Italian and international modern and contemporary art from the 19th century to today.", address: "Via Magenta, 31" },
        { name: "Museo Pietro Micca", type: "Museum", description: "Underground museum exploring Turin's military history and the siege of 1706.", address: "Via Guicciardini, 7a" },
        { name: "Borgo Medievale", type: "Historic Site", description: "Medieval village replica in Valentino Park, featuring artisan workshops and period buildings.", address: "Viale Enrico Millo" },
        { name: "Palazzo Barolo", type: "Historic Site", description: "Baroque palace with opulent interiors, now hosting cultural events and exhibitions.", address: "Via delle Orfane, 7" },
        { name: "Gran Madre di Dio", type: "Religious Site", description: "Neoclassical church on the banks of the Po River, inspired by the Pantheon in Rome.", address: "Piazza Gran Madre di Dio" },
        { name: "Monte dei Cappuccini", type: "Viewpoint", description: "Hilltop location offering spectacular panoramic views of Turin and the surrounding Alps.", address: "Piazzale Monte dei Cappuccini" },
        { name: "Museo di Antichità", type: "Museum", description: "Archaeological museum showcasing artifacts from prehistoric times to the late Roman period.", address: "Piazzetta Reale, 1" },
        { name: "Palazzo Reale Gardens", type: "Park", description: "Beautiful royal gardens behind the Royal Palace, perfect for a peaceful stroll.", address: "Piazzetta Reale, 1" },
        { name: "Mercato di Porta Palazzo", type: "Market", description: "Largest open-air market in Europe, offering fresh produce, local specialties, and diverse international foods.", address: "Piazza della Repubblica" },
        { name: "Reggia di Venaria Reale", type: "Historic Site", description: "Magnificent royal residence and gardens, one of the largest palaces in Europe, located just outside Turin.", address: "Piazza della Repubblica, 4, Venaria Reale" },
        { name: "Juventus Museum", type: "Museum", description: "Museum dedicated to the history of Juventus Football Club, located at the Allianz Stadium.", address: "Corso Gaetano Scirea, 50" },
        { name: "Allianz Stadium", type: "Sports Venue", description: "Modern football stadium home to Juventus FC, with guided tours available.", address: "Corso Gaetano Scirea, 50" },
        { name: "Parco della Pellerina", type: "Park", description: "Large urban park with sports facilities, playgrounds, and walking paths.", address: "Corso Appio Claudio" },
        { name: "Museo Lavazza", type: "Museum", description: "Interactive museum dedicated to coffee culture and the history of Lavazza, located in the company's headquarters.", address: "Via Bologna, 32" },
        { name: "Palazzo Chiablese", type: "Historic Site", description: "Baroque palace part of the Royal Palace complex, hosting temporary exhibitions.", address: "Piazzetta Reale, 1" },
        { name: "Cappella della Sacra Sindone", type: "Religious Site", description: "Baroque chapel designed by Guarino Guarini, built to house the Shroud of Turin.", address: "Piazza San Giovanni" },
        { name: "Museo di Scienze Naturali", type: "Museum", description: "Natural history museum with extensive collections of minerals, fossils, and zoological specimens.", address: "Via Giolitti, 36" },
        { name: "Parco del Valentino - River Po", type: "Park", description: "Scenic area along the Po River with walking and cycling paths, perfect for outdoor activities.", address: "Corso Massimo d'Azeglio" },
        { name: "Palazzo dell'Accademia delle Scienze", type: "Historic Site", description: "Historic building housing the Egyptian Museum and the Academy of Sciences.", address: "Via Accademia delle Scienze, 6" },
        { name: "Teatro Regio", type: "Cultural Venue", description: "Historic opera house, one of Italy's most important theaters, hosting opera and ballet performances.", address: "Piazza Castello, 215" }
    ]
};

// Restaurant data by city
const restaurantsData = {
    Leipzig: [
        { name: "Auerbachs Keller Leipzig", cuisine: "Deutsch", rating: 4.4, ratingCount: 9288, priceRange: "20–30 €", address: "Grimmaische Str. 2-4" },
        { name: "Ratskeller Leipzig", cuisine: "Deutsch", rating: 4.6, ratingCount: 5325, priceRange: "20–40 €", address: "Lotterstraße 1" },
        { name: "L'Osteria Leipzig", cuisine: "Italienisch", rating: 4.4, ratingCount: 7675, priceRange: "20–30 €", address: "Martin-Luther-Ring 12" },
        { name: "Wenzel Leipzig", cuisine: "Tschechisch", rating: 4.4, ratingCount: 2593, priceRange: "20–30 €", address: "Kleine Fleischergasse 8" },
        { name: "Restaurant Cafe Madrid", cuisine: "Spanisch", rating: 4.4, ratingCount: 4457, priceRange: "20–40 €", address: "Klostergasse 3-5" },
        { name: "Weinstock", cuisine: "Deutsch", rating: 4.6, ratingCount: 927, priceRange: "€€", address: "Markt 7" },
        { name: "Restaurant Hà Nội", cuisine: "Vietnamesisch", rating: 4.7, ratingCount: 2553, priceRange: "10–20 €", address: "Brühl 54" },
        { name: "Apels Garten", cuisine: "Deutsch", rating: 4.5, ratingCount: 859, priceRange: "20–30 €", address: "Kolonadenstraße 2" },
        { name: "Restaurant Alfa", cuisine: "Griechisch", rating: 4.8, ratingCount: 2984, priceRange: "20–30 €", address: "Ratsfreischulstraße 8-10" },
        { name: "Macis Leipzig - Restaurant", cuisine: "Bio", rating: 4.8, ratingCount: 480, priceRange: "€€", address: "Markgrafenstraße 10" },
        { name: "Gaststätte Kollektiv", cuisine: "Deutsch", rating: 4.6, ratingCount: 2638, priceRange: "10–20 €", address: "Karl-Liebknecht-Straße 72" },
        { name: "Zur Pleißenburg / Leipzig", cuisine: "Deutsch", rating: 4.4, ratingCount: 1317, priceRange: "10–20 €", address: "Ratsfreischulstraße 2" },
        { name: "An Nam - Leipzig", cuisine: "Vietnamesisch", rating: 4.5, ratingCount: 1279, priceRange: "10–20 €", address: "Gottschedstraße 13" },
        { name: "Mein Leipzig", cuisine: "Europäisch", rating: 4.7, ratingCount: 275, priceRange: "20–30 €", address: "Käthe-Kollwitz-Straße 71" },
        { name: "Lerchennest Leipzig", cuisine: "Deutsch", rating: 4.3, ratingCount: 1281, priceRange: "20–30 €", address: "Kleine Fleischergasse 6" },
        { name: "ALEX Leipzig", cuisine: "Deutsch", rating: 4.2, ratingCount: 4890, priceRange: "20–30 €", address: "Naschmarkt 3" },
        { name: "HANS IM GLÜCK - LEIPZIG Augustusplatz", cuisine: "Hamburger", rating: 4.4, ratingCount: 8126, priceRange: "20–30 €", address: "Augustuspl. 14" },
        { name: "Kartoffelhaus N°1", cuisine: "Deutsch", rating: 4.4, ratingCount: 2856, priceRange: "20–30 €", address: "Barfußgäßchen 12" },
        { name: "PAULANER Leipzig", cuisine: "Deutsch", rating: 4.2, ratingCount: 1964, priceRange: "20–30 €", address: "Klostergasse 5" },
        { name: "Max Enk", cuisine: "Deutsch", rating: 4.5, ratingCount: 694, priceRange: "€€€", address: "Neumarkt 9" },
        { name: "C'est la vie Französisches Gourmet Restaurant - Leipzig", cuisine: "Französisch", rating: 4.7, ratingCount: 339, priceRange: "Mehr als 100 €", address: "Zentralstraße 7" },
        { name: "Bayerischer Bahnhof Gasthaus & Gosebrauerei Leipzig", cuisine: "Deutsch", rating: 4.4, ratingCount: 2693, priceRange: "20–30 €", address: "Bayrischer Pl. 1" },
        { name: "Panorama Tower - Plate of Art", cuisine: "Deutsch", rating: 4.3, ratingCount: 3369, priceRange: "€€€", address: "Augustuspl. 9" },
        { name: "SYNDEO Restaurant Leipzig", cuisine: "Deutsch", rating: 4.6, ratingCount: 321, priceRange: "40–50 €", address: "Gottschedstraße 1" },
        { name: "Zchảcá, vietnamesische Esskultur", cuisine: "Vietnamesisch", rating: 4.6, ratingCount: 1573, priceRange: "20–30 €", address: "Markgrafenstraße 7" },
        { name: "Leos Brasserie", cuisine: "Brasserie", rating: 4.3, ratingCount: 7299, priceRange: "10–20 €", address: "Reichsstraße 20" },
        { name: "Restaurant Zunftkeller", cuisine: "Deutsch", rating: 4.4, ratingCount: 1066, priceRange: "20–30 €", address: "Dresdner Str. 11-13" },
        { name: "Toskana Leipzig", cuisine: "Italienisch", rating: 4.3, ratingCount: 1739, priceRange: "20–30 €", address: "Nikolaistraße 31" },
        { name: "PILOT", cuisine: "Deutsch", rating: 4.4, ratingCount: 1354, priceRange: "20–30 €", address: "Bosestraße 1" },
        { name: "Trattoria No.1", cuisine: "Italienisch", rating: 4.8, ratingCount: 379, priceRange: "€€€", address: "Waldstraße 64" },
        { name: "Bella Italia Leipzig", cuisine: "Italienisch", rating: 4.5, ratingCount: 500, priceRange: "10–20 €", address: "Nikolaistraße 16" },
        { name: "Augustiner Am Markt", cuisine: "Bayerisch", rating: 4.2, ratingCount: 4849, priceRange: "20–30 €", address: "Markt 5-6" },
        { name: "Andria", cuisine: "Italienisch", rating: 4.3, ratingCount: 2775, priceRange: "20–30 €", address: "Nikolaistraße 22" },
        { name: "Schiller Restaurant & Cafe GmbH", cuisine: "Türkisch", rating: 4.6, ratingCount: 1487, priceRange: "10–20 €", address: "Schillerstraße 3" },
        { name: "\"Phố Việt\" Restaurant & Bar", cuisine: "Vietnamesisch", rating: 4.4, ratingCount: 1114, priceRange: "10–20 €", address: "Katharinenstraße 15" },
        { name: "Gohliser Wirtschaft", cuisine: "Deutsch", rating: 4.8, ratingCount: 920, priceRange: "20–30 €", address: "Gohliser Str. 20" },
        { name: "Zills Tunnel Restaurantbetriebs GmbH", cuisine: "Deutsch", rating: 4.1, ratingCount: 1061, priceRange: "20–30 €", address: "Barfußgäßchen 9" },
        { name: "VAPIANO Leipzig", cuisine: "Italienisch", rating: 4.2, ratingCount: 5620, priceRange: "10–20 €", address: "Augustuspl. 11" },
        { name: "Letterman Bar & Grill Leipzig", cuisine: "Grill", rating: 4.4, ratingCount: 1228, priceRange: "€€", address: "Gottschedstraße 4" },
        { name: "Piccola Italia Leipzig", cuisine: "Italienisch", rating: 4.7, ratingCount: 710, priceRange: "20–30 €", address: "Rosentalgasse 12" },
        { name: "Biermännchen Restaurant Food&Drinks", cuisine: "Deutsch", rating: 4.9, ratingCount: 1236, priceRange: "20–30 €", address: "Arthur-Hoffmann-Straße 111" },
        { name: "MITO Restaurant", cuisine: "Asiatisch", rating: 4.7, ratingCount: 1085, priceRange: "20–30 €", address: "Zschortauer Str 68" },
        { name: "Lutter & Wegner Leipzig", cuisine: "Deutsch", rating: 4.4, ratingCount: 276, priceRange: "20–30 €", address: "Dittrichring 8" },
        { name: "FUZO Leipzig", cuisine: "Asiatisch", rating: 4.7, ratingCount: 507, priceRange: "20–30 €", address: "Industriestraße 37" },
        { name: "Wagners Restaurant u. Weinwirtschaft", cuisine: "Deutsch", rating: 4.7, ratingCount: 527, priceRange: "€€", address: "Richard-Wagner-Platz 1" },
        { name: "Olea", cuisine: "Mediterran", rating: 4.6, ratingCount: 1294, priceRange: "20–30 €", address: "Dreilindenstraße 1" },
        { name: "Viet Village", cuisine: "Asiatisch", rating: 4.5, ratingCount: 1525, priceRange: "20–30 €", address: "Grassistraße 12" },
        { name: "Lulu Lottenstein Restaurant & Bar", cuisine: "Deutsch", rating: 4.8, ratingCount: 688, priceRange: "20–30 €", address: "Karl-Liebknecht-Straße 63" },
        { name: "endless", cuisine: "Deutsch", rating: 4.4, ratingCount: 1369, priceRange: "20–30 €", address: "Brühl 24" },
        { name: "Stella Ristorante", cuisine: "Italienisch", rating: 4.8, ratingCount: 510, priceRange: "20–30 €", address: "Karl-Liebknecht-Straße 57" },
        { name: "Gasthaus Barthels Hof", cuisine: "Deutsch", rating: 4.3, ratingCount: 1101, priceRange: "20–30 €", address: "Hainstraße 1" },
        { name: "\"LA GROTTA\" PIZZERIA - Ristorante - Eis", cuisine: "Italienisch", rating: 4.8, ratingCount: 2614, priceRange: "20–30 €", address: "Ratsfreischulstraße 8" },
        { name: "Umaii Ramenbar Leipzig", cuisine: "Japanisch", rating: 4.4, ratingCount: 2981, priceRange: "20–30 €", address: "Klostergasse 7-9" },
        { name: "Planerts", cuisine: "Deutsch", rating: 4.7, ratingCount: 307, priceRange: "Mehr als 100 €", address: "Ritterstraße 23" },
        { name: "MIO Restaurant Leipzig", cuisine: "Mediterran", rating: 4.4, ratingCount: 381, priceRange: "10–20 €", address: "Beethovenstraße 21" },
        { name: "IMPERII", cuisine: "Deutsch", rating: 4.6, ratingCount: 1225, priceRange: "€€€", address: "Brühl 72" },
        { name: "Mückenschlösschen", cuisine: "Deutsch", rating: 4.3, ratingCount: 2194, priceRange: "20–30 €", address: "Waldstraße 86" },
        { name: "MÜNSTERS", cuisine: "Deutsch", rating: 4.7, ratingCount: 487, priceRange: "€€€", address: "Platnerstraße 13" },
        { name: "Hoshi Japanese Restaurant", cuisine: "Japanisch", rating: 4.5, ratingCount: 1126, priceRange: "20–30 €", address: "Ratsfreischulstraße 6" },
        { name: "La Cosita Restaurant & Bar", cuisine: "Kubanisch", rating: 4.5, ratingCount: 1242, priceRange: "20–30 €", address: "Karl-Liebknecht-Straße 89" },
        { name: "Vacay - modern asian fusion", cuisine: "Asiatisch", rating: 4.7, ratingCount: 528, priceRange: "10–20 €", address: "Jahnallee 29" },
        { name: "Schaarschmidts Restaurant", cuisine: "Deutsch", rating: 4.7, ratingCount: 553, priceRange: "€€€", address: "Coppistraße 32" },
        { name: "Il Mondo Leipzig", cuisine: "Deutsch", rating: 4.5, ratingCount: 494, priceRange: "10–20 €", address: "Gutenbergpl. 1 a" },
        { name: "Enchilada Leipzig", cuisine: "Mexikanisch", rating: 4.1, ratingCount: 3696, priceRange: "20–30 €", address: "Richard-Wagner-Platz 1" },
        { name: "Elliniki Griechisches Restaurant", cuisine: "Griechisch", rating: 4.3, ratingCount: 1820, priceRange: "20–30 €", address: "Ladenzeile am Sachsenplatz, Reichsstraße 18" },
        { name: "Marokkanisches Restaurant Leipzig", cuisine: "Marokkanisch", rating: 4.6, ratingCount: 827, priceRange: "10–20 €", address: "Dresdner Str. 24" },
        { name: "Don Camillo & Peppone", cuisine: "Italienisch", rating: 4.6, ratingCount: 702, priceRange: "20–30 €", address: "Barfußgäßchen 11" },
        { name: "Maison Viet - Sushi Bar and more", cuisine: "Vietnamesisch", rating: 4.5, ratingCount: 1007, priceRange: "20–30 €", address: "Gottschedstraße 4" },
        { name: "Burgerheart Leipzig", cuisine: "Hamburger", rating: 4.3, ratingCount: 2621, priceRange: "10–20 €", address: "Gottschedstraße 11" },
        { name: "Brauhaus an der Thomaskirche", cuisine: "Bayerisch", rating: 3.9, ratingCount: 4342, priceRange: "20–30 €", address: "Thomaskirchhof 3-5" },
        { name: "PRIME BURGER LEIPZIG", cuisine: "Hamburger", rating: 4.1, ratingCount: 1733, priceRange: "10–20 €", address: "Große Fleischergasse 4" },
        { name: "ADRIANO RESTAURANT", cuisine: "Italienisch", rating: 4.8, ratingCount: 546, priceRange: "10–20 €", address: "Zschochersche Str. 35" },
        { name: "Gopalast Leipzig", cuisine: "Asiatisch", rating: 4.4, ratingCount: 7216, priceRange: "30–40 €", address: "Zschochersche Str. 82A" },
        { name: "PETER PANE Burgergrill & Bar", cuisine: "Hamburger", rating: 4.3, ratingCount: 6097, priceRange: "20–30 €", address: "Katharinenstraße 12" },
        { name: "SHIKI - Klostergasse 18", cuisine: "Sushi", rating: 4.7, ratingCount: 1822, priceRange: "€€", address: "Klostergasse 18" },
        { name: "HUWA - 100 Wasser Leipzig", cuisine: "Deutsch", rating: 4.6, ratingCount: 1362, priceRange: "20–30 €", address: "Barfußgäßchen 15 Ecke, Dittrichring" },
        { name: "Zenchi Asian Restaurant Leipzig", cuisine: "Asiatisch", rating: 4.3, ratingCount: 199, priceRange: "20–30 €", address: "Nikolaistraße 1" },
        { name: "Indian Crown", cuisine: "Indisch", rating: 4.2, ratingCount: 1577, priceRange: "20–30 €", address: "Reichsstraße 15" },
        { name: "Kaiserbad", cuisine: "Deutsch", rating: 4.2, ratingCount: 2597, priceRange: "20–30 €", address: "Karl-Heine-Straße 93" },
        { name: "OUAI - Simply Vegan", cuisine: "Vegan", rating: 4.7, ratingCount: 631, priceRange: "20–30 €", address: "Münzgasse 18-20" },
        { name: "Kuultivo", cuisine: "Deutsch", rating: 4.8, ratingCount: 199, priceRange: "Mehr als 100 €", address: "Könneritzstraße 24" },
        { name: "\"Das Alte Rathaus\" - Restaurant", cuisine: "Deutsch", rating: 3.7, ratingCount: 483, priceRange: "20–30 €", address: "Markt 1" },
        { name: "Glashaus im Clarapark", cuisine: "Deutsch", rating: 4.5, ratingCount: 3666, priceRange: "20–30 €", address: "Karl-Tauchnitz-Straße 26" },
        { name: "Schnizz", cuisine: "Deutsch", rating: 4.3, ratingCount: 2071, priceRange: "10–20 €", address: "Lützner Str. 11" },
        { name: "La Piazza Gastronomie GmbH", cuisine: "Italienisch", rating: 3.9, ratingCount: 431, priceRange: "20–30 €", address: "Burgpl. 2" },
        { name: "Barfusz", cuisine: "Deutsch", rating: 4.5, ratingCount: 3056, priceRange: "20–30 €", address: "Markt 9" },
        { name: "Pata Negra", cuisine: "Spanisch", rating: 4.3, ratingCount: 988, priceRange: "20–30 €", address: "Karl-Liebknecht-Straße 75" },
        { name: "Ouzeri Was.Kost.Das", cuisine: "Griechisch", rating: 4.8, ratingCount: 884, priceRange: "20–30 €", address: "Nonnenstraße 5D" },
        { name: "Steaktrain", cuisine: "Steak", rating: 4.7, ratingCount: 803, priceRange: "€€€", address: "Richard-Wagner-Straße 7" },
        { name: "Maharadscha Indisches Restaurant", cuisine: "Indisch", rating: 4.7, ratingCount: 748, priceRange: "20–30 €", address: "Waldstraße 5" },
        { name: "Russisches Restaurant Katharina", cuisine: "Russisch", rating: 4.5, ratingCount: 450, priceRange: "20–30 €", address: "Georg-Schwarz-Straße 176" },
        { name: "Killiwilly", cuisine: "Irish Pub", rating: 4.5, ratingCount: 2867, priceRange: "10–20 €", address: "Karl-Liebknecht-Straße 44" },
        { name: "Café Yellowbrasil - Hotel, Frühstück & Bäckerei", cuisine: "Brasilianisch", rating: 4.7, ratingCount: 706, priceRange: "10–20 €", address: "am Apartment Central Hotel, Pfaffendorfer Str. 4-10" },
        { name: "Damaskus Restaurant Leipzig", cuisine: "Syrisch", rating: 4.8, ratingCount: 516, priceRange: "10–20 €", address: "Eisenbahnstraße 6" },
        { name: "Hacienda Las Casas im Zoo Leipzig", cuisine: "Südamerikanisch", rating: 4.0, ratingCount: 1439, priceRange: "10–20 €", address: "Pfaffendorfer Str. 29" },
        { name: "Restaurant Palmensaal", cuisine: "Deutsch", rating: 4.1, ratingCount: 544, priceRange: "10–20 €", address: "Zoo Leipzig, Pfaffendorfer Str. 29" },
        { name: "Fratelli Pastabar Leipzig", cuisine: "Italienisch", rating: 4.7, ratingCount: 506, priceRange: "€€", address: "Könneritzstraße 59" },
        { name: "Restaurant Dubrovnik", cuisine: "Kroatisch", rating: 4.6, ratingCount: 654, priceRange: "20–30 €", address: "Stuttgarter Allee 29" },
        { name: "Don Giovanni Leipzig", cuisine: "Italienisch", rating: 4.5, ratingCount: 1032, priceRange: "€€", address: "Hotel mit italienischem Restaurant" },
        { name: "Auszeit Cafe - Frühstück/Brunch & Pastabar", cuisine: "Deutsch", rating: 4.6, ratingCount: 563, priceRange: "10–20 €", address: "Karl-Liebknecht-Straße 1A" },
        { name: "Restaurant Herkules", cuisine: "Griechisch", rating: 4.6, ratingCount: 2056, priceRange: "20–30 €", address: "Erich-Köhn-Straße 24" },
        { name: "Stadtpfeiffer Restaurant im Gewandhaus", cuisine: "Deutsch", rating: 4.8, ratingCount: 97, priceRange: "Mehr als 100 €", address: "Gewandhaus zu Leipzig, Augustuspl. 8" },
        { name: "Café Luise", cuisine: "Deutsch", rating: 4.3, ratingCount: 2677, priceRange: "10–20 €", address: "Bosestraße 4" },
        { name: "Rizzi Pizzeria", cuisine: "Italienisch", rating: 4.3, ratingCount: 2635, priceRange: "10–20 €", address: "Katharinenstraße 2" },
        { name: "\"Chinas Welt\" kulinarisches Restaurant", cuisine: "Chinesisch", rating: 4.3, ratingCount: 843, priceRange: "20–30 €", address: "Dohnanyistraße 13" },
        { name: "Restaurant Michaelis", cuisine: "Deutsch", rating: 4.7, ratingCount: 67, priceRange: "20–30 €", address: "Paul-Gruner-Straße 44" },
        { name: "Ramen 1974", cuisine: "Japanisch", rating: 4.4, ratingCount: 920, priceRange: "10–20 €", address: "Karl-Liebknecht-Straße 97" },
        { name: "Vietnamesisches Bistro „Hoa Sen\" in Leipzig", cuisine: "Asiatisch", rating: 4.8, ratingCount: 69, priceRange: "1–10 €", address: "Eisenbahnstraße 29" },
        { name: "BÀTU", cuisine: "Vietnamesisch", rating: 4.5, ratingCount: 435, priceRange: "10–20 €", address: "Gottschedstraße 11" }
    ]
};

// Cities data for Germany (100 biggest cities)
const citiesData = {
    germany: [
        { name: "Berlin", population: 3669491, rank: 1 },
        { name: "Hamburg", population: 1841179, rank: 2 },
        { name: "Munich", population: 1488202, rank: 3 },
        { name: "Cologne", population: 1083498, rank: 4 },
        { name: "Frankfurt am Main", population: 753056, rank: 5 },
        { name: "Stuttgart", population: 626275, rank: 6 },
        { name: "Düsseldorf", population: 619294, rank: 7 },
        { name: "Dortmund", population: 587696, rank: 8 },
        { name: "Essen", population: 582624, rank: 9 },
        { name: "Leipzig", population: 587857, rank: 10 },
        { name: "Bremen", population: 566573, rank: 11 },
        { name: "Dresden", population: 554649, rank: 12 },
        { name: "Hannover", population: 534049, rank: 13 },
        { name: "Nuremberg", population: 518365, rank: 14 },
        { name: "Duisburg", population: 495152, rank: 15 },
        { name: "Bochum", population: 364628, rank: 16 },
        { name: "Wuppertal", population: 354382, rank: 17 },
        { name: "Bielefeld", population: 333786, rank: 18 },
        { name: "Bonn", population: 327258, rank: 19 },
        { name: "Münster", population: 315293, rank: 20 },
        { name: "Karlsruhe", population: 313092, rank: 21 },
        { name: "Mannheim", population: 315554, rank: 22 },
        { name: "Augsburg", population: 295135, rank: 23 },
        { name: "Wiesbaden", population: 278342, rank: 24 },
        { name: "Gelsenkirchen", population: 260126, rank: 25 },
        { name: "Mönchengladbach", population: 261454, rank: 26 },
        { name: "Braunschweig", population: 248292, rank: 27 },
        { name: "Chemnitz", population: 243521, rank: 28 },
        { name: "Kiel", population: 247441, rank: 29 },
        { name: "Aachen", population: 247380, rank: 30 },
        { name: "Halle (Saale)", population: 238061, rank: 31 },
        { name: "Magdeburg", population: 237565, rank: 32 },
        { name: "Freiburg im Breisgau", population: 230241, rank: 33 },
        { name: "Krefeld", population: 227417, rank: 34 },
        { name: "Lübeck", population: 216253, rank: 35 },
        { name: "Oberhausen", population: 210829, rank: 36 },
        { name: "Erfurt", population: 213981, rank: 37 },
        { name: "Mainz", population: 217556, rank: 38 },
        { name: "Rostock", population: 208886, rank: 39 },
        { name: "Kassel", population: 200736, rank: 40 },
        { name: "Hagen", population: 188687, rank: 41 },
        { name: "Hamm", population: 179111, rank: 42 },
        { name: "Saarbrücken", population: 179349, rank: 43 },
        { name: "Mülheim an der Ruhr", population: 170921, rank: 44 },
        { name: "Potsdam", population: 178089, rank: 45 },
        { name: "Ludwigshafen am Rhein", population: 172253, rank: 46 },
        { name: "Oldenburg", population: 168210, rank: 47 },
        { name: "Leverkusen", population: 163838, rank: 48 },
        { name: "Osnabrück", population: 164748, rank: 49 },
        { name: "Solingen", population: 159927, rank: 50 },
        { name: "Heidelberg", population: 160355, rank: 51 },
        { name: "Herne", population: 156449, rank: 52 },
        { name: "Neuss", population: 153796, rank: 53 },
        { name: "Darmstadt", population: 159878, rank: 54 },
        { name: "Paderborn", population: 150580, rank: 55 },
        { name: "Regensburg", population: 152610, rank: 56 },
        { name: "Ingolstadt", population: 136981, rank: 57 },
        { name: "Würzburg", population: 127810, rank: 58 },
        { name: "Fürth", population: 128223, rank: 59 },
        { name: "Wolfsburg", population: 124896, rank: 60 },
        { name: "Offenbach am Main", population: 130280, rank: 61 },
        { name: "Ulm", population: 126329, rank: 62 },
        { name: "Heilbronn", population: 125960, rank: 63 },
        { name: "Pforzheim", population: 125542, rank: 64 },
        { name: "Göttingen", population: 118946, rank: 65 },
        { name: "Bottrop", population: 117143, rank: 66 },
        { name: "Trier", population: 110636, rank: 67 },
        { name: "Recklinghausen", population: 111734, rank: 68 },
        { name: "Reutlingen", population: 115966, rank: 69 },
        { name: "Bremerhaven", population: 113557, rank: 70 },
        { name: "Koblenz", population: 114052, rank: 71 },
        { name: "Bergisch Gladbach", population: 111966, rank: 72 },
        { name: "Jena", population: 111343, rank: 73 },
        { name: "Remscheid", population: 111516, rank: 74 },
        { name: "Erlangen", population: 112528, rank: 75 },
        { name: "Moers", population: 103487, rank: 76 },
        { name: "Siegen", population: 102355, rank: 77 },
        { name: "Hildesheim", population: 101667, rank: 78 },
        { name: "Salzgitter", population: 104139, rank: 79 },
        { name: "Cottbus", population: 99655, rank: 80 },
        { name: "Kaiserslautern", population: 99825, rank: 81 },
        { name: "Gütersloh", population: 100664, rank: 82 },
        { name: "Schwerin", population: 95818, rank: 83 },
        { name: "Witten", population: 95876, rank: 84 },
        { name: "Gera", population: 93125, rank: 85 },
        { name: "Iserlohn", population: 92516, rank: 86 },
        { name: "Ludwigsburg", population: 93358, rank: 87 },
        { name: "Hanau", population: 97137, rank: 88 },
        { name: "Esslingen am Neckar", population: 92722, rank: 89 },
        { name: "Zwickau", population: 91207, rank: 90 },
        { name: "Düren", population: 91264, rank: 91 },
        { name: "Ratingen", population: 87121, rank: 92 },
        { name: "Tübingen", population: 90146, rank: 93 },
        { name: "Flensburg", population: 89504, rank: 94 },
        { name: "Lünen", population: 86068, rank: 95 },
        { name: "Villingen-Schwenningen", population: 86197, rank: 96 },
        { name: "Gießen", population: 88446, rank: 97 },
        { name: "Marl", population: 84331, rank: 98 },
        { name: "Konstanz", population: 83924, rank: 99 },
        { name: "Worms", population: 83330, rank: 100 }
    ],
    italy: [
        { name: "Rome", population: 2873000, rank: 1 },
        { name: "Milan", population: 1396000, rank: 2 },
        { name: "Naples", population: 967069, rank: 3 },
        { name: "Turin", population: 870952, rank: 4 },
        { name: "Palermo", population: 676118, rank: 5 },
        { name: "Genoa", population: 580097, rank: 6 },
        { name: "Bologna", population: 390625, rank: 7 },
        { name: "Florence", population: 382258, rank: 8 },
        { name: "Bari", population: 323370, rank: 9 },
        { name: "Catania", population: 311584, rank: 10 },
        { name: "Venice", population: 260352, rank: 11 },
        { name: "Verona", population: 258031, rank: 12 },
        { name: "Messina", population: 234293, rank: 13 },
        { name: "Padua", population: 214198, rank: 14 },
        { name: "Trieste", population: 204234, rank: 15 },
        { name: "Brescia", population: 196670, rank: 16 },
        { name: "Parma", population: 195687, rank: 17 },
        { name: "Prato", population: 193325, rank: 18 },
        { name: "Taranto", population: 198283, rank: 19 },
        { name: "Modena", population: 185273, rank: 20 },
        { name: "Reggio Calabria", population: 180353, rank: 21 },
        { name: "Reggio Emilia", population: 171944, rank: 22 },
        { name: "Perugia", population: 166134, rank: 23 },
        { name: "Livorno", population: 158371, rank: 24 },
        { name: "Ravenna", population: 157663, rank: 25 },
        { name: "Cagliari", population: 154460, rank: 26 },
        { name: "Foggia", population: 151203, rank: 27 },
        { name: "Rimini", population: 149211, rank: 28 },
        { name: "Salerno", population: 133199, rank: 29 },
        { name: "Ferrara", population: 132545, rank: 30 },
        { name: "Sassari", population: 127525, rank: 31 },
        { name: "Latina", population: 126151, rank: 32 },
        { name: "Giugliano in Campania", population: 123839, rank: 33 },
        { name: "Monza", population: 123598, rank: 34 },
        { name: "Syracuse", population: 121605, rank: 35 },
        { name: "Pescara", population: 119217, rank: 36 },
        { name: "Bergamo", population: 120923, rank: 37 },
        { name: "Forlì", population: 117863, rank: 38 },
        { name: "Trento", population: 117997, rank: 39 },
        { name: "Vicenza", population: 111980, rank: 40 },
        { name: "Terni", population: 111189, rank: 41 },
        { name: "Bolzano", population: 107436, rank: 42 },
        { name: "Novara", population: 104183, rank: 43 },
        { name: "Piacenza", population: 103082, rank: 44 },
        { name: "Ancona", population: 100497, rank: 45 },
        { name: "Andria", population: 100052, rank: 46 },
        { name: "Arezzo", population: 99896, rank: 47 },
        { name: "Udine", population: 99869, rank: 48 },
        { name: "Cesena", population: 97689, rank: 49 },
        { name: "Lecce", population: 95520, rank: 50 },
        { name: "Pesaro", population: 94958, rank: 51 },
        { name: "La Spezia", population: 93411, rank: 52 },
        { name: "Pisa", population: 90294, rank: 53 },
        { name: "Guidonia Montecelio", population: 89597, rank: 54 },
        { name: "Catanzaro", population: 90508, rank: 55 },
        { name: "Como", population: 84234, rank: 56 },
        { name: "Brindisi", population: 87234, rank: 57 },
        { name: "Marsala", population: 82502, rank: 58 },
        { name: "Grosseto", population: 81773, rank: 59 },
        { name: "Pozzuoli", population: 81443, rank: 60 },
        { name: "Casoria", population: 78764, rank: 61 },
        { name: "Caserta", population: 75561, rank: 62 },
        { name: "Alessandria", population: 93940, rank: 63 },
        { name: "Varese", population: 80629, rank: 64 },
        { name: "Torre del Greco", population: 85458, rank: 65 },
        { name: "Pistoia", population: 90015, rank: 66 },
        { name: "Cremona", population: 72082, rank: 67 },
        { name: "Lucca", population: 89446, rank: 68 },
        { name: "Castellammare di Stabia", population: 64406, rank: 69 },
        { name: "Ragusa", population: 73792, rank: 70 },
        { name: "Treviso", population: 84850, rank: 71 },
        { name: "Pavia", population: 72124, rank: 72 },
        { name: "Gela", population: 77360, rank: 73 },
        { name: "Caltanissetta", population: 62357, rank: 74 },
        { name: "Asti", population: 75568, rank: 75 },
        { name: "Lamezia Terme", population: 71000, rank: 76 },
        { name: "Cosenza", population: 69484, rank: 77 },
        { name: "Vigevano", population: 63038, rank: 78 },
        { name: "Caltagirone", population: 38908, rank: 79 },
        { name: "Potenza", population: 67211, rank: 80 },
        { name: "Carrara", population: 65037, rank: 81 },
        { name: "Afragola", population: 63481, rank: 82 },
        { name: "Altamura", population: 70088, rank: 83 },
        { name: "Massa", population: 68884, rank: 84 },
        { name: "Viterbo", population: 67325, rank: 85 },
        { name: "Benevento", population: 61671, rank: 86 },
        { name: "Crotone", population: 61032, rank: 87 },
        { name: "Molfetta", population: 59964, rank: 88 },
        { name: "Agrigento", population: 59457, rank: 89 },
        { name: "Faenza", population: 58786, rank: 90 },
        { name: "Cerignola", population: 58591, rank: 91 },
        { name: "Manfredonia", population: 57093, rank: 92 },
        { name: "Trani", population: 56085, rank: 93 },
        { name: "Bisceglie", population: 55426, rank: 94 },
        { name: "Bitonto", population: 56170, rank: 95 },
        { name: "Portici", population: 55056, rank: 96 },
        { name: "San Severo", population: 54022, rank: 97 },
        { name: "Modica", population: 55035, rank: 98 },
        { name: "Siena", population: 53868, rank: 99 },
        { name: "Avellino", population: 56531, rank: 100 },
        // Cinque Terre cities
        { name: "Monterosso al Mare", population: 1500, rank: 101 },
        { name: "Vernazza", population: 900, rank: 102 },
        { name: "Corniglia", population: 240, rank: 103 },
        { name: "Manarola", population: 353, rank: 104 },
        { name: "Riomaggiore", population: 1500, rank: 105 }
    ]
};

// Flag colors for each country
const flagColors = {
    germany: {
        primary: '#000000',    // Black
        secondary: '#DD0000',  // Red
        accent: '#FFCE00'       // Gold
    },
    italy: {
        primary: '#009246',     // Green
        secondary: '#FFFFFF',   // White
        accent: '#CE2B37'       // Red
    }
};

// Update page colors based on country flag
function updateFlagColors(country) {
    const colors = flagColors[country];
    if (!colors) {
        // Default colors if country not found
        return;
    }
    
    const root = document.documentElement;
    root.style.setProperty('--flag-primary', colors.primary);
    root.style.setProperty('--flag-secondary', colors.secondary);
    root.style.setProperty('--flag-accent', colors.accent);
    
    // Also update body background directly for smooth transition
    document.body.style.background = `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%)`;
}

// DOM elements
const countrySelect = document.getElementById('country-select');
const citiesContainer = document.getElementById('cities-container');

// Format population number
function formatPopulation(population) {
    return population.toLocaleString('en-US');
}

// Display cities
function displayCities(country) {
    // Update colors based on country flag
    updateFlagColors(country);
    
    const cities = citiesData[country];
    
    if (!cities || cities.length === 0) {
        citiesContainer.innerHTML = '<div class="placeholder"><p>No cities available for this country.</p></div>';
        return;
    }
    
    // Show loading state briefly
    citiesContainer.innerHTML = '<div class="loading">Loading cities</div>';
    
    // Simulate a brief delay for better UX
    setTimeout(() => {
        const citiesGrid = document.createElement('div');
        citiesGrid.className = 'cities-grid';
        
        cities.forEach(city => {
            const cityCard = document.createElement('div');
            cityCard.className = 'city-card';
            cityCard.innerHTML = `
                <div class="city-rank">#${city.rank}</div>
                <div class="city-name">${city.name}</div>
                <div class="city-population">Population: ${formatPopulation(city.population)}</div>
            `;
            // Make city card clickable
            cityCard.addEventListener('click', () => {
                openCityDetail(city, country);
            });
            citiesGrid.appendChild(cityCard);
        });
        
        citiesContainer.innerHTML = '';
        citiesContainer.appendChild(citiesGrid);
    }, 300);
}

// Open city detail page
function openCityDetail(city, country) {
    // Update colors based on country flag
    updateFlagColors(country);
    
    // Store current city data
    window.currentCity = city;
    window.currentCountry = country;
    
    // Hide main page, show detail page
    document.querySelector('.container').classList.add('hidden');
    document.getElementById('city-detail-page').classList.remove('hidden');
    
    // Update detail page header
    document.getElementById('detail-city-name').textContent = city.name;
    document.getElementById('detail-city-info').textContent = 
        `Rank #${city.rank} • Population: ${formatPopulation(city.population)}`;
    
    // Reset menu cards and content
    resetMenuCards();
    showContentPlaceholder();
    
    // Update URL hash
    window.location.hash = `city/${encodeURIComponent(city.name)}`;
}

// Go back to cities list
function goBackToCities() {
    document.querySelector('.container').classList.remove('hidden');
    document.getElementById('city-detail-page').classList.add('hidden');
    window.location.hash = '';
    resetMenuCards();
}

// Reset menu cards to inactive state
function resetMenuCards() {
    document.querySelectorAll('.menu-card').forEach(card => {
        card.classList.remove('active');
    });
}

// Show content placeholder
function showContentPlaceholder() {
    const contentDiv = document.getElementById('detail-content');
    contentDiv.innerHTML = '<div class="content-placeholder"><p>Select a category above to view details</p></div>';
}

// Show content for selected section
function showSectionContent(section) {
    const contentDiv = document.getElementById('detail-content');
    const city = window.currentCity;
    
    let content = '';
    
    switch(section) {
        case 'general':
            content = `
                <div class="section-content">
                    <h2>General Information</h2>
                    <div class="info-grid">
                        <div class="info-item">
                            <span class="info-label">City Name:</span>
                            <span class="info-value">${city.name}</span>
                        </div>
                        <div class="info-item">
                            <span class="info-label">Rank:</span>
                            <span class="info-value">#${city.rank}</span>
                        </div>
                        <div class="info-item">
                            <span class="info-label">Population:</span>
                            <span class="info-value">${formatPopulation(city.population)}</span>
                        </div>
                        <div class="info-item">
                            <span class="info-label">Country:</span>
                            <span class="info-value">${country === 'germany' ? 'Germany' : country === 'italy' ? 'Italy' : 'Unknown'}</span>
                        </div>
                    </div>
                    <div class="info-description">
                        <p>${city.name} is one of the major cities in Germany, ranking ${city.rank}${city.rank === 1 ? 'st' : city.rank === 2 ? 'nd' : city.rank === 3 ? 'rd' : 'th'} in terms of population. With a population of ${formatPopulation(city.population)} residents, it represents an important urban center in the country.</p>
                    </div>
                </div>
            `;
            break;
            
        case 'food':
            const restaurants = restaurantsData[city.name] || [];
            if (restaurants.length > 0) {
                content = `
                    <div class="section-content">
                        <h2>Food & Restaurants</h2>
                        <div class="restaurant-controls">
                            <label for="sort-select">Sort by:</label>
                            <select id="sort-select" class="sort-dropdown">
                                <option value="name">Name</option>
                                <option value="cuisine">Cuisine Type</option>
                                <option value="rating">Rating (High to Low)</option>
                                <option value="ratingLow">Rating (Low to High)</option>
                                <option value="ratingCount">Rating Amount (High to Low)</option>
                                <option value="ratingCountLow">Rating Amount (Low to High)</option>
                                <option value="price">Price Range</option>
                                <option value="address">Address</option>
                            </select>
                        </div>
                        <div id="restaurants-list" class="restaurants-list">
                            ${renderRestaurants(restaurants)}
                        </div>
                    </div>
                `;
            } else {
                content = `
                    <div class="section-content">
                        <h2>Food & Restaurants</h2>
                        <div class="content-placeholder">
                            <p>Restaurant information for ${city.name} is coming soon!</p>
                        </div>
                    </div>
                `;
            }
            break;
            
        case 'photos':
            content = `
                <div class="section-content">
                    <h2>Photo Spots</h2>
                    <div class="content-grid">
                        <div class="content-card">
                            <h3>📷 Scenic Views</h3>
                            <p>Capture stunning panoramic views of ${city.name} from various vantage points throughout the city, perfect for photography enthusiasts.</p>
                        </div>
                        <div class="content-card">
                            <h3>🏛️ Architectural Highlights</h3>
                            <p>Photograph iconic buildings, historic architecture, and modern landmarks that define ${city.name}'s unique skyline.</p>
                        </div>
                        <div class="content-card">
                            <h3>🌅 Best Times</h3>
                            <p>Discover the best times of day and locations for capturing the perfect shot, from golden hour to night photography.</p>
                        </div>
                    </div>
                </div>
            `;
            break;
            
        case 'attractions':
            const attractions = attractionsData[city.name] || [];
            if (attractions.length > 0) {
                // Get unique attraction types
                const types = [...new Set(attractions.map(a => a.type))].sort();
                const typeOptions = types.map(type => 
                    `<option value="${type}">${getAttractionIcon(type)} ${type}</option>`
                ).join('');
                
                content = `
                    <div class="section-content">
                        <h2>Attractions & Points of Interest</h2>
                        <div class="attraction-controls">
                            <label for="type-filter">Filter by type:</label>
                            <select id="type-filter" class="filter-dropdown">
                                <option value="all">All Types</option>
                                ${typeOptions}
                            </select>
                        </div>
                        <div id="attractions-list" class="attractions-list">
                            ${renderAttractions(attractions)}
                        </div>
                    </div>
                `;
            } else {
                content = `
                    <div class="section-content">
                        <h2>Attractions & Points of Interest</h2>
                        <div class="content-grid">
                            <div class="content-card">
                                <h3>🏛️ Historic Sites</h3>
                                <p>Explore ${city.name}'s rich history through its museums, monuments, and historic districts that tell the story of the city.</p>
                            </div>
                            <div class="content-card">
                                <h3>🎭 Cultural Venues</h3>
                                <p>Visit theaters, galleries, and cultural centers that showcase ${city.name}'s vibrant arts and entertainment scene.</p>
                            </div>
                            <div class="content-card">
                                <h3>🌳 Parks & Recreation</h3>
                                <p>Enjoy beautiful parks, gardens, and recreational areas perfect for relaxation and outdoor activities in ${city.name}.</p>
                            </div>
                        </div>
                    </div>
                `;
            }
            break;
    }
    
    contentDiv.innerHTML = content;
    
    // Initialize restaurant sorting if food section is shown
    if (section === 'food' && restaurantsData[city.name] && restaurantsData[city.name].length > 0) {
        initRestaurantSorting();
    }
    
    // Initialize attraction filtering if attractions section is shown
    if (section === 'attractions' && attractionsData[city.name] && attractionsData[city.name].length > 0) {
        initAttractionFiltering();
    }
}

// Render attractions list
function renderAttractions(attractions) {
    if (attractions.length === 0) {
        return '<div class="content-placeholder"><p>No attractions found.</p></div>';
    }
    
    return attractions.map(attraction => `
        <div class="attraction-card">
            <div class="attraction-header">
                <h3 class="attraction-name">${attraction.name}</h3>
                <span class="attraction-type">${getAttractionIcon(attraction.type)} ${attraction.type}</span>
            </div>
            <p class="attraction-description">${attraction.description}</p>
            <div class="attraction-address">
                📍 ${attraction.address}
            </div>
        </div>
    `).join('');
}

// Get icon for attraction type
function getAttractionIcon(type) {
    const icons = {
        'Museum': '🏛️',
        'Historic Site': '🏰',
        'Religious Site': '⛪',
        'Park': '🌳',
        'Cultural Venue': '🎭',
        'Shopping': '🛍️',
        'Viewpoint': '👁️',
        'Market': '🛒',
        'Sports Venue': '⚽'
    };
    return icons[type] || '📍';
}

// Render restaurants list
function renderRestaurants(restaurants) {
    if (restaurants.length === 0) {
        return '<div class="content-placeholder"><p>No restaurants found.</p></div>';
    }
    
    return restaurants.map(restaurant => `
        <div class="restaurant-card">
            <div class="restaurant-header">
                <h3 class="restaurant-name">${restaurant.name}</h3>
                <div class="restaurant-rating">
                    <span class="rating-value">${restaurant.rating}</span>
                    <span class="rating-stars">${'⭐'.repeat(Math.floor(restaurant.rating))}${restaurant.rating % 1 >= 0.5 ? '½' : ''}</span>
                    <span class="rating-count">(${formatNumber(restaurant.ratingCount)} reviews)</span>
                </div>
            </div>
            <div class="restaurant-details">
                <div class="restaurant-info">
                    <span class="info-badge cuisine-badge">${restaurant.cuisine}</span>
                    <span class="info-badge price-badge">${restaurant.priceRange}</span>
                </div>
                <div class="restaurant-address">
                    📍 ${restaurant.address}
                </div>
            </div>
        </div>
    `).join('');
}

// Format number with locale
function formatNumber(num) {
    return num.toLocaleString('en-US');
}

// Initialize restaurant sorting
function initRestaurantSorting() {
    const sortSelect = document.getElementById('sort-select');
    if (!sortSelect) return;
    
    sortSelect.addEventListener('change', (e) => {
        const sortBy = e.target.value;
        const city = window.currentCity;
        const restaurants = [...restaurantsData[city.name]]; // Create a copy
        
        // Sort restaurants
        restaurants.sort((a, b) => {
            switch(sortBy) {
                case 'name':
                    return a.name.localeCompare(b.name);
                case 'cuisine':
                    return a.cuisine.localeCompare(b.cuisine);
                case 'rating':
                    return b.rating - a.rating;
                case 'ratingLow':
                    return a.rating - b.rating;
                case 'ratingCount':
                    return b.ratingCount - a.ratingCount;
                case 'ratingCountLow':
                    return a.ratingCount - b.ratingCount;
                case 'price':
                    return getPriceSortValue(a.priceRange) - getPriceSortValue(b.priceRange);
                case 'address':
                    return a.address.localeCompare(b.address);
                default:
                    return 0;
            }
        });
        
        // Update display
        const restaurantsList = document.getElementById('restaurants-list');
        if (restaurantsList) {
            restaurantsList.innerHTML = renderRestaurants(restaurants);
        }
    });
}

// Get numeric value for price sorting
function getPriceSortValue(priceRange) {
    if (priceRange.includes('Mehr als 100')) return 1000;
    if (priceRange.includes('€€€')) return 500;
    if (priceRange.includes('€€')) return 300;
    if (priceRange.includes('€')) return 200;
    
    // Extract numbers from ranges like "20–30 €"
    const match = priceRange.match(/(\d+)/);
    if (match) {
        return parseInt(match[1]);
    }
    
    return 0;
}

// Initialize attraction filtering
function initAttractionFiltering() {
    const typeFilter = document.getElementById('type-filter');
    if (!typeFilter) return;
    
    typeFilter.addEventListener('change', (e) => {
        const selectedType = e.target.value;
        const city = window.currentCity;
        const allAttractions = attractionsData[city.name];
        
        // Filter attractions by type
        const filteredAttractions = selectedType === 'all' 
            ? allAttractions 
            : allAttractions.filter(attraction => attraction.type === selectedType);
        
        // Update display
        const attractionsList = document.getElementById('attractions-list');
        if (attractionsList) {
            attractionsList.innerHTML = renderAttractions(filteredAttractions);
        }
    });
}

// Initialize detail page functionality
function initDetailPage() {
    const backButton = document.getElementById('back-button');
    const menuCards = document.querySelectorAll('.menu-card');
    
    // Back button handler
    backButton.addEventListener('click', goBackToCities);
    
    // Menu card click handlers
    menuCards.forEach(card => {
        card.addEventListener('click', () => {
            const section = card.getAttribute('data-section');
            
            // Update active state
            resetMenuCards();
            card.classList.add('active');
            
            // Show content
            showSectionContent(section);
        });
    });
    
    // Handle browser back button
    window.addEventListener('hashchange', () => {
        if (!window.location.hash || window.location.hash === '') {
            goBackToCities();
        }
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initDetailPage();
});

// Handle country selection
countrySelect.addEventListener('change', (e) => {
    const selectedCountry = e.target.value;
    
    if (selectedCountry === '') {
        citiesContainer.innerHTML = '<div class="placeholder"><p>Select a country from the dropdown above to view cities</p></div>';
        // Reset to neutral default colors
        const root = document.documentElement;
        root.style.setProperty('--flag-primary', '#667eea');
        root.style.setProperty('--flag-secondary', '#764ba2');
        root.style.setProperty('--flag-accent', '#667eea');
        document.body.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
        return;
    }
    
    displayCities(selectedCountry);
});
