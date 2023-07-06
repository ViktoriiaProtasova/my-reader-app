const Controls = ({ current, total, onChange }) => {
  return (
    <section className="d-grid gap-2 d-md-flex justify-content-md-start">
      <button
        type="button"
        className="btn btn-primary"
        disabled={current === 1}
        onClick={() => {
          onChange(-1);
        }}
      >
        Prev
      </button>
      <button
        type="button"
        className="btn  btn-primary"
        disabled={current === total}
        onClick={() => {
          onChange(1);
        }}
      >
        Next
      </button>
    </section>
  );
};
export default Controls;
