const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.status(200).send({
    mensagem:  'Usando GET dentro de produto'
  })
});

router.post('/', (req, res, next) => {
  res.status(201).send({
    mensagem:  'Usando POST dentro de produto'
  })
});

module.exports = router;
