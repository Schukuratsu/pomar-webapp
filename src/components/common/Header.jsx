import React from "react";
import { Typography } from "antd";
import { useHistory } from "react-router-dom";

function Header() {
  const history = useHistory();
  return (
    <div className="header">
      <Typography.Title
        onClick={() => history.push("/")}
        style={{ cursor: "pointer" }}
      >
        PoManager
      </Typography.Title>
      <Typography.Link onClick={() => history.push("/relatorio")}>
        Gerar relatório
      </Typography.Link>
    </div>
  );
}

export default Header;
