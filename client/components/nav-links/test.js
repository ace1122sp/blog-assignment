import { smokeTest } from 'client/utils/testing';
import NavLinks from '.';

const generateData = (numOfLinks) => {
  const data = [];
  for (let i = 1; i <= numOfLinks; i++) {
    data.push({ description: `t-link ${i}` });
  }

  return data;
};

it('renders without crashing', () => {
  smokeTest(NavLinks, { data: generateData(3) });
});
