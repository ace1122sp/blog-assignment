import { smokeTest } from 'client/utils/testing';
import Card from '.';

it('renders without crashing', () => {
  smokeTest(Card);
});
