import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { addItem } from '../store/categories';
import {getRemoteData} from '../store/action';

const Status = props => {
  useEffect(() =>{
    props.getRemoteData()
  },[])


  return (
    <section >
      <ul>
        {props.reducer.itemFromApi.map(element => {
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

const mapStateToProps = state => ({ // to use state 
  categories: state.categories,
  reducer: state.reducer 

});

const mapDispatchToProps = { getRemoteData ,addItem }; // to use action 

export default connect(mapStateToProps, mapDispatchToProps)(Status);
