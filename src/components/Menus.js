import React,{useState,useEffect} from 'react';
import Hero from './Hero';
import Specialdishes from './Specialdishes';
import FilteredDishes from './FilteredDishes';
import Loading from './Loading';
import Header from './Header';
import Singledish from './Singledish';

//Global State using useContext
//step1 &3
//:create a global context that can be shared to its children and export it
export const AllMenuContext=React.createContext()

function Menus(){
    let [menu,setMenu]=useState([]);
    let [category,setCategory]=useState([]);
    let [loading,setLoading]=useState(false);
    let [singledish,setSingledish]=useState([]);
    //Get all the menus (starts with 'c')
    async function getAllTheRecipes(){
        setLoading(true)
        const API_URL="https://www.themealdb.com/api/json/v1/1/search.php?f=c"
        let response=await fetch(API_URL)
        let data=await response.json()
        setMenu(data.meals)
        setLoading(false)
        //console.log(data)

    }
    //Get ALL the meals categories
    async function getAllTheCategories(){
        setLoading(true)
        let response=await fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
        let categorys=await response.json()
        setCategory(categorys.categories)
        //console.log({category})
        setLoading(false)
    }
    //Get the single dish 
    async function getTheSingledish(){
        let response=await fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef")
        let singledishes=await response.json()
        setSingledish(singledishes.meals)

    } 
    useEffect(()=>{
        getAllTheRecipes()
        getAllTheCategories()
        getTheSingledish()
        
        //console.log(data)
    },[])
    console.log({singledish})
// let menuitems=menu.map((item)=>{
//         return <div >
//         <h2>{item.strCategory}</h2>    
//         <img style={{height:"200px",width:"200px"}} src={item.strMealThumb}/>  

//         </div>

    //  })

    return <div>
        <Header/>
        <Hero/>
        {/* step2 */ }
        <AllMenuContext.Provider value={menu}>
            {(!loading)?<Specialdishes/>:<Loading/>}
            {(!loading)?<FilteredDishes menuCategories={category} 
            
            singledishMenu={singledish}
            setSingledish={setSingledish}/>:null}
        </AllMenuContext.Provider> 
    </div>
}

export default Menus;