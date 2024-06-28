import img1 from "../assets/img/c1 (1).jpg"
import img2 from "../assets/img/c1 (2).jpg"
import img3 from "../assets/img/c1 (3).jpg"
import img4 from "../assets/img/c1 (4).jpg"


function Recommend(){
    return (
        <div class=" recommended">
        <div class="recommended--container">
            <h1>Recommended For You</h1>
            <p>Pick the best fit</p>
        </div>
        <div class="course--container">
            <div class="course--card">
                <img src={img1} alt=""/>
                <h3>Python Data Visualization</h3>
                <p>Dr.angela yu</p>
                <p>4.7 ⭐⭐⭐⭐</p>
                <p>₹499 <del>₹2999</del></p>
                <p class="course--card__seller">Best Seller</p>
            </div>

            <div class="course--card">
                <img src={img2}alt=""/>
                <h3>Web Development</h3>
                <p>Agnel John</p>
                <p>4.9 ⭐⭐⭐⭐</p>
                <p>₹1999 <del>₹20000</del></p>
                <p class="course--card__seller">Best Seller</p>
            </div>

            <div class="course--card">
                <img src={img3} alt=""/>
                <h3>Ultimate AWS certified </h3>
                <p>Stephane</p>
                <p>4.7 ⭐⭐⭐⭐</p>
                <p>₹599 <del>₹3099</del></p>
                <p class="course--card__seller">Best Seller</p>
            </div>

            <div class="course--card">
                <img src={img4} alt=""/>
                <h3>UI/UX Design</h3>
                <p>Krill Eremenko</p>
                <p>3.5 ⭐⭐⭐</p>
                <p>₹499 <del>₹1999</del></p>
                <p class="course--card__seller">Best Seller</p>
            </div>
        </div>
    </div>
    )
}

export default Recommend