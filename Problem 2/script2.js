const fs = require("fs");

const getStatusAndCustomerID = (jsonObject) => {
    const statusAndCustomerID = [];

    statusAndCustomerID.push(jsonObject.CustomerDetailsResponse.Status);
    statusAndCustomerID.push(jsonObject.CustomerDetailsResponse.CustomerId);

    return statusAndCustomerID;
};

fs.readFile("./response2.json", "utf8", (err, data) => {
    if (err) {
        console.error("Error reading the file:", err);
        return;
    }

    // Parse the JSON data
    const jsonObject = JSON.parse(data);

    // Now 'jsonObject' contains the parsed JSON data
    console.log(getStatusAndCustomerID(jsonObject));
});
