const notFound = (data, message) => {
	return {
		statusCode: 200, //Status Code
		headers: {
			"Content-Type": "application/json",
			"Access-Control-Allow-Origin": "*",
		},
		body: JSON.stringify({
			message: message ? message : "Requested data not found :[",
			data: data, // The Request Body which is passed to the end point api
		}),
		isBase64Encoded: false,
	};
};

module.exports = notFound;
