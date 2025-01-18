import GameSavingLoader from './GameSavingLoader';
import read from './reader';

(async () => {
  try {
    const bufferView = await read();
    const result = await GameSavingLoader.load(bufferView);
    console.log(result);
  } catch (error) {
    console.error(error.message);
  }
})();