import ShoppingForm from "./ShoppingForm";
import Item from "./Item";

const ShoppingList = (props) => {
  return (
    <div>
      <ul>
        {props.state.user.list.map((item) =>
          props.state.isEdit && item.id === props.state.editId ? (
            <li key={item.id}>
              <ShoppingForm
                handleChange={props.handleChange}
                handleSubmit={props.handleSubmit}
                state={props.state}
                name="editProduct"
              />
            </li>
          ) : (
            <li key={item.id}>
              <Item
                item={item}
                prepareToExchangeItem={props.prepareToExchangeItem}
                prepareToRemoveItem={props.prepareToRemoveItem}
              />
            </li>
          ),
        )}
      </ul>
    </div>
  );
};

export default ShoppingList;
