import { _params, routingAnimationScrollingEffects as routingASE } from './api/routing-animation-effect'
import APIShowUIComp from './components/APIShowUIComp'

function Chapter4RoutingASE() {
  return (
    <div className="dynamic-routing">
      <h2>{_params.title}</h2>
      <APIShowUIComp apiData={routingASE} params={_params}  /> 
    </div>
  )
}

export default Chapter4RoutingASE
