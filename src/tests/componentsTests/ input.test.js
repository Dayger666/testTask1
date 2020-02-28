import InputFile from "../../components/Input/InputFile";
import React from "react";
import {create} from "react-test-renderer";

describe('InputFile component', () => {
    test('After creation <button> and <label> for file should be displayed', () => {
      const component=create(<InputFile/>);
      const root=component.root;
      let button=root.findByType('button');
        let label=root.findByType('label');
        expect(button.children[0]).toBe('Draw');
        expect(label.children[0]).toBe('Upload file with commands');
    });

});