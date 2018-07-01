import React from 'react';
import styles from './styles';

// const Heading =({
//     children,
//     level = 2,
//     visualLevel,
//     className,
//     ...props
// }) => {
//     level = Math.max(0, Math.min(6,level));
//     visualLevel = (typeof visualLevel !== 'undefined') ? visualLevel : level;
//     const Tag = `h${level}`;
//     const tagStyle = `${styles.h} ${styles[`h${visualLevel}`]}`;

//     return (
//         <Tag className={tagStyle}  {...props}>{children}</Tag>
//     );
// };

const HeadingPresenter = ({
    tag: Tag,
    visualLevel,
    className,
    ...props
}) => {
    return <div>
        <Tag className={`h`} {...props} />
        <style jsx>{`
            .h {
                font-weight: 700;
                line-height: 1.5;
            }
        `}
        </style>
    </div>
};

const HeadingContainer = ({
    presenter,
    level = 2,
    visualLevel,
    ...props,
}) => {
    level = Math.max(1, Math.min(6,level));
    visualLevel = (typeof visualLevel != 'undefined') ? visualLevel: level;
    // const tag = `h${level}`;
    const tag = 'h1';
    return presenter({tag, visualLevel, ...props});
};

const Heading = props => (
    <HeadingContainer presenter={presenterProps => <HeadingPresenter {...presenterProps} />}{...props}/>
);

export default Heading;