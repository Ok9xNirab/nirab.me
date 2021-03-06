import React from 'react'
import Highlight, { defaultProps } from 'prism-react-renderer'
import theme from 'prism-react-renderer/themes/oceanicNext';

export const CodeBlock = ({ codeString, language, ...props }) => {
    return (
        <Highlight {...defaultProps} code={codeString} language={language} theme={theme}>
            {({ className, style, tokens, getLineProps, getTokenProps }) => (
                <pre className={`${className} p-3 rounded shadow-md my-3 overflow-y-auto`} style={style}>
                    {tokens.map((line, i) => (
                        <div {...getLineProps({ line, key: i })}>
                            {line.map((token, key) => (
                                <span {...getTokenProps({ token, key })} />
                            ))}
                        </div>
                    ))}
                </pre>
            )}
        </Highlight>
    )
}
