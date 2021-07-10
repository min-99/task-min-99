import React from "react";
import styled from 'styled-components';

import Input from '../components/Input';
import Select from '../components/Select';

import {STitle, SSubTitle, SFormContent, SForm, SRow} from '../style/common';

interface TravelerInputForm{
    title: string,
    number: number,
    subTitle?: string | undefined
}


function TravelerInputForm ({title, number, subTitle} : TravelerInputForm) {

    return (
        <SForm>
            <STitle>{title}&nbsp;<span className="number">{number}</span></STitle>
            {subTitle && <SSubTitle>{subTitle}</SSubTitle>}

            <SFormContent>
                {/* 영문 이름 start */}
                <SRow>
                    <Input title="영문 이름" name="englishLastName" placeholder="Min Ju" value=""></Input>
                    <Input title="영문 성" name="englishFirstName" placeholder="Tak" value=""></Input>
                </SRow> 
                {/* 영문 이름 end */}

                {/* 한글 이름 start */}
                <SRow>
                    <Input title="한글 이름" name="koreanName" placeholder="탁민주" value=""></Input>
                </SRow> 
                {/* 한글 이름 end */}

                {/* 성별 start */}
                <SRow>
                    <Select title="성별" name="gender" option={['남', '여']} selectValue=""></Select>
                </SRow> 
                {/* 성별 end */}

                {/* 생년월일 start */}
                <SRow>
                    <Input title="생년월일" name="birthday" placeholder="990425" value=""></Input>
                </SRow> 
                {/* 생년월일 end */}
            </SFormContent>    
        </SForm>   
    );
}

export default TravelerInputForm;