module.exports = function mymodel() {
	return {
		attributes: {
			bo_id: {
				type: "integer",
				autoincrement: true,
				primary: true,
			},
			bo_block: {
				type: "string",
				defaultsTo: "",
				index: true,
			},
			bo_number: {
				type: "integer",
				defaultsTo: 0,
				index: true,
			}
		},
	};
}
