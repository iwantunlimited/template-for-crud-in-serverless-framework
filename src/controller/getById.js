const success = require("../utils/dataHandler/200");
const internalServer = require("../utils/dataHandler/500");

const getById = async (event) => {
	try {
		return success({}, "getting by id ....");
	} catch (error) {
		return internalServer(error);
	}
};

module.exports = {
	handler: getById,
};
