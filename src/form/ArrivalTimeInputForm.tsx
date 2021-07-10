import React from "react";

import {STitle, SFormContent, SForm, SRow} from '../style/common';

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
        <SForm>
            <STitle>숙소 도착예정 시간</STitle>

            <SFormContent>
                <SRow>
                    <select>
                        <option>시</option>
                        {hourRendering()}
                    </select>
                    <select>
                        <option>분</option>
                        {minuteRendering()}
                    </select>
                </SRow>
            </SFormContent>
            
        </SForm>  
    );
}

export default ArrivalTimeInputForm;