// Controller for Leal terms

exports.index = function (req, res) {
    console.log("Entró al controlador de legal terms");
    res.render("legal-terms", {
      title: "Términos y Condiciones",
    });
  };
  
