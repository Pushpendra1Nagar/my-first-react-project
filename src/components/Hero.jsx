const Hero = () => {
    return (
    <main className="hero container">
        <div className="hero-content">
            <h1>YOUR FEET DESERVE THE BEST</h1>
            <p> YOUR FEET DESERVE THE BEST AND WE ARE HERE TO HELP YOU WITH OUR SHOES</p>
         <div className="hero-buttons">
            <button>Shop Now</button>
            <button className="secondary-button">Category</button>
         </div>
        <div className="shopping">
            <p>Also Available On</p>
            <div className="shopping-icons">
                <img src="/img/flipkart.png" alt="Flipkart"/>
                <img src="/img/amazon.png" alt="Amazon"/>
            </div>
        </div>
        </div>
        <div className="hero-image">
            <img src="/img/shoe_image.png" alt="Shoe Image"  /> 
        </div> 
    
    </main>
);
}
export default Hero;