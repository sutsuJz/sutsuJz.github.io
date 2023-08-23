import { useEffect, useRef, useState } from 'react';
import Tile from '../Tile/Tile';
import './JuomapeliTyylit.css';
import Juomalogik from '../Juomalogik/Juomalogik';

const horizontalAxis = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
const verticalAxis = ['1', '2', '3', '4', '5', '6', '7', '8'];

interface Piece {
  image: string;
  x: number;
  y: number;
}

//const pieces: Piece[] = [];

export default function Juomapeli() {
  const [activePiece, setActivePiece] = useState<HTMLElement | null>(null);
  const [gridX, setGridX] = useState(0);
  const [gridY, setGridY] = useState(0);
  const initialBoardState: Piece[] = [];

  function getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
  }

  for (let i = 0; i < 8; i++) {
    let testi1 = getRandomInt(3);
    if (testi1 === 0) {
      initialBoardState.push({
        image: 'assets/images/tausta1.png',
        x: i,
        y: 6,
      });
    } else if (testi1 === 1) {
      initialBoardState.push({
        image: 'assets/images/tausta2.png',
        x: i,
        y: 6,
      });
    } else if (testi1 === 2) {
      initialBoardState.push({
        image: 'assets/images/tausta3.png',
        x: i,
        y: 6,
      });
    }
  }

  for (let i = 0; i < 8; i++) {
    let testi1 = getRandomInt(3);
    if (testi1 === 0) {
      initialBoardState.push({
        image: 'assets/images/tausta1.png',
        x: i,
        y: 7,
      });
    } else if (testi1 === 1) {
      initialBoardState.push({
        image: 'assets/images/tausta2.png',
        x: i,
        y: 7,
      });
    } else if (testi1 === 2) {
      initialBoardState.push({
        image: 'assets/images/tausta3.png',
        x: i,
        y: 7,
      });
    }
  }

  for (let i = 0; i < 8; i++) {
    let testi1 = getRandomInt(3);
    if (testi1 === 0) {
      initialBoardState.push({
        image: 'assets/images/tausta1.png',
        x: i,
        y: 5,
      });
    } else if (testi1 === 1) {
      initialBoardState.push({
        image: 'assets/images/tausta2.png',
        x: i,
        y: 5,
      });
    } else if (testi1 === 2) {
      initialBoardState.push({
        image: 'assets/images/tausta3.png',
        x: i,
        y: 5,
      });
    }
  }

  for (let i = 0; i < 8; i++) {
    let testi1 = getRandomInt(3);
    if (testi1 === 0) {
      initialBoardState.push({
        image: 'assets/images/tausta1.png',
        x: i,
        y: 4,
      });
    } else if (testi1 === 1) {
      initialBoardState.push({
        image: 'assets/images/tausta2.png',
        x: i,
        y: 4,
      });
    } else if (testi1 === 2) {
      initialBoardState.push({
        image: 'assets/images/tausta3.png',
        x: i,
        y: 4,
      });
    }
  }

  for (let i = 0; i < 8; i++) {
    let testi1 = getRandomInt(3);
    if (testi1 === 0) {
      initialBoardState.push({
        image: 'assets/images/tausta1.png',
        x: i,
        y: 3,
      });
    } else if (testi1 === 1) {
      initialBoardState.push({
        image: 'assets/images/tausta2.png',
        x: i,
        y: 3,
      });
    } else if (testi1 === 2) {
      initialBoardState.push({
        image: 'assets/images/tausta3.png',
        x: i,
        y: 3,
      });
    }
  }
  for (let i = 0; i < 8; i++) {
    let testi1 = getRandomInt(3);
    if (testi1 === 0) {
      initialBoardState.push({
        image: 'assets/images/tausta1.png',
        x: i,
        y: 2,
      });
    } else if (testi1 === 1) {
      initialBoardState.push({
        image: 'assets/images/tausta2.png',
        x: i,
        y: 2,
      });
    } else if (testi1 === 2) {
      initialBoardState.push({
        image: 'assets/images/tausta3.png',
        x: i,
        y: 2,
      });
    }
  }

  for (let i = 0; i < 8; i++) {
    let testi1 = getRandomInt(3);
    if (testi1 === 0) {
      initialBoardState.push({
        image: 'assets/images/tausta1.png',
        x: i,
        y: 1,
      });
    } else if (testi1 === 1) {
      initialBoardState.push({
        image: 'assets/images/tausta2.png',
        x: i,
        y: 1,
      });
    } else if (testi1 === 2) {
      initialBoardState.push({
        image: 'assets/images/tausta3.png',
        x: i,
        y: 1,
      });
    }
  }

  for (let i = 0; i < 8; i++) {
    let testi1 = getRandomInt(3);
    if (testi1 === 0) {
      initialBoardState.push({
        image: 'assets/images/tausta1.png',
        x: i,
        y: 0,
      });
    } else if (testi1 === 1) {
      initialBoardState.push({
        image: 'assets/images/tausta2.png',
        x: i,
        y: 0,
      });
    } else if (testi1 === 2) {
      initialBoardState.push({
        image: 'assets/images/tausta3.png',
        x: i,
        y: 0,
      });
    }
  }
  const [pieces, setPieces] = useState<Piece[]>(initialBoardState);
  const JuomapeliRef = useRef<HTMLDivElement>(null);

  function movePiece(e: React.MouseEvent) {
    const Juomapeli = JuomapeliRef.current;
    if (activePiece && Juomapeli) {
      const minX = Juomapeli.offsetLeft - 25;
      const minY = Juomapeli.offsetTop - 25;
      const maxX = Juomapeli.offsetLeft + Juomapeli.clientWidth - 75;
      const maxY = Juomapeli.offsetTop + Juomapeli.clientHeight - 75;
      const x = e.clientX - 50;
      const y = e.clientY - 50;
      activePiece.style.position = 'absolute';
      //activePiece.style.left = `${x}px`;
      //activePiece.style.top = `${y}px`;

      if (x < minX) {
        activePiece.style.left = `${minX}px`;
      } else if (x > maxX) {
        activePiece.style.left = `${maxX}px`;
      } else {
        activePiece.style.left = `${x}px`;
      }

      if (y < minY) {
        activePiece.style.top = `${minY}px`;
      } else if (y > maxY) {
        activePiece.style.top = `${maxY}px`;
      } else {
        activePiece.style.top = `${y}px`;
      }
    }
  }

  function dropPiece(e: React.MouseEvent) {
    const Juomapeli = JuomapeliRef.current;
    if (activePiece && Juomapeli) {
      const x = Math.floor((e.clientX - Juomapeli.offsetLeft) / 100);
      const y = Math.abs(
        Math.ceil((e.clientY - Juomapeli.offsetTop - 800) / 100)
      );

      setPieces((value) => {
        const pieces = value.map((p) => {
          if (p.x === gridX && p.y === gridY) {
            p.x = x;
            p.y = y;
          }
          return p;
        });
        return pieces;
      });
      setActivePiece(null);
    }
  }

  //Function for clicking pieces that opens dialog
  const [ilmota, setIlmota] = useState('none'); // Initialize ilmota to 'none'
  const [ilmoitus, setIlmoitus] = useState(''); // Initialize ilmoitus to empty string
  function clickPiece(e: React.MouseEvent) {
    const Juomapeli = JuomapeliRef.current;

    const element = e.target as HTMLElement;
    console.log(element);
    if (Juomapeli) {
      const x = Math.floor((e.clientX - Juomapeli.offsetLeft) / 100);
      const y = Math.abs(
        Math.ceil((e.clientY - Juomapeli.offsetTop - 800) / 100)
      );

      const pieceInfo = {
        x: x,
        y: y,
      };
      let juomakuva = '';
      let testi2 = getRandomInt(15);
      if (testi2 === 0) {
        juomakuva = 'assets/images/drfri.png';
        setIlmoitus('Juo valitsemasi ystävän kanssa pari siemaisua.');
      } else if (testi2 === 1) {
        juomakuva = 'assets/images/sponge.png';
        setIlmoitus('Juo shotti!');
      } else if (testi2 === 2) {
        juomakuva = 'assets/images/pingu.png';
        setIlmoitus('Kertaa Tinjalle miksi laiturin päästä ei hypätä pingulla');
      } else if (testi2 === 3) {
        juomakuva = 'assets/images/cat.png';
        setIlmoitus('Ilkeä kissa. Juo juomasi loppuun.');
      } else if (testi2 === 4) {
        juomakuva = 'assets/images/luu.png';
        setIlmoitus('Mukava kissa. Syö vaikka sipsi. Tai jotain.');
      } else if (testi2 === 5) {
        juomakuva = 'assets/images/kiina.png';
        setIlmoitus('Heitä pinkiponkipallo kuppiin. Jos onnistut, juo. Jos et, juo enemmän.');
      } else if (testi2 === 6) {
        juomakuva = 'assets/images/parti.png';
        setIlmoitus('Juhlapäivä. Juo juomasi loppuun.');
      } else if (testi2 === 7) {
        juomakuva = 'assets/images/bottle.png';
        setIlmoitus('Tee bottle flip. Jos epäonnistut niin juo. Saa käyttää tupla tai kuitti.');
      } else if (testi2 === 8) {
        juomakuva = 'assets/images/uno.png';
        setIlmoitus('Pelin suunta muuttuu. Juo.');
      } else if (testi2 === 9) {
        juomakuva = 'assets/images/deck.png';
        setIlmoitus('Nosta kortti pakasta. Jos saat 5 tai alle juo juomasi loppuun.');
      } else if (testi2 === 10) {
        juomakuva = 'assets/images/uinti.png';
        setIlmoitus('Käy uimassa tai juo shotti. Valitse itse.');
      } else if (testi2 === 11) {
        juomakuva = 'assets/images/decj.png';
        setIlmoitus('Kortinveto edellistä pelaajaa vastaan. Häviäjä juo');
      } else if (testi2 === 12) {
        juomakuva = 'assets/images/kps.png';
        setIlmoitus('Pelaa kivi-paperi-sakset. Pelaa myötäpäivään kunnes voitat. Jokaisesta tappiosta juot lisää.');
      } else if (testi2 === 13) {
        juomakuva = 'assets/images/hdog.png';
        setIlmoitus('Mukava koira. Syö vaikka sipsi. Tai jotain.');
      } else if (testi2 === 14) {
        juomakuva = 'assets/images/edog.png';
        setIlmoitus('Ilkeä koira. Juo juomasi loppuun.');
      } 

      let testi = {
        x: Math.floor((e.clientX - Juomapeli.offsetLeft) / 100),
        y: Math.abs(Math.ceil((e.clientY - Juomapeli.offsetTop - 800) / 100)),
        image: juomakuva,
      };

      setPieces((value) => {
        const newPieces = [...value, testi];

        return newPieces;
      });
      setTimeout(function () {
      setIlmota('');
      }, 2000); // 10000 milliseconds = 10 seconds
      setTimeout(function () {
        juomakuva = 'assets/images/x.png';
        testi = {
          x: Math.floor((e.clientX - Juomapeli.offsetLeft) / 100),
          y: Math.abs(Math.ceil((e.clientY - Juomapeli.offsetTop - 800) / 100)),
          image: juomakuva,
        };
        setIlmota('none');

        setPieces((value) => {
          const newPieces = [...value, testi];

          return newPieces;
        });
      }, 6000); // 10000 milliseconds = 10 seconds

      console.log(x, y);

      console.log('Clicked piece:', pieceInfo);
    }
  }

  let board = [];
  for (let j = verticalAxis.length - 1; j >= 0; j--) {
    for (let i = 0; i < horizontalAxis.length; i++) {
      const number = i + j + 2;
      let image = undefined;

      pieces.forEach((p) => {
        if (p.x === i && p.y === j) {
          image = p.image;
        }
      });

      board.push(<Tile key={`${j}, ${i}`} image={image} number={number} />);
    }
  }
  
  
  return (
    <div>
    <div>
     <h2 id={ilmota}>{ilmoitus}</h2>
  </div>
    <div
      onMouseMove={(e) => movePiece(e)}
      onMouseUp={(e) => dropPiece(e)}
      onClick={(e) => clickPiece(e)}
      id="chessboard"
      ref={JuomapeliRef}
    >
     
      {board}
    </div>
    </div>
  );
}
