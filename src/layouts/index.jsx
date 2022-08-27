import {Button,Space} from 'antd';
import { history} from 'umi'
export default function(props) {
  const btnClick = (value)=>{
    history.push(value)
  }
  return (
    <>
      <Space style={{marginBottom:'16px'}}>
        <Button onClick={()=>btnClick('/react16')}  type={"primary"}> react 16</Button>
        {/*<Button onClick={()=>btnClick('/terminal')}  type={"primary"}> Terminal</Button>*/}
        <Button onClick={()=>btnClick('/')}  type={"primary"}> home</Button>
      </Space>
      { props.children }
      <div>this is footer</div>
    </>
  );
}
