import saleimage from ".././assets/img/saleimage.jpeg"
function Saleimage(){
    return(
        <div class="sale--image">
        <img src={saleimage} width={"100%"} alt="saleimg"/>
        <div class="sale--image__flashsale">
            <h2 class="sale--image__flashsale__content">Udemy Flash Sale! 24 hours to save</h2>
            <p class="sale--image__flashsale__content">Get the top courses for just 499Rs. Just one day to save but a lifetime to learn</p>
        </div>
    </div>
    )
}

export default Saleimage