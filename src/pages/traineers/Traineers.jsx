import {trainers} from "../../data"
import Header from "../../Components/Header"
import HeaderImage from "../../images/header_bg_5.jpg"
 import Card from "../../UI/Card"
import Trainer from "../../Components/Trainer"
import { FaFacebookF } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa"
import { FaTwitter } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"
import "./trainers.css"
import SearchInput from "../../Components/SearchInput"
import { useState } from "react"
const Traineers = () => {
  const [searchQuery, setSearchQuery] = useState("")
  const handleSearchQueryChange = (event) => {
    setSearchQuery(event.target.value);
  };
  
  return (
  <>
    <Header title="Trainers" image={HeaderImage}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus placeat adipisci exercitationem.
    </Header>
    {/* <SearchInput /> */}
    {/* <SearchInput value={searchQuery} onChange={handleSearchQueryChange} /> */}

    <section className="trainers">
      <div className="container trainers__container">
      {
       
      trainers.map(({id, name, image, job, socials})=>{
            
                   return   <Trainer key={id} name={name} job={job}  image={image} socials={
                    [
                      {icon: <FaInstagram/>, link: socials[0]},
                      {icon: <FaTwitter/>, link: socials[1]},
                      {icon: <FaFacebookF/>, link: socials[2]},
                      {icon: <FaLinkedin/>, link: socials[3]}
                    ]
                   }/>
                   
                  })
      }
</div>
</section>
</>
)
}

export default Traineers

