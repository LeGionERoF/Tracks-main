import { useEffect, useState } from "react";





export function App() {
  
  
  


 
    
  
  

  useEffect(() => {
    fetch("https://musicfun.it-incubator.app/api/1.0/playlists/tracks", {
      headers: {
        'api-key': '482dd083-09fa-4e8e-bf40-3137d5d95947'
      }
    })
    .then(res => res.json())
    .then(json => setPalm(json.data))
    .catch(err => console.log(err))
  }, [])
    
  



  
  
  
  const obj = palm.map((ost) => {
    return (
      <li  key={ost.id} style={ {
        border: ost.id === select ? "3px solid black" : "none",
        
      } }>
          <div style={{cursor: "pointer"}} onClick={() => {
            setSelect(ost.id)
            
          
          }}>

            {ost.attributes.title.slice(0, 15)}
          </div>
          
          <audio src={ost.attributes.attachments[0].url} controls></audio>
        </li>
    )
  })
  let selectOst = palm.find((it) => select === it.id);
  
  return (
    
    <div>
      <h1>MusicFun</h1>
        <div style={{
          display: "flex",
          alignItems: "flex-start"
        }}>
      
        <div>
          <ul>
        
          {obj}
        
          </ul>
          <button onClick={() => {
            setSelect(null);
            
          }}>Reset</button>
      </div>
      
      <div style={{
        marginLeft: "200px",
        
        border: "3px solid black",
        
      }}>
        <h3 style={{marginLeft: "15px"}}>Детали</h3>
        {!select && <div><p style={{marginLeft: "15px", marginRight: "15px"}}>"Трек не выбран"</p></div> }
        
        {select && <div>
        <p style={{marginLeft: "15px" , marginRight: "15px"}}>Название: {selectOst.attributes.title.slice(0, 15)}</p>
        <p style={{marginLeft: "15px", marginRight: "15px"}}>Автор: {selectOst.attributes.user.name}</p>
        </div>} 
      </div>        
    </div>
  </div>

    
  )
}

