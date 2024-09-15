import { connect } from "react-redux";
import actions from "../redux/actions";

const ShoppingForm = (props) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    props.shop.isEdit ? props.exchangeItem() : props.addItemToList();
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor={props.name}>Item: </label>
        <input
          name={props.name}
          value={props.shop[props.name]}
          type="text"
          onChange={(e) => props.handleListChange(e.target)}
          required
        />
        <button type="submit">{props.shop.isEdit ? "exchange" : "add"}</button>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
  handleListChange: (target) => dispatch(actions.handleListChange(target)),
  addItemToList: () => dispatch(actions.addItemToList()),
  exchangeItem: () => dispatch(actions.exchangeItem),
});
export default connect(mapStateToProps, mapDispatchToProps)(ShoppingForm);
