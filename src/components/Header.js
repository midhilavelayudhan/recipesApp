function Header(){
    return (
        <header className="flex flex-center flex-between">
            <a href="" className="logo">
                Food Diary
            </a>
            <nav>
                <ul className="flex">
                    <li>
                        <a href="">Home</a>
                    </li>
                    <li>
                        <a href="">CheckOut</a>
                    </li>
                    <a href=""><i class="fas fa-shopping-cart"></i></a>
                </ul>
            </nav>
        </header>
    )
}
export default Header;