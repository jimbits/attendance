import styled from "styled-components";

const Panel = styled.section``;
const PanelBoxShadow = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.175);
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.175);
`;
const PanelHeader = styled.header`
  background: rgba(222, 222, 222, 0.125);
  color: grey;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.25rem 0 0.25rem 1rem;
`;
const PanelTitle = styled.h2`
  font-size: 1rem;
`;

const PanelControls = styled.ul`
  display: flex;
  user-select: none;
`;

const PanelControl = styled.li`
  width: 1rem;
  color: rgb(202, 202, 202);
  cursor: pointer;
  :hover {
    color: rgb(170, 170, 170);
  }
`;

const PanelButton = styled.button`
  color: palevioletred;
  font-size: 1em;
`;

const PanelIcon = styled.span`
  background: red;
  padding: 1.5rem;
  background: blue;
`;
const PanelBody = styled.div`
  background: rgba(0, 0, 0, 0.0125);
  padding: 1rem;
  border-top: 1px solid rgba(0, 0, 0, 0.075);
  border-bottom: 1px solid rgba(0, 0, 0, 0.075);
`;
const PanelFooter = styled.footer`
  width: 100%;
  padding: 0.25rem 1rem;
  font-size: 13px;
`;

export {
  Panel as default,
  PanelHeader,
  PanelTitle,
  PanelControls,
  PanelControl,
  PanelIcon,
  PanelBody,
  PanelFooter,
  PanelBoxShadow,
  PanelButton
};
