const fs = require("fs");

const getSOFStatusList = (jsonObject) => {
    const SOFStatuslist = [];

    jsonObject.Response.RegSvcRs.GetCustRs.CustsSearchData.CustSearchDataRs[0].SourceOfFunds.SourceOfFund.forEach(
        (sourceOfFund) => {
            SOFStatuslist.push(sourceOfFund.SOFStatus);
        }
    );

    return SOFStatuslist;
};

fs.readFile("./response1.json", "utf8", (err, data) => {
    if (err) {
        console.error("Error reading the file:", err);
        return;
    }

    // Parse the JSON data
    const jsonObject = JSON.parse(data);

    // Now 'jsonObject' contains the parsed JSON data
    console.log(getSOFStatusList(jsonObject));
});
