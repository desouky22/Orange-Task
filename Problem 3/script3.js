const fs = require("fs");

const getStatus = (jsonObject) => {
    return jsonObject.OpenAmountResponse.response.status;
};

fs.readFile("./response3.json", "utf8", (err, data) => {
    if (err) {
        console.error("Error reading the file:", err);
        return;
    }

    // Parse the JSON data
    const jsonObject = JSON.parse(data);

    // Now 'jsonObject' contains the parsed JSON data
    console.log(getStatus(jsonObject));
});
