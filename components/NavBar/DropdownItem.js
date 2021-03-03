import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";
export default function DropdownItem({ data }) {
  const router = useRouter();

  return (
    <Wrapper
      onClick={() => {
        router.push("/category/" + data.id);
      }}
    >
      <Title>{data.name}</Title>
    </Wrapper>
  );
}
const Wrapper = styled.a`
  width: 100%;
  display: flex;
  align-items: center;
  cursor: pointer;
  text-decoration: none;
  color: inherit;
  :hover {
    background-color: #f5f6f7;
  }
`;

const Title = styled.h4`
  color: #2f3337;
  font-size: 14px;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 8px 2px 8px 10px;
  line-height: 1.2;
`;