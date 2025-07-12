module.exports = function mymodel() {
	return {
		attributes: {
			us_id: {
				type: "integer",
				autoincrement: true,
				primary: true,
			},
			us_username: {
				type: "string",
				defaultsTo: "",
				index: true,
			},
			us_firstname: {
				type: "string",
				defaultsTo: "",
				index: true,
			},
			us_lastname: {
				type: "string",
				defaultsTo: "",
				index: true,
			},
			us_email: {
				type: "string",
				defaultsTo: "",
				index: true,
			},
			us_password: {
				type: "string",
				defaultsTo: "",
				index: true,
			},
			us_role: {
				type: "string",
				defaultsTo: "",
				index: true,
			},
			us_phone: {
				type: "string",
				defaultsTo: 0,
				index: true,
			},
			us_address: {
				type: "string",
				defaultsTo: "",
				index: true,
			},
			
		},
	};
}
