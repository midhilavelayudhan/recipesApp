import { useContext, useState } from "react";
import CardDish from "./CardDish";
import Popup from "./Popup";
//step4 :import the context
import {AllMenuContext} from "./Menus";

function Specialdishes(){
    let [showPopup,setShowPopup]=useState(false);
    let [currentDish,setCurrentDish]=useState([])
    
    //console.log("Sending",specialMenu)
    const allMenus=useContext(AllMenuContext)
    //console.log("Global Items :",allMenus);

    let showPopupHandler=(dishes)=>{           //show the dish details into popup so fetch dishname from card
        setShowPopup(true)
        let dishtoShowPopup=allMenus.filter((dish)=>{
            return (dish.strMeal===dishes)
        })
        setCurrentDish(dishtoShowPopup)
    }
    let maxspecialDishes=10;
    let specialMenus=allMenus.map((menuItem,index)=>{
        if(index<maxspecialDishes){
        return <CardDish 
        dishes={menuItem}
        showPopupHandler={showPopupHandler}/>   // pass function to child component as props(popup)
        }
    })
    return(<>
        {showPopup && <Popup setClosePopup={setShowPopup} currentDish={currentDish} allDishDetails={currentDish}/>}
        <section className="Special-dishes">
        <div className="container">
            <div className="special-dishes-content text-center">
              <h2>SpecialDishes</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
              </div>
              <div className="special-dishes-list">
                <ul className="flex flex-wrap gap">
                    {specialMenus}
                </ul>
              </div>
              
        </div>
        </section>
        </>
    )
}
export default Specialdishes;