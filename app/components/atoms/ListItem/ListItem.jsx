import React from 'react';
import ListItem from './ListItem.style';
 
export default ({children, className, type='ul'}) => <ListItem className={className} type={type}>{children}</ListItem>
