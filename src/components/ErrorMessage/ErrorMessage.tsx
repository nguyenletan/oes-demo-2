import { Wrapper, Icon, ErrorTitle, ErrorDescription } from "./ErrorMessage.styles";
import ErrorMsgImg from '../../assets/images/error.png'
import Dialog from '@mui/material/Dialog';


interface IErrorMessageProps {
  message: string;
  internalErrorMessage: string;
}

const ErrorMessage = (props: IErrorMessageProps) => {

  const { message } = props;

  return (
    <Dialog open={true}>
      <Wrapper>
        <Icon src={ErrorMsgImg} alt="Error"/>

        {message && <ErrorTitle>{message}</ErrorTitle>}
        <ErrorDescription>We're working to get the connection restored as soon as possible.</ErrorDescription>
        <ErrorDescription>Please check back later.</ErrorDescription>
      </Wrapper>
    </Dialog>
  );
};

export default ErrorMessage;