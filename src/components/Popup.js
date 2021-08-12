function Popup({setClosePopup,currentDish,allDishDetails}){
    console.log({allDishDetails})
    console.log({allDishDetails})
    let popupCloseHandler=()=>{
        setClosePopup(false);
    }
    let showPopupDishes=allDishDetails.map((menus)=>{
        return <><h2>{menus.strMeal}</h2>
        <img src={menus.strMealThumb}/>
        <div >
        <li >{menus.strIngredient1}</li>
        <li >{menus.strIngredient2}</li>
        <li >{menus.strIngredient3}</li>
        <li >{menus.strIngredient4}</li>
        </div>
        <p>{menus.strInstructions}</p>
        </>
    })

    
    return <div className="popup">
        <div className="popup-content">
        
            {showPopupDishes}
            
            <button>OrderNow</button>
            <h5 onClick={popupCloseHandler} className="popup-close">close</h5>
        </div>    
    </div>
}
export default Popup;