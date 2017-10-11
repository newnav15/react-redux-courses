import expect from 'expect';
import React from 'react';
import {mount, shallow} from 'enzyme';
import TestUtils from 'react-addons-test-utils';
import {ManageCoursePage} from './ManageCoursePage';// import direct class instead of connecred class hence within brackets

//testing redux - behavioural

describe('Manage Course behavioural testing with redux and mount  ', () =>{

  it(' sets error message when the title is left blank in a save operation',() =>{

    const props ={
      course : {id:'', watchHref: '', title: '', authorId: '', length: '',category: ''},
      actions: {saveCourse:()=> {return Promise.resolve(); }},
      authors: []
    } ;
    const wrapper = mount(<ManageCoursePage {...props}/>);

    const saveButton = wrapper.find('input').last();
    expect(saveButton.prop('type')).toBe('submit');


      saveButton.simulate('click');
      expect(wrapper.state().errors.title).toBe('Title must be 5 characters');
  });

    });
