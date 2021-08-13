const router = require("express").Router();
const {
  User,
  Registry,
  Category,
  RegistryCategories,
} = require("../../models");

// the endpoint: `/api/users`

// get all users
router.get("/", (req, res) => {
  User.findAll({
    // will uncomment this for deployed app
    attributes: { exclude: ["password"] },
  })
    .then((dbUserData) => res.json(dbUserData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// find one user by id and its registries
router.get("/:id", (req, res) => {
  User.findOne({
    attributes: { exclude: ["password"] },
    where: {
      id: req.params.id,
    },
    include: [
      {
        model: Registry,
        attributes: ["title"],
        include: [
          {
            model: Category,
            attributes: ["category_name"],
            through: {
              attributes: [],
            },
          },
        ],
      },
    ],
  })
    .then((dbUserData) => {
      if (!dbUserData) {
        res.status(404).json({ message: "No user found with this id" });
        return;
      }
      res.json(dbUserData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// add a user
router.post("/", (req, res) => {
  // expects {username: 'sinajeen', email: 'sinajeen@gmail.com', password: 'password1234'}
  // dummy data to use in insomnia
  // {
  //     "username": "sinajeen",
  //     "email": "sinajeen@gmail.com",
  //     "password": "password1234"
  // }
  User.create({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  })
    .then((dbUserData) => {
      req.session.save(() => {
        req.session.user_id = dbUserData.id;
        req.session.username = dbUserData.username;
        req.session.logged = true;

        res.json(dbUserData);
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// login route
router.post("/login", (req, res) => {
  // expects {username: 'sinajeen', password: 'password1234'}
  User.findOne({
    where: {
      username: req.body.username,
    },
  }).then((dbUserData) => {
    if (!dbUserData) {
      res.status(400).json({ message: "Incorrect username!" });
      return;
    }

    const validPassword = dbUserData.checkPassword(req.body.password);

    if (!validPassword) {
      res.status(400).json({ message: "Incorrect password!" });
      return;
    }

    req.session.save(() => {
      req.session.user_id = dbUserData.id;
      req.session.username = dbUserData.username;
      req.session.logged = true;

      res.json({
        user: dbUserData,
        message: "You are now logged in!",
        logged: req.session.logged,
      });
    });
  });
});

// logout route
router.post("/logout", (req, res) => {
  if (req.session.logged) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

// edit user info
router.put("/:id", (req, res) => {
  // expects {username: 'sinajeen', email: 'sinajeen@gmail.com', password: 'password1234'}
  // dummy data to use in insomnia
  // {
  //     "username": "victor",
  //     "email": "victor@gmail.com",
  //     "password": "password4321"
  // }
  // pass in req.body instead to only update what's passed through
  User.update(req.body, {
    individualHooks: true,
    where: {
      id: req.params.id,
    },
  })
    .then((dbUserData) => {
      if (!dbUserData) {
        res.status(404).json({ message: "No user found with this id" });
        return;
      }
      res.json(dbUserData);
      console.log("You have updated your information");
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// delete an user
router.delete("/:id", (req, res) => {
  User.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbUserData) => {
      if (!dbUserData) {
        res.status(404).json({ message: "No user found with this id" });
        return;
      }
      res.json(dbUserData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
