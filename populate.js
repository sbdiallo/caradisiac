/*Populate Endpoint: allows you to recover the necessary data using the node-car-api API and backups in an Elasticsearch database.*/
const {getBrands} = require('node-car-api')
const {getModels} = require('node-car-api')
var elasticsearch = require('elasticsearch')
var client = new elasticsearch.Client({
  host: 'localhost:9200',
  log: 'trace'
});

/*Pushing records to Elasticsearch*/
function addToElastic(model) {
	client.create({
        index: 'cars',
        type: 'car',
        id: model.uuid,
        body: model
      }, function (error, response) {
        if(error)
        {
          console.log(error);
        }
    });
}

/*Return array of brands*/
async function getBrandsList() {
	var brandsList = await getBrands()
	return brandsList;
}

module.exports = {
	startPopulate : async function() {
		getBrandsList().then((brands) => {
			brands.forEach(async function(brand){
				const models = await getModels(brand);
				models.forEach(function(model){
					addToElastic(model)
				})
				
			})
		})	
	}
}
