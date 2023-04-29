import React from 'react';
import ReactSafeHtml from 'react-safe-html';
import Image from 'next/image'

import styles from '@/styles/Card.module.css';

let components = ReactSafeHtml.components.makeElements({'class':true});
components.source = ReactSafeHtml.components.createSimpleElement('source', {
  'src':true,
  'type':true
});
components.video = ReactSafeHtml.components.createSimpleElement('video', {
  'controls':true,
  'name':true
});

function ImageList(props) {
  let list = null;

  if(props.images.length){
    list = (<div>
    {props.images.map((image, index) => {
      return (
        <Image key={index} src={image} alt={index} className={styles.cardImage}/>
      )
    })}
    </div>)
  }

  return (
    <div>
      {list}
    </div>
  )
}

function Card(props) {

  if(props.cardValue)

    return (
      <div className={styles.card}>
          <div className={styles.card__body}>
              <h4 className={styles.card__title}>{props.cardValue.title}</h4>
              <ReactSafeHtml html={props.cardValue.body} components={components} />
          </div>
          <div dangerouslySetInnerHTML={{__html: props.cardValue.embed}} className={styles.embedded}></div>
          <ImageList images={props.cardValue.images} />
      </div>
    );

  else
    return (
      <div></div>
    );
}

export default Card;