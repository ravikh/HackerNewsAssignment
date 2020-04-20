import react from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import styles from './Link.style';

const Link = ({href, className, children, ...otherProps}) => {
    return (
        <a href={href} className={className} {...otherProps}>{children}</a>
    )
}

Link.defaultProps = {
    href: '#',
    className: ''
}

Link.propTypes = {
    href: PropTypes.string,
    className: PropTypes.string
}

const styledLink = styled(Link)`
    ${styles};
`;

export default styledLink;