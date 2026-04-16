import React, { useEffect, useState } from "react"
import styles from "./tracks.module.css"
import clsx from "clsx"


export function TrackList(props: any) {
    
    const [select, setSelect] = useState(null)
    
    
    
    if (props.items === null) {
    return <div>
      <h1>MusicFun</h1>
      <span>Loading...</span>
    </div>
    }

    if (props.items.length === 0) {
        return <div>
        <span>No tracks</span>
        </div>
    }

    const obj = props.items.map((ost: any) => {
    return (
      <li className={styles.track} key={ost.id} style={ {
        border: ost.id === select ? "3px solid black" : "3px solid #2113a0",
        
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
  
    let selectOst = props.items.find((it: any) => select === it.id);
    return (
    <div>
        
      <h1>MusicFun</h1>
        <div style={{
          display: "flex",
          alignItems: "flex-start"
        }}>
      
        <div>
          <ul className={clsx({
            [styles.tracks]: true
          })}>
        
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