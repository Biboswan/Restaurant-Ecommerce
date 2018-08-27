import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import MenuCard from '../MenuCard';
import { fetchFoodMenu } from '../../actions';
import { Collection, CollectionItem, ProgressBar } from 'react-materialize';

class MenuCardHolder extends PureComponent {
  componentDidMount() {
    this.props.fetchFoodMenu();
  }

  render() {
    return this.props.foodmenu ? (
      <Collection className="" header="Food Menu">
        {this.props.foodmenu.map(menuitem => (
          <CollectionItem key={menuitem._id}>
            <MenuCard data={menuitem} />
          </CollectionItem>
        ))}
      </Collection>
    ) : (
      <ProgressBar />
    );
  }
}

function mapStateToProps({ foodmenu }) {
  return { foodmenu };
}

export default connect(
  mapStateToProps,
  { fetchFoodMenu }
)(MenuCardHolder);
