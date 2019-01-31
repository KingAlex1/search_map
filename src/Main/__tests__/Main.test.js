import React, {Component} from 'react'
import Main from '../../Main'
import Form from '../../Form'
import {shallow, mount, render} from "enzyme";

describe('Component Main', function () {
    const wrapper = shallow(<Main/>)

    describe('Method of class', function () {
        it('should contain Form comnponent', function () {
            expect(wrapper.find(Form)).toHaveLength(1)
        });
    });
});
