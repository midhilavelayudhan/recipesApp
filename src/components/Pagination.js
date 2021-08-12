function Pagination({setCurrentPage,itemsPerPage,filtered}){
    //push all the pagination number to the array numberofBox ie, 1 2 3 4 length of filtered Items divided by items per page
    let numberofBox=[]
    for(let i=1;i<=Math.ceil(filtered.length/itemsPerPage);i++){
        numberofBox.push(i);
        
    }
    //onclick function paginated Items
    let pageItems=(event)=>{
        setCurrentPage(event.target.id)
    }
    //show the bottom boxes that show paginations like 1 2 3 4 
    let mainPages=numberofBox.map((pages)=>{
        return <li id={pages} onClick={pageItems}>{pages}</li>  
    })
    console.log(numberofBox)
    return (
        <section>
            <ul className="pagination flex">
                {mainPages}
            </ul>
        </section>
    )
}
export default Pagination;
