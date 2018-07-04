import React, { Children } from 'react';
import styles from './styles';
import styled from 'styled-components';

const HeadingContainer = ({
    presenter,
    level = 2,
    visualLevel,
    ...props,
}) => {
    level = Math.max(1, Math.min(6,level));
    visualLevel = (typeof visualLevel != 'undefined') ? visualLevel: level;
    const tag = `h${level}`;
    return presenter({tag, visualLevel, ...props});
};

const HeadingPresenter = styled(({tag,children, ...props}) => {
    return React.createElement(tag, props, children);
}) `color:red`

const Heading = props => (
    <HeadingContainer presenter={presenterProps => <HeadingPresenter {...presenterProps} />}{...props}/>
);


export default Heading;