// Función para añadir el formato deseado (menos de 300 caracteres) a la vista previa de la descripción

export const formatDescription = (originalDescription) => {
  if (originalDescription.length > 50) {
    return `${originalDescription.substring(0, 300)}...`;
  }
  return originalDescription;
}