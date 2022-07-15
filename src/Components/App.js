import React from "react";
import data from "./data";

//css
import classes from "./App.module.css";

export default function App() {
  const [count, setCount] = React.useState(0);
  const [text, setText] = React.useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(count);
    if (count <= 0) {
      amount = 1;
    } else if (count > 8) {
      amount = 8;
    }
    setText(data.slice(0, amount));
  };

  return (
    <section className={classes.section}>
      <h3>Dummy text generator</h3>
      <form className={classes.form} onSubmit={handleSubmit}>
        <label htmlFor="amount">paragraphs:</label>
        <input
          type="number"
          name="amount"
          id="amount"
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button type="submit" className={classes.btn}>
          generate
        </button>
      </form>
      <article className={classes.text}>
        {text.map((item, index) => {
          return <p key={index}>{item}</p>;
        })}
      </article>
    </section>
  );
}
