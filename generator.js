const fs = require('fs')
/**
 * Generating mock data in mockdata.json.
 * @param {Array} data Array of objects containing title, description, imageUrl
 */
function generateData(data) {
    const cities = ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix', 'Philadelphia', 'San Antonio', 'San Diego', 'Dallas', 'San Jose'];
    const owners = ['john', 'mary', 'peter', 'david']
    let mockData = [];

    for (let i = 0; i < 5; i++) {
        const randomData = data[Math.floor(Math.random() * data.length)]
        let obj = {
            title: randomData.title,
            category: 'Clothing',
            imageUrl: randomData.imageUrl,
            description: randomData.description,
            price: (((Math.random() + 0.2) * 100) | 0) + 0.99,
            owner: owners[Math.floor(Math.random() * owners.length)],
            location: cities[Math.floor(Math.random() * cities.length)],
            createdOn: {
                "$date": {
                    "$numberLong": (Math.floor(Math.random() * (10000000000) + 1670000000000)).toString()
                }
            },
            __v: 0
        };
        mockData.push(obj);
    }

    fs.writeFileSync('mockdata.json', JSON.stringify(mockData))
}

const clothes = [{
    "title": "Men's T-Shirt",
    "description": "This is a classic men's t-shirt made of 100% cotton. Available in multiple colors and sizes."
    , "imageUrl": "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
},
{
    "title": "Women's Blouse",
    "description": "Elegant blouse for women made of silk and polyester blend. Features a button-up front and ruffled collar."
    , "imageUrl": "https://images.unsplash.com/photo-1564257631407-4deb1f99d992?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
},
{
    "title": "Kids' Hoodie",
    "description": "A cozy hoodie for kids made of a cotton and polyester blend. Has a front pocket and comes in a variety of colors."
    , "imageUrl": "https://images.unsplash.com/photo-1470071131384-001b85755536?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8S2lkcyclMjBIb29kaWV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
},
{
    "title": "Men's Jeans",
    "description": "A pair of stylish men's jeans made of denim. Available in various washes and fits, including skinny, straight, and bootcut."
    , "imageUrl": "https://images.unsplash.com/photo-1511105612320-2e62a04dd044?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8TWVuJ3MlMjBKZWFuc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
},
{
    "title": "Women's Dress",
    "description": "A beautiful dress for women made of a cotton and polyester blend. Features a floral print and a flowy fit."
    , "imageUrl": "https://images.unsplash.com/photo-1595777457583-95e059d581b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=783&q=80"
},
{
    "title": "Men's Suit",
    "description": "A classic men's suit made of wool and polyester blend. Comes with a jacket and pants, and available in multiple colors."
    , "imageUrl": "https://images.unsplash.com/photo-1425421669292-0c3da3b8f529?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
},
{
    "title": "Women's Leggings",
    "description": "A pair of comfortable leggings for women made of a polyester and spandex blend. Available in multiple colors and sizes."
    , "imageUrl": "https://images.unsplash.com/photo-1596641211273-938aeaf926a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8V29tZW4ncyUyMExlZ2dpbmdzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
},
{
    "title": "Men's Polo Shirt",
    "description": "A classic men's polo shirt made of a cotton and polyester blend. Available in multiple colors and sizes."
    , "imageUrl": "https://images.unsplash.com/photo-1581791538302-03537b9c97bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=879&q=80"
},
{
    "title": "Women's Skirt",
    "description": "A stylish skirt for women made of a cotton and polyester blend. Features a pencil fit and a back zipper."
    , "imageUrl": "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=864&q=80"
},
{
    "title": "Men's Sweater",
    "description": "A warm and comfortable sweater for men made of wool and acrylic blend. Features a V-neck and available in multiple colors."
    , "imageUrl": "https://images.unsplash.com/photo-1610901157620-340856d0a50f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fFN3ZWF0ZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
}]


generateData(clothes);