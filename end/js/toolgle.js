function addClass(obj, cn) {
    /* 
    检查obj中是否含有cn
    */
    if (!hasClass(obj, cn)) {
        // 如有有b2这个 则添加
        obj.className += " " + cn;
    }
};
/* 
判断一个元素是否含有指定Class值
     参数
            obj要查询是否含有Class的元素
            cn  要查询的Class 值、
如果有则返回true  没有的话则返回false

*/
function hasClass(obj, cn) {
    /* 
    判断obj中是否有cn  这个Class
    */
    //    创建一个正则表达式
    //   var reg=/\b[cn]\b/; //如果是变量的话 字面量这样的方式不行
    // 正则表达式里面  得判断cn(b2)是否是独立的  如果是/b2/ 表示类名中是否含有 b2  比如b234也会返回true
    // var reg=new RegExp("\\b"+cn+"\\b")
    var reg = new RegExp("s*\\b" + cn + "\\b");
    // alert(reg);
    return reg.test(obj.className);
}
/* 
删除元素中指定的Class属性
*/
function addClass(obj, cn) {
    /* 
    检查obj中是否含有cn
    */
    if (!hasClass(obj, cn)) {
        // 如有没有有b2这个 则添加
        obj.className += " " + cn;
    }
};
function removeClass(obj, cn) {
    var reg = new RegExp("s*\\b" + cn + "\\b","g" );
    
    obj.className = obj.className.replace(reg, "");
}
/* 
切换class
    toggleClass可以用来切换一个类
        如果元素中有 则删除 
        如果没有 则增加
*/

function toogleClass(obj, cn) {
    // var reg = new RegExp("\\b" + cn + "\\b");

    if (hasClass(obj, cn)) {
        removeClass(obj, cn);
    } else {
        addClass(obj, cn);
    }
}