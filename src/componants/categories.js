import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { show } from '../store/categories';
import {getRemoteDataCategory} from '../store/action';

import '../style.scss'
const Categories = props => {
    useEffect(() =>{
        props.getRemoteDataCategory()
      },[])
    
    return (
        <section key='section' className="categories">
            <div className='hed' key='div'>Browse OUR categories</div>
            <ul key='ul'>
                {console.log(props)}
                {props.reducer.categoryFromApi.map(element => {
                    return (
                        <React.Fragment key={element.displayName+'b'}>
                            <li key={element.displayName} onClick={() => props.show(element.name)}>
                                {element.displayName}
                            </li>
                            <p key={element.name + 'r'}>|</p>
                        </React.Fragment>
                    )
                })}
            </ul>
        </section>
    );
}

const mapStateToProps = state => ({
    categories: state.categories,
    reducer: state.reducer 

});
const mapDispatchToProps = { show, getRemoteDataCategory };

export default connect(mapStateToProps, mapDispatchToProps)(Categories);