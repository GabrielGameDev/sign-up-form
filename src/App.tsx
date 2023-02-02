import { useState } from "react";
import {
  Body,
  Container,
  Box,
  colors,
  FormGroup,
  Button,
  Terms,
} from "./styles";

function App() {
  interface IForm {
    inputValue: string;
    error: boolean;
  }

  const [firstName, setFirstName] = useState<IForm>({
    inputValue: "",
    error: false,
  });

  const [lastName, setLastName] = useState<IForm>({
    inputValue: "",
    error: false,
  });

  const [email, setEmail] = useState<IForm>({
    inputValue: "",
    error: false,
  });

  const [password, setPassword] = useState<IForm>({
    inputValue: "",
    error: false,
  });

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    console.log(`Nome: ${name} - Valor: ${value}`);

    switch (name) {
      case "firstName":
        setFirstName({ inputValue: value, error: false });
        break;
      case "lastName":
        setLastName({ inputValue: value, error: false });
        break;
      case "email":
        setEmail({ inputValue: value, error: false });
        break;
      case "password":
        setPassword({ inputValue: value, error: false });
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (firstName.inputValue === "") {
      setFirstName({ inputValue: firstName.inputValue, error: true });
      return;
    }

    if (lastName.inputValue === "") {
      setLastName({ inputValue: lastName.inputValue, error: true });
      return;
    }

    if (email.inputValue === "") {
      setEmail({ inputValue: email.inputValue, error: true });
      return;
    }

    if (password.inputValue === "") {
      setPassword({ inputValue: password.inputValue, error: true });
      return;
    }

    alert("Form sent successfully!");
    window.location.reload();
  };

  return (
    <>
      <Body>
        <Container>
          <div>
            <h1>
              {"Learn to code by"}
              <br />
              {"watching others"}
            </h1>

            <p>
              See how experienced developers solve problems in real-time.
              Watching scripted tutorials is great, but understanding how
              developers think is invaluable.
            </p>
          </div>
          <div>
            <Box color={colors.blue} padding="20px">
              <p>
                <span>Try it free 7 days</span> then $20/mo. thereafter
              </p>
            </Box>

            <Box color="#fff" padding="35px">
              <form onSubmit={handleSubmit}>
                <FormGroup error={firstName.error}>
                  <input
                    type="text"
                    placeholder="First Name"
                    name="firstName"
                    onChange={handleInput}
                  />
                  <img src="../images/icon-error.svg" alt="" width={20} />
                  <small>First name is required</small>
                </FormGroup>
                <FormGroup error={lastName.error}>
                  <input
                    type="text"
                    placeholder="Last Name"
                    name="lastName"
                    onChange={handleInput}
                  />
                  <img src="../images/icon-error.svg" alt="" width={20} />
                  <small>Last name is required</small>
                </FormGroup>
                <FormGroup error={email.error}>
                  <input
                    type="email"
                    placeholder="E-mail adress"
                    name="email"
                    onChange={handleInput}
                  />
                  <img src="../images/icon-error.svg" alt="" width={20} />
                  <small>E-mail adress is required</small>
                </FormGroup>
                <FormGroup error={password.error}>
                  <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    onChange={handleInput}
                  />
                  <img src="../images/icon-error.svg" alt="" width={20} />
                  <small>Password is required</small>
                </FormGroup>
                <Button type="submit">CLAIM YOUR FREE TRIAL</Button>
              </form>
              <Terms>
                By clicking the button, you are agreeing to our
                <a href=""> Terms and Services</a>
              </Terms>
            </Box>
          </div>
        </Container>
      </Body>
    </>
  );
}

export default App;
