import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  Container,
  Title,
  FormStyled,
  Input,
  Button,
  Smile,
  Section,
} from "./Form.styled";
import { postThunk } from "../../redux/form/thunks";
import { ReactComponent as LeftTop } from "../../images/topLeft.svg";
import { Image } from "../../components/Image/Image";

export function Form() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postThunk({ name, email, message }));

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <Section>
      <Container>
        <Smile>
          <LeftTop class="animate__animated animate__flip" />
        </Smile>

        <Title>Reach out to us!</Title>
        <FormStyled onSubmit={handleSubmit}>
          <Input
            type="text"
            name="name"
            placeholder="Your name*"
            onChange={(e) => setName(e.target.value)}
            value={name}
            required
          />
          <Input
            type="email"
            name="email"
            placeholder="Your e-mail*"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Input
            type="text"
            name="message"
            placeholder="Your message*"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
          <Button type="submit">Send message</Button>
        </FormStyled>
      </Container>

      <Image />
    </Section>
  );
}
