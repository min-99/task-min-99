import React, {useCallback} from "react";
import {STitle, SFormContent, SForm, SRow, SErrorMessage} from '../style/common';

import {usePaymentState, usePaymentDispatch} from '../PaymentContext/PaymentContext';

interface ArrivalTimeInputForm{
    arrivalTimeRef : React.RefObject<HTMLSelectElement>
}


function ArrivalTimeInputForm({arrivalTimeRef} : ArrivalTimeInputForm) {
    const state = usePaymentState();
    const dispatch = usePaymentDispatch();

    const {arrivalTime} = state;

    const onChange = useCallback((e : React.ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = e.target;
        
        dispatch({type : 'SET_ARRIVAL_TIME', name , value, error : null});
    }, [dispatch]);

    function hourRendering(){
        const result = [];
        for (let i=0; i<=23; i++){
            result.push(<option key={i} value={i}>{i} 시</option>);
        }
        return result;
    }

    
    function minuteRendering(){
        const result = [];
        for (let i=0; i<=59; i++){
            result.push(<option key={i} value={i}>{i} 분</option>);
        }
        return result;
    }

    return (
        <SForm>
            <STitle>숙소 도착예정 시간</STitle>

            <SFormContent>
                <SRow>
                    <select name="hour" defaultValue={arrivalTime.hour?.toString()} className={arrivalTime.error ? 'error' : ''} ref={arrivalTimeRef} onChange={onChange}>
                        <option value="" disabled>시</option>
                        {hourRendering()}
                    </select>
                    <select name="minute" defaultValue={arrivalTime.minute?.toString()} className={arrivalTime.error ? 'error' : ''} onChange={onChange} >
                        <option value="" disabled>분</option>
                        {minuteRendering()}
                    </select>
                </SRow>
                {arrivalTime.error && <SErrorMessage>{arrivalTime.error}</SErrorMessage>}
            </SFormContent>
            
        </SForm>  
    );
}

export default ArrivalTimeInputForm;