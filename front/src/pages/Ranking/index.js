import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import {
  PageContainer,
  PageTitle,
  Back,
} from "../../components/MainComponents";
import { PageArea, SearchArea, Filter } from "./styled";
import useApi from "../../services/api";

const Page = () => {
  const history = useNavigate();
  const api = useApi();
  const useQueryString = () => {
    return new URLSearchParams(useLocation().search);
  };
  const query = useQueryString();

  const [id, setId] = useState(query.get("Id") != null ? query.get("Id") : "");
  const [revendedor, setRevendedor] = useState(
    query.get("Revendedor") != null ? query.get("Revendedor") : ""
  );
  const [data, setData] = useState(
    query.get("Data") != null ? query.get("Data") : ""
  );

  const [disabled, setDisabled] = useState(false);

  const [filter, setFilter] = useState(true);

  const [aposta, setAposta] = useState([]);

  const [ranking, setRanking] = useState([]);
  useEffect(() => {
    api.getRanking().then((response) => setRanking(response.data));
  }, []);
  const [allUsers, setAllUsers] = useState([]);
  useEffect(() => {
    api.getAllUsers().then((response) => setAllUsers(response));
  }, []);
  useEffect(() => {
    api.getAnalysis().then((data) => setAposta(data));
  }, []);

  useEffect(() => {
    let queryString = [];
    if (id) {
      queryString.push(`Id=${id}`);
    }
    if (revendedor) {
      queryString.push(`Revendedor=${revendedor}`);
    }
    if (data) {
      queryString.push(`Data=${data}`);
    }

    history({
      search: `?${queryString.join("&")}`,
    });
  }, [id, revendedor, data]);

  const handleFilter = () => {
    setFilter(!filter);
  };

  const handleBackButton = () => {
    history("/admin");
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setDisabled(true);
    setAposta(await api.getAnalysis(id, revendedor, data));
    setDisabled(false);
  };
  return (
    <PageContainer>
      <Back onClick={handleBackButton}>Voltar para página inicial</Back>

      <PageTitle>Ranking Semanal</PageTitle>
      <PageArea>
        <table className="responsive" border="1">
          <tr>
            <th>Id</th>
            <th>Apostador</th>
            <th>Revendedor</th>
            <th>Telefone</th>
            <th>Endereço</th>
            <th>data</th>
            <th>Pontos</th>
          </tr>
          {ranking?.map((i, k) => (
            <tr key={k}>
              <td>{i.id}</td>
              <td>{i.name}</td>
              <td>{i.seller}</td>
              <td>{i.telephone}</td>
              <td>{i.address}</td>
              <td>{i.date}</td>
              <td>{i.points}</td>
            </tr>
          ))}
        </table>

        <div>Total de apostas: {ranking.length}</div>
      </PageArea>
    </PageContainer>
  );
};

export default Page;
