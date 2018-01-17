import React, { Component } from 'react';
import { connect } from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onInc} />
                <CounterControl label="Decrement" clicked={this.props.onDec}  />
                <CounterControl label="Add 5" clicked={() => this.props.onAdd(5)}  />
                <CounterControl label="Subtract 5" clicked={() => this.props.onSub(5)}  />
                <hr />
                <button onClick={this.props.onStoreResult}>Store Result</button>
                <ul>
                    {this.props.storedResults.map(s => (
                        <li onClick={() => this.props.onDeleteResult(s.id)} key={s.id}>{s.value}</li>
                    ))}                 
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ctr: state.counter,
        storedResults: state.results
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onInc: () => dispatch({type: 'INC'}),
        onDec: () => dispatch({type: 'DEC'}),
        onAdd: (value) => dispatch({type: 'ADD', value: value }),
        onSub: (value) => dispatch({type: 'SUB', value: value }),
        onStoreResult: () => dispatch({type: 'STORE_RESULT'}),
        onDeleteResult: (id) => dispatch({type: 'DELETE_RESULT', resultId: id})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);