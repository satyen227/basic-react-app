import "./Product.css";
import Price from "./Price.jsx";

function Product({title , idx})
{   let Discription = [["Logitech MX Master 2S Bluetooth Edition","Wireless , Rechargeable , Lightweight"],["discription A","discription B"],["discription A","discription B"] ,["discription A","discription B"]];

    let oldPrice = [ "10,000" , "9,000" ,"8,000" , "7,000" ];
    let newPrice = ["7,999", "6,999","5,999","3,999"];

    let styles = {
        fontWeight: "bold",
    }
    
    return (
        <div className = "Product">
            <p style={styles}  >{title}</p>
            <p>{Discription[idx][0]}</p>
            <p>{Discription[idx][1]}</p>
            <Price oldPrice={oldPrice[idx]} newPrice ={newPrice[idx]} />
            
        </div>
    )
}

export default Product ;