import React from "react";
import {create} from "react-test-renderer";
import OutputResult from "../../components/Output/OutputResult";

describe('OutputResult component', () => {
    test('After creation <textarea> and <button> should be displayed', () => {
        const component=create(<OutputResult resultOnOutput='test message'/>);
        const root=component.root;
        let button=root.findByType('button');
        let textarea=root.findByType('textarea');
        expect(button.children[0]).toBe('Download txt file');
        expect(textarea.props.value).toBe('test message');
    });

});