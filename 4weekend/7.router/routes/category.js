/**
 * Created by 96004 on 2017/7/15.
 */
//文章分类相关
let express=require('express');
let router=express.Router();
router.get('/add',function (req,res) {
    res.send('增加');
});

router.get('/delete',function (req,res) {
    res.send('删除');
});
module.exports=router;