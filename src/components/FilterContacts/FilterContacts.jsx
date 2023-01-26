import PropTypes from 'prop-types';

import style from './FilterContacts.module.css';

function FilterContacts({ onChange }) {
  return (
    <label>
      <input
        className={style.input}
        type="text"
        placeholder="Find name"
        onChange={onChange}
      />
    </label>
  );
}

export default FilterContacts;

FilterContacts.propTypes = {
  onChange: PropTypes.func.isRequired,
};
