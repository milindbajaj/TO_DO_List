import React, { Component } from 'react';
import { Container,ListGroup,ListGroupItem,Button} from 'reactstrap';
import {CSSTransition ,TransitionGroup } from 'react-transition-group';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { getItems,deleteItem } from '../actions/itemActions';

class ShoppingList extends Component{

    componentDidMount(){
        this.props.getItems();
    }

    OnDeleteClick =(id) => {
        this.props.deleteItem(id);
    }


     render(){
         const { items } = this.props.item;
         return(
            <Container>
                <ListGroup>
                    <TransitionGroup className="shopping-list">
                        {items.map(({_id,name,}) => (
                           <CSSTransition keys={_id} timeout={500} classNames="fade">
                               <ListGroupItem>
                                   <Button
                                      className="remove-btn"
                                      size="sm"
                                      color="danger"
                                      onClick={this.OnDeleteClick.bind(this,_id)}
                                   >
                                       &times;
                                   </Button>
                                   {name}
                                   
                                   
                               </ListGroupItem>
                           </CSSTransition>
                        ))}
                    </TransitionGroup>
                </ListGroup>
            </Container>
         );

     }
}

ShoppingList.propTypes = {
    getItems: PropTypes.func.isRequired,
    items: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    item: state.item
});

export default connect(mapStateToProps,
    { getItems,deleteItem
})(ShoppingList);