const {getBrands} = require('node-car-api');
const {getModels} = require('node-car-api');







async function getBrands(){
	
	return await getBrands();

}

async function getModelFromBrand(brand){
	return await getModels(brand)
}




async function getModelsByBrands(brands) {
    var models = [];
    for (let brand of brands) {
        //console.log(brand);
        const model = await getModelFromBrand(brand);
        model.push({
            brand: brand,
            model: model
        });
    }
    return models;
}


getBrands().then(function(result){
	getModelsByBrands(result).then(function(model){
		console.log(model);
	})
	
})



