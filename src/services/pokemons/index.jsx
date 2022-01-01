export const getAllPoks = ({ get }) => async () => {
  try {
    return (await get("/pokemon?limit=20&offset=0")).data;
  } catch (error) {
    console.info("> something went wrong");
    return false;
  }
};

export const getOnePok = ({ get }) => async (url) => {
  try {
    return (await get(url)).data;
  } catch (error) {
    console.info("> something went wrong");
    return false;
  }
};
