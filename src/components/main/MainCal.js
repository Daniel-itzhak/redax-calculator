import React, { useRef, useState ,useEffect } from 'react';
import { useDispatch , shallowEqual, useSelector } from 'react-redux';
import {plus, minus, caseZero, clear ,multiplication , division, power, root, setOperator, decPoint} from '../../actions/actions'

export default function MainCal() {
    const state = useSelector(state=>state)
    const dispatch = useDispatch();



    function numbers(c) {
        let view = state? state.answer.toString() : '';
        const isPoint = state? state.dec_point : false ;
        if (c==='.' && view === '') {
            c='0.';
        }
        view += c ;
        if(c === '.' || c=== '0.'){
            if(!isPoint) {
                dispatch(caseZero(view));
                dispatch(decPoint(true));
            }
            return
        }
        if(isPoint && c==='0'){
            dispatch(caseZero(view));
            return
        }
        dispatch(caseZero(Number(view)));
    }

    function handleClear(){
        dispatch(clear());
    }

    function handleBack(){
        let view = state? state.answer.toString() : '0';
        if(view === '0')return
        else if(view.length === 1){
            dispatch(caseZero(0));
        }
        else{
            if(view[view.length-1] === '.'){
                dispatch(decPoint(false));
            }
            view = view.slice(0,-1);
            if(view[view.length-1] === '.' || view[view.length-1] === '-' ){
                dispatch(caseZero(view));
            }
            else{
                dispatch(caseZero(Number(view)))
            }
        }
    }

    function handleEquall(){
        if(!state)return
        if(typeof state.answer !== 'number'){
            if(state.answer[state.answer.length-1]==='0'){
                dispatch(caseZero(Number(state.answer)));
            }
            else{
                return
            }
        }
        else if(!state.operator || !state.prev) return
        else{
            switch (state.operator){
                case '+' : return dispatch(plus())
                case '-' : return dispatch(minus())
                case 'X' : return dispatch(multiplication())
                case '/' : return dispatch(division())
                case '^' : return dispatch(power())
                case 'Root' : return dispatch(root())
            }
        }
    }

    function handleOperator(c) {
        const answer = state? state.answer : 0;
        const operator = state? state.operator : null;
        const prev = state? state.prev : null;
        if (c === '-' && answer === 0) {
            dispatch(caseZero('-'));
            return
        }
        if(typeof answer !== 'number'){
            if(answer[answer.length-1]==='0'){
                dispatch(caseZero(Number(answer)));
            }
            else{
                return
            }
        }
        if(operator && prev) {
            handleEquall();
        }
        dispatch(setOperator(c))
    }

    return (
        <div className="d-flex justify-content-center">
            <div className="row mt-5 w-50">
                <div className="col-12 bg-primary rounded-3 p-3 text-white">
                    {state&&((state.prev&&state.operator)?<div><span className="fs-5 float-end">{state.prev}{state.operator}</span><br/></div>:'')}
                    {/* {state&&(state.operator?<div><span className="fs-5 float-end">{state.operator}</span><br/></div>:'')} */}
                    <span className="fs-3 float-end">{state? state.answer : 0}</span>
                </div>
                <div className="col-4 btn fs-3 text-center border border-secondary bg-warning mt-3" onClick={()=>handleClear()}>
                    C
                </div>
                <div className="col-8 btn fs-3 text-center border border-secondary bg-success mt-3" onClick={()=>handleEquall()}>
                    =
                </div>
                <div className="col-3 btn fs-3 text-center border border-secondary" onClick={()=>numbers('1')}>
                    1
                </div>
                <div className="col-3 btn fs-3 text-center border border-secondary" onClick={()=>numbers('2')}>
                    2
                </div>
                <div className="col-3 btn fs-3 text-center border border-secondary" onClick={()=>numbers('3')}>
                    3
                </div>
                <div className="col-3 btn fs-3 text-center border border-secondary bg-dark text-white" onClick={()=>handleOperator('+')}>
                    +
                </div>
                <div className="col-3 btn fs-3 text-center border border-secondary" onClick={()=>numbers('4')}>
                    4
                </div>
                <div className="col-3 btn fs-3 text-center border border-secondary" onClick={()=>numbers('5')}>
                    5
                </div>
                <div className="col-3 btn fs-3 text-center border border-secondary" onClick={()=>numbers('6')}>
                    6
                </div>
                <div className="col-3 btn fs-3 text-center border border-secondary bg-dark text-white" onClick={()=>handleOperator('-')}>
                    -
                </div>
                <div className="col-3 btn fs-3 text-center border border-secondary" onClick={()=>numbers('7')}>
                    7
                </div>
                <div className="col-3 btn fs-3 text-center border border-secondary" onClick={()=>numbers('8')}>
                    8
                </div>
                <div className="col-3 btn fs-3 text-center border border-secondary" onClick={()=>numbers('9')}>
                    9
                </div>
                <div className="col-3 btn fs-3 text-center border border-secondary bg-dark text-white" onClick={()=>handleOperator('X')}>
                    X
                </div>
                <div className={`col-3 btn ${state&&(state.dec_point?'bg-secondary':'')} fs-3 text-center border border-secondary`} onClick={()=>numbers('.')}>
                    .
                </div>
                <div className="col-6 btn fs-3 text-center border border-secondary" onClick={()=>numbers('0')}>
                    0
                </div>
                <div className="col-3 btn fs-3 text-center border border-secondary bg-dark text-white" onClick={()=>handleOperator('/')}>
                    /
                </div>
                <div className="col-3 btn fs-3 text-center border border-secondary bg-dark text-white" onClick={()=>handleOperator('^')}>
                    ^
                </div>
                <div className="col-3 btn fs-3 text-center border border-secondary bg-dark text-white" onClick={()=>handleOperator('Root')}>
                    Root
                </div>
                <div className="col-6 btn fs-3 text-center border border-secondary bg-warning" onClick={()=>handleBack()}>
                    <i className="fas fa-backspace"></i>
                </div>
            </div>
        </div>
    )
}
