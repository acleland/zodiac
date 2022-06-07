const { Router } = require('express');
const { zodiac } = require('../../data/zodiac');
const router = Router();

router.get('/', (req, res) => {
  return res.json(zodiac.map((sign) => ({ id: sign.id, name: sign.name })));
});

module.exports = router;
