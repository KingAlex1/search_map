import React, {Component} from 'react'
import Map from '../../Map'
import {shallow, mount, render} from "enzyme";

describe('Component Map', function () {
    const wrapper = shallow(<Map/>)

    describe('Methos of class', function () {
        it('should contain div#map', function () {
            expect(wrapper.find('div#map')).toHaveLength(1)
        });


    });
});