// @noflow
import {gql} from 'fusion-apollo';
import {test} from 'fusion-test-utils';

test('test with gql macro', () => {
  const schema = gql('../schema.gql');
  expect(typeof schema).toEqual('string');
});
