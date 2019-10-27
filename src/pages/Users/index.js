import React, { useState, useEffect } from "react";
import { MdModeEdit, MdDelete } from "react-icons/md";
import { toast } from 'react-toastify';

import Header from "../../components/Header";
import { api } from "../../services/api";

import { Container, User, ButtonIcon } from "./styles";

export default function Users() {
  const [users, setUsers] = useState();
  const [newUser, setNewUser] = useState();
  const [email, setEmail] = useState();
  const idApi = "14B8PtCS-aKwA3TVgfXbp9NdEwqmzft3T-rl-vj00YWY";
  const type = "users";

  async function getUsers() {
    const response = await api.get(`${type}?spreadsheetId=${idApi}`);
    const { results } = response.data;
    if (results) {
      setUsers(results);
    }
  }
  useEffect(() => {
    getUsers();
  }, []);

  function handleSubmit(e) {
    e.stopPropagation();
  }
  // function handleEdit(){

  // }
  function removeUser(id){
    const usersFilter = users.filter(value => {
      return value.rowIndex !== id;
    });
    setUsers(usersFilter);
  }
   function handleDelete(rowIndex){
    removeUser(rowIndex);
    toast.success('Usuário excluído com sucesso!')
    api.delete(`${type}/${rowIndex}?spreadsheetId=${idApi}`);

  }

  function handleEdit({rowIndex, nome, email}){
    debugger;
  }

  return (
    <>
      <Header />
      <Container>
        <form onSubmit={handleSubmit}>
          <input
            value={newUser}
            placeholder="example..."
            onChange={setNewUser}
          />
          <input
            value={email}
            onChange={setEmail}
            placeholder="email@example.com"
          />
          <button>Salvar</button>
        </form>
        <ul>
          {users &&
            users.map((user, key) => (
              <User key={key}>
                <strong>{user.nome}</strong>
                <strong>{user.email}</strong>
                <strong>
                  <ButtonIcon >
                    <MdModeEdit onClick={() => handleEdit(user)}/>
                  </ButtonIcon>
                  <ButtonIcon   >
                    <MdDelete onClick={() => handleDelete(user.rowIndex)}/>
                  </ButtonIcon>
                </strong>
              </User>
            ))}
        </ul>
      </Container>
    </>
  );
}
