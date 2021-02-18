## Email Template Application

**Frontend**: React, Mobx, Typescript, HTML5, CSS3

**Backend**: NodeJS, ExpressJS, MySQL

## Requirement
1. Main page should have list of saved templates and button for adding new template.
2. Each Template can be modified or removed.
3. System using that third-party editor for editing templates.
4. Templates saving to backend.
5. There are few predefined tokens that can be inserted into template by your plugin for that third-party editor.
6. Root store on front is a class with mobx.
7. All should be written on TS.
8. There is possibility to show parsed template when editing it (for example, click on button in editor and some models with parsed tokens opening).


## Instructions
1. cd node-restful-email-template
   mv .env.example .env
2. Config .env such as dbname, dbusername, dbpassword and etc.
3. Install sequelize-cli globally. (npm install -g sequelize-cli - https://www.npmjs.com/package/sequelize-cli)
4. npm install
5. npm run db
6. node bin/www
