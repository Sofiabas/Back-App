const validateData = (title, price, thumbnail) => {
    if (!title || !price || !thumbnail) return { error: 'Por favor ingrese los datos correctos'};  
    else return { title, price, thumbnail };
  };
  
  module.exports = {validateData};