//domain.netlify/functions/hello
const items = [
	{ id: 1, name: "abu raihan" },
	{ id: 2, name: "rafuj" },
];
exports.handler = async function (event, context) {
	return {
		statusCode: 200,
		body: JSON.stringify(items),
	};
};
