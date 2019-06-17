/*
 * 版 本 Learun-ADMS V6.1.6.0 力软敏捷开发框架(http://www.learun.cn)
 * Copyright (c) 2013-2017 上海力软信息技术有限公司
 * 创建人：力软-前端开发组
 * 日 期：2017.04.18
 * 描 述：报表详情
 */
var Id = request('Id');
var tableName = request('tableName');

var bootstrap = function ($, learun) {
    "use strict";
    var page = {
        init: function () {
            page.initData();
        },
        methods: {
            reportOne(sdcmSfbReport, reportJson) {
                function group(array, subGroupLength) {
                    let index = 0;
                    let newArray = [];
                    while (index < array.length) {
                        newArray.push(array.slice(index, index += subGroupLength));
                    }
                    return newArray;
                }

                $("#sdcmFrom").append("")
                var objArr = Object.keys(sdcmSfbReport.data[0]);
                var arr = group(objArr, 8);
                //找出最后一个数组，并补齐数据
                var endArr = arr[arr.length - 1]
                var len = endArr.length;
                for (var n = 0; n < 8 - len; n++) {
                    endArr.push("null")
                }
                var title = `<div class="title">${sdcmSfbReport.name}</div>`

                function thead(arr, obj) {
                    var th = "";
                    arr.forEach(item => {
                        th += `<th height="40" colspan="1"><div class="table-headCell">${item === "null" ? "" : obj[item]}</div></th>`
                    })
                    return `<thead><tr>${th}</tr></thead>`
                }

                function tbody(arr, obj) {
                    var th = "";
                    arr.forEach(item => {
                        th += `<th height="40" colspan="1"><div class="table-cell">${item === "null" ? "" : obj[item]}</div></th>`
                    })
                    return `<tbody><tr>${th}</tr></tbody>`
                }

                function body(arr) {
                    var body = "";
                    arr.forEach(item => {
                        body += thead(item, sdcmSfbReport.data[0]) + tbody(item, reportJson);
                    })
                    return body
                }

                var body = body(arr);

                var res = `<div class="sdcmReport">${title}<table style="width:800px" border="1" cellpadding="0" cellspacing="0"><colgroup><col width="100"><col width="100"><col width="100"><col width="100"><col width="100"><col width="100"><col width="100"><col width="100"></colgroup>${body}</div>`

                $("#sdcmFrom").append(res)
            },
            reportTwo(reportJson, title) {
                $("#sdcmFrom").append("")
                var tbody = "";
                var hjWhgjan = 0, hjQtxszf = 0
                reportJson.forEach((item, index) => {
                    hjWhgjan += item["whgjan"]
                    hjQtxszf += item["qtxszf"]

                    tbody += `<tr>${index === 0 ? '<td colspan="1" rowspan="9"><div style="width: 16px;margin: 0 auto;">' + title + '</div></td>' : ""}<td height="40" colspan="1" rowspan="1">
                        <div class="table-headCell">
                            ${item["title"]}
                        </div>
                    </td>
                    <td colspan="1" rowspan="1">
                        <div class="table-headCell">
                           ${item["hj"]}
                        </div>
                    </td>
                    <td colspan="1" rowspan="1">
                        <div class="table-headCell">
                            ${item["whgjan"]}
                        </div>
                    </td>
                    <td colspan="1" rowspan="1">
                        <div class="table-headCell">
                          ${item["qtxszf"]}
                        </div>
                    </td>
                </tr>`
                })
                tbody += `<tr>
                        <td height="40" colspan="2" rowspan="1">
                            <div class="table-headCell">
                                合计
                            </div>
                        </td>
                        <td colspan="1" rowspan="1">
                            <div class="table-headCell">
                                ${hjWhgjan + hjQtxszf}
                            </div>
                        </td>
                        <td colspan="1" rowspan="1">
                            <div class="table-headCell">
                                ${hjWhgjan}
                            </div>
                        </td>
                        <td colspan="1" rowspan="1">
                            <div class="table-headCell">
                               ${hjQtxszf}
                            </div>
                        </td>
                    </tr>`
                var dom = `<div class="sdcmReport">
                            <table style="width:800px" border="1" cellpadding="0" cellspacing="0">
                                <colgroup>
                                    <col width="50">
                                    <col width="200">
                                    <col width="200">
                                    <col width="200">
                                    <col width="200">
                                </colgroup>
                                <thead>
                                    <tr>
                                        <th height="40" colspan="2">
                                            <div class="table-headCell">
                                                项目
                                            </div>
                                        </th>
                                        <th colspan="1">
                                            <div class="table-headCell">
                                                总计
                                            </div>
                                        </th>
                                        <th colspan="1">
                                            <div class="table-headCell">
                                                危害国家安全罪犯
                                            </div>
                                        </th>
                                        <th colspan="1">
                                            <div class="table-headCell">
                                                其他刑事罪犯
                                            </div>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                ${tbody}
                                </tbody>
                            </table>
                        </div>`
                $("#sdcmFrom").append(dom)
            },
            reportThree(reportLeftJson, reportRightJson) {
                //rightDom
                var fromBox = "";
                sdcmRightReport.forEach(item => {
                    var dom = "";
                    item.data.forEach(v => {
                        dom += `<div>${v.v}:<span style="padding-left:16px;">${reportRightJson[v.k]}</span><span class="name">${filterName(v.k)}</span></div>`
                    })
                    fromBox += `<div class ="fromBox">
                            <div class ="fromTitle">${item.title}</div>
                            <div class ="fromCon">
                                     ${dom}
                            </div>
                      </div>`
                })

                function filterName(k) {
                    if (k === "ttqs") {
                        return "起"
                    } else if (k === "xyjy" || k === "gjjb" || k === "zdjb" || k === "ddjb" || k === "dsjy") {
                        return "所"
                    } else {
                        return "名"
                    }
                }

                //期内减少
                var qnjs1 = reportLeftJson["qnjssfwhgjaq"] + reportLeftJson["qnjsswwhgjaq"] + reportLeftJson["qnjsqtwhgjaq"];
                var qnjs2 = reportLeftJson["qnjssfqtxsfxj"] + reportLeftJson["qnjsswqtxsfxj"] + reportLeftJson["qnjsqtqtxsfxj"];
                var qnjs3 = reportLeftJson["qnjssfqtxsfzd"] + reportLeftJson["qnjsswqtxsfzd"] + reportLeftJson["qnjsqtqtxsfzd"];
                var qnjs4 = qnjs1 + qnjs2 + qnjs3;
                //期末押犯
                var qmyf1 = reportLeftJson["qmyfnfwhgjaq"] + reportLeftJson["qmyfwcnfwhgjaq"] + reportLeftJson["qmyfyxtjwhgjaq"] + reportLeftJson["qmyfydtjwhgjaq"] + reportLeftJson["qmyfysbjwhgjaq"] + reportLeftJson["qmyfgjzsfzwhgjaq"] + reportLeftJson["qmyfzmfwhgjaq"] + reportLeftJson["qmyfllfwhgjaq"] + reportLeftJson["qmyflffwhgjaq"] + reportLeftJson["qmyflafwhgjaq"] + reportLeftJson["qmyfflgwhgjaq"] + reportLeftJson["qmyfsdwhgjaq"] + reportLeftJson["qmyfyxdswhgjaq"] + reportLeftJson["qmyfpxlcyswhgjaq"] + reportLeftJson["qmyfzyjwzxwhgjaq"] + reportLeftJson["qmyflbcxjwhgjaq"] + reportLeftJson["qmyflbcjsbwhgjaq"] + reportLeftJson["qmyfdsdwyfwhgjaq"] + reportLeftJson["qmyfljztwhgjaq"];
                var qmyf2 = reportLeftJson["qmyfnfqtxsfxj"] + reportLeftJson["qmyfwcnfqtxsfxj"] + reportLeftJson["qmyfyxtjqtxsfxj"] + reportLeftJson["qmyfydtjqtxsfxj"] + reportLeftJson["qmyfysbjqtxsfxj"] + reportLeftJson["qmyfgjzsfzqtxsfxj"] + reportLeftJson["qmyfzmfqtxsfxj"] + reportLeftJson["qmyfllfqtxsfxj"] + reportLeftJson["qmyflffqtxsfxj"] + reportLeftJson["qmyflafqtxsfxj"] + reportLeftJson["qmyfflgqtxsfxj"] + reportLeftJson["qmyfsdqtxsfxj"] + reportLeftJson["qmyfyxdsqtxsfxj"] + reportLeftJson["qmyfpxlcysqtxsfxj"] + reportLeftJson["qmyfzyjwzxqtxsfxj"] + reportLeftJson["qmyflbcxjqtxsfxj"] + reportLeftJson["qmyflbcjsbqtxsfxj"] + reportLeftJson["qmyfdsdwyfqtxsfxj"] + reportLeftJson["qmyfljztqtxsfxj"];
                var qmyf3 = reportLeftJson["qmyfnfqtxsfzd"] + reportLeftJson["qmyfwcnfqtxsfzd"] + reportLeftJson["qmyfyxtjqtxsfzd"] + reportLeftJson["qmyfydtjqtxsfzd"] + reportLeftJson["qmyfysbjqtxsfzd"] + reportLeftJson["qmyfgjzsfzqtxsfzd"] + reportLeftJson["qmyfzmfqtxsfzd"] + reportLeftJson["qmyfllfqtxsfzd"] + reportLeftJson["qmyflffqtxsfzd"] + reportLeftJson["qmyflafqtxsfzd"] + reportLeftJson["qmyfflgqtxsfzd"] + reportLeftJson["qmyfsdqtxsfzd"] + reportLeftJson["qmyfyxdsqtxsfzd"] + reportLeftJson["qmyfpxlcysqtxsfzd"] + reportLeftJson["qmyfzyjwzxqtxsfzd"] + reportLeftJson["qmyflbcxjqtxsfzd"] + reportLeftJson["qmyflbcjsbqtxsfzd"] + reportLeftJson["qmyfdsdwyfqtxsfzd"] + reportLeftJson["qmyfljztqtxsfzd"];
                var qmyf4 = qmyf1 + qmyf2 + qmyf3;
                var dom = `<div class="sdcmReport">
            <table width="800" border="1" cellspacing="0">
                <colgroup>
                    <col width="76">
                    <col width="76">
                    <col width="76">
                    <col width="76">
                    <col width="76">
                    <col width="76">
                    <col width="76">
                    <col width="76">
                    <col width="192">
                </colgroup>
                <thead>
                    <tr>
                        <th colspan="4" rowspan="2">
                            <div class="table-headCell">
                                项目
                            </div>
                        </th>
                        <th colspan="1" rowspan="2">
                            <div class="table-headCell">
                                总计
                            </div>
                        </th>
                        <th colspan="1" rowspan="2">
                            <div class="table-headCell">
                                危害国家安全
                            </div>
                        </th>
                        <th colspan="2" rowspan="1">
                            <div class="table-headCell">
                                其它刑事犯
                            </div>
                        </th>
                        <th colspan="1" rowspan="2">
                            <div class="table-headCell">
                                补充资料
                            </div>
                        </th>
                    </tr>
                    <tr>
                        <th>
                            <div class="table-headCell">
                                小计
                            </div>
                        </th>
                        <th>
                            <div class="table-headCell">
                                其中重大
                            </div>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td colspan="4" rowspan="1">
                            <div class="table-cell">
                                上期末押犯
                            </div>
                        </td>
                        <td>
                            <div class="table-cell">

                            </div>
                        </td>
                        <td>
                            <div class="table-cell">

                            </div>
                        </td>
                        <td>
                            <div class="table-cell">

                            </div>
                        </td>
                        <td>
                            <div class="table-cell">

                            </div>
                        </td>
                        <td colspan="1" rowspan="34" style="position: relative">
                            <div class ="bczl">
                               ${fromBox}
                            </div>
                        </td>
                    </tr>
                    <!--期内增加-->
                    <tr>
                        <td colspan="2" rowspan="3">
                            <div class="table-cell">
                                期内增加
                            </div>
                        </td>
                        <td colspan="2" rowspan="1">
                            <div class="table-cell">
                                小计
                            </div>
                        </td>
                        <td>
                            <div class="table-cell">
                             ${reportLeftJson["qnzjxsywhgjaq"] + reportLeftJson["qnzjqtwhgjaq"] + reportLeftJson["qnzjxsyqtxsfxj"] + reportLeftJson["qnzjqtqtxsfxj"] + reportLeftJson["qnzjxsyqtxsfzd"] + reportLeftJson["qnzjqtqtxsfzd"]}
                            </div>
                        </td>
                        <td>
                            <div class="table-cell">
                             ${reportLeftJson["qnzjxsywhgjaq"] + reportLeftJson["qnzjqtwhgjaq"]}
                            </div>
                        </td>
                        <td>
                            <div class="table-cell">
                               ${reportLeftJson["qnzjxsyqtxsfxj"] + reportLeftJson["qnzjqtqtxsfxj"]}
                            </div>
                        </td>
                        <td>
                            <div class="table-cell">
                            ${reportLeftJson["qnzjxsyqtxsfzd"] + reportLeftJson["qnzjqtqtxsfzd"]}
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2" rowspan="1">
                            <div class="table-cell">
                                新收押
                            </div>
                        </td>
                        <td>
                            <div class="table-cell">
                                ${reportLeftJson["qnzjxsywhgjaq"] + reportLeftJson["qnzjxsyqtxsfxj"] + reportLeftJson["qnzjxsyqtxsfzd"]}
                            </div>
                        </td>
                        <td>
                            <div class="table-cell">
                            ${reportLeftJson["qnzjxsywhgjaq"]}
                            </div>
                        </td>
                        <td>
                            <div class="table-cell">
                            ${reportLeftJson["qnzjxsyqtxsfxj"]}
                            </div>
                        </td>
                        <td>
                            <div class="table-cell">
                            ${reportLeftJson["qnzjxsyqtxsfzd"]}
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2" rowspan="1">
                            <div class="table-cell">
                                其它
                            </div>
                        </td>
                        <td>
                            <div class="table-cell">
                             ${reportLeftJson["qnzjqtwhgjaq"] + reportLeftJson["qnzjqtqtxsfxj"] + reportLeftJson["qnzjqtqtxsfzd"]}
                            </div>
                        </td>
                        <td>
                            <div class="table-cell">
                            ${reportLeftJson["qnzjqtwhgjaq"]}
                            </div>
                        </td>
                        <td>
                            <div class="table-cell">
                            ${reportLeftJson["qnzjqtqtxsfxj"]}
                            </div>
                        </td>
                        <td>
                            <div class="table-cell">
                            ${reportLeftJson["qnzjqtqtxsfzd"]}
                            </div>
                        </td>
                    </tr>
                    <!--期内减少-->
                    <tr>
                        <td colspan="2" rowspan="4">
                            <div class="table-cell">
                                期内减少
                            </div>
                        </td>
                        <td colspan="2" rowspan="1">
                            <div class="table-cell">
                                小计
                            </div>
                        </td>
                        <td>
                            <div class="table-cell">
                                ${qnjs4}
                            </div>
                        </td>
                        <td>
                            <div class ="table-cell">
                                ${qnjs1}
                            </div>
                        </td>
                        <td>
                            <div class="table-cell">
                                ${qnjs2}
                            </div>
                        </td>
                        <td>
                            <div class="table-cell">
                                ${qnjs3}
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2" rowspan="1">
                            <div class="table-cell">
                                释 放
                            </div>
                        </td>
                        <td>
                            <div class="table-cell">
                             ${reportLeftJson["qnjssfwhgjaq"] + reportLeftJson["qnjssfqtxsfxj"] + reportLeftJson["qnjssfqtxsfzd"]}
                            </div>
                        </td>
                        <td>
                            <div class="table-cell">
                             ${reportLeftJson["qnjssfwhgjaq"]}
                            </div>
                        </td>
                        <td>
                            <div class="table-cell">
                                  ${reportLeftJson["qnjssfqtxsfxj"]}
                            </div>
                        </td>
                        <td>
                            <div class="table-cell">
                                  ${reportLeftJson["qnjssfqtxsfzd"]}
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2" rowspan="1">
                            <div class="table-cell">
                                死亡
                            </div>
                        </td>
                        <td>
                            <div class="table-cell">
                            ${reportLeftJson["qnjsswwhgjaq"] + reportLeftJson["qnjsswqtxsfxj"] + reportLeftJson["qnjsswqtxsfzd"]}
                            </div>
                        </td>
                        <td>
                            <div class="table-cell">
                            ${reportLeftJson["qnjsswwhgjaq"]}
                            </div>
                        </td>
                        <td>
                            <div class="table-cell">
                            ${reportLeftJson["qnjsswqtxsfxj"]}
                            </div>
                        </td>
                        <td>
                            <div class="table-cell">
                            ${reportLeftJson["qnjsswqtxsfzd"]}
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2" rowspan="1">
                            <div class="table-cell">
                                其它
                            </div>
                        </td>
                        <td>
                            <div class="table-cell">
                             ${reportLeftJson["qnjsqtwhgjaq"] + reportLeftJson["qnjsqtqtxsfxj"] + reportLeftJson["qnjsqtqtxsfzd"]}
                            </div>
                        </td>
                        <td>
                            <div class="table-cell">
                             ${reportLeftJson["qnjsqtwhgjaq"]}
                            </div>
                        </td>
                        <td>
                            <div class="table-cell">
                             ${reportLeftJson["qnjsqtqtxsfxj"]}
                            </div>
                        </td>
                        <td>
                            <div class="table-cell">
                             ${reportLeftJson["qnjsqtqtxsfzd"]}
                            </div>
                        </td>
                    </tr>
                    <!--期末押犯-->
                    <tr>
                        <td colspan="1" rowspan="20">
                            <div class="table-cell">
                                期末押犯
                            </div>
                        </td>
                        <td colspan="3" rowspan="1">
                            <div class="table-cell">
                                合计
                            </div>
                        </td>
                        <td>
                            <div class="table-cell">
                               ${qmyf4}
                            </div>
                        </td>
                        <td>
                            <div class="table-cell">
                               ${qmyf1}
                            </div>
                        </td>
                        <td>
                            <div class="table-cell">
                               ${qmyf2}
                            </div>
                        </td>
                        <td>
                            <div class="table-cell">
                               ${qmyf3}
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="1" rowspan="19">
                            <div class="table-cell">
                                其中
                            </div>
                        </td>
                        <td colspan="2" rowspan="1">
                            <div class="table-cell">
                                女犯
                            </div>
                        </td>
                        <td>
                            <div class="table-cell">
                             ${reportLeftJson["qmyfnfwhgjaq"] + reportLeftJson["qmyfnfqtxsfxj"] + reportLeftJson["qmyfnfqtxsfzd"]}
                            </div>
                        </td>
                        <td>
                            <div class="table-cell">
                             ${reportLeftJson["qmyfnfwhgjaq"]}
                            </div>
                        </td>
                        <td>
                            <div class="table-cell">
                             ${reportLeftJson["qmyfnfqtxsfxj"]}
                            </div>
                        </td>
                        <td>
                            <div class="table-cell">
                             ${reportLeftJson["qmyfnfqtxsfzd"]}
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2" rowspan="1">
                            <div class="table-cell">
                                未 成 年 犯
                            </div>
                        </td>
                        <td>
                            <div class="table-cell">
                             ${reportLeftJson["qmyfwcnfwhgjaq"] + reportLeftJson["qmyfwcnfqtxsfxj"] + reportLeftJson["qmyfwcnfqtxsfzd"]}
                            </div>
                        </td>
                        <td>
                            <div class="table-cell">
                                ${reportLeftJson["qmyfwcnfwhgjaq"]}
                            </div>
                        </td>
                        <td>
                            <div class="table-cell">
                                ${reportLeftJson["qmyfwcnfqtxsfxj"]}
                            </div>
                        </td>
                        <td>
                            <div class="table-cell">
                                ${reportLeftJson["qmyfwcnfqtxsfzd"]}
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2" rowspan="1">
                            <div class="table-cell">
                                原 县 团 级
                            </div>
                        </td>
                        <td>
                            <div class="table-cell">
                             ${reportLeftJson["qmyfyxtjwhgjaq"] + reportLeftJson["qmyfyxtjqtxsfxj"] + reportLeftJson["qmyfyxtjqtxsfzd"]}
                            </div>
                        </td>
                        <td>
                            <div class="table-cell">
                                   ${reportLeftJson["qmyfyxtjwhgjaq"]}
                            </div>
                        </td>
                        <td>
                            <div class="table-cell">
                                   ${reportLeftJson["qmyfyxtjqtxsfxj"]}
                            </div>
                        </td>
                        <td>
                            <div class="table-cell">
                                   ${reportLeftJson["qmyfyxtjqtxsfzd"]}
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2" rowspan="1">
                            <div class="table-cell">
                                原 地 厅 级
                            </div>
                        </td>
                        <td>
                            <div class="table-cell">
                            ${reportLeftJson["qmyfydtjwhgjaq"] + reportLeftJson["qmyfydtjqtxsfxj"] + reportLeftJson["qmyfydtjqtxsfzd"]}
                            </div>
                        </td>
                        <td>
                            <div class="table-cell">
                             ${reportLeftJson["qmyfydtjwhgjaq"]}
                            </div>
                        </td>
                        <td>
                            <div class="table-cell">
                             ${reportLeftJson["qmyfydtjqtxsfxj"]}
                            </div>
                        </td>
                        <td>
                            <div class="table-cell">
                             ${reportLeftJson["qmyfydtjqtxsfzd"]}
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2" rowspan="1">
                            <div class="table-cell">
                                原 省 部 级
                            </div>
                        </td>
                        <td>
                            <div class="table-cell">
                            ${reportLeftJson["qmyfysbjwhgjaq"] + reportLeftJson["qmyfysbjqtxsfxj"] + reportLeftJson["qmyfysbjqtxsfzd"]}
                            </div>
                        </td>
                        <td>
                            <div class="table-cell">
                              ${reportLeftJson["qmyfysbjwhgjaq"]}
                            </div>
                        </td>
                        <td>
                            <div class="table-cell">
                              ${reportLeftJson["qmyfysbjqtxsfxj"]}
                            </div>
                        </td>
                        <td>
                            <div class="table-cell">
                              ${reportLeftJson["qmyfysbjqtxsfzd"]}
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2" rowspan="1">
                            <div class="table-cell">
                                高级知识分子
                            </div>
                        </td>
                        <td>
                            <div class="table-cell">
                             ${reportLeftJson["qmyfgjzsfzwhgjaq"] + reportLeftJson["qmyfgjzsfzqtxsfxj"] + reportLeftJson["qmyfgjzsfzqtxsfzd"]}
                            </div>
                        </td>
                        <td>
                            <div class="table-cell">
                                 ${reportLeftJson["qmyfgjzsfzwhgjaq"]}
                            </div>
                        </td>
                        <td>
                            <div class="table-cell">
                                 ${reportLeftJson["qmyfgjzsfzqtxsfxj"]}
                            </div>
                        </td>
                        <td>
                            <div class="table-cell">
                                 ${reportLeftJson["qmyfgjzsfzqtxsfzd"]}
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2" rowspan="1">
                            <div class="table-cell">
                                知 密 犯
                            </div>
                        </td>
                        <td>
                            <div class="table-cell">
                             ${reportLeftJson["qmyfzmfwhgjaq"] + reportLeftJson["qmyfzmfqtxsfxj"] + reportLeftJson["qmyfzmfqtxsfzd"]}
                            </div>
                        </td>
                        <td>
                            <div class="table-cell">
                             ${reportLeftJson["qmyfzmfwhgjaq"]}
                            </div>
                        </td>
                        <td>
                            <div class="table-cell">
                             ${reportLeftJson["qmyfzmfqtxsfxj"]}
                            </div>
                        </td>
                        <td>
                            <div class="table-cell">
                             ${reportLeftJson["qmyfzmfqtxsfzd"]}
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2" rowspan="1">
                            <div class="table-cell">
                                两 乱 犯
                            </div>
                        </td>
                        <td>
                            <div class="table-cell">
                            ${reportLeftJson["qmyfllfwhgjaq"] + reportLeftJson["qmyfllfqtxsfxj"] + reportLeftJson["qmyfllfqtxsfzd"]}
                            </div>
                        </td>
                        <td>
                            <div class="table-cell">
                             ${reportLeftJson["qmyfllfwhgjaq"]}
                            </div>
                        </td>
                        <td>
                            <div class="table-cell">
                             ${reportLeftJson["qmyfllfqtxsfxj"]}
                            </div>
                        </td>
                        <td>
                            <div class="table-cell">
                             ${reportLeftJson["qmyfllfqtxsfzd"]}
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2" rowspan="1">
                            <div class="table-cell">
                                两 非 犯
                            </div>
                        </td>
                        <td>
                            <div class="table-cell">
                             ${reportLeftJson["qmyflffwhgjaq"] + reportLeftJson["qmyflffqtxsfxj"] + reportLeftJson["qmyflffqtxsfzd"]}
                            </div>
                        </td>
                        <td>
                            <div class="table-cell">
                             ${reportLeftJson["qmyflffwhgjaq"]}
                            </div>
                        </td>
                        <td>
                            <div class="table-cell">
                             ${reportLeftJson["qmyflffqtxsfxj"]}
                            </div>
                        </td>
                        <td>
                            <div class="table-cell">
                             ${reportLeftJson["qmyflffqtxsfzd"]}
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2" rowspan="1">
                            <div class="table-cell">
                                两 案 犯
                            </div>
                        </td>
                        <td>
                            <div class="table-cell">
                             ${reportLeftJson["qmyflafwhgjaq"] + reportLeftJson["qmyflafqtxsfxj"] + reportLeftJson["qmyflafqtxsfzd"]}
                            </div>
                        </td>
                        <td>
                            <div class="table-cell">
                             ${reportLeftJson["qmyflafwhgjaq"]}
                            </div>
                        </td>
                        <td>
                            <div class="table-cell">
                             ${reportLeftJson["qmyflafqtxsfxj"]}
                            </div>
                        </td>
                        <td>
                            <div class="table-cell">
                             ${reportLeftJson["qmyflafqtxsfzd"]}
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2" rowspan="1">
                            <div class="table-cell">
                                法 论 功 类
                            </div>
                        </td>
                        <td>
                            <div class="table-cell">
                            ${reportLeftJson["qmyfflgwhgjaq"] + reportLeftJson["qmyfflgqtxsfxj"] + reportLeftJson["qmyfflgqtxsfzd"]}
                            </div>
                        </td>
                        <td>
                            <div class="table-cell">
                             ${reportLeftJson["qmyfflgwhgjaq"]}
                            </div>
                        </td>
                        <td>
                            <div class="table-cell">
                             ${reportLeftJson["qmyfflgqtxsfxj"]}
                            </div>
                        </td>
                        <td>
                            <div class="table-cell">
                             ${reportLeftJson["qmyfflgqtxsfzd"]}
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2" rowspan="1">
                            <div class="table-cell">
                                涉 毒 类
                            </div>
                        </td>
                        <td>
                            <div class="table-cell">
                                   ${reportLeftJson["qmyfsdwhgjaq"] + reportLeftJson["qmyfsdqtxsfxj"] + reportLeftJson["qmyfsdqtxsfzd"]}
                            </div>
                        </td>
                        <td>
                            <div class="table-cell">
                            ${reportLeftJson["qmyfsdwhgjaq"]}
                            </div>
                        </td>
                        <td>
                            <div class="table-cell">
                            ${reportLeftJson["qmyfsdqtxsfxj"]}
                            </div>
                        </td>
                        <td>
                            <div class="table-cell">
                            ${reportLeftJson["qmyfsdqtxsfzd"]}
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2" rowspan="1">
                            <div class="table-cell">
                                有 吸 毒 史
                            </div>
                        </td>
                        <td>
                            <div class="table-cell">
                                    ${reportLeftJson["qmyfyxdswhgjaq"] + reportLeftJson["qmyfyxdsqtxsfxj"] + reportLeftJson["qmyfyxdsqtxsfzd"]}
                            </div>
                        </td>
                        <td>
                            <div class="table-cell">
                              ${reportLeftJson["qmyfyxdswhgjaq"]}
                            </div>
                        </td>
                        <td>
                            <div class="table-cell">
                              ${reportLeftJson["qmyfyxdsqtxsfxj"]}
                            </div>
                        </td>
                        <td>
                            <div class="table-cell">
                              ${reportLeftJson["qmyfyxdsqtxsfzd"]}
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2" rowspan="1">
                            <div class="table-cell">
                                判刑两次以上
                            </div>
                        </td>
                        <td>
                            <div class="table-cell">
                             ${reportLeftJson["qmyfpxlcyswhgjaq"] + reportLeftJson["qmyfpxlcysqtxsfxj"] + reportLeftJson["qmyfpxlcysqtxsfzd"]}
                            </div>
                        </td>
                        <td>
                            <div class="table-cell">
                             ${reportLeftJson["qmyfpxlcyswhgjaq"]}
                            </div>
                        </td>
                        <td>
                            <div class="table-cell">
                             ${reportLeftJson["qmyfpxlcysqtxsfxj"]}
                            </div>
                        </td>
                        <td>
                            <div class="table-cell">
                             ${reportLeftJson["qmyfpxlcysqtxsfzd"]}
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2" rowspan="1">
                            <div class="table-cell">
                                暂予监外执行
                            </div>
                        </td>
                        <td>
                            <div class="table-cell">
                             ${reportLeftJson["qmyfzyjwzxwhgjaq"] + reportLeftJson["qmyfzyjwzxqtxsfxj"] + reportLeftJson["qmyfzyjwzxqtxsfzd"]}
                            </div>
                        </td>
                        <td>
                            <div class="table-cell">
                             ${reportLeftJson["qmyfzyjwzxwhgjaq"]}
                            </div>
                        </td>
                        <td>
                            <div class="table-cell">
                             ${reportLeftJson["qmyfzyjwzxqtxsfxj"]}
                            </div>
                        </td>
                        <td>
                            <div class="table-cell">
                             ${reportLeftJson["qmyfzyjwzxqtxsfzd"]}
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="1" rowspan="2">
                            <div class="table-cell">
                                老病残
                            </div>
                        </td>
                        <td>
                            <div class="table-cell">
                                小计
                            </div>
                        </td>
                        <td>
                            <div class="table-cell">
                              ${reportLeftJson["qmyflbcxjwhgjaq"] + reportLeftJson["qmyflbcxjqtxsfxj"] + reportLeftJson["qmyflbcxjqtxsfzd"]}
                            </div>
                        </td>
                        <td>
                            <div class="table-cell">
                             ${reportLeftJson["qmyflbcxjwhgjaq"]}
                            </div>
                        </td>
                        <td>
                            <div class="table-cell">
                             ${reportLeftJson["qmyflbcxjqtxsfxj"]}
                            </div>
                        </td>
                        <td>
                            <div class="table-cell">
                             ${reportLeftJson["qmyflbcxjqtxsfzd"]}
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div class="table-cell">
                                精神病
                            </div>
                        </td>
                        <td>
                            <div class="table-cell">
                             ${reportLeftJson["qmyflbcjsbwhgjaq"] + reportLeftJson["qmyflbcjsbqtxsfxj"] + reportLeftJson["qmyflbcjsbqtxsfzd"]}
                            </div>
                        </td>
                        <td>
                            <div class="table-cell">
                                   ${reportLeftJson["qmyflbcjsbwhgjaq"]}
                            </div>
                        </td>
                        <td>
                            <div class="table-cell">
                                   ${reportLeftJson["qmyflbcjsbqtxsfxj"]}
                            </div>
                        </td>
                        <td>
                            <div class="table-cell">
                                   ${reportLeftJson["qmyflbcjsbqtxsfzd"]}
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2" rowspan="1">
                            <div class="table-cell">
                                地市单位押犯
                            </div>
                        </td>
                        <td>
                            <div class="table-cell">
                             ${reportLeftJson["qmyfdsdwyfwhgjaq"] + reportLeftJson["qmyfdsdwyfqtxsfxj"] + reportLeftJson["qmyfdsdwyfqtxsfzd"]}
                            </div>
                        </td>
                        <td>
                            <div class="table-cell">
                             ${reportLeftJson["qmyfdsdwyfwhgjaq"]}
                            </div>
                        </td>
                        <td>
                            <div class="table-cell">
                             ${reportLeftJson["qmyfdsdwyfqtxsfxj"]}
                            </div>
                        </td>
                        <td>
                            <div class="table-cell">
                             ${reportLeftJson["qmyfdsdwyfqtxsfzd"]}
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2" rowspan="1">
                            <div class="table-cell">
                                累 计 在 逃
                            </div>
                        </td>
                        <td>
                            <div class="table-cell">
                                   ${reportLeftJson["qmyfljztwhgjaq"] + reportLeftJson["qmyfljztqtxsfxj"] + reportLeftJson["qmyfljztqtxsfzd"]}
                            </div>
                        </td>
                        <td>
                            <div class="table-cell">
                            ${reportLeftJson["qmyfljztwhgjaq"]}
                            </div>
                        </td>
                        <td>
                            <div class="table-cell">
                            ${reportLeftJson["qmyfljztqtxsfxj"]}
                            </div>
                        </td>
                        <td>
                            <div class="table-cell">
                            ${reportLeftJson["qmyfljztqtxsfzd"]}
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="1" rowspan="4">
                            <div class="table-cell">
                                期 内 奖 惩
                            </div>
                        </td>
                        <td colspan="3" rowspan="1">
                            <div class="table-cell">
                                减 刑
                            </div>
                        </td>
                        <td>
                            <div class="table-cell">
                              ${reportLeftJson["qnjcjxwhgjaq"] + reportLeftJson["qnjcjxqtxsfxj"] + reportLeftJson["qnjcjxqtxsfzd"]}
                            </div>
                        </td>
                        <td>
                            <div class="table-cell">
                            ${reportLeftJson["qnjcjxwhgjaq"]}
                            </div>
                        </td>
                        <td>
                            <div class="table-cell">
                            ${reportLeftJson["qnjcjxqtxsfxj"]}
                            </div>
                        </td>
                        <td>
                            <div class="table-cell">
                            ${reportLeftJson["qnjcjxqtxsfzd"]}
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3">
                            <div class="table-cell">
                                假 释
                            </div>
                        </td>
                        <td>
                            <div class="table-cell">
                             ${reportLeftJson["qnjcjswhgjaq"] + reportLeftJson["qnjcjsqtxsfxj"] + reportLeftJson["qnjcjsqtxsfzd"]}
                            </div>
                        </td>
                        <td>
                            <div class="table-cell">
                             ${reportLeftJson["qnjcjswhgjaq"]}
                            </div>
                        </td>
                        <td>
                            <div class="table-cell">
                             ${reportLeftJson["qnjcjsqtxsfxj"]}
                            </div>
                        </td>
                        <td>
                            <div class="table-cell">
                             ${reportLeftJson["qnjcjsqtxsfzd"]}
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td rowspan="2">
                            <div class="table-cell">
                                又犯罪被处刑罚
                            </div>
                        </td>
                        <td colspan="2">
                            <div class="table-cell">
                                小计
                            </div>
                        </td>
                        <td>
                            <div class="table-cell">
                                    ${reportLeftJson["qnjcyfzbcxfxjwhgjaq"] + reportLeftJson["qnjcyfzbcxfxjqtxsfxj"] + reportLeftJson["qnjcyfzbcxfxjqtxsfzd"]}
                            </div>
                        </td>
                        <td>
                            <div class="table-cell">
                             ${reportLeftJson["qnjcyfzbcxfxjwhgjaq"]}
                            </div>
                        </td>
                        <td>
                            <div class="table-cell">
                             ${reportLeftJson["qnjcyfzbcxfxjqtxsfxj"]}
                            </div>
                        </td>
                        <td>
                            <div class="table-cell">
                             ${reportLeftJson["qnjcyfzbcxfxjqtxsfzd"]}
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2">
                            <div class="table-cell">
                                逃脱加刑
                            </div>
                        </td>
                        <td>
                            <div class="table-cell">
                                 ${reportLeftJson["qnjcyfzbcxfttjxwhgjaq"] + reportLeftJson["qnjcyfzbcxfttjxqtxsfxj"] + reportLeftJson["qnjcyfzbcxfttjxqtxsfzd"]}
                            </div>
                        </td>
                        <td>
                            <div class="table-cell">
                             ${reportLeftJson["qnjcyfzbcxfttjxwhgjaq"]}
                            </div>
                        </td>
                        <td>
                            <div class="table-cell">
                             ${reportLeftJson["qnjcyfzbcxfttjxqtxsfxj"]}
                            </div>
                        </td>
                        <td>
                            <div class="table-cell">
                             ${reportLeftJson["qnjcyfzbcxfttjxqtxsfzd"]}
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
       </div>`
                $("#sdcmFrom").append(dom)
            },
            filterData(data, resData, title) {
                var reportJson = data.map(item => {
                    var whgjan = resData[item["whgjan"]]
                    var qtxszf = resData[item["qtxszf"]]
                    return {
                        title: item["title"],
                        whgjan: whgjan,
                        qtxszf: qtxszf,
                        hj: whgjan + qtxszf
                    }
                })
                page.methods.reportTwo(reportJson, title)
            }
        },
        initData: function () {
            if (!!Id) {
                $.lrSetForm(top.$.rootUrl + '/PrisonOrganization/SfbReport/GetDetail?Id=' + Id + '&tableName=' + tableName, function (data) {
                    var data = data[0];
                    if (data.tableName === "IF_Zfypxqgc") {
                        var resData = JSON.parse(data.reportJson)
                        var IF_Zfypxqgc = [

                            {
                                title: "不足2年",
                                whgjan: "NoTwoYearWhgjanz",
                                qtxszf: "NoTwoYearUpQtxsfz"
                            },
                            {
                                title: "2年以上",
                                whgjan: "TwoYearUpWhgjanz",
                                qtxszf: "TwoYearUpQtxsfz"
                            },
                            {
                                title: "5年以上",
                                whgjan: "FiveYearUpWhgjanz",
                                qtxszf: "FiveYearUpQtxsfz"
                            },
                            {
                                title: "7年以上",
                                whgjan: "SevenYearUpWhgjanz",
                                qtxszf: "SevenYearUpQtxsfz"
                            },
                            {
                                title: "10年以上",
                                whgjan: "TenYearUpWhgjanz",
                                qtxszf: "TenYearUpQtxsfz"
                            },
                            {
                                title: "12年以上",
                                whgjan: "TwelveYearUpWhgjanz",
                                qtxszf: "TwelveYearUpQtxsfz"
                            },
                            {
                                title: "15年以上",
                                whgjan: "FifteenYearUpWhgjanz",
                                qtxszf: "FifteenYearUpQtxsfz"
                            },
                            {
                                title: "无期徒刑",
                                whgjan: "WqWhgjanz",
                                qtxszf: "WqQtxsfz"
                            },
                            {
                                title: "死缓",
                                whgjan: "ShWhgjanz",
                                qtxszf: "ShQtxsfz"
                            },
                        ]
                        page.methods.filterData(IF_Zfypxqgc, resData, "原判刑期")
                    } else if (data.tableName === "IF_Zfsyxqgc") {
                        var resData = JSON.parse(data.reportJson)
                        var IF_Zfsyxqgc = [
                            {
                                title: "不足1年",
                                whgjan: "NoOneYearWhgjanz",
                                qtxszf: "NoOneYearUpQtxsfz"
                            },
                            {
                                title: "1年以上",
                                whgjan: "OneYearUpWhgjanz",
                                qtxszf: "OneYearUpQtxsfz"
                            },
                            {
                                title: "3年以上",
                                whgjan: "ThreeYearUpWhgjanz",
                                qtxszf: "ThreeYearUpQtxsfz"
                            },
                            {
                                title: "5年以上",
                                whgjan: "FiveYearUpWhgjanz",
                                qtxszf: "FiveYearUpQtxsfz"
                            },
                            {
                                title: "7年以上",
                                whgjan: "SevenYearUpWhgjanz",
                                qtxszf: "SevenYearUpQtxsfz"
                            },
                            {
                                title: "10年以上",
                                whgjan: "TenYearUpWhgjanz",
                                qtxszf: "TenYearUpQtxsfz"
                            },
                            {
                                title: "15年以上",
                                whgjan: "FifteenYearUpWhgjanz",
                                qtxszf: "FifteenYearUpQtxsfz"
                            },
                            {
                                title: "无期徒刑",
                                whgjan: "WqWhgjanz",
                                qtxszf: "WqQtxsfz"
                            },
                            {
                                title: "死缓",
                                whgjan: "ShWhgjanz",
                                qtxszf: "ShQtxsfz"
                            },
                        ]
                        page.methods.filterData(IF_Zfsyxqgc, resData, "剩余刑期")
                    } else if (data.tableName === "IF_Jyzyf") {
                        var reportLeftJson = JSON.parse(data.reportLeftJson)
                        var reportRightJson = JSON.parse(data.reportRightJson)
                        page.methods.reportThree(reportLeftJson, reportRightJson)
                    } else {
                        var reportJson = JSON.parse(data.reportJson);
                        reportJson["sumCount"] = data.sumCount;
                        page.methods.reportOne(sdcmSfbReport[data.tableName], reportJson)
                    }
                });
            }
        }
    };
    page.init();
}
bootstrap($, learun)
