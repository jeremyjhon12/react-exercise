import { renderComponent , expect } from '../test_helper';
import App from '../src/index';

describe('App' , () => {
  let component;

  beforeEach(() => {
    component = renderComponent(App);
  });

  it('renders something', () => {
    expect(1 + 2).toEqual(3);
  });
});
