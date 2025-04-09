

const StorageCRUD = {
  // CREATE: Guarda un nuevo elemento en localStorage
  create: (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
    console.log(`Elemento con clave '${key}' guardado.`);
  },

  // DELETE: Elimina un elemento de localStorage
  delete: (key) => {
    if (localStorage.getItem(key)) {
      localStorage.removeItem(key);
      console.log(`Elemento con clave '${key}' eliminado.`);
    } else {
      console.log(`No se encontró la clave '${key}'.`);
    }
  },

  get: (key) => {
    const data = localStorage.getItem(key);
    console.log(data);
    return data;
  }
  
};

export default StorageCRUD;


// // Ejemplo de uso:
// StorageCRUD.create("usuario", { nombre: "Juan", edad: 30 });
// StorageCRUD.delete("usuario");
