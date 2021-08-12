function CardDish({dishes,showPopupHandler})
{
    
    return (<li>
            <a href="javascript:;" onClick={()=>showPopupHandler(dishes.strMeal)}>
                <img src={dishes.strMealThumb}/>
                    {dishes.strMeal}
            
            </a> 
        </li>      
)
}
export default CardDish;