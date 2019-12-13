# MysqlRestProxy
node js restfull app for mysql rest proxy

require node js
require express 
require mysql

for test run
curl -X POST \
  http://127.0.0.1:3000/query \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: f92c9aa1-54d5-27f5-f1ae-d5db054f51e1' \
  -d '{ 
   "host":"MysqlServerIp",
   "user":"MysqlUser",
   "password":"MysqlPassword",
   "database":"MysqlDatabase",
   "query": "Select sysdate()"
}'
