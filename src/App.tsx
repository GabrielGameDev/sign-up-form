import { useState } from "react";
import { Body, Container, Box, colors, FormGroup, Button } from "./styles";

function App() {
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
              <form>
                <FormGroup error={true}>
                  <input type="text" placeholder="First Name" />
                  <img src="../images/icon-error.svg" alt="" width={20} />
                  <small>First name is required</small>
                </FormGroup>
                <FormGroup error={true}>
                  <input type="text" placeholder="Last Name" />
                  <img src="../images/icon-error.svg" alt="" width={20} />
                  <small>Last name is required</small>
                </FormGroup>
                <FormGroup error={true}>
                  <input type="email" placeholder="E-mail adress" />
                  <img src="../images/icon-error.svg" alt="" width={20} />
                  <small>E-mail adress is required</small>
                </FormGroup>
                <FormGroup error={true}>
                  <input type="password" placeholder="Password" />
                  <img src="../images/icon-error.svg" alt="" width={20} />
                  <small>Password is required</small>
                </FormGroup>
                <Button>CLAIM YOUR FREE TRIAL</Button>
              </form>
            </Box>
          </div>
        </Container>
      </Body>
    </>
  );
}

export default App;
