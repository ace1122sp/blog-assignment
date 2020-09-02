import { smokeTest } from 'client/utils/testing';
import Content from '.';

it('renders without crashing', () => {
  smokeTest(Content);
});
