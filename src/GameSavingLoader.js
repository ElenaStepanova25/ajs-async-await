//Пример использования класса (если бы это был синхронный код)

//export default class GameSavingLoader {
//  static load() {
//    const data = read(); // возвращается Promise!
//    const value = json(data); // возвращается Promise!
//    return value;
//  }
//}


class GameSavingLoader {
  static async load(bufferView) {
    if (bufferView.byteLength === 0) {
      throw new Error('Wrong string format!');
    }
    const jsonString = String.fromCharCode.apply(null, bufferView);
    const json = JSON.parse(jsonString);
    return json;
  }
}

export default GameSavingLoader;