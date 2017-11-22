$(function() {
    var accountNumberCNY;
    var accountNumberJF;
    var accountNumberTG;
    reqApi({
        code: '802500',
        json: {
            "start": 1,
            "limit": 10,
            "type": "P"
        },
        sync: true
    }).done(function(data) {
        var data = data.list;
        $("#amount-CNY").text(moneyFormat(data[1].amountString));
        accountNumberCNY = data[1].accountNumber;
        $("#amount-TG").text(moneyFormat(data[0].amountString));
        accountNumberTG = data[0].accountNumber;
    });

    $("#CNYls-Btn").click(function() {
        location.href = "ledger.html?accountNumber=" + accountNumberCNY + "&kind=CNY";
    });
    $("#accoutGrantBtn").click(function() {
        location.href = "ledger.html?accountNumber=" + accountNumberTG + "&kind=TG";
    });

});