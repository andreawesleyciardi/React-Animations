import React, { useRef, useEffect, useState, useCallback, useMemo, Fragment } from 'react';
import reactStringReplace from 'react-string-replace';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

import './Editor.scss';



const StyledEditor = styled(motion.div)`
    width: 100%;
    height: 100%;
    color: #FFFFFF;
    counter-reset: indexrow;
    .tag {
        color: rgb(244, 64, 129);
    }
    .attr {
        color: rgb(158, 215, 44);
    }
`;

let arr = [];
arr.push({ id: 1, next: 8,      code: '<div class="container">' });
arr.push({ id: 2, next: 4,      code: '    <div class="left">' });
arr.push({ id: 3, next: 5,      code: '        <img class="logo" />' });
arr.push({ id: 4, next: 3,      code: '    </div>' });
arr.push({ id: 5, next: 7,      code: '    <div class="right">' });
arr.push({ id: 6, next: null,   code: '        <p>Text</p>' });
arr.push({ id: 7, next: 6,      code: '    </div>' });
arr.push({ id: 8, next: 2,      code: '</div>' });

const Editor = () => {
    const [rows, setRows] = useState([]);
    const [index, setIndex] = useState(1);

    useEffect(() => {
        if (index != null) {
            setRows(arr.filter((item, i) => ((item.id == index) || (rows.findIndex((row) => row.id == item.id) > -1))));
        }
    }, [index]);

    const onAnimationEnd = useCallback((lineId, nextLineId) => {
        if (nextLineId != null) {
            setIndex(nextLineId);
        }
    }, []);

    let language = 'html';

    return (
        <StyledEditor className="editor">
            <motion.div className="editor__tab" data-index={index}>
                {
                    rows.map(({id, next, code}, index) => (
                        <Line as={language} id={id} next={next} key={id} onanimationend={onAnimationEnd}>{code}</Line>
                    ))
                }
            </motion.div>
        </StyledEditor>
    );
};

const StyledLine = styled(motion.div)`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    position: relative;
`;

const Line = React.memo(({id, next, children, onanimationend, as, ...props}) => {
    const preRef = useRef(null);
    
    useEffect(() => {
        console.log(`${id} line created (${children})`);
    });
    
    useEffect(() => {
        preRef.current.addEventListener('animationend', () => {
            // console.log('Animation ended');
            onanimationend(id, next);
        });
    }, [preRef?.current]);

    return (
        <StyledLine className="editor__tab--line">
            <pre ref={preRef} data-id={id}>
                <div>
                    <Formatter>{children}</Formatter>
                </div>
            </pre>
        </StyledLine>
    );
});

const Formatter = React.memo(({language, children}) => {
    const [formatted, setFormatted] = useState(null);

    useEffect(() => {
        let replacedText = children + '';

        replacedText = reactStringReplace(replacedText, `    `, (match, i) => (
            <span className="indentation" key={match + i}></span>
        ));

        (attrs.split('|')).map((attr, index) => {
            replacedText = reactStringReplace(replacedText, `${attr}=`, (match, i) => (
                <Fragment key={match + i}><span className="attr">{`${attr}`}</span>{`=`}</Fragment>
            ));
        });

        (tags.split('|')).map((tag, index) => {
            replacedText = reactStringReplace(replacedText, `<${tag} `, (match, i) => (
                <Fragment key={match + i}>{`<`}<span className="tag">{tag}</span>{' '}</Fragment>
            ));
            replacedText = reactStringReplace(replacedText, `<${tag}/>`, (match, i) => (
                <Fragment key={match + i}>{`<`}<span className="tag">{tag}</span>{`/>`}</Fragment>
            ));
            replacedText = reactStringReplace(replacedText, `<${tag}>`, (match, i) => (
                <Fragment key={match + i}>{`<`}<span className="tag">{tag}</span>{`>`}</Fragment>
            ));
            replacedText = reactStringReplace(replacedText, `</${tag}>`, (match, i) => (
                <Fragment key={match + i}>{`</`}<span className="tag">{tag}</span>{`>`}</Fragment>
            ));
        });
        

        setFormatted(replacedText);
    }, [children]);
    

    return (
        formatted != null ?
            formatted
        :
            ''
    );
});

const tags = 'a|abbr|acronym|address|applet|area|article|aside|audio|b|base|basefont|bdi|bdo|bgsound|big|blink|blockquote|body|br|button|canvas|caption|center|cite|code|col|colgroup|content|data|datalist|dd|decorator|del|details|dfn|dir|div|dl|dt|element|em|embed|fieldset|figcaption|figure|font|footer|form|frame|frameset|h1|h2|h3|h4|h5|h6|head|header|hgroup|hr|html|i|iframe|img|input|ins|isindex|kbd|keygen|label|legend|li|link|listing|main|map|mark|marquee|menu|menuitem|meta|meter|nav|nobr|noframes|noscript|object|ol|optgroup|option|output|p|param|plaintext|pre|progress|q|rp|rt|ruby|s|samp|script|section|select|shadow|small|source|spacer|span|strike|strong|style|sub|summary|sup|table|tbody|td|template|textarea|tfoot|th|thead|time|title|tr|track|tt|u|ul|var|video|wbr|xmp';
const attrs = 'accept|accept-charset|accesskey|action|align|alt|async|autocomplete|autoplay|autofocus|bgcolor|border|charset|checked|cite|class|cols|colspan|content|contenteditable|controls|coords|data|data-*|datetime|default|defer|dir|dirname|disabled|download|draggable|dropzone|enctype|for|form|formaction|headers|height|hidden|high|href|hreflang|http-equiv|Id|ismap|kind|label|lang|list|loop|low|max|maxlength|media|method|min|multiple|muted|name|novalidate|onblur|oncopy|oncut|onkeypress|onmousedown|onscroll|optimum|pattern|placeholder|readonly|required|reversed|rows|rowspan|selected|size|spellcheck|src|srclang|start|step|style|tabindex|target|title|translate|value|wrap';

export default Editor;