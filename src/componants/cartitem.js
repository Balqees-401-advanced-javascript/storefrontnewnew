import React from 'react';
import { connect } from 'react-redux';
import { deleteItem } from '../store/categories';
const cartItem = props =>{

    return(
        <section key='section' className="itemAded">
        <ul key='ul'>
            {props.categories.cartItem.map((element,i) => {
            
                return (
                    <React.Fragment key={i}>
                        <li key={i} >
                            {element}
                            <button  onClick={() => props.deleteItem(i)}>X</button>
                        </li>                      
                    </React.Fragment>
                )
            })}
        </ul>
    </section>
    );
}
const mapStateToProps = state => ({
    categories: state.categories
  });
  const mapDispatchToProps = { deleteItem };

  export default connect(mapStateToProps, mapDispatchToProps)(cartItem);
  
 