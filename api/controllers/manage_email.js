"use strict";
const db = require(__dirname + "/../../models");

const Sequelize = require('sequelize');
const Op = Sequelize.Op;

/**
 * This is just an example of User data (const receiver below). It should be generated in the Users table.
 * Also, I think, merge_tags table should be in the database, and when backend parsing the email template, 
 * We should get all merge tags or related merge tags and compare all of them with the template, and replace them with real values.
 * 
 * I had just imagined all of them such as Users and merge_tags table were in here.
 */

const merge_tags = ["{{first_name}}", "{{last_name"];
const receiver = {
    first_name: "Wen",
    last_name: "Chang"
};

module.exports = {

  get: async (req, res, next) => {
    db.email_template.findAll({ where: { id: req.params.id } })
      .then((resp) => {
          let strBody = JSON.stringify(resp.data.body);

          // Filter JSON email template has specific merge tags or not first.
          // After that, replace it with real values.
          merge_tags.forEach((item) => {
            if (strBody.includes(item))
                strBody.replace(item, receiver.first_name);
          });
          
          res.send((JSON.parse(strBody)));
      })
      .catch(error => res.send({ status: false, error: error }));
  }

};
