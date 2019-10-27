import React, { useState, useEffect } from "react";
import { MdModeEdit, MdDelete } from "react-icons/md";
import { toast } from "react-toastify";

import Header from "../../components/Header";
import Modal from "../../components/Modal";
import Button from "../../styles/components/button";
import { api } from "../../services/api";

import { Container, User, ButtonIcon } from "./styles";

export default function Users({closeUserModal}) {
  const [users, setUsers] = useState();
  const [user, setUser] = useState();
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
  function removeUser(id) {
    const usersFilter = users.filter(value => {
      return value.rowIndex !== id;
    });
    setUsers(usersFilter);
  }
  function handleDelete(rowIndex) {
    removeUser(rowIndex);
    toast.success("Usuário excluído com sucesso!");
    api.delete(`${type}/${rowIndex}?spreadsheetId=${idApi}`);
  }

  function handleEdit({ rowIndex, nome, email }) {
    debugger;
  }

  function handleInputChange(){
    // modal edit
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
                  <ButtonIcon>
                    <MdModeEdit onClick={() => handleEdit(user)} />
                  </ButtonIcon>
                  <ButtonIcon>
                    <MdDelete onClick={() => handleDelete(user.rowIndex)} />
                  </ButtonIcon>
                </strong>
              </User>
            ))}
        </ul>
        <Modal size="big">
          <h1>Edição Usuário</h1>
          <form>
            <span>NOME</span>
            <input
              name="user"
              value={user}
              onChange={handleInputChange}
            />
            <Button onClick={handleEdit} size="big" type="submit">
              Salvar
            </Button>
            <Button onClick={closeUserModal} size="small" color="gray">
              Cancelar
            </Button>
          </form>
        </Modal>
      </Container>
    </>
  );
}
