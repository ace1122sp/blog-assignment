import { smokeTest } from 'client/utils/testing';
import Button from '.';

it('renders without crashing', () => {
  smokeTest(Button, { label: 'test' });
});
