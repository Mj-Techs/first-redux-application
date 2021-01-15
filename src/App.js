import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./actions/counterAction";
import {
  addStudent,
  removeStudent,
  editStudent,
} from "./actions/studentAction";
import {
  Wrapper,
  Nav,
  Sidebar,
  Main,
  Content1,
  Content2,
  Content3,
  Footer,
  Button,
  H2,
  Header,
  InfoWrapper,
  DataDiv,
} from "./App-styled";

const App = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  const students = useSelector((state) => state.students);

  const Increment = () => {
    return dispatch(increment());
  };
  const Decrement = () => {
    return dispatch(decrement());
  };
  const AddStudent = () => {
    const id = Number(window.prompt("enter id"));
    const name = window.prompt("enter student name");
    const gender = window.prompt("enter student gender");
    return dispatch(addStudent({ id, name, gender }));
  };
  const EditStudent = () => {
    const data = window.prompt(
      "Enter  student id between 1-10 for change them "
    );
    const result = window.prompt(
      "which property you want to change (name or gender) ? "
    );
    if (result === "name") {
      const value = window.prompt("Enter new name");
      return dispatch(
        editStudent({ id: parseInt(data), student: { name: value } })
      );
    } else if (result === "gender") {
      const value = window.prompt("Enter new gender");
      return dispatch(
        editStudent({ id: parseInt(data), student: { gender: value } })
      );
    }
  };
  const RemoveStudent = () => {
    const data = window.prompt(
      "Enter student id between 1-10 for remove them "
    );
    return dispatch(removeStudent(parseInt(data)));
  };
  return (
    <Wrapper>
      <Nav>My First Redux App</Nav>
      <Sidebar>
        <H2>Counter App</H2>
        <h3> {counter}</h3>
        <Button onClick={Increment}>+</Button>
        <Button onClick={Decrement}>-</Button>
      </Sidebar>
      <Main>
        <Header>
          <H2 primary>Student Record</H2>
        </Header>
        <InfoWrapper>
          {students.map((student) => {
            return (
              <DataDiv key={student.id}>
                <p>id-{student.id}</p>
                <p>name-{student.name}</p>
                <p>gender-{student.gender}</p>
              </DataDiv>
            );
          })}
        </InfoWrapper>
      </Main>
      <Content1>
        <Button primary onClick={AddStudent}>
          Add student
        </Button>
      </Content1>
      <Content2>
        <Button primary onClick={EditStudent}>
          Edit student
        </Button>
      </Content2>
      <Content3>
        <Button primary onClick={RemoveStudent}>
          Remove student
        </Button>
      </Content3>
      <Footer>Footer</Footer>
    </Wrapper>
  );
};
export default App;
