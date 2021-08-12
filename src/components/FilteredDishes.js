import { useContext, useState } from "react"
import Pagination from "./Pagination";
import CardDish from "./CardDish";
//import AllMenuContext 
import {AllMenuContext} from './Menus';

function FilteredDishes(props){
    //context assign to a variable
    const allMenus=useContext(AllMenuContext);

    console.log(props.singledishMenu)
let [filtered,setFiltered]=useState([]);
let [activeDish,setActivedish]=useState("Beef");
//Pagination section
let [currentPage,setCurrentPage]=useState(1)
let [itemsPerPage,setItemsPerPage]=useState(4)

let lastIndex=currentPage*itemsPerPage;//1*4=4 2*4=8 3*4=12
let firstIndex=lastIndex-itemsPerPage;//4-4=0 8-4=4 12-4=8

     //Print the dish categories
    let filteredishesHandler=(category)=>{
        setActivedish(category)
        let filteredDishesResult=allMenus.filter((item)=>{
            if(item.strCategory===category)
            return item
        }).map((items)=>{
           return(<CardDish dishes={items}/>
               
           )
        })

        setFiltered(filteredDishesResult)
        props.setSingledish([])
    }
    //pagination images that shown
        let dishShownNow=filtered.slice(firstIndex,lastIndex);
        
    //console.log({filtered})
    console.log({activeDish})
//lets show the single dishes
let maxSingledishItem=4;
let singledishItems=props.singledishMenu.map((items,i)=>{   //singledishItems limit t0 4
    if(i<maxSingledishItem){
    return <li>
    <img src={items.strMealThumb}/>
    {items.strMeal}
</li>
    }
})
//pagination on single dish Items
//let  singledishNow=singledishItems.slice(firstIndex,lastIndex);

    let filteredDishes=props.menuCategories.map((categ)=>
    {
       return <li className={categ.strCategory==={activeDish} ? "active":""} onClick={()=>filteredishesHandler(categ.strCategory)}>
            {categ.strCategory}
        </li>
    })
    //console.log("filter",{filteredDishes});
    
    return(
        <div className="container">
        <div className="filtered-dishes">
            
                <div className="filtered-dishes-content text-center">
                    <h2>Choose your Dishes</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                </div>
                
                    <ul className="flex flex-wrap">
                       {filteredDishes}
                    </ul>
         </div>        
                <div className="filtered-dish-result">
                     <h3>{activeDish} Items</h3>
                    <ul className="flex flex-wrap gap">
                        {singledishItems}
                        {singledishItems!=0 || filtered!=0 ? dishShownNow  //to avoid 'please try another dish after singledishItems' ..
                        :<div className="alert">
                            <h1>Please try another dishes!!!</h1>
                        </div>}
                    </ul>
                </div>
                <Pagination itemsPerPage={itemsPerPage}
                filtered={filtered}
                setCurrentPage={setCurrentPage}/>
                </div>

                
    )
}

export default FilteredDishes;