module.exports = function mymodel() {
	return {
		attributes: {
			li_id: {
				type: "integer",
				autoincrement: true,
				primary: true,
			},
			li_name: {
				type: "string",
				defaultsTo: "",
				index: true,
			},
			li_key: {
				type: "string",
				defaultsTo: "",
				index: true,
			},
			li_val: {
				type: "string",
				defaultsTo: "",
				index: true,
			},
			options: {
				type: "text",
			},
		},
	};
}
