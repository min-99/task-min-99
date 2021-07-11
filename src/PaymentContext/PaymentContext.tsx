import React, { useReducer, useContext, createContext, Dispatch } from 'react';

import {errorType, PaymentStateType} from '../type';
import {initialPaymentState} from '../initalState';

// 모든 액션들을 위한 타입
type Action =
  | { type: 'SET_TRAVELER_INPUT', name: string, value : string, error : errorType }
  | { type: 'SET_ARRIVAL_TIME', name: string, value : string, error : errorType}
  | { type: 'SET_ARRIVAL_TIME_ERROR', error : errorType}
  | { type: 'SET_PHONE_DETAIL', name: string, value : string, error : errorType}
  | { type: 'SET_ETC_INFO', name: string, value : string, error : errorType}
  | { type: 'SET_TERM_AGREE', name: string, value : boolean}
  | { type: 'SET_TERM_AGREE_ALL', value : boolean};

// 디스패치를 위한 타입 (Dispatch 를 리액트에서 불러올 수 있음), 액션들의 타입을 Dispatch 의 Generics로 설정
type PaymentDispatch = Dispatch<Action>;

// Context 만들기
const PaymentStateContext = createContext<PaymentStateType | null>(null);
const PaymentDispatchContext = createContext<PaymentDispatch | null>(null);

// 리듀서
function reducer(state: PaymentStateType, action: Action): PaymentStateType {
  switch (action.type) {
    case 'SET_TRAVELER_INPUT':
      return {
        ...state,
        traveler : {
          ...state.traveler,
          [action.name] : {
            value : action.value,
            error : action.error
          }
        } 
      };
    case 'SET_ARRIVAL_TIME':
      return {
        ...state,
        arrivalTime : {
          ...state.arrivalTime,
          [action.name] : action.value,
          error : action.error
        }
      };
    case 'SET_ARRIVAL_TIME_ERROR':
      return {
        ...state,
        arrivalTime : {
          ...state.arrivalTime,
          error : action.error
        }
      };
    case 'SET_PHONE_DETAIL':
      return {
        ...state,
        phoneDetail : {
          ...state.phoneDetail,
          [action.name] : {
            value : action.value,
            error : action.error
          }
        } 
      };
    case 'SET_ETC_INFO':
      return {
        ...state,
        etcInfo : {
          value : action.value,
          error : action.error
        } 
      };
    case 'SET_TERM_AGREE':
      return {
        ...state,
        termsAgree : {
          ...state.termsAgree,
          [action.name] : action.value
        }
      };
    case 'SET_TERM_AGREE_ALL':
      return {
        ...state,
        termsAgree : {
          agree1 : action.value,
          agree2 : action.value
        }
      };
    default:
      throw new Error('Unhandled action');
  }
}

// PaymentProvider 에서 useReduer를 사용하고
// PaymentStateContext.Provider 와 PaymentDispatchContext.Provider 로 children 을 감싸서 반환합니다.
export function PaymentProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialPaymentState);

  return (
    <PaymentStateContext.Provider value={state}>
      <PaymentDispatchContext.Provider value={dispatch}>
        {children}
      </PaymentDispatchContext.Provider>
    </PaymentStateContext.Provider>
  );
}

// state 와 dispatch 를 쉽게 사용하기 위한 커스텀 Hooks
export function usePaymentState() {
  const state = useContext(PaymentStateContext);
  if (!state) throw new Error('Cannot find SampleProvider'); // 유효하지 않을땐 에러를 발생
  return state;
}

export function usePaymentDispatch() {
  const dispatch = useContext(PaymentDispatchContext);
  if (!dispatch) throw new Error('Cannot find SampleProvider'); // 유효하지 않을땐 에러를 발생
  return dispatch;
}