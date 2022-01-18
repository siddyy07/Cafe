import React from 'react'
import './Main.css';

const Main = (props) => {

  const {children,background,title, backdrop}=props;

     const renderMain = () => {
        
      let cssClass ="main";
      if(background){
       cssClass ="main-background"
      }
      console.log(backdrop)
     return(
    <div className={cssClass}>
      <div className='{backdrop ? "backdrop container-fluid" : "container-fluid"}'>
      <h2 style={{color : backdrop ? "var(--primary-white)" : "var(--primary-brick-red", fontFamily: "Roboto-bold"}}> {title}</h2>
        {children }
      </div>
      </div>
      )
     }

     console.log(background)
     return (
    <>
      {renderMain()
      }
    </>
  )
}

export default Main
