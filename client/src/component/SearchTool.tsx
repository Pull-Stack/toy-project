import React, { useState } from 'react'
import styled from 'styled-components'
//전역 Context 필요!
const Top = styled.div`
    width: 100%;
    height: 120px;
    display: flex;
    align-items: center;
    gap: 30px;
`;
type StringButtonProps = {
    isActive: boolean;
}
const StringButton = styled.div`
    font-size: 2.5rem;
    font-weight: 900;
    color: ${(props: StringButtonProps) => props.isActive? '#333333':'#cccccc'};
    &:hover {
        cursor: pointer;
    }
`;
const RegionSearcherInput = styled.input`
    width: 300px;
    height: 30px;
    border-style: none;
`;
const RegionSearcher = styled.div`
    height: 42px;
    display: flex;
    align-items: center;
    border-radius: 6px;
    border: 1px solid black;
    padding-left: 5px;
    padding-right: 10px;
`;
const RegionSearcherIconButton = styled.div`
    width: 20px;
    height: 20px;
    background-image: url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M21.875 23.2188L13.6562 15C13.0312 15.5417 12.3021 15.9635 11.4688 16.2656C10.6354 16.5677 9.75 16.7187 8.8125 16.7187C6.5625 16.7187 4.65625 15.9375 3.09375 14.375C1.53125 12.8125 0.75 10.9271 0.75 8.71875C0.75 6.51042 1.53125 4.625 3.09375 3.0625C4.65625 1.5 6.55208 0.71875 8.78125 0.71875C10.9896 0.71875 12.8698 1.5 14.4219 3.0625C15.974 4.625 16.75 6.51042 16.75 8.71875C16.75 9.61458 16.6042 10.4792 16.3125 11.3125C16.0208 12.1458 15.5833 12.9271 15 13.6562L23.25 21.8438L21.875 23.2188ZM8.78125 14.8437C10.4688 14.8437 11.9062 14.2448 13.0938 13.0469C14.2812 11.849 14.875 10.4062 14.875 8.71875C14.875 7.03125 14.2812 5.58854 13.0938 4.39062C11.9062 3.19271 10.4688 2.59375 8.78125 2.59375C7.07292 2.59375 5.61979 3.19271 4.42188 4.39062C3.22396 5.58854 2.625 7.03125 2.625 8.71875C2.625 10.4062 3.22396 11.849 4.42188 13.0469C5.61979 14.2448 7.07292 14.8437 8.78125 14.8437Z' fill='%23585858'/%3E%3C/svg%3E%0A");    background-size: 20px 20px;
    &:hover {
        cursor: pointer;
    }
`;
const CreateStudyButton = styled.div`
    margin-left: auto;
    width: auto;
    height: auto;
    display: flex;
    gap: 7px;
    &:hover {
        cursor: pointer;
    }
`
const CreateStudyLabel = styled.div`
    color: #08DAB4;
    font-size: 2rem;
    font-weight: bold;
`
const CreateStudyAddIcon = styled.div`
    width: 33px;
    height: 33px;
    background-size: 100% 100%;
    background-image: url("data:image/svg+xml,%3Csvg width='34' height='34' viewBox='0 0 34 34' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M15.8737 25.334H18.3737V18.4173H25.332V15.9173H18.3737V8.66732H15.8737V15.9173H8.66536V18.4173H15.8737V25.334ZM16.9987 33.6673C14.7209 33.6673 12.5681 33.2298 10.5404 32.3548C8.51259 31.4798 6.74175 30.2854 5.22786 28.7715C3.71398 27.2576 2.51953 25.4868 1.64453 23.459C0.769531 21.4312 0.332031 19.2645 0.332031 16.959C0.332031 14.6812 0.769531 12.5284 1.64453 10.5007C2.51953 8.47287 3.71398 6.70898 5.22786 5.20898C6.74175 3.70898 8.51259 2.52148 10.5404 1.64648C12.5681 0.771484 14.7348 0.333984 17.0404 0.333984C19.3181 0.333984 21.4709 0.771484 23.4987 1.64648C25.5265 2.52148 27.2904 3.70898 28.7904 5.20898C30.2904 6.70898 31.4779 8.47287 32.3529 10.5007C33.2279 12.5284 33.6654 14.6951 33.6654 17.0007C33.6654 19.2784 33.2279 21.4312 32.3529 23.459C31.4779 25.4868 30.2904 27.2576 28.7904 28.7715C27.2904 30.2854 25.5265 31.4798 23.4987 32.3548C21.4709 33.2298 19.3043 33.6673 16.9987 33.6673ZM17.0404 31.1673C20.957 31.1673 24.2904 29.7854 27.0404 27.0215C29.7904 24.2576 31.1654 20.9034 31.1654 16.959C31.1654 13.0423 29.7904 9.70898 27.0404 6.95898C24.2904 4.20898 20.9431 2.83398 16.9987 2.83398C13.082 2.83398 9.74175 4.20898 6.97786 6.95898C4.21398 9.70898 2.83203 13.0562 2.83203 17.0007C2.83203 20.9173 4.21398 24.2576 6.97786 27.0215C9.74175 29.7854 13.0959 31.1673 17.0404 31.1673Z' fill='%2308DAB4'/%3E%3C/svg%3E%0A");
`
const Bottom = styled.div`
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    gap: 30px;
`;
type HashItemProps = {
    isActive: boolean;
}
const HashItem = styled.div`
    font-size: 25px;
    font-weight: 700;
    color: ${(props: HashItemProps) => props.isActive? '#333333':'#cccccc'};
    &:hover {
        cursor: pointer;
    }
`;

export default function() {
    const [isOnline, setIsOnline] = useState(false);
    const [indexSelectedHash, setIndexSelectedHash] = useState(0);
    const isOffline = !isOnline;
    return <>
        <Top>
            <StringButton isActive={isOnline} onClick={() => {
                setIsOnline(true);
            }}>온라인</StringButton>
            <StringButton isActive={isOffline} onClick={() => {
                setIsOnline(false);
            }}>오프라인</StringButton>
            <RegionSearcher>
                <RegionSearcherInput placeholder='원하시는 스터디 지역을 입력해주세요.'/>
                <RegionSearcherIconButton/>
            </RegionSearcher>
            <CreateStudyButton>
                <CreateStudyAddIcon/>
                <CreateStudyLabel>
                    스터디 만들기
                </CreateStudyLabel>
            </CreateStudyButton>
        </Top>
        <Bottom>
            {
                ['영어', 'IT', '독서', '마케팅', '포토폴리오', '기타'].map((value, index) => {
                    return <HashItem isActive= {indexSelectedHash === index} onClick = {() => {setIndexSelectedHash(index)}}key = {value}>#{value}</HashItem>
                })
            }
        </Bottom>
    </>
}