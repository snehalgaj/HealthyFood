import styles from "./Foodinput.module.css";

const Foodinput = ({ handleKeyDown }) => {
  return (
    <>
      <input
        type="text"
        placeholder="Enter Food of your choice"
        className={styles.foodInput}
        onKeyDown={handleKeyDown}
      />
    </>
  );
};
export default Foodinput;
