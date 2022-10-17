import { useState } from 'react';
import SearchBar from './components/SearchBar';

// import styled from 'styled-components';

// const Button = styled.button`
//   padding: 10px;
//   border-radius: 5px;
//   border: none;
//   background-color: white;
//   border: solid 1px #ccc;
//   cursor: pointer;

//   &:hover{
//     background-color: #efefef;
//   }`;

const people = [
  {
    id: 'people-01',
    title: 'Kim Wexler'
  },
  {
    id: 'people-02',
    title: 'Saul Goodman'
  },
  {
    id: 'people-03',
    title: 'Ignacio Varga'
  },
  {
    id: 'people-04',
    title: 'Eduardo Salamanca'
  },
  {
    id: 'people-05',
    title: 'Gustavo Fring'
  },
]

const calendar = [
  {
    id: 'calendar-01',
    title: 'Sesión de seguimiento'
  },
  {
    id: 'calendar-02',
    title: 'Revisión de propuestas'
  },
  {
    id: 'calendar-03',
    title: 'Evento para donar juguetes'
  },
  {
    id: 'calendar-04',
    title: 'Junta semanal del equipo'
  },
  {
    id: 'calendar-05',
    title: 'Revisión de pendientes con clientes'
  },
]

const emails = [
  {
    id: 'email-01',
    title: 'Reporte de resultados'
  },
  {
    id: 'email-02',
    title: 'Requisitos para cambio'
  },
  {
    id: 'email-03',
    title: 'Estatus de funcionalidad'
  },
  {
    id: 'email-04',
    title: 'Próximos eventos'
  },
  {
    id: 'email-05',
    title: 'Participación en la encuesta'
  },
]

function App() {

  const [data, setData] = useState([...people, ...calendar, ...emails]);
  const [selection, setSelection] = useState(null);
  const [currentOption, setCurrentOption] = useState('all')
  const [count, setCount] = useState(0)


  let handleClick = (e) => {
    const options = e.target.name;

    switch(options){
      case 'all':
        setData([...people, ...calendar, ...emails]);
        setCurrentOption('all');
        break;

        case 'people':
        setData([...people]);
        setCurrentOption('people');
        break;

        case 'calendar':
        setData([...calendar]);
        setCurrentOption('calendar');
        break;

        case 'emails':
        setData([...emails]);
        setCurrentOption('emails');
        break;
    }
  }

  let handleItemSelected = (item) => {
    setSelection(item);
  }

  return (
    // <div class='text-center' >
    //   <Button type="button" class="btn btn-primary" data-bs-toggle="button" onClick={handleClick} name='all' >All</Button>
    //   <Button onClick={handleClick} name='people' >People</Button>
    //   <Button onClick={handleClick} name='calendar' >Calendar</Button>
    //   <Button onClick={handleClick} name='emails' >Emails</Button>
    //   <Button onClick={() => setCount(count + 1)} >{count}</Button>
    //   {selection ? <div>You selected: {selection.title} </div> : ''}
    //   <SearchBar items={data} onItemSelected={handleItemSelected} />
    // </div>
    <div class='text-center' >
      <button type="button" class="btn btn-primary" onClick={handleClick} name='all' >All</button>
      <button type="button" class="btn btn-primary" onClick={handleClick} name='people' >People</button>
      <button type="button" class="btn btn-primary" onClick={handleClick} name='calendar' >Calendar</button>
      <button type="button" class="btn btn-primary" onClick={handleClick} name='emails' >Emails</button>
      <button type="button" class="btn btn-primary" onClick={() => setCount(count + 1)} >{count}</button>
      {selection ? <div>You selected: {selection.title} </div> : ''}
      <SearchBar items={data} onItemSelected={handleItemSelected} />
    </div>
    
  );
}

export default App;
