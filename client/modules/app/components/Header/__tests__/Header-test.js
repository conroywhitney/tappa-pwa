import React from 'react'
import { render } from 'enzyme'

import Header from '..'

describe('Header', () => {
  test('renders the title', () => {
    const wrapper = render(<Header />)

    expect(wrapper.find('h4').text()).toEqual('Tappa³')
  })
})
