import getBuffer from '../get-buffer';

export default class ArrayBufferConverter {
  load() {
    this.bufferView = new Uint8Array(getBuffer());
  }

  toString() {
    let result = '';
    for (let i = 0; i < this.bufferView.length; i += 1) {
      result += String.fromCharCode(this.bufferView[i]);
    }
    return result;
  }
}
