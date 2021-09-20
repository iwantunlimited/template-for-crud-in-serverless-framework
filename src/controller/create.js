const success = require("../utils/dataHandler/200");
const internalServer = require("../utils/dataHandler/500");

const create = async (event) => {
	try {
		return success({}, "creating ....");
	} catch (error) {
		return internalServer(error);
	}
};

module.exports = {
	handler: create,
};
