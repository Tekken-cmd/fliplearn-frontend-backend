import React, { useState } from 'react';
import './grammarMenu.css'
import DropDownBeginner from './DropDownBeginner';
import DropDownIntermediate from './DropDownIntermediate';
import DropDownAdvanced from './DropDownAdvanced';
import StarRateIcon from '@mui/icons-material/StarRate';

const GrammarMenu = () => {
    const [isActive, setIsActive] = useState(false);
    const [isActive1, setIsActive1] = useState(false);
    const [isActive2, setIsActive2] = useState(false);

    function contentClick() {
        setIsActive(false);
        setIsActive1(false);
        setIsActive2(false);
    }
    function handleClick() {
        setIsActive(!isActive);
    }
    function handleClick1() {
        setIsActive1(!isActive1);
    }
    function handleClick2() {
        setIsActive2(!isActive2);
    }
    

    return (
    <>
        <div className="sidebar">
            <DropDownBeginner title="초급 문법" onClicked={handleClick} onActive={isActive} />
            <DropDownIntermediate title="중급 문법" onClicked={handleClick1} onActive={isActive1} />
            <DropDownAdvanced title="고급 문법" onClicked={handleClick2} onActive={isActive2} />
        </div>

        <div className="content" onClick={contentClick}>
            <h4 id="1">verb + 는 것 (= noun)</h4>
            <div className="grammar-content">
                <p className="grammar-explanation">Rule: Used to change a verb to the noun which describes an action.</p>
                <p>차를 운전하는 것을 배워요.</p>
                <h5>verb + 는 것을 + verb</h5>
                <p>운전하는 것을 좋아해요.</p>
                <h5>verb + 는 것이 + adjective</h5>
                <p>운전하는 것이 좋아요.</p>
                <h5>verb + 는 게 + adjective</h5>
                <p>운전하는 게 좋아요.</p>
            </div>
            <hr/>
            <h4 id="2">verb + 세요 / 으세요</h4>
            <div className="grammar-content">
                <p className="grammar-explanation">Rule: Used to make a polite order / request.</p>
                <p>가다 ➡ 가세요</p>
                <p>읽다 ➡ 읽으세요</p>
            </div>
            <hr/>
            <h4 id="3"><StarRateIcon className="star" fontSize='small'/> (받침) "ㄷ" + vowel, "ㄷ" ➡ changes to ㄹ</h4>
            <div className="grammar-content">
                <p>* 듣다 ➡ 들으세요</p>
            </div>
            <hr/>
            <h4 id="4"><StarRateIcon className='star' fontSize='small'/> (받침) "ㄹ" + ㅅ/ㅂ/ㄴ/ㅇ, "ㄹ" is omitted</h4>
            <div className="grammar-content">
                <p>열다 ➡ 여세요</p>
                <p>만들다 ➡ 만드세요</p>
            </div>
            <hr/>
            <h4 id="5"><StarRateIcon className='star' fontSize='small'/> 크다</h4>
            <div className="grammar-content">
                <h5>noun + adjective</h5>
                <p>가방이 커요</p>
                <h5>adjective + ㄴ/은 + noun</h5>
                <p>큰 가방</p>
                <h5>adjective + 게 + verb</h5>
                <p>크게 말하세요</p>
            </div>
            <hr/>
        </div>
    </>
    );
};
export default GrammarMenu;
