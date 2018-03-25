const express = require('express')
const app = express()
var populate = require('./populate')

var elasticsearch = require('elasticsearch');
var client = new elasticsearch.Client({
    host: 'localhost:9200',
  });

/*Populate Endpoint: allows you to recover the necessary data using the node-car-api API and backups in an Elasticsearch database.*/
app.get('/populate', function (req, res) {
	populate.startPopulate()
  	res.send('Populate page')
})

/*Suv Endpoint: displays the data in descending order of volume*/
app.get('/suv', function (req, res) {
	let results = []
    client.search({
        index: 'cars',
        type: 'car',
        body: {
            query: {
               match_all: {},
            },
            sort: {
                "volume.keyword": {
                    order: "desc"
                }
            }
        }
      }).then(function (res) {
            res.hits.hits.forEach(model => {
                results.push(model['_source']);
          });
      }, function (err) {
        console.trace(err.message);
      }).then(() => {
        res.json(results);
      });
})

app.listen(9292, function () {
  console.log('App is listening on port 9292!')
})
