# Dependencies
node_modules and package.json
```bash
$ npm init
$ npm start
```
express & socket.io
```bash
$ npm i express
$ npm i socket.io
```
# package.json
Under scripts, add 
```json
"start": "node server/server.js"
```
And then add
```json
"engines": {
  "node": "14.15.0" 
}
```
  # git
```git
$ git init
```
Add _.gitignore_ to ignore all _node_modules_
```bash
$ touch .gitignore && echo "node_modules/" >> .gitignore && git rm -r --cached node_modules ; git status
```
```git
$ git commit -m "message here"
```
# heroku
create heroku instance and push to heroku repo
```bash
$ heroku create
$ git push heroku HEAD:master
```
deploy web application
```git
$ heroku open
```