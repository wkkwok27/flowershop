const dotenv = require('dotenv');
const mongoose = require('mongoose');
const Product = require('../models/product');

dotenv.config();

mongoose.connect(process.env.MONGO_DB_URL);

const products = [
    new Product({
        imagePath: '/images/BOUQUET-LARGE.jpeg',
        title: 'CAPRICOT BLUSH BOUQUET',
        description: "Warm shades of orange and blushing pinks come together for a sweet and romantic bunch to brighten any day.",
        price: 300
    }),
    new Product({
        imagePath: '/images/VASE-LARGE-2.jpeg',
        title: 'APRICOT BLUSH BOUQUET WITH VASE',
        description: "Warm shades of orange and blushing pinks come together for a sweet and romantic bunch to brighten any day.",
        price: 890
    }),
    new Product({
        imagePath: '/images/SpringB.jpeg',
        title: 'SPRING BLUSH BOUQUET',
        description: ' Sweetly coloured blooms in bright pinks and soft blush to bring some spring-time sweetness to your home.',
        price: 350
    }),
    new Product({
        imagePath: '/images/SpringV.jpeg',
        title: 'SPRING BLUSH BOUQUET WITH VASE',
        description: "Sweetly coloured blooms in bright pinks and soft blush to bring some spring-time sweetness to your home.",
        price: 1020
    }),
    new Product({
        imagePath: '/images/SummerB.jpeg',
        title: 'SUMMER PASTEL BOUQUET',
        description: "Pastel blooms of a summery meadow come together in this seasonal bouquet.",
        price: 380
    }),
    new Product({
        imagePath: '/images/SummerV.jpeg',
        title: 'SUMMER PASTEL BOUQUET WITH VASE',
        description: "Pastel blooms of a summery meadow come together in this seasonal bouquet.",
        price: 990
    }),
    new Product({
        imagePath: '/images/SunnyBB.jpeg',
        title: 'SUNNY SIDE BOUQUET',
        description: "Vibrant yellows contrast with crisp whites to brighten special summer occasions.",
        price: 400
    }),
    new Product({
        imagePath: '/images/Sunny.jpeg',
        title: 'SUNNY SIDE BOUQUET WITH VASE',
        description: "Vibrant yellows contrast with crisp whites to brighten special summer occasions.",
        price: 1080
    }),
    new Product({
        imagePath: '/images/LilacB.jpeg',
        title: 'LILAC DREAM BOUQUET',
        description: "Dreamy and pastel-hued shades of purple to bring an ethereal feel to the warmer months.",
        price: 420
    }),
    new Product({
        imagePath: '/images/VASE.jpeg',
        title: 'LILAC DREAM BOUQUET WITH VASE',
        description: "Dreamy and pastel-hued shades of purple to bring an ethereal feel to the warmer months.",
        price: 1080

    }),  
    new Product({
        imagePath: '/images/SUnshineB.jpeg',
        title: 'SUNSHINE ROUGE BOUQUET',
        description: "The brightest and warmest hues of summer come together in a celebration of the season.",
        price: 425
    }),
    new Product({
        imagePath: '/images/SunshineV2.jpeg',
        title: 'SUNSHINE ROUGE BOUQUET WITH VASE',
        description: "The brightest and warmest hues of summer come together in a celebration of the season.",
        price: 1120
    }),
    new Product({
        imagePath: '/images/BOX.jpeg',
        title: 'APRICOT BLUSH FLOWER BOX',
        description: "Warm shades of orange and blushing pinks come together for a sweet and romantic bunch to brighten any day.",
        price: 338
    }),    
    new Product({
        imagePath: '/images/SpringBox.jpeg',
        title: 'SPRING BLUSH FLOWER BOX',
        description: "Sweetly coloured blooms in bright pinks and soft blush to bring some spring-time sweetness to your home. Make your own arrangement at home with this easy-to-make flat packed bouquet.",
        price: 350
    
    }),    
    new Product({
        imagePath: '/images/SUnshineBox.jpeg',
        title: 'SUNSHINE ROUGE FLOWER BOX',
        description: "The brightest and warmest hues of summer come together in a celebration of the season.",
        price: 320
    }),
];

let done = 0;

for (let i = 0; i < products.length; i++) {
    products[i].save(function(err, result) {
        done++;
        if(done === products.length)
            exit();
    });
}
function exit() {
    mongoose.disconnect();
}
