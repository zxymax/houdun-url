import { _params, dynamicRouting } from './api/dynamic-routing'
import APIShowUIComp from './components/APIShowUIComp'

function DynamicRouting() {
  return (
    <div className="dynamic-routing">
      <h2>{_params.title}</h2>
      <APIShowUIComp apiData={dynamicRouting} params={_params}  /> 
    </div>
  )
}

export default DynamicRouting
