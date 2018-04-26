const data = require('./data.json')
const data2 = require('./data2.json')
const jsonfile = require('jsonfile')


const json = data.results.map((result) => {
  return {
    formatted_address: result.formatted_address,
    lat: result.geometry.location.lat,
    lng: result.geometry.location.lng,
    name: result.name,
    id: result.id
  }
})

const json2 = data2.results.map((result) => {
  return {
    formatted_address: result.formatted_address,
    lat: result.geometry.location.lat,
    lng: result.geometry.location.lng,
    name: result.name,
    id: result.id
  }
})

jsonfile.writeFileSync('./RESULT/RumahMakanPadang.json', json)
jsonfile.writeFileSync('./RESULT/BakmiBandung.json', json2)

console.log(json);