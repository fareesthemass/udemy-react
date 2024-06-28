import c1 from "../assets/img/c1 (1).jpg"
import c2 from "../assets/img/c1 (2).jpg"
import c3 from "../assets/img/c1 (3).jpg"
import c4 from "../assets/img/c1 (4).jpg"
import c5 from "../assets/img/c1 (5).jpg"
import c6 from "../assets/img/c1 (6).jpg"
import c7 from "../assets/img/c1 (7).jpg"
import c8 from "../assets/img/c1 (8).jpg"

function Mostpopular(){
    return( <div class="mostpopular">
        <div class="mostpopular__title">
            <h1>Most Popular</h1>
            <p>Pick the best fit</p>
        </div>

        <div class="mostpopular__container">
            <div class="course--card">
                <img src={c1} alt=""/>
                <h3>Python Data Visualization</h3>
                <p>Dr.angela yu</p>
                <p>4.7 ⭐⭐⭐⭐</p>
                <p>₹499 <del>₹2999</del></p>
                <p class="course--card__seller">Best Seller</p>
            </div>

            <div class="course--card">
                <img src={c2} alt=""/>
                <h3>Web Development</h3>
                <p>Agnel John</p>
                <p>4.9 ⭐⭐⭐⭐</p>
                <p>₹1999 <del>₹20000</del></p>
                <p class="course--card__seller">Best Seller</p>
            </div>

            <div class="course--card">
                <img src={c3} alt=""/>
                <h3>Ultimate AWS certified </h3>
                <p>Stephane</p>
                <p>4.7 ⭐⭐⭐⭐</p>
                <p>₹599 <del>₹3099</del></p>
                <p class="course--card__seller">Best Seller</p>
            </div>

            <div class="course--card">
                <img src={c4} alt=""/>
                <h3>UI/UX Design</h3>
                <p>Krill Eremenko</p>
                <p>3.5 ⭐⭐⭐</p>
                <p>₹499 <del>₹1999</del></p>
                <p class="course--card__seller">Best Seller</p>
            </div>

            <div class="course--card">
                <img src={c5} alt=""/>
                <h3>Javascript</h3>
                <p>Dr.angela yu</p>
                <p>4.7 ⭐⭐⭐⭐</p>
                <p>₹499 <del>₹2999</del></p>
                <p class="course--card__seller">Best Seller</p>
            </div>

            <div class="course--card">
                <img src={c6} alt=""/>
                <h3>Network Engineering</h3>
                <p>Agnel John</p>
                <p>4.9 ⭐⭐⭐⭐</p>
                <p>₹1999 <del>₹20000</del></p>
                <p class="course--card__seller">Best Seller</p>
            </div>

            <div class="course--card">
                <img src={c7} alt=""/>
                <h3>Azure </h3>
                <p>Stephane</p>
                <p>4.7 ⭐⭐⭐⭐</p>
                <p>₹599 <del>₹3099</del></p>
                <p class="course--card__seller">Best Seller</p>
            </div>

            <div class="course--card">
                <img src={c8} alt=""/>
                <h3>Cyber Security</h3>
                <p>Krill Eremenko</p>
                <p>3.5 ⭐⭐⭐</p>
                <p>₹499 <del>₹1999</del></p>
                <p class="course--card__seller">Best Seller</p>
            </div>
        </div>
    </div>
)
}
export default Mostpopular