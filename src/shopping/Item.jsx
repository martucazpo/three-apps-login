import { connect } from "react-redux";
import actions from "../redux/actions";

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

const mapDispatchToProps = (dispatch) => ({
  prepareToExchangeItem: (item) =>
    dispatch(actions.prepareToExchangeItem(item)),
  removeItemFromList: (item) => dispatch(actions.removeItemFromList(item)),
});

export default connect(null, mapDispatchToProps)(Item);
