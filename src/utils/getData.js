function enc(str) { 
  var encoded = encodeURIComponent(str).replace(/'/g, "%27").replace(/"/g, "%22"); 
    return encoded
}

function getData(dataSource, _params) {

  let _prex = _params._prex
  let _type = _params._type
  let _type_sub = _params._type_sub
  let _suffix = _params._suffix

  return dataSource.map((item, index) => {
    return {
      title: item.title,
      url: `${_prex}/${_type}/${enc(_type_sub)}/${enc(item.title)}${_suffix}`
    }
  })
  
}

export default getData
