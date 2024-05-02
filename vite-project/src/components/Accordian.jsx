
import React,{ useState } from 'react'
function Accordian() {

const [accordion, setAccordion]=useState(0)




const content=[
    {
      title:'Title 1',
      description:'Description 1'  
    },
    {
      title:'Title 1',
      description:'Description 2'  
    },
    {
      title:'Title 1',
      description:'Description 3'  
    },
]

  const accordionToggle = (index) => {
  
  if(accordion===index){
    setAccordion(null)
  }else{
    setAccordion(index)
    alert('hello rose')
  }


  }

  return (
    <div className='accordion-wrapper'>
     {
      content.map((item, index)=>{
         <div className='first-info' key={index}>


        <header onClick={()=>accordionToggle(index)}>
            {item.title} 
            <span class="material-symbols-outlined">{accordion===index ? 'expand-more' :'expand_less' }</span>
            </header>
        <p className={`description ${accordion===index ? 'opentab' :''}`}>{item.description}</p>
      </div>
      })
     }
    </div>
  )
}

export default Accordian
