const success = (data, message) => {
	return {
		statusCode: 200, //Status Code
		headers: {
			"Content-Type": "application/json",
			"Access-Control-Allow-Origin": "*",
		},
		body: JSON.stringify({
			message: message ? message : "Request executed successfully ;) ",
			data: data, // The Request Body which is passed to the end point api
		}),
		isBase64Encoded: false,
	};
};

module.exports = success;
