export const formatDescription = (originalDescription) => {
  if (originalDescription.length > 50) {
    return `${originalDescription.substring(0, 300)}...`;
  }
  return originalDescription;
}