/*
    需求:实现数据的CRUD操作
            连接数据库：connect();
            数据库的CRUD操作：create read update delete 
            关闭数据库：close()先有的
*/

const { MongoClient } = require('mongodb');
const { DBurl, DBname } = require('../config.json');//引入模块

async function connect() {
    //connect()方法里面如果写了回调，client就是回调里面的第二个参数
    //如果不写回调，方法直接返回promise对象
    let client = await MongoClient.connect(DBurl);
    let db = client.db(DBname);
    return { db, client };
}

/*
  * @description: 增
  * @param {string} 集合名字 colname
  * @param {array} 数组      data
  * @return: object
*/
async function create(colname, data) {
    //连接数据库
    let { db, client } = await connect();
    //找到集合
    let col = db.collection(colname);//无则自动创建
    //插入数据到集合
    let result = await col.insertMany(data);//插入很多条（数组）
    //关闭数据库
    client.close();
    return result;
}

/*
  * @description: 删 
  * @param {string} 集合名字 colname
  * @param {object} 条件     query
  * @return: object
*/
async function remove(colname, query) {
    let { db, client } = await connect();
    let col = db.collection(colname);
    let result = await col.deleteMany(query);
    client.close();
    return result;
}

/*
  * @description: 改
  * @param {string} 集合名字 colname
  * @param {object} 条件     query
  * @param {object} 数据     newdata
  * @return: object
*/
async function update(colname, query, newdata) {
    let { db, client } = await connect();
    let col = db.collection(colname);
    let result = await col.updateMany(query, newdata);
    client.close();
    return result;
}

/*
  * @description: 查
  * @param {string} 集合名字 colname
  * @param {object} 条件     query
  * @return: object
*/
async function find(colname, query) {
    
    try {
        let { db, client } = await connect();
        let col = db.collection(colname);
        let result = await col.find(query).toArray();
        client.close();
        return result;
    } catch{
        console.log(err);
    }
}

module.exports = {
    create,
    remove,
    update,
    find
};

