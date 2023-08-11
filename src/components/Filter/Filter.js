import PropTypes from 'prop-types';
import css from './Filter.module.css';

const Filter = ({ filter, handleChange }) => (
  <div>
    <label className={css.filterLabel}>Find contacts by Name </label>
    <input
      className={css.filterName}
      type="text"
      name="filter"
      placeholder="Enter filter"
      value={filter}
      onChange={handleChange}
    />
  </div>
);

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Filter;