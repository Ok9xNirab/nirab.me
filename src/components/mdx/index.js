import React from 'react';
import { CodeBlock } from './CodeBlock'
import { preToCodeBlock } from "mdx-utils";

export const MDXLayoutComponents = {
    h1: props => <h1 aria-hidden className='text-4xl my-4' {...props} />,
    h2: props => <h1 aria-hidden className='text-3xl my-4' {...props} />,
    h3: props => <h1 aria-hidden className='font-sans text-2xl my-4' {...props} />,
    h4: props => <h1 aria-hidden className='text-xl font-sans my-4' {...props} />,
    h5: props => <h1 aria-hidden className='text-2xl my-4' {...props} />,
    h6: props => <h1 aria-hidden className='text-2xl my-4' {...props} />,
    hr: props => <hr className='my-10' {...props} />,
    p: props => <p className='font-sans font-light leading-8' {...props} />,
    a: props => <a target='_blank' {...props} />,
    ul: props => <ul className='mdx-ul' {...props} />,
    ol: props => <ul className='mdx-ol' {...props} />,
    strong: props => <strong className='font-semibold' {...props} />,
    pre: preProps => {
        const props = preToCodeBlock(preProps);
        // if there's a codeString and some props, we passed the test
        if (props) {
            return <CodeBlock {...props} />;
        } else {
            // it's possible to have a pre without a code in it
            return <pre {...preProps} />;
        }
    },
};
