import React, {useState, useEffect} from "react";

import Header from "../../components/Header";
import { api } from "../../services/api";


import { Container, User } from "./styles";

export default function Users() {
  const [users, setUsers] = useState();
  const idApi = '14B8PtCS-aKwA3TVgfXbp9NdEwqmzft3T-rl-vj00YWY';
  const type = 'users';
  
  useEffect(() => {
    async function getUsers(){
      const response = await api.get(`${type}?spreadsheetId=${idApi}`);
      const { results } = response.data; 
      if(results){
        setUsers(results);
      }
    }
    getUsers()

    
  }, [])

  function handleSave(e){
    e.stopPropagation();
  }
  // function handleEdit(){

  // }
  return (
    <>
      <Header />
      <Container>
        <form>
          <input />
          <button onClick={handleSave}>
            Salvar
          </button>
        </form>
        <ul>
          {users && users.map( (user, key) => (
            <User key={key}>
              <strong>{user.nome}</strong>
              <strong>{user.email}</strong>
              <strong>Icone edita</strong>
            </User>
          ))}
        </ul>
      </Container>
    </>
  );
}
