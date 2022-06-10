import './APIUrl.css'

function APIUrlComp({dataSource}) {
  console.log(dataSource)
  return (
    <div className="api-url">
      <ol>
      {
        dataSource.map((item, index) => (
          <li key={index}>
            <h3>{item.title}</h3>
            <div className="form-item">
            <textarea className="form-control" onChange={() => getValue} value={item.url}></textarea>
            </div>
          </li>
        ))
      } 
    </ol>
    </div>
  )
}

export default APIUrlComp
