import { useState } from 'react'
import getData from '../utils/getData'
import APIUrlComp from './APIUrlComp'

// 展示列表组件
function APIShowUIComp({apiData, params}) {
  const _params = {
    _prex: params._prex,
    _type: params._type,
    _type_sub: params._type_sub,
    _suffix: params._suffix
  }
  const [data, setData] = useState(getData(apiData, _params))
  
  return (
    <div className="router-sub">
      <APIUrlComp dataSource={data} />
    </div>
  )
}

export default APIShowUIComp
