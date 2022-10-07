import logo from './logo.svg';
import './App.css';
import Introduce from "./compotnents/Introduce/Introduce";
import {useState} from "react";
import OpenIntroduce from "./compotnents/Introduce/OpenIntroduce";

const props = {
  h1: 'Giới thiệu',
  p: 'Yasuo Kẻ Bất Dung Thứ, hay The Unforgiven là một nhân vật con người hư cấu, giả tưởng, kiếm khách Rōnin tự do, không phe phái trong Vũ trụ Liên Minh Huyền Thoại, một vị tướng trong đấu trường trận chiến trực tuyến nhiều người chơi, thể thao điện tử Liên Minh Huyền Thoại.',
  nameButton: 'Đóng giới thiệu'
}

function App() {
  const [prop, setProp] = useState(props)
  const [isOpen, setIsOpen] = useState(true)

  const handleClick = () => {
    setProp({
      h1: '',
      p: '',
      nameButton: 'Mở giới thiệu'
    })
    setIsOpen(true)
  }

  const handleClickOpen = () => {
     setProp({
       h1: 'Giới thiệu',
       p: 'Yasuo Kẻ Bất Dung Thứ, hay The Unforgiven là một nhân vật con người hư cấu, giả tưởng, kiếm khách Rōnin tự do, không phe phái trong Vũ trụ Liên Minh Huyền Thoại, một vị tướng trong đấu trường trận chiến trực tuyến nhiều người chơi, thể thao điện tử Liên Minh Huyền Thoại.',
       nameButton: 'Đóng giới thiệu'
         }
     )
    setIsOpen(false)
  }

  return (
    <div className="App">
      {
        (!isOpen) ?
            <Introduce
                prop={prop}
                onClick={handleClick}
            />
          :
        <OpenIntroduce
        props={prop}
        onClick={handleClickOpen}
        />
      }
    </div>
  );
}

export default App;
