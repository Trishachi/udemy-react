import "./Card.css";

function Card(props) {
  //Tell your custom component which classes to use. Normal class declaration will not work in the card tag
  const classes = "card " + props.className;
  return <div className={classes}>{props.children}</div>;
  //The value of the children props will always be the value between the opening and closing tags of your custom(Card) component
}

export default Card;
