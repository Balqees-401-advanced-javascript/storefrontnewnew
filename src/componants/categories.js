import React from 'react';
import { connect } from 'react-redux';
import { show } from '../store/categories';
import '../style.scss'
const categories = props => {
    return (
        <section key='section' className="categories">
            <div className='hed' key='div'>Browse OUR categories</div>
            <ul key='ul'>
                {props.categories.categories.map(element => {
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
    categories: state.categories
});
const mapDispatchToProps = { show };

export default connect(mapStateToProps, mapDispatchToProps)(categories);