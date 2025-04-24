import  data  from '../Assets/data.js'

const Display = () => {
   
  return (
    <>
      <div className="container">
         {data.map((data,index) =>{
          return( 
              <div className="card" key={index}>
                  <h2>{data.question}</h2>
                  <div className="options">
                      <p>{data.option1}</p>
                      <p>{data.option2}</p>
                      <p>{data.option3}</p>
                      <p>{data.option4}</p>
                  </div>
              </div>
             )
         })}
      </div>
    </>
  )
}

export default Display
