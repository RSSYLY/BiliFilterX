// ==UserScript==
// @name         OutputBlacklist
// @namespace    http://rssan.com/
// @version      0.1
// @description  以JSON格式输出B站黑名单
// @author       RSSYLY
// @match        https://account.bilibili.com/account/blacklist
// @icon         https://www.google.com/s2/favicons?sz=64&domain=bilibili.com
// @grant        GM_xmlhttpRequest
// @grant        GM.setClipboard
// @connect      api.bilibili.com
// @require      https://unpkg.com/mdui@1.0.2/dist/js/mdui.min.js
// @resource css https://unpkg.com/mdui@1.0.2/dist/css/mdui.min.css
// ==/UserScript==

(function() {
    'use strict';

    // console.log(blackList.data.list.length)
    // 输出时各个用户都是某数组的元素，因此先创建该数组
    const outputList = []

    // 每个元素都是一个对象，创建这些对象的模板类
    class User {
        uid
        time
        label
        level
        constructor(uid, time, label, level) {
            this.uid = uid
            this.time = time
            //c=label是数组
            this.label = [label]
            this.level = level

        }
    }
    // 定义函数获取json，参数为url和
    var getJSON = function (url, callback) {

        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.responseType = 'json';
        // 记得带着cookies发请求，不然服务端认为你没登录
        xhr.withCredentials = true

        xhr.onload = function () {

            var status = xhr.status;

            if (status == 200) {
                callback(null, xhr.response);
            } else {
                callback(status);
            }
        };

        xhr.send();
    };
    (function () {
        for (let j=1;j<11;j++){

            getJSON('https://api.bilibili.com/x/relation/blacks?ps=50&pn='+j, function (err, blackListUser) {

                if (err != null) {
                    console.error(err);
                } else {
                    let blackList = blackListUser
                    console.log(blackList)
                    // 调用函数，将本次获取到的json的信息提取出来
                    console.log("第",j,"页")
                    getList(blackList)
                }


            });


            //加载完毕后再执行输出
            window.onload=function(){


                // outputList转json
                const outJson = JSON.stringify(outputList);
                // document.getElementById("output").innerText=outJson


                // setTimeout(function(){alert(outJson)},3000);
                GM.setClipboard(outJson)
                alert("已输出至剪切板")
            }

        }

    }());

    //console.log(blackList)



    // 定义函数，从对象中获取信息，参数就是api获取的json直接转的对象
    function getList(blackList){


        //遍历blackList.data.list数组
        for (let i = 0; i < blackList.data.list.length; i++) {

            console.log(blackList.data.list[i].mid)
            let userUid = blackList.data.list[i].mid
            let userTime = blackList.data.list[i].mid
            let userLabel = "杠精"
            let userLevel = 3

            // 通过User类，创建一个对象
            let sb250 = new User(userUid, userTime, userLabel, userLevel)

            // 把对象塞进outputList里
            outputList[outputList.length] = sb250

        }
        console.log(outputList)


    }

    // Your code here...
})();