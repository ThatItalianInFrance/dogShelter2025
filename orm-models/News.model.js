module.exports = function mymodel() {
  return { 
    attributes: {
      id: {
        type: "integer",
        autoincrement: true,
        primary: true,
      },
      title: {
        type: "string",
        defaultsTo: "",
        index: true,
      },
      date_start: {
        type: "date",
        index: true,
    },
      date_end: {
        type: "date",
         index: true,
      },
      content: {
        type: "text",
      },
      image: {
        type: "string",
        defaultsTo: "",
      },
      author_id: {
        type: "integer",
        defaultsTo: 0,
        index: true,
      },
    },
  }
  }