import React from "react";
import styled from 'styled-components';

const SArrivalTimeInputForm = styled.div`
    padding : 20px 15px;

    & .ArrivalTimeInputFormTitle {
        font-size: 18px; 
        font-weight: 600;
    }

    & .row {
        display: inline-flex;
        position: relative;
        width: 100%;
        margin: 13px 0px;

        & select {
            padding: 5px;
            width: 100%;
        }

        & select + select {
            margin-left: 15px;
        }
    }

    & .row + .row {
        margin-top : 15px;
    }
`;


function ArrivalTimeInputForm() {

    function hourRendering(){
        const result = [];
        for (let i=1; i<=24; i++){
            result.push(<option value={i}>{i} 시</option>);
        }
        return result;
    }

    
    function minuteRendering(){
        const result = [];
        for (let i=0; i<=59; i++){
            result.push(<option value={i}>{i} 분</option>);
        }
        return result;
    }

    return (
        <SArrivalTimeInputForm>
            <div className="ArrivalTimeInputFormTitle">숙소 도착예정 시간</div>

            <div className="row">
                <select>
                    <option>시</option>
                    {hourRendering()}
                </select>
                <select>
                    <option>분</option>
                    {minuteRendering()}
                </select>
            </div>
        </SArrivalTimeInputForm>  
    );
}

export default ArrivalTimeInputForm;