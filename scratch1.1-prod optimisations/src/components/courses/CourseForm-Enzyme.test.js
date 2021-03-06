import expect from 'expect';
import React from 'react';
import {mount, shallow} from 'enzyme';
import TestUtils from 'react-addons-test-utils';
import CourseForm from './CourseForm';

function setUp(saving){
  const props = {
    course: {}, saving: saving, errors:{} ,
    onSave: () => {},
    onChange: () => {}
  };

  return shallow (<CourseForm {...props}/>);

}


describe('CourseForm via React Test Utils ', () =>{

  it(' renders a form and h1 with enzyme',() =>{
    const wrapper = setUp(false);
    expect(wrapper.find('div').length).toBe(1);
    expect(wrapper.find('h1').text()).toEqual('Manage Course');
  });

  it('save button  is labeled  "Save " when not saving', () => {
      const wrapper =setUp(false);
      expect(wrapper.find('input').props().value).toBe('Save');
  });

  it('save button  is labeled  "Saving... " when  saving', () => {
      const wrapper =setUp(true);
      expect(wrapper.find('input').props().value).toBe('Saving...');
  });

});
