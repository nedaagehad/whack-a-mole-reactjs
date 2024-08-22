const generateRandomIndex = (prevIndex: number | null) => {
  let randomIndex = Math.floor(Math.random() * 9);

  if (randomIndex === prevIndex) {
    // randomIndex = Math.floor(Math.random() * 9);
    randomIndex = generateRandomIndex(prevIndex)
  }
  return randomIndex;
};

export default generateRandomIndex;
