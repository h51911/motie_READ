/*
 * @Author: 程琳
 * @Date: 2019-12-03 20:20:00
 * @LastEditTime: 2019-12-03 20:50:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \1909_nodejs\04mysql\mogujie\router\users.js
 */
const express = require('express');
const Router = express.Router();

let { mongo } = require('../db');//操作数据库的模块

let { create } = require('../utils/token');
let { formatdata } = require('../utils/formatdata');

/*
    * 用户管理
        * 查询是否存在
        * 注册
        * 登陆
        * 修改密码
        * 查询所有用户
*/

//查询所有用户
// Router.get('/', async (req, res) => {
//     let result = await mongo.find('indexlist', req.query);
//     if (result.length) {
//         res.send(formatdata({ data: result }));
//     } else {
//         res.send(formatdata({ code: 0 }));
//     }
//     // res.send({ data: result });
// });



//查询所有商家用户
Router.get('/shops', async (req, res) => {
    let result = await mongo.find('shopslist', req.query);
    if (result.length) {
        res.send(formatdata({ data: result }));
    } else {
        res.send(formatdata({ code: 0 }));
    }
    // res.send({ data: result });
});





//搜索栏查询
Router.post('/search', async (req, res) => {
    let { name } = req.body;
    let result = await mongo.find('shopslist', { name });
    if (result.length) {
        res.send(formatdata({ data: result }));
    } else {
        res.send(formatdata({ code: 0 }));
    }
});






//添加书本

Router.post('/addbook', async (req, res) => {

    let {
        id,
        icon,
        phone,
        name

    } = req.body;
    let data = await mongo.create('bookshop', [{
        id,
        icon,
        phone,
        name

    }]);


    let result = null;
    if (data.insertedCount) {
        //插入成功

        result = formatdata();

    }
    else {
        result = formatdata({
            code: 0
        });
    }
    res.send(result);

});
//注册
Router.post('/reg', async (req, res) => {

    let {
        phone,
        password
    } = req.body;
    let data = await mongo.create('user', [{
        phone,
        password

    }]);


    let result = null;
    if (data.insertedCount) {
        //插入成功

        result = formatdata();

    }
    else {
        result = formatdata({
            code: 0
        });
    }
    res.send(result);

});

//注册
// Router.post('/reg', async (req, res) => {
//     let result = await mongo.create('loginname', [req.body]);
//     if (result.insertedCount) {
//         res.send(formatdata());
//     } else {
//         res.send(formatdata({ code: 0 }));
//     }
// });

//验证用户名是否存在
// Router.get('/check', async (req, res) => {
//     let result = await mongo.find('login', req.query);
//     if (result.length) {//找到不给注册
//         res.send(formatdata({ code: 0 }));
//     } else {
//         res.send(formatdata());
//     }
// });

//登录 
// Router.post('/login', async (req, res) => {
//     let { phone, password } = req.body;
//     // let { password } = req.query;
//     let result = await mongo.find('loginname', { phone, password });
//     if (result.length) {//成功，可以登录
//         let token = '';
//         //判断是否要生成token
//         // if (keep) {//生成token
//         token = create(phone);
//         // }
//         res.send(formatdata({ authorization: token }));//把token生成后发给前端
//         // res.send(formatdata());
//     } else {
//         res.send(formatdata({ code: 0 }));
//     }
//     // console.log(req.body);
// });
//登录
Router.post('/login', async (req, res) => {
    let { phone, password } = req.body;

    let result = await mongo.find('user', { phone, password });
    if (result.length) {
        //用户存在
        res.send(formatdata({ code: 0 }));

    }
    else {
        //可以注册
        result = formatdata();
        res.send(formatdata());
    }

})

Router.post('/userfind', async (req, res) => {
    let { phone } = req.body;

    let result = await mongo.find('user', { phone });
    if (result.length) {
        //用户存在
        res.send(formatdata({ code: 0 }));

    }
    else {
        //可以注册
        result = formatdata();
        res.send(formatdata());
    }

})



//查询书本
Router.post('/books', async (req, res) => {
    let { phone, id } = req.body;

    let result = await mongo.find('bookshop', { phone, id });
    if (result.length) {
        //用户存在
        res.send(formatdata({ code: 0 }));

    }
    else {
        //可以注册
        result = formatdata();
        res.send(formatdata());
    }

})
//查询渲染书本
Router.post('/bookshoplist', async (req, res) => {
    let { phone } = req.body;

    let result = await mongo.find('bookshop', { phone });

    res.send(result);

})

//删除
Router.post('/del', async (req, res) => {
    let { phone, id } = req.body;

    let result = await mongo.remove('bookshop', { phone, id });
    if (result.length) {
        //用户存在
        res.send(result);

    }
    else {
        //可以注册
        result = formatdata();
        res.send(formatdata({ code: 0 }));
    }

})




module.exports = Router;//导出模块