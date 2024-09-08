const Item = (props) => {
  return (
    <div>
      <p>{props.item.product}</p>
      <div>
        <button onClick={() => props.removeItemFromList(props.item)}>
          delete
        </button>
        <button onClick={() => props.prepareToExchangeItem(props.item)}>
          edit
        </button>
      </div>
    </div>
  );
};

export default Item;
