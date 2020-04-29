const passport = require("passport");

module.exports = (app) => {
  app.get(
    "/auth/facebook",
    passport.authenticate(
      "facebook"
      //, { scope: ['profile', 'email'] }
    )
  );

  app.get(
    "/auth/facebook/callback",
    passport.authenticate("facebook"),
    (req, res) => {
      res.redirect("/blogs");
    }
  );

  app.get("/auth/logout", (req, res) => {
    req.logout();
    res.redirect("/");
  });

  app.get("/api/current_user", (req, res) => {
    res.send(req.user);
  });
};
