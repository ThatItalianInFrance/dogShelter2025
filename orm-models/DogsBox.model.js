module.exports = function mymodel() {
	return {
		attributes: {
			db_id: {
				type: "integer",
				autoincrement: true,
				primary: true,
			},
			do_id: {
				model: "Dogs",
				alias: "dogs",
			},
			bo_id: {
				model: "Box",
				alias: "box",
			},
			db_datein: {
				type: "string",
				defaultsTo: "",
				index: true,
			},
			db_dateout: {
				type: "string",
				defaultsTo: "",
				index: true,
			},
		},
	};
}
