import { connect } from 'react-redux';
import { ADD, REMOVE, EDIT, createEntry, edit } from '../actions';

const mapStateToProps = (state, ownProps) => {
    return {
        todos: state.todos
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        createEntry: (value, id)  => {dispatch(createEntry(value, id))}
    }
}