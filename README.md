vue-server-template
======================================

This is a template repository you can use in order to have a functioning dev setup with Vue.js and a seperate Node.js server:

* The vue (frontend) code is in the `ui` folder
* The "backend" code is in the `server` folder

In order to have the best developer experience with restarting upon changes, both the frontend and backend are packed into two docker containers and then the power of docker-compose is utilized to mount the source code into the containers. This enables us to use the vue dev server or nodemon (for the server) to restart whenever we make changes.

## Developing

Simply call `bash scripts/startDev.sh` and everything should be up (takes 1-2 minutes on the very first spin-up)

## Getting your deploy-able package

When you are done and want to deploy your code, simply call `npm run build` in the root and both the frontend and backend code will be packed into `deployPackage`. Starting it up is easy: `node deployPackage/server/index.js`