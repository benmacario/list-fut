import React from 'react';
import './styles.css';

import api from '../../services/api';

const clickButtonDetails = (id) => {
  console.log(id);
}

const Home = () => {
  const [leagues, setLeagues] = React.useState([]);


  React.useEffect(() => {
    api.get('/leagues').then((response) => {
      setLeagues(response.data.data);
    });
  }, [])
  return(
    <div className="flex space-x-2 my-10 mx-auto">
      <div className="grid grid-cols-4 gap-5">
        {leagues.map((league) => (
          <div key={league.id} className="border border-gray-100 rounded">
            {
              league.logos.light ?
                <img className="h-44 mx-auto" src={league.logos.light} alt="" />
                :
                <img className="h-44 mx-auto" src={league.logos.dark} alt="" /> 
              }
            <div className="px-5 mt-3">
              <p className="text-lg text-gray-900">{league.name}</p>
              <p className="text-sm text-gray-500">{league.slug}</p>
              <button className="text-sm bg-gray-200 py-2 px-4 rounded my-2" onClick={() => clickButtonDetails(league.id)}>Detalhes</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;