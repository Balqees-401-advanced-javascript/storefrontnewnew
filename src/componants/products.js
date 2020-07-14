import React from 'react';
import { connect } from 'react-redux';
import { addItem } from '../store/categories';
const Status = props => {
  return (
    <section >
      <ul>
        {props.categories.products.map(element => {
          if (element.category === props.categories.activeCategory) {
            return (
              <React.Fragment key={element.name + 'd'}>
                <li key={element.name} >
                  {element.name}
                </li>
                <button  onClick={() => props.addItem(element.name)} >ADD TO CARE</button>
                <button>VIEW DETAILS</button>
              </React.Fragment>
            )
          }
          return null
        })}
      </ul>
    </section>
  );
}

const mapStateToProps = state => ({
  categories: state.categories
});

const mapDispatchToProps = { addItem };

export default connect(mapStateToProps, mapDispatchToProps)(Status);
