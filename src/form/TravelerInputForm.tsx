import React from "react";
import styled from 'styled-components';

import Input from '../components/Input';
import Select from '../components/Select';

import {STitle} from '../style/common';

interface TravelerInputForm{
    title: string,
    number: number,
    subTitle?: string | undefined
}

const STravelerInputForm = styled.div`
    padding : 20px 15px;

    & .TravelerInputFormSubTitle {
        font-size: 11px;
        letter-spacing: -0.055em;
        padding: 10px 0px;
        color: gray;
    }

    & .row {
        display: inline-flex;
        position: relative;
        width: 100%;
    }

    & .row + .row {
        margin-top : 15px;
    }
`;

function TravelerInputForm ({title, number, subTitle} : TravelerInputForm) {

    return (
        <STravelerInputForm>
            <STitle>{title}&nbsp;<span className="number">{number}</span></STitle>
            {subTitle && <div className="TravelerInputFormSubTitle">{subTitle}</div>}

            {/* 영문 이름 start */}
            <div className="row">
                <Input title="영문 이름" name="englishLastName" placeholder="Min Ju" value=""></Input>
                <Input title="영문 성" name="englishFirstName" placeholder="Tak" value=""></Input>
            </div> 
            {/* 영문 이름 end */}

            {/* 한글 이름 start */}
            <div className="row">
                <Input title="한글 이름" name="koreanName" placeholder="탁민주" value=""></Input>
            </div> 
            {/* 한글 이름 end */}

            {/* 성별 start */}
            <div className="row">
                <Select title="성별" name="gender" option={['남', '여']} selectValue=""></Select>
            </div> 
            {/* 성별 end */}

            {/* 생년월일 start */}
            <div className="row">
                <Input title="생년월일" name="birthday" placeholder="990425" value=""></Input>
            </div> 
            {/* 생년월일 end */}
        </STravelerInputForm>   
    );
}

export default TravelerInputForm;