//1
export function revertString(string) {

  if (string === null) {
    return "Вы отменили ввод";
  }

  if (string.trim() === '') {
    return "Вы не написали слово";
  }

  let reverted = '';

  for (let i = string.length - 1; i >= 0; i--) {
    reverted += string[i];
  }
  return reverted;
}






