import { smokeTest } from 'client/utils/testing';
import Link from '.';

it('renders without crashing', () => {
  smokeTest(Link, { description: 'testing' });
});
