# you-may-like

# Journal

- 2019/10/01 
  - Added POST, PUT, and DELETE routes to the existing MongoDB

- 2019/10/02
  - refactored repo layout
  # PostgreSQL
  - installing postgres
    - 'brew install postgres'
  - start postgres
    - 'brew services start postgresql'
    - 'pg_ctl -D /usr/local/var/postgres start'
  - commands
    - \dt - show tables
    - \d table_name - describe table
    - \q - quit
    - \c dbname username - switch connection to new database



- mysql commands
  - load schema - mysql -u root < database/mysql/schema.sql
  - login - mysql -u root
  

- couchDB
  - curl -X GET http://127.0.0.1:5984/_all_dbs
    - see all databases
  - curl -X PUT http://admin:password@127.0.0.1:5984/testdb
    - add a database
    - added admin and password
  - SERVER=http://admin:password@127.0.0.1:5984
    - create variable for server
    - curl -X GET $SERVER/_all_dbs
  - curl -X GET $SERVER/youmaylike/_design/view3/_view/new-view
    - shows the documents (this can be get from fauxton)
  - curl -X GET $SERVER/_uuids
    - creates new id for a document
    - curl -X PUT $SERVER/youmaylike/575e92f698c0539c07c23a7a280024cb -d "{\"name\":\"Super Sick Shoes\",\"picture\":\"http://lorempixel.com/400/200/sports/1/\",\"price\":75,\"type\":\"metal\"}"

