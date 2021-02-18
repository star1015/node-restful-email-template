"use strict";
const db = require(__dirname + "/../../models");

const Sequelize = require('sequelize');
const Op = Sequelize.Op;

module.exports = {

  create: async (req, res, next) => {
    db.email_template.create(req.body)
      .then(resp => res.send(resp))
      .catch(error => res.send({ status: false, error: error }));
  },
  update: async (req, res, next) => {
    db.email_template.upsert(req.body)
      .then(resp => res.send(resp))
      .catch(error => res.send({ status: false, error: error }));
  },
  delete: async (req, res, next) => {
    db.email_template.destroy({ where: { id: req.params.id } })
      .then(() => res.send({ status: true }))
      .catch(error => res.send({ status: false, error: error }));
  },
  list: async (req, res, next) => {
    db.email_template.findAll()
      .then(resp => res.send(resp))
      .catch(error => res.send({ status: false, error: error }));
  },
  get: async (req, res, next) => {
    db.email_template.findAll({ where: { id: req.params.id } })
      .then((resp) => res.send(resp))
      .catch(error => res.send({ status: false, error: error }));
  }

};