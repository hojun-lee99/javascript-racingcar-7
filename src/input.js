import { Console } from '@woowacourse/mission-utils';

async function getCarsname() {
  try {
    const carsName = await Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
    );
    const splitedNames = splitNames(carsName);

    splitNames.forEach((name) => {
      if (name.length > 6) {
        throw new Error();
      }
    });

    return splitedNames;
  } catch (error) {}
}

function splitNames(names) {
  const splitedNames = names.split(',');

  return splitedNames;
}

async function getTimes() {
  const times = await Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');

  if (isNaN(times) || times === '' || Number(times) <= 0) {
    throw new Error('[ERROR]');
  }

  return times;
}

export { getCarsname, getTimes };