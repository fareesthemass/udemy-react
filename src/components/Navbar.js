

function Navbar(){ 
    return( 
        <div class="navbar--container">
            <div class="navbar--container__title">
                <h1>Udemy</h1>
            </div>
    
            <div class="navbar--container__searchbar">
                <i class="fa-solid fa-magnifying-glass" style={{color: "#000000"}}></i>
                <input type="text" placeholder="Search for anything here. Tech, Business, Art.."/>
            </div>
    
            <div class="navbar--container__icons">
                <p class="navbar--container__icons__hover">Courses</p>
                <div class="mylearning">
                <p>My Learning</p>
                <div class="mylearning__popup">
                    You are not purchasing anything yet !
                </div>
                </div>
                <div class="navbar--container__icons__hover"><i class="fa-solid fa-cart-shopping" style={{color: "#000000"}}></i></div>
                <div class="navbar--container__icons__hover"><i class="fa-solid fa-bell" style={{color: "#000000"}}></i></div>
                <div class="navbar--container__icons__hover"><i class="fa-solid fa-user" style={{color: "#000000"}}></i></div>
                </div>
                <div class="taggle">
                    <i class="fa-solid fa-bars"></i>
                </div>    
        </div>)
}

export default Navbar