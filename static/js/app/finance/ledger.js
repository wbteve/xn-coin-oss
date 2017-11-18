$(function() {
    var currency = getQueryString('currency') || "";
    var accountNumber = getQueryString('accountNumber') || "";
    var kind = getQueryString('kind') || "";

    var columns = [{
        field: '',
        title: '',
        checkbox: true
    }, {
        field: 'realName',
        title: '户名',
    }, {
        field: 'channelType',
        title: '渠道',
        type: 'select',
        key: 'channel_type',
        search: true,
        formatter: Dict.getNameForList('channel_type'),
    }, {
        title: "币种",
        field: "currency",
        type: "select",
        key: "coin",
        formatter: Dict.getNameForList("coin")
    }, {
        field: 'bizType',
        title: '业务类型',
        type: 'select',
        search: true,
        key: "biz_type",
        formatter: Dict.getNameForList('biz_type')
            // data: bizTypeDict
    }, {
        field: 'transAmountString',
        title: '变动金额',
        formatter: moneyFormat
    }, {
        field: 'preAmountString',
        title: '变动前金额',
        formatter: moneyFormat
    }, {
        field: 'postAmountString',
        title: '变动后金额',
        formatter: moneyFormat
    }, {
        title: "创建时间",
        field: "createDatetime",
        formatter: dateTimeFormat
    }, {
        field: 'status',
        title: '状态',
        type: 'select',
        key: 'jour_status',
        search: true,
        formatter: Dict.getNameForList('jour_status'),
    }, {
        field: 'remark',
        title: '备注'
    }];
    buildList({
        columns: columns,
        pageCode: "802524",
        searchParams: {
            currency: currency,
            userId: accountNumber ? "" : getUserId(),
            accountNumber: accountNumber,
            companyCode: OSS.company
        }
    });

    $('.tools .toolbar').html('<li style="display:block;" id="backBtn"><span><img src="/static/images/t01.png"></span>返回</li>');
    $('#backBtn').on('click', function() {
        goBack();
    });
});