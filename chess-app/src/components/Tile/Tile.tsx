/* eslint-disable jsx-a11y/alt-text */
import { useRef } from 'react';
import './Tile.css';

interface Props {
    image?: string;
    number: number;
}

let tileId =  0;

export default function Tile({number, image}: Props) {

   
    if (number % 2 === 0) {
        tileId ++ 
       let testi4 ='tile' + tileId.toString();
        
        // eslint-disable-next-line jsx-a11y/alt-text
        return <div className="tile black-tile" id={testi4}>
            {image &&<div style={{backgroundImage: `url(${image})`}} className='chess-piece'></div>}
            
            </div>
            
} else {
    tileId ++
    let testi4 ='tile' +  tileId.toString();
        return <div className="tile white-tile" id={testi4}>
             {image &&<div style={{backgroundImage: `url(${image})`}} className='chess-piece'></div>}
        </div>
    }
    
}