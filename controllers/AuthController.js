exports.auth_register = (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  console.log("Fields:", firstName, lastName, email, password);
  //TODO: Validate the fields
  //TODO2:Already check registered
  //TODO3:crpyt password
  //TODO4:save the user to DB

  res.send("Register Completed.");
};

exports.auth_login = (req, res) => {
  // TODO: Auth.
  // TODO: Login func.
  res.send("Login Completed");
};
