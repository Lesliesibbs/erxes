import { mount, shallow } from 'enzyme';
import * as React from 'react';

import TextDivider from '../../../../modules/common/components/TextDivider';

describe('TextDivider component', () => {
  const defaultProps = {
    text: 'today',
    date: new Date()
  };

  test('renders TextDivider successfully', () => {
    shallow(<TextDivider {...defaultProps} />);
  });

  test('renders successfully with default value', () => {
    const wrapper = mount(<TextDivider {...defaultProps} />);
    const props = wrapper.props();

    expect(props).toMatchObject(defaultProps);
  });
});