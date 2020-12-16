import axios from 'axios';
import { getHistory } from './api';

const headers = {
    headers: {
        'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_KEY,
        'x-rapidapi-host': process.env.REACT_APP_HOST,
    },
};

function App() {
    axios
        .get(getHistory('SPAIN'), headers)
        .then((data: any) => console.log(data));
    return <div className='App'>{getHistory('SPAIN')}</div>;
}

export default App;
