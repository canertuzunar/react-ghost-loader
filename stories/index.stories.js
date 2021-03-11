import React from 'react'
import { storiesOf } from '@storybook/react'
import GhostLoader from '../src/GhostLoader'
storiesOf('Ghost Loader', module)
.add('text', () => {
    return (
        <GhostLoader />
    )
})