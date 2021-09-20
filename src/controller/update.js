const success = require("../utils/dataHandler/200");
const internalServer = require("../utils/dataHandler/500");

const update = async (event) => {
	try {
		return success({}, "updating ....");
	} catch (error) {
		return internalServer(error);
	}
};

module.exports = {
	handler: update,
};
