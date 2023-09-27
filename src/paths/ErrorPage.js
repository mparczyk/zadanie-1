import { useNavigate, useRouteError, isRouteErrorResponse } from "react-router-dom";
import React from 'react';
import { Result } from 'antd';
import { StyledButton } from "../styles/styles";

export const ErrorPage = () => {
  const navigate = useNavigate();
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    if (error.status === 404) {
      return (
        <Result
          status="404"
          title="404"
          subTitle="Sorry, the page you visited does not exist."
          extra={<StyledButton onClick={() => {navigate("/");}}>Back Home</StyledButton>}
        />
      )
    }

    if (error.status === 403) {
      return (
        <Result
          status="403"
          title="403"
          subTitle="Sorry, you are not authorized to access this page."
          extra={<StyledButton onClick={() => {navigate("/");}}>Back Home</StyledButton>}
        />
      )
    }

    if (error.status === 500) {
      return (
        <Result
          status="500"
          title="500"
          subTitle="Sorry, something went wrong."
          extra={<StyledButton onClick={() => {navigate("/");}}>Back Home</StyledButton>}
        />
      )
    }
  }
  return (
    <Result
      status="warning"
      title="There are some problems with your operation."
      extra={<StyledButton onClick={() => {navigate("/");}}>Back Home</StyledButton>}
    />
  );
}