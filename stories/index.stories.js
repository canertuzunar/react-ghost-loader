import React from 'react'
import { storiesOf } from '@storybook/react'
import GhostLoader from '../src/GhostLoader'
storiesOf('Ghost Loader', module)
.add('Paragraph', () => {
    let paragraphs = []
    for(let i = 0; i < 3; i++) {
        paragraphs.push(
            <>
                <div className="col-5">
                    <h1>
                        <GhostLoader width="100%"/>
                    </h1>
                    <p>
                        <GhostLoader row={5} height="10%" width="100%"/>
                    </p>
                </div>
                <div className="col-5">
                    <h1>
                        Lorem Ipsum Title
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br />
                        Ab alias consequatur cumque dolorem fugiat id ipsam nemo optio pariatur <br />
                        placeat provident, quasi quis sapiente totam vel velit veritatis vero <br />
                        voluptate.
                    </p>
                </div>
            </>
        )
    }
    return (
        <div className="wrapper mx-auto">
            <div className="flex wrap around">
                {paragraphs}
            </div>
        </div>
    )
})
.add('Card', () => {
    return(
        <div className="wrapper mx-auto">
            <div className="flex wrap around">
                <div className="card">
                    <GhostLoader width="100%" height="246px" widthRandom={0} heightRandom={0}/>
                    <h3 className="card-title">
                        <GhostLoader width='100%'/>
                    </h3>
                    <p><GhostLoader width="100%" row={3} /> </p>
                </div>
                <div className="card">
                    <picture className="card-image">
                        <img width="100%" src="https://www.jennybeaumont.com/wp-content/uploads/2015/03/placeholder.gif" alt=""/>
                    </picture>
                    <h3 className="card-title">
                        Lorem Ipsum Card Title
                    </h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, velit?</p>
                </div>
            </div>
        </div>
    )
})