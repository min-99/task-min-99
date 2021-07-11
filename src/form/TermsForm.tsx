import React,{useCallback} from "react";
import styled from 'styled-components';

import {STitle, SFormContent, SForm} from '../style/common';

import {usePaymentState, usePaymentDispatch} from '../PaymentContext/PaymentContext';


const SCheckboxContainer = styled.div`
    border: 0.2px solid lightslategrey;
    border-radius: 4px;
    width: 100%;
    height: 116px;
    margin: 10px 0px;
    font-size: 13px;
    padding: 21px 10px;

     & .checkboxRow {
         line-height : 33px;
     }
`;

function TermsForm() {
    const state = usePaymentState();
    const dispatch = usePaymentDispatch();

    const {termsAgree} = state;

    const onChange = useCallback((e : React.ChangeEvent<HTMLInputElement>) => {
        const { name, checked } = e.target;

        dispatch({type : 'SET_TERM_AGREE', name , value : checked});
    }, [dispatch]);

    const onChangeAll = useCallback((e : React.ChangeEvent<HTMLInputElement>) => {
        let checked = e.target.checked;
        dispatch({type : 'SET_TERM_AGREE_ALL', value : checked});
    }, [dispatch]);

    return (
        <SForm>
            <STitle>약관 동의</STitle>

            <SFormContent>
                <label><input type="checkbox" name="allAgree" onChange={onChangeAll} checked={termsAgree.agree1 && termsAgree.agree2}/>&nbsp;전체 약관 동의</label>
                <SCheckboxContainer>
                    <div className="checkboxRow"><label><input type="checkbox" name="agree1" checked={termsAgree.agree1} onChange={onChange}/>&nbsp;여행자 약관동의 (필수)</label></div>
                    <div className="checkboxRow"><label><input type="checkbox" name="agree2" checked={termsAgree.agree2} onChange={onChange}/>&nbsp;특가 항공원 및 할인 혜택 안내 동의(선택)</label></div>
                </SCheckboxContainer>
            </SFormContent>

        </SForm>
    );
}

export default TermsForm;