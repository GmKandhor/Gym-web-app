import React from 'react'
import SectionHead from './SectionHead'
import { testimonials } from '../data'
import {ImQuotesLeft} from "react-icons/im"
import { useState } from 'react'
import Card from "../UI/Card"
import {AiFillLeftCircle,AiFillRightCircle} from "react-icons/ai"
// import { preview } from 'vite'
const Testimonials = () => {
    const [index,setIndex] = useState(0)
    const {name,quote,avatar,job} = testimonials[index]

    const prevTestimonial = ()=>{
        setIndex(prev => prev -1)
        if(index <= 0){
            setIndex(testimonials.length - 1)
        }
    }
    const nextTestimonial = ()=>{
        setIndex(prev => prev +1)

        if(index >= testimonials.length -1){
            setIndex(0)
        }
    }
  return (
    <section className='testimonials' >
        <div className="container testimonials__container">
            <SectionHead  icon={<ImQuotesLeft/>} title="Testimonials" className="testimonials__head"  />
            <Card className="testimonial"> 
                <div className="testimonials__avatar">
                    <img src={avatar} alt="testimonial img" />
                </div>
                <p className='testimonial__quote'>{`"${quote}"`}</p>
                <h5>{name}</h5>
                <small>{job}</small>
            </Card>
            <div className="testimonials__btn-container">
                <div className="testimonials__btn" onClick={prevTestimonial}><AiFillLeftCircle/></div>
                <div className="testimonials__btn" onClick={nextTestimonial} ><AiFillRightCircle/></div>
            </div>
        </div>
    </section>
  )
}

export default Testimonials