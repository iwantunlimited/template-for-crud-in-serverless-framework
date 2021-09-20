const success = require("../utils/dataHandler/200");
const internalServer = require("../utils/dataHandler/500");

const deleteFunc = async (event) => {
	try {
		return success({}, "deleting  ....");
	} catch (error) {
		return internalServer(error);
	}
};

module.exports = {
	handler: deleteFunc,
};
