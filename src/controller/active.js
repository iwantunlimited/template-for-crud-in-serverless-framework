const success = require("../utils/dataHandler/200");
const internalServer = require("../utils/dataHandler/500");

const active = async (event) => {
	try {
		return success({}, "activating .....");
	} catch (error) {
		return internalServer(error);
	}
};

module.exports = {
	handler: active,
};
