const success = require("../utils/dataHandler/200");
const internalServer = require("../utils/dataHandler/500");

const getAll = async (event) => {
	try {
		return success({}, "listing  ....");
	} catch (error) {
		return internalServer(error);
	}
};

module.exports = {
	handler: getAll,
};
