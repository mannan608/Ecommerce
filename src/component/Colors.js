const Colors = ({ uniColor, filterByColor }) => {
  return (
    <div className="d-flex gap-3 align-items-center">
      {uniColor.map((curlem, index) => {
        return (
          <button
            className="colorBtn "
            style={{ background: curlem }}
            key={index}
            value={curlem}
            name="uniColor"
            onClick={() => filterByColor(curlem)}
          ></button>
        );
      })}
    </div>
  );
};

export default Colors;
