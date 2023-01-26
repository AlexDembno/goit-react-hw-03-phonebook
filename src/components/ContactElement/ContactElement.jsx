import style from './ContactElement.module.css';
import PropTypes from 'prop-types';

function ContactElement({ name, number, onClick }) {
  return (
    <>
      <span>{name}: </span>
      <span>{number}</span>
      <button onClick={onClick} className={style.button_delete} type="button">
        X
      </button>
    </>
  );
}

export default ContactElement;
ContactElement.propTypes = {
  onClick: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
