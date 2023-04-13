// Controller for services

exports.index = function (req, res) {
  console.log("Entró al controlador de services");
  res.render("services", {
    title: "Servicios",
  });
};
