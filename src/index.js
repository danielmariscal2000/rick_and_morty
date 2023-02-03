import {render} from 'react-dom'
import App from './App';
import { BrowserRouter} from 
"react-router-dom";

const container =document.getElementById('root');
render(
 <BrowserRouter><App></App></BrowserRouter>
,container);
