import {vl} from '@vega/vega-lite-api-v5'

videogamesFile = FileAttachment("videogames_long.csv");

videogames = videogamesFile.csv({typed:true})

const videogames = [
    { genre: 'Action', global_sales: 100 },
    { genre: 'Adventure', global_sales: 70 },
    { genre: 'RPG', global_sales: 90 },
    { genre: 'Sports', global_sales: 80 },
    { genre: 'Simulation', global_sales: 60 }
];

// Define the Vega-Lite specificatio