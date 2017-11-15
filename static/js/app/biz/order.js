$(function() {

    var columns = [{
        field: '',
        title: '',
        checkbox: true
    }, {
        field: 'code',
        title: '编号',
        search: true
    }, {
        title: "买家",
        field: "buyUser",
        formatter: function(v, data) {
            if (data.buyUserInfo) {
                return data.buyUserInfo.mobile + '(' + data.buyUserInfo.nickname + ')'
            }
        },
        search: true
    }, {
        title: "卖家",
        field: "sellUser",
        formatter: function(v, data) {
            if (data.sellUserInfo) {
                return data.sellUserInfo.mobile + '(' + data.sellUserInfo.nickname + ')'
            }
        },
        search: true
    }, {
        title: "交易价格",
        field: "tradePrice"
    }, {
        title: "交易数量",
        field: "count"
    }, {
        title: "交易金额",
        field: "tradeAmount",
        formatter: moneyFormat
    }, {
        title: "手续费",
        field: "fee",
        formatter: moneyFormat
    }, {
        title: "状态",
        field: "status",
        type: "select",
        data: {
            "0": "待支付",
            "1": "待支付",
            "2": "已释放待评价",
            "5": "仲裁中",
        },
        search: true
    }, {
        title: '备注',
        field: 'remark'
    }];
    buildList({
        columns: columns,
        pageCode: '625250',
        searchParams: {
            statusList: ["0", "1", "2", "5"],
            companyCode: OSS.company
        },
    });

});