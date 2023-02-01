import { useState } from "react";
import { Body, Container, Box, colors, FormGroup } from "./styles";

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
                <FormGroup>
                  <input type="text" placeholder="First Name" />
                </FormGroup>
                <FormGroup>
                  <input type="text" placeholder="Last Name" />
                </FormGroup>
                <FormGroup>
                  <input type="email" placeholder="E-mail adress" />
                </FormGroup>
                <FormGroup>
                  <input type="password" placeholder="Password" />
                </FormGroup>
              </form>
            </Box>
          </div>
        </Container>
      </Body>
    </>
  );
}

export default App;
