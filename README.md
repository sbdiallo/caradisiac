# CARADISIAC

**Build an api that get the list of SUV with the higher rate and the higher volume (car boot)**

## Objectif 

1. Build an api that provide endpoint `/populate`:
    * use the package [node-car-api](https://github.com/92bondstreet/node-car-api)] to get all records in json format
    * index - with bulk - all records to Elasticsearch
2. Build an api that provide endpoint `/suv

More precisely, the api

* listen port `9292`
* provide endpoint `/populate` to index records to Elasticsearch 
* provide endpoint `/suv` that return list of paginated higher rate and higher volume suv (The `/suv` endpoint could be a ES query to fetch the right data)

### Stack
```
Node.js + ES6 + Elasticsearch

```
## How to do that?

By indexing technical records from caradisiac to Elasticsearch and build an api with Node.js


### Client-side (bonus)

I did not do this

