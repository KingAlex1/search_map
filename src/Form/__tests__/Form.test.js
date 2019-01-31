import React, {Component} from 'react'
import Form from '../../Form'
import Map from '../../Map'
import {shallow, mount, render} from "enzyme";

describe('Component Form', function () {

    const wrapper = shallow(<Form/>)


    wrapper.setState({
        addressInput: "",
        address: [
            {
                text: 'Москва',
                id: 1
            },
            {
                text: 'Москва',
                id: 2
            }
        ]
    })

    describe('Methods of class', function () {


        describe('renderList', function () {
            it('should be defined', function () {
                expect(wrapper.instance().renderList).toBeDefined()
            });

        });

        describe('handleChange', function () {
            it('should be defined', function () {
                expect(wrapper.instance().handleChange).toBeDefined()
            });
        });

        describe('handleKeyDown', function () {
            it('should be defined', function () {
                expect(wrapper.instance().handleKeyDown).toBeDefined()
            });
        });

        describe('handleRemove', function () {
            it('should be defined', function () {
                expect(wrapper.instance().handleRemove).toBeDefined()
            });
        });


        describe('render', function () {
            it('should contain div.wrapper', function () {
                expect(wrapper.find('div.wrapper')).toHaveLength(1)
            });
            it('should contain div.form-section', function () {
                expect(wrapper.find('div.form-section')).toHaveLength(1)
            });
            it('should contain div.search-section', function () {
                expect(wrapper.find('div.search-section')).toHaveLength(1)
            });
            it('should contain input.input-address', function () {
                expect(wrapper.find('input.input-address')).toHaveLength(1)
            });
            it('should contain ul.address-list', function () {
                expect(wrapper.find('ul.address-list')).toHaveLength(1)
            });
            it('should contain DragSortableList', function () {
                expect(wrapper.find('DragSortableList')).toHaveLength(1)
            });
            it('should contain Map', function () {
                expect(wrapper.find(Map)).toHaveLength(1)
            });
            it('should contain address from state', function () {
                const map = wrapper.find(Map);
                expect(map.props().children).toEqual(wrapper.state().value)
            });


        });


    });


});

