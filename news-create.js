var models = require("./models");
var news = require("./news.json");

async function addNews(){
    await models.News.create(news);
}

addNews();