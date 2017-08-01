/**
 * Created by dllo on 17/8/1.
 */




/** 1.setTimeout
 *  setTimeout(匿名函数,毫秒数) 表示多少毫秒后触发一次此匿名函数.
 * */
var start = new Date();
console.log('英雄即将到达战场,当前时间:' + start);
setTimeout(function () {
    console.log(new Date() - start + '毫秒后,Aced!');
}, 2000);



/** 2.setInterval
 * setInterval(匿名函数,毫秒数) 标识每隔多少秒执行一次此匿名函数.
 * */

setInterval(function() {
    console.log("Penta Kill");
}, 1000);


/** 3. setImmediate
 * 预定立即执行的callback，它是在I / O事件的回调之后被触发
 * */

setImmediate(function(){
    console.log("setImmediate延迟 ");
});




