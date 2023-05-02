import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/members")
      .then((response) => {
        setMembers(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const member = {
    name: "Rebecca",
    age: 25,
  };

  const addMember = (member) => {
    return axios
      .post("http://localhost:8080/members", member)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const updateMember = (id, name, age) => {
    const updatedMember = { age: age, name: name };
    axios
      .put(`http://localhost:8080/members/${id}`, updatedMember)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const deleteMember = (id) => {
    axios
      .delete(`http://localhost:8080/members/${id}`)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="App">
      <h1>react test</h1>
      <ul>
        {members.map((member) => (
          <li key={member.id}>
            {member.name} ({member.age})
          </li>
        ))}
      </ul>
      <button onClick={() => addMember(member)}>회원추가</button>
      <button onClick={() => updateMember(1, "Kiwisdfsdfs", 29)}>
        회원수정
      </button>
      <button onClick={() => deleteMember(5)}>회원삭제</button>
    </div>
  );
}

export default App;
