export const getHash = () => {
  const hash = window.location.hash.slice(1);
  return hash;
}
