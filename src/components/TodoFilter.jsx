function TodoFilter({ showFinished, toggleFinished }) {
  return (
    <div className="my-4">
      <input
        className="id-show"
        onChange={toggleFinished}
        type="checkbox"
        checked={showFinished}
      />
      <label className="mx-2" htmlFor="show">Show Finished</label>
    </div>
  );
}

export default TodoFilter;
