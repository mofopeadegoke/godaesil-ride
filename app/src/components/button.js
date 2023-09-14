import "./button.css";
export default function Button(props) {
  return (
    <>
      <button className="btn-component">{props.value}</button>
    </>
  );
}
