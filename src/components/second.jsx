import Accordion from './accordion/Accordion';
import Faqback from './Faqback';
import More from './More';



export const  Second=()=>{
return <div>
    <Faqback head={"Frequently asked questions"} ></Faqback>
      <div className='mid-divide'>
        <div className='more'> <More></More></div>
      <div className='ac'><Accordion></Accordion></div>
      
      </div>
</div>
}