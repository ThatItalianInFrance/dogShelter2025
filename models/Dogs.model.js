module.exports = function mymodel() {
	return {
		attributes: {
			do_id: {
				type: "integer",
				autoincrement: true,
				primary: true,
			},
			do_name: {
				type: "string",
				defaultsTo: "",
				index: true,
			},
			do_description: {
				type: "string",
				defaultsTo: "",
				index: true,
			},
			do_birth: {
				type: "string",
				defaultsTo: "",
				index: true,
			},
			ki_id: {
				model: "Kinds",
				alias: "kind",
			},
			db_id: {
				model: "DogsBox",
				alias: "dogsbox",
			},
			do_size: {
				type: "string",
				defaultsTo: "",
				index: true,
			},
			do_attitude: {
				type: "string",
				defaultsTo: "",
				index: true,
			},
			do_sex: {
				type: "string",
				defaultsTo: "",
				index: true,
			},
			do_coat: {
				type: "string",
				defaultsTo: "",
				index: true,
			},
			do_biter: {
				type: "integer",
				defaultsTo: 0,
			},
			do_neutering: {
				type: "integer",
				defaultsTo: 0,
			},
			do_chip: {
				type: "integer",
				defaultsTo: 0,
				index: true,
			},
			do_therapy: {
				type: "string",
				defaultsTo: "",
				index: true,
			},
			do_pathologies: {
				type: "string",
				defaultsTo: "",
				index: true,
			},
			do_onhome: {
				type: "tinyint",
				defaultsTo: 0,
			},
			do_alive: {
				type: "tinyint",
				defaultsTo: 1,
			},
		},
	};
}
