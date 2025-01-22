import React from "react";
function Menu(){
   return(
    <section className="menu">
        <h2>Our Menu</h2>
     <div className="m">
       <h3>Italian Cuisine</h3>
       <ul>
        <li>Margareta Pezza - $12.99</li>
        <li>Spaghetti - $16.99</li>
       </ul>
        </div>
        <div className="m">
       <h3>Turkish Cuisine</h3>
       <ul>
        <li>Moussaka - $14.99</li>
        <li>Greek Salad - $9.99</li>
       </ul>
      </div>
    </section>
   )

}
export default Menu;