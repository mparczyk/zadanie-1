import { Link } from "react-router-dom";
import { List } from "antd";
import { StyledButton } from "../styles/styles";



export const ListItem = ({ fact }) => {
    return (
        <List.Item>
             <p>{fact.text}</p>
                <Link to={`details/${fact._id}`}>
                    <StyledButton type='text'>Details</StyledButton>
                </Link>
        </List.Item>
    )
}