# you-may-like

## 1.0 About Service
The service I inherited was the carousel at the bottom of a Nike product page that lists suggested items from the main product page. 

This service displays products with an title, image, price, and type.

### 1.1 CRUD
* GET /shoes
  * returns an item with title, image, price, and type
* POST /shoes
  * adds an item with title, image, price, and type
* PUT /shoes
  * replaces an item with title, image, price, and type
* DELETE /shoes
  * delets an item with title, image, price, and type

Example shape of data:

```
{
  name: String,
  picture: String,
  id: Number,
  price: Number,
  type: String
}
```

## 2.0 Setup
### 2.1 MySQL Setup
* Install mysql with `npm install mysql`
* Create connection file
```
const mysql = require('mysql');
const pool = mysql.createPool({
  // host: '127.0.0.1',
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'youMayLike'
});

pool.getConnection((err, connection) => {
  if (err) {
    console.error(err);
  }
  return;
})
```
Schema file:
```
DROP DATABASE IF EXISTS youMayLike;

CREATE DATABASE IF NOT EXISTS youMayLike;

USE youMayLike;

DROP TABLE IF EXISTS shoes;

CREATE TABLE shoes (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(250),
  picture TEXT NOT NULL,
  price INT NOT NULL,
  type VARCHAR(250),
  PRIMARY KEY (id)
);
```
#### Connecting to MySQL with commands
* DON'T FORGET TO START THE MYSQL SERVER
  * mysql.server start
* Load the schema file
  * mysql -u root < database/mysql/schema.sql
* Login
  * mysql -u root

### 2.2 CouchDB Setup
* Download the Apache CouchDB 
  * http://archive.apache.org/dist/couchdb/binary/mac/
* Open up Fauxton, web browser app
  * http://127.0.0.1:5984/_utils/#login
* Verify install by clicking the "Verify" button on the bottom left
* Click "Setup" button and choosing the "Single Node Setup"
* Install node-couch, nano
```
npm install nano node-couch
```
#### Useful CouchDB Commands
* See all databases
  * curl -X GET http://127.0.0.1:5984/_all_dbs
* Add a database (may require username and password)
  * curl -X PUT http://admin:password@127.0.0.1:5984/{nameOfDatabase}
* Delete a database
  * curl -X DELETE http://127.0.0.1:5984/{nameOfDatabase}
* Create a variable for server for easier access
```
SERVER=http://admin:password@127.0.0.1:5984
curl -X GET $SERVER/_all_dbs
```
* Show the documents in terminal
```
curl -X GET $SERVER/youmaylike/_design/view3/_view/new-view
```
* Create a new id for a document
```
curl -X GET $SERVER/_uuids
curl -X PUT $SERVER/youmaylike/575e92f698c0539c07c23a7a280024cb -d "{\"name\":\"Super Sick Shoes\",\"picture\":\"http://lorempixel.com/400/200/sports/1/\",\"price\":75,\"type\":\"metal\"}"
```

## 3.0 Log 

### Issue Complaints
1.  At first I was going to use Postgres, but for some reason, I wasn't able to grasp how it worked. I tried for a few days, but couldn't figure it out. I did some research and there is a "knex" SQL query builder that I looked into and tried using that, but couldn't figuer it out. In the end, I decided to just use Mysql since I was a bit more familiar with it. It ended up being okay. 

2. It was stated that Cassandra was a pain, so I decided not to go that route. The next thing to use on Learn mentioned Riak, but it did not seem like there was very much information on it and I did not like the documentation. My SDC mates decided to use CouchDB so I followed their lead.

### 3.1 MySql Issues

1.  It took me a while to figure out how to batch the data. Eventually, I found batching the data would help me seed the data without the server timing out. Also, learning more about async and await was extremely helpful

### 3.2 CouchDB Issues

1.  Using CouchDB was a little strange. At first I had to deal with this external app called Fauxton to see the different data was was inputted into the database. I was very used to Mongo which was slightly more intuitive to me. 

### 3.3 New Relic

- npm install newrelic
- copy license key: 10024f6bcc411343a7fb86dac7de49da99d92d16
- copy newrelic.js from node_modules/newrelic into root directory


### 3.4 DMBS Benchmarking

1. Using the mysql benchmark function, I queried 1 million records.

```
mysql> SELECT BENCHMARK(1000000,1+1);
+------------------------+
| BENCHMARK(1000000,1+1) |
+------------------------+
|                      0 |
+------------------------+
1 row in set (0.02 sec)
```
#### 3.4.1 k6 Setup

- brew install k6
- load the script
  - k6 run k6Tests.js

#### 3.4.2 Deploying on EC2

##### 3.4.2.1 Installing Dockerr
- npm install -g docker

