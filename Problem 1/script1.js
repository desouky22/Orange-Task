const fs = require("fs");

const getSOFStatusList = (jsonObject) => {
    const AllCustomersSOFStatuslist = [];

    jsonObject.Response.RegSvcRs.GetCustRs.CustsSearchData.CustSearchDataRs.forEach(
        (custSearchDataRs) => {
            // for each customer get the status of SOF and put it in a list
            const SOFStatuslist = [];
            custSearchDataRs.SourceOfFunds.SourceOfFund.forEach(
                (sourceOfFund) => {
                    SOFStatuslist.push(sourceOfFund.SOFStatus);
                }
            );

            // add the list to the overall list that contains all the customers' lists
            AllCustomersSOFStatuslist.push(SOFStatuslist);
        }
    );

    return AllCustomersSOFStatuslist;
};

fs.readFile("./response1.json", "utf8", (err, data) => {
    if (err) {
        console.error("Error reading the file:", err);
        return;
    }

    // Parse the JSON data
    const jsonObject = JSON.parse(data);

    console.log(getSOFStatusList(jsonObject));
});
