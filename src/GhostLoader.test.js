import React from 'react'
import { render } from '@testing-library/react'
import GhostLoader from "./GhostLoader";

describe('render without width, height attr', () => {
    test('default render', function() {
        const { baseElement } = render(
            <GhostLoader />
        )
        expect(baseElement.childElementCount).toEqual(1)
    });
    test('render multiple row', () => {
        const { baseElement } = render(
            <GhostLoader row={6}/>
        )
        expect(baseElement.getElementsByTagName('span').length).toEqual(6)
    })
})