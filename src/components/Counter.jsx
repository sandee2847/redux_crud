import React from 'react'
import { connect } from 'react-redux'
import { Inc, Dec, Inc_By_Value, Dec_By_Value } from './action';

const Counter = ({ counter, increment, decrement, inc_by_value, dec_by_value }) => {
    return (
        <div style={{marginBottom:20, display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            <h1>Counter Value:{counter}</h1>
            <div style={{ display: 'flex', gap: 10 }}>
                <button style={{ height: 30, width: 150 }} onClick={increment}>INC+</button>
                <button style={{ height: 30, width: 150 }} onClick={decrement}>DEC+</button>
                <button style={{ height: 30, width: 150 }} onClick={inc_by_value}>INC+ BY VALUE 10</button>
                <button style={{ height: 30, width: 150 }} onClick={dec_by_value}>DEC+ BY VALUE 10</button>
            </div>
        </div>
    )
}
const mapStateToPropsCounter = (state) => {
    return {
        counter: state.mainCount.counter,
    }
}
const mapDispatchToPropsCounter = (dispatch) => {
    return {
        increment: () => dispatch({ type: Inc }),
        decrement: () => dispatch({ type: Dec }),
        inc_by_value: () => dispatch({ type: Inc_By_Value, payload: 10 }),
        dec_by_value: () => dispatch({ type: Dec_By_Value, payload: 10 })
    }
}
export default connect(mapStateToPropsCounter, mapDispatchToPropsCounter)(Counter)
