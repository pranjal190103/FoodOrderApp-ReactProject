import Input from "../UI/Input";
import "./MealItemForm.css";
import { useRef } from "react";

const MealItemForm = (props) => {
  // const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredAmount = amountInputRef.current.value; //this value is always string so we need to convert it to a number
    const enteredAmountNumber = +enteredAmount; //converting sttring to number
    
    //trim() removes the whitespace from the text
    // if (
    //   enteredAmount.trim().length === 0 ||
    //   enteredAmountNumber < 1 ||
    //   enteredAmountNumber > 5
    // ) {
    //   setAmountIsValid(false)
    //   return;
    // }

    props.onAddToCart(enteredAmountNumber);
  };

  return (
    <form className="form" onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Quantity"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {/* {!amountIsValid && <p>Please enter an appropriate amount</p>} */}
    </form>
  );
};

export default MealItemForm;
