const badRequest = (data, message) => {
	return {
		statusCode: 200, //Status Code
		headers: {
			"Content-Type": "application/json",
			"Access-Control-Allow-Origin": "*",
		},
		body: JSON.stringify({
			message: message ? message : "Bad Request check your payload :(",
			data: data, // The Request Body which is passed to the end point api
		}),
		isBase64Encoded: false,
	};
};

module.exports = badRequest;
