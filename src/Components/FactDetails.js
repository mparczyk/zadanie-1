import { useState, useEffect } from "react";
import { Typography, Divider } from 'antd';
import { url } from "../settings/settings";
import { Loading } from "./Loading";
import { useParams, useNavigate, } from "react-router";
import { Paragraph, ScrollWrapper, StyledButton, StyledText } from "../styles/styles";
const { Text } = Typography; 

export const FactDetails = () => {
    const [factById, setFactById] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    let { factId } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchFactById = async () => {
            setIsLoading(true);
            const response = await fetch(`${url}/${factId}`);
                
            if (response.ok) {
                const data = await response.json();
                setFactById(data);
            } else {
                setError(`Error! status: ${response.status}`);
            }
            setIsLoading(false);
        };
        fetchFactById();
    }, [factId]);

    return (
       <Loading isLoading={isLoading}>
        {error ? <Text type="danger">{error}</Text>
        :
        <>
            <Divider orientation="center">
                <StyledText>Fact Details</StyledText>
            </Divider>
            <ScrollWrapper>
                <Paragraph>{factById.text}</Paragraph>
                <Paragraph>ID: {factById._id}</Paragraph>
                <Paragraph>
                    <StyledButton onClick={() => {navigate(-1);}}>
                        Back
                    </StyledButton>
                </Paragraph>
            </ScrollWrapper>
        </>
        }
    </Loading>
    )
}

// export const factsIdLoader = async () => {
//  const res = await await fetch(`${url}/${factId}`);
//  return res.json()
// }

// const factDetails = useLoaderData();