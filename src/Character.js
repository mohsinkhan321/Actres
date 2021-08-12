import React from "react";
import Card from "./Card"
import spinner from "./img/spinner.gif"

const Character = ({ Items, Loading }) => {
  console.log(Items)
  return Loading ? (
<img src={spinner} style={{width:"200px",margin:"auto",display:"block"}} alt="loading"/>
  ) : (
    <section className="cards">
      {Items.map((Item) => (
        <Card key={Item.char_id} Item={Item}></Card>
      ))}
    </section>
  );
};

export default Character;
