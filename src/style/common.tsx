import styled from 'styled-components';

export const STitle = styled.div`
    font-size: 18px; 
    font-weight: 600;

    & .number{
        color: deepskyblue;
    }
`;

export const SSubTitle = styled.div`
    font-size: 11px;
    letter-spacing: -0.055em;
    padding: 10px 0px;
    color: gray;
`;

export const SFlexDiv = styled.div`
    display: flex;
`;

export const SForm = styled.div`
    margin: 28px 0px;

    &:nth-child(1) {
        margin-top: 0px;
    }

    &:last-child {
        border: none;
    }

    & + & {
        padding-top: 28px;
        border-top: 1px solid lightgray;
    }
`;

export const SFormContent = styled.div`
    margin: 13px 0px;
`;

export const SRow = styled.div`
    display: inline-flex;
    position: relative;
    width: 100%;

    & select {
        padding: 5px;
        width: 100%;
    }

    & select + select {
        margin-left: 15px;
    }

    & + & {
        margin-top : 15px;
    }
`;

export const SErrorMessage = styled.div`
    color: red;
    font-size: 11px;
    letter-spacing: -0.099em;
    padding-top: 2px;
    line-height: 13px;
`;