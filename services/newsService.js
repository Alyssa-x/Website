var News = require("../models").News;
// 查询新闻，按照发布日期降序排序
// page: 页码
// limit: 页容量
// keyword: 关键字，标题、内容、频道包含该关键字均可
// 返回：查询结果对象 {  total: 总数据量,  datas: 新闻数组 }

exports.getNews = async function (page, limit, keyword) {
 
    var reg = new RegExp(keyword);
    var filter = {
    $or: [
        {
            title: reg,
        },
        {
            content: reg,
        },
        {
            channel: reg,
        },
    ]
};
    var data = await News.find(filter, null,
        {
            sort: "-pubDate",
            skip: (page - 1) * limit,
            limit: limit,
        });
    
    var total = await News.countDocuments(filter);
    return {
        total:total,
        datas:data,
    }
    
}