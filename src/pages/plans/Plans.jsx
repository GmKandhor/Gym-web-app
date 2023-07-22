import Header from '../../Components/Header'
import Card from "../../UI/Card"
import HeaderImage from "../../images/header_bg_4.jpg"
import {plans} from "../../data"
import "./plans.css"

const Plans = () => {
  return (
    <>
    <Header title="Membership Plans" image={HeaderImage}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima consectetur doloremque tempore impedit facilis nemo.
    </Header>
    <section>
      <div className="container plans__container">
        
         { plans.map(({id, name, desc, price, features})=>{
            return <Card key={id} className="plan">
              <h3>{name}</h3>
               <small>{desc}</small>
               <h1>{`$${price}`}</h1><h2>/mo</h2>
                {
                  features.map(({feature,available}, index)=>{
                    return <p key={index} className={!available ? "disable":""}>{feature}</p>
                  })
                }
              <button className="btn lg">Chose Plan</button>
            </Card>
          })
        }
      </div>
    </section>
    </>
  )
}

export default Plans
