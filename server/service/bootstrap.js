const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const admin = require('../admin');

const dev = process.env.NODE_ENV !== 'production';

module.exports = (app, port, next) => {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(cookieParser());

  app.use((req, res, fn) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Origin, Accept, Content-Type, Authorization');

    if (dev) {
      res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    }

    if (req.method === 'OPTIONS') {
      return res.status(200).end();
    }
    fn();
  });

  if (!dev) {
    app.use((req, res, nextcb) => {
      const proto = req.headers['x-forwarded-proto'];
      if (proto === 'https') {
        res.set({
          'Strict-Transport-Security': 'max-age=31557600',
        });
        return nextcb();
      }
      res.redirect(`https://${req.headers.host}${req.url}`);
    });
  }

  admin(app);

  next(app);

  app.use((err, req, res, cb) => {
    if (err) {
      if (err.status) {
        res.send(err);
      } else {
        res.status(200).json(err);
      }
    }

    cb();
  });

  app.listen(port, err => {
    if (err) throw err;
    // eslint-disable-next-line no-console
    console.error(`>>> Ready on http://localhost:${port} `);
  });
};
