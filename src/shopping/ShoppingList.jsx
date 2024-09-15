import { connect } from "react-redux";
import ShoppingForm from "./ShoppingForm";
import Item from "./Item";

const ShoppingList = (props) => {
  return (
    <div>
      <ul>
        {props.shop.user.list.map((item) =>
          props.shop.isEdit && item.id === props.shop.editId ? (
            <li key={item.id}>
              <ShoppingForm name="editProduct" />
            </li>
          ) : (
            <li key={item.id}>
              <Item item={item} />
            </li>
          ),
        )}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => state;

export default connect(mapStateToProps, null)(ShoppingList);
