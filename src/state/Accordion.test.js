import React from 'react';
import ReactDOM from 'react-dom';
import Accordion from './Accordion';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'


describe(`Sections Component`, () => {
  // array of objects, each with a name and content
  const sections = [
  {
    title: 'Section 1',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    title: 'Section 2',
    content: 'Cupiditate tenetur aliquam necessitatibus id distinctio quas nihil ipsam nisi modi!',
  },
  {
    title: 'Section 3',
    content: 'Animi amet cumque sint cupiditate officia ab voluptatibus libero optio et?',
  },
]

  it('renders without errors', () => {
    const li = document.createElement('li');
    ReactDOM.render(<Accordion />, li);
    ReactDOM.unmountComponentAtNode(li);
 	})

  it('renders empty given no section', () => {
    const wrapper = shallow(<Accordion />)
    expect(toJson(wrapper)).toMatchSnapshot()
 	})

  it('renders no section by default', () => {
    const wrapper = shallow(<Accordion sections={sections} />)
    expect(toJson(wrapper)).toMatchSnapshot()
 	})

  it('closes the first sections and opens the clicked section', () => {
	const wrapper = shallow(<Accordion sections={sections} />)
	wrapper.find('button').at(1).simulate('click')
  	expect(toJson(wrapper)).toMatchSnapshot()
	})

  
})