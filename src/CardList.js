import React from 'react';
import Card from './Card'

function CardList(props){
  let list = null;

  if (props.cards.length){
    list = (<div>
    {props.cards.map((card, index) => {
      return (
        <Card key={index} cardValue={card} />
      )
    })}
    </div>)

    return (
      <div>{list}</div>
    )
  }

  return (
    <div></div>
  )
}

export default CardList;