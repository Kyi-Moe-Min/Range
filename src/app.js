/* eslint-disable eqeqeq */
import React from "react";
import PropTypes from "prop-types";

const BLUE_LIGHT = "#5ecbfd";
const GOLD_LIGHT = "#fdb962";

export const Range = props => {
  const { min, max, step, value, label, id, suffix, name, disabled } = props;
  let list = [];
  for (let i = min; i <= max; i += step)
    list.push(
      <option
        style={{ backgroundColor: i == value ? BLUE_LIGHT : GOLD_LIGHT }}
        key={i}
        value={i}
      >
        {i + " " + suffix}
      </option>
    );

  function onChange(e) {
    e.persist();
    props.onChange(e);
  }

  return (
    <div className="__range">
      <span>{label}</span>
      <input
        name={name}
        min={min}
        max={max}
        step={step}
        disabled={disabled}
        type="range"
        value={value}
        onChange={onChange}
        list={id}
      />
      <datalist id={id}>{list}</datalist>
    </div>
  );
};

Range.propTypes = {
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  step: PropTypes.number.isRequired,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  label: PropTypes.string,
  id: PropTypes.string.isRequired,
  suffix: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  disabled: PropTypes.bool
};

Range.defaultProps = {
  suffix: "",
  onChange: () => {}
};
