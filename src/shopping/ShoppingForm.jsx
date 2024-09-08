const ShoppingForm = (props) => {
  return (
    <div>
      <form onSubmit={props.handleSubmit}>
        <label htmlFor={props.name}>Item: </label>
        <input
          name={props.name}
          value={props.state[props.name]}
          type="text"
          onChange={(e) => props.handleChange(e)}
          required
        />
        <button type="submit">{props.state.isEdit ? "exchange" : "add"}</button>
      </form>
    </div>
  );
};

export default ShoppingForm;
