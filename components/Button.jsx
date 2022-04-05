import styled from "styled-components";

const Btn = styled.button`
  display: inline-block;
  background-color: ${({theme}) => theme.text};
  color: ${({theme}) => theme.body};
  outline: 0;
  border: 0;
  font-size: ${({theme}) => theme.fontsm};
  padding: 0.9rem 2.3rem;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.2s ease;
  position: relative;

  &:hover{
    transform: scale(0.9);
  }

  &::after{
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    border: 2px solid ${({theme}) => theme.text};
    width: 100%;
    height: 100%;
    border-radius: 50px;
    transition: all 0.2s ease;
  }

  &:hover::after{
    transform: translate(-50%, -50%) scale(1);
    padding: 0.3rem;
  }
`;

export default function Button({ text, link }) {
  return (  
    <Btn>
      <a
        href={link}
        aria-label={text}
        target="_blank"
        rel="noreferrer"
      >{text}</a>
    </Btn>
  );
}
