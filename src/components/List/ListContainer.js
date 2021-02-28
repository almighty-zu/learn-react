import {connect} from 'react-redux';
import List from './List';
import {getColumnsForList, createActionAddColumn} from '../../redux/columnsRedux.js';

// this func adds props from 'list' component using the fragments of app's state from redux magazine - store.js
const mapStateToProps = (state, props) => ({
  columns: getColumnsForList(state, props.id),
});

// this func adds props from functions which are sending(dispatching) action to redux magazine - store.js
const mapDispatchToProps = (dispatch, props) => ({
  addColumn: title => dispatch(createActionAddColumn({
    listId: props.id,
    title,
  })),
});

export default connect(mapStateToProps, mapDispatchToProps)(List);