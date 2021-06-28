import React from 'react';
import marked, { renderer } from 'marked';
const Previewer = (props) => {
    return (
        <div
            dangerouslySetInnerHTML={{
                __html: marked(props.markdown, {
                    renderer: renderer
                })
            }}
            id="preview"
        />
    );
}

export default Previewer;