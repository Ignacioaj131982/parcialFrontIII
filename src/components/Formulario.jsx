import { useState } from "react";
import Card from "./Card"; // Asegúrate de importar el componente Card
import '../Styles/Formulario.css'; // Importa los estilos

const Formulario = () => {
  // Estados para manejar los datos del formulario, error y si fue enviado
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // Manejador de cambio de los inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Manejador de envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    setError(""); // Limpiar mensaje de error antes de validaciones

    // Validación para el campo nombre
    if (formData.name.trim().length < 3 || formData.name.startsWith(" ")) {
      setError("Por favor chequea que la información sea correcta");
      return;
    }

    // Validación para el campo email (ahora con al menos 6 caracteres)
    if (formData.email.length < 6) {
      setError("El email debe tener al menos 6 caracteres.");
      return;
    }

    // Si las validaciones son correctas
    setSubmitted(true); // Muestra el Card con los datos
  };

  return (
    <div className="form-container">
      <h2>Formulario de Información</h2>
      
      <form onSubmit={handleSubmit} className="form">
        <div className="input-group">
          <label htmlFor="name">Nombre:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Ingresa tu nombre"
          />
        </div>
        <div className="input-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Ingresa tu email"
          />
        </div>
        <button type="submit" className="button">Enviar</button>
      </form>

      {/* Mostrar el mensaje de error si las validaciones fallan */}
      {error && <p className="error">{error}</p>}

      {/* Si el formulario fue enviado correctamente, renderizar el componente Card */}
      {submitted && <Card data={formData} />}
    </div>
  );
};

export default Formulario;

