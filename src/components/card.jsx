import PropTypes from 'prop-types'; // Para validación de las props

const Card = ({ data }) => {
  return (
    <div className="card">
      <h3>Información Ingresada:</h3>
      <p><strong>Nombre: </strong>{data.name}</p>
      <p><strong>Email: </strong>{data.email}</p>
    </div>
  );
};

// Validación de las propiedades del componente Card
Card.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,   // 'name' debe ser una cadena y es obligatorio
    email: PropTypes.string.isRequired,  // 'email' debe ser una cadena y es obligatorio
  }).isRequired,
};

export default Card;


