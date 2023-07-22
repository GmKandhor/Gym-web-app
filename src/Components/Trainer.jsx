import React from 'react'
import Card from '../UI/Card'
import { links } from '../data'
// import SearchInput from './SearchInput'

// eslint-disable-next-line react/prop-types
const Trainer = ({name, image, job, socials}) => {
  return (
    <>
   
    <Card className="trainer"> 
        <div className="trainer-img">
            <img src={image} alt="" />
        </div>
        <h3>{name}</h3>
        <p>{job}</p>
      <div className="trainer__socials">
      {
            socials.map(({icon,link}, index)=>{
                return <a key={index} href={link} target='_blank' rel="noreffer noopener">{icon}</a>
            })
        }
      </div>
    </Card>
    </>
  )
}

export default Trainer