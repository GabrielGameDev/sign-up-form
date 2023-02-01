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
            <Box color={colors.blue}>
              <p>
                <span>Try it free 7 days</span> then $20/mo. thereafter
              </p>
            </Box>

            <Box color="#fff">
              <form>
                <FormGroup>
                  <input type="text" />
                </FormGroup>
              </form>
            </Box>
            <p>
              See how experienced developers solve problems in real-time.
              Watching scripted tutorials is great, but understanding how
              developers think is invaluable. Try it free 7 days then $20/mo.
              thereafter First Name Last Name Email Address Password Claim your
              free trial By clicking the button, you are agreeing to our Terms
              and Services
            </p>
          </div>
        </Container>
      </Body>
    </>
  );
}

export default App;
