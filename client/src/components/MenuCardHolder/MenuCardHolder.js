import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import groupArray from 'group-array';
import _ from 'lodash';
import MenuCard from '../MenuCard';
import { fetchFoodMenu } from '../../actions';
import { Collection, CollectionItem, ProgressBar } from 'react-materialize';
import './MenuCardHolder.css';

class MenuCardHolder extends PureComponent {
  componentDidMount() {
    this.props.fetchFoodMenu();
  }

  buildMenuBlock() {
    const foodmenu = groupArray(this.props.foodmenu, 'category', 'subcategory');
    let items = [];
    let subcat = [];
    _.forEach(foodmenu, (value, category) => {
      items.push(
        <Collection key={`${category}section`} className="foodmenubox">
          <section key={category} id={category}>
            {_.forEach(value, (arr, subcategory) => {
              subcat.push(
                <section
                  id={`${category}-${subcategory}`}
                  key={`${category}-${subcategory}`}
                >
                  {arr.map(menuitem => (
                    <CollectionItem key={menuitem._id}>
                      <MenuCard data={menuitem} />
                    </CollectionItem>
                  ))}
                </section>
              );
            }) && subcat}
          </section>
        </Collection>
      );
      subcat = [];
    });
    return items;
  }

  render() {
    return this.props.foodmenu ? this.buildMenuBlock() : <ProgressBar />;
  }
}

function mapStateToProps({ foodmenu }) {
  return { foodmenu };
}

export default connect(
  mapStateToProps,
  { fetchFoodMenu }
)(MenuCardHolder);
