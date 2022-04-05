import Link from "next/link";
import styled from "styled-components";

const LogoText = styled.h2`
  font-family: 'Akaya Telivigala', cursive;
  font-size: ${({theme}) => theme.fontxxxl};
  color: ${({theme}) => theme.text};
  transition: all 0.2s ease;

  &:hover{
    transform: scale(1.1);
  }

  @media (max-width: 64em){
    font-size: ${({theme}) => theme.fontxxl};
  }
`;

export default function Logo() {
  return (  
    <LogoText>
      <Link href="/">
        <a>W.</a>
      </Link>
    </LogoText >
  );
}
