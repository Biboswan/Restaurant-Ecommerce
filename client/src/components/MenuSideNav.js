import React, { PureComponent, Fragment } from 'react';
import data from '../data/category&subcat';
import _ from 'lodash';
import { Collection, CollectionItem } from 'react-materialize';

export default () => {
  let items = [];
  _.forEach(data, (value, key) => {
    items.push(<CollectionItem href={`#${key}`}>{key}</CollectionItem>);
  });

  return <Collection>{items}</Collection>;
};
