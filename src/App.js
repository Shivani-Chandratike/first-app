
import 'antd/dist/reset.css'
import './App.css';
import { Button } from 'antd'; 
import { useState } from 'react';
import { PoweroffOutlined } from '@ant-design/icons'; 


function App() {
  const [loading, setLoading] = useState(false)

  const onButtonClick=(e) =>{
    console.log('Button clicked')
    setLoading(true)
    setTimeout(() => {
      setLoading(false)

    }, 2000)
  }
  return (
    <div className="App">
      <header className="App-header">
        <Button type='primary' 
        loading={loading}
        icon={<PoweroffOutlined />}
        className='my-button'
        onClick={onButtonClick}>
        My First Button
        </Button>
      

        <Button type='primary' 
        
        loading={loading}
        icon={<PoweroffOutlined />}
        onClick={onButtonClick}>My 2nd Button</Button>

      </header>
    </div>
  );
}

export default App;