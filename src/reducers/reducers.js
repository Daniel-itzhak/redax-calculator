import {PLUS, MINUS, MULTIPLICATION, DIVISION, POWER, ROOT, CLEAR, CASE_ZERO, SET_OPERATOR, DEC_POINT} from '../actions/actions';

const initialState = {
    answer : 0,
    operator : null,
    prev : null,
    dec_point: false,
}

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case CLEAR: 
            return{
                answer: 0,
                operator : null,
                prev : null,
                dec_point: false,
            }
        case CASE_ZERO: 
            return{
                answer: action.num_x,
                operator : state.operator,
                prev : state.prev,
                dec_point: state.dec_point,
            }
        case PLUS: 
            return {
                answer: state.answer + state.prev,
                operator : null,
                prev : null,
                dec_point: false,
            }
        case MINUS: 
            return {
                answer: state.prev - state.answer,
                operator : null,
                prev : null,
                dec_point: false,
            }
        case MULTIPLICATION: 
            return {
                answer: state.answer * state.prev,
                operator : null,
                prev : null,
                dec_point: false,
            }
        case DIVISION: 
            return {
                answer: state.prev / state.answer,
                operator : null,
                prev : null,
                dec_point: false,
            }
        case POWER:
            return {
                answer: Math.pow(state.prev, state.answer),
                operator : null,
                prev : null,
                dec_point: false,
            }
        case ROOT: 
            return {
                answer: Math.pow(state.prev, Math.pow(state.answer, -1)),
                operator : null,
                prev : null,
                dec_point: false,
            }
        case SET_OPERATOR:
            return {
                answer: 0,
                operator: action.operator,
                prev: state.answer,
                dec_point: false,
            }
        case DEC_POINT:
            return {
                answer: state.answer,
                operator: state.operator,
                prev: state.prev,
                dec_point: action.isPoint
            }
    }
}

export default rootReducer;