const success = require("../utils/dataHandler/200");
const internalServer = require("../utils/dataHandler/500");

const deactivate = async (event) => {
	try {
		return success({}, "deactivating ....");
	} catch (error) {
		return internalServer(error);
	}
};

module.exports = {
	handler: deactivate,
};
