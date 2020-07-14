import React from 'react';
import { connect } from 'react-redux';

const activeCategory = props => {
  return (
    <section className='activeCategory'>
        {props.categories.categories.map(element => {
          if (element.name === props.categories.activeCategory) {
          return (

            <div key='activeCategory' >
              {element.discription}
            </div>
          )
        }
          return null
          }
        )}
    </section>
  );
}

const mapStateToProps = state => ({
  categories: state.categories
});

export default connect(mapStateToProps)(activeCategory);
