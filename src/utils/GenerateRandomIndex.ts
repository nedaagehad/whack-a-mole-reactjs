const generateRandomIndex = (prevIndex: number | null) => {
  let randomIndex = Math.floor(Math.random() * 9);

  if (randomIndex === prevIndex) {
    randomIndex = Math.floor(Math.random() * 9);
  }
  return randomIndex;
};

export default generateRandomIndex;
