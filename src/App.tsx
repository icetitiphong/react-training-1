import "./App.css";
import "bulma/css/bulma.min.css";
import { Input } from "./components/Input";
import { Button } from "./components/Button";

import UseUser from "./hooks/user/useUser";
import { User } from "./types/user";
import { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);

  const fetchData = async () => {
    UseUser.getUserList()
      .then((response: any) => {
        setUsers(response.data);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    setIsDisabled(!(firstName && lastName && age));
  }, [firstName, lastName, age]);

  const handleChangeFirstName = (value: string) => {
    setFirstName(value);
  };
  const handleChangeLastName = (value: string) => {
    setLastName(value);
  };
  const handleChangeAge = (value: string) => {
    setAge(value);
  };

  const onClick = () => {
    const addUser = async () => {
      UseUser.addUser({
        firstName: firstName,
        lastName: lastName,
        age: Number(age),
      })
        .then((response: any) => {
          if (response) {
            fetchData();
            clearData();
          }
        })
        .catch((e: Error) => {
          console.log(e);
        });
    };
    addUser();
  };

  const clearData = () => {
    setFirstName("");
    setLastName("");
    setAge("");
  };

  return (
    <div>
      <Input
        title={"ชื่อ"}
        onChange={handleChangeFirstName}
        value={firstName}
      ></Input>
      <Input
        title={"นามสกุล"}
        onChange={handleChangeLastName}
        value={lastName}
      ></Input>
      <Input title={"อายุ"} onChange={handleChangeAge} value={age}></Input>
      <Button onClick={onClick} isDisabled={isDisabled}></Button>

      <div>
        <div className="columns mt-4">
          <div className="column">FirstName</div>
          <div className="column">LastName</div>
          <div className="column">Age</div>
        </div>
        {users?.map((user, x) => {
          return (
            <div className="columns mt-4" key={x}>
              <div className="column">{user.firstName}</div>
              <div className="column">{user.lastName}</div>
              <div className="column">{user.age}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
