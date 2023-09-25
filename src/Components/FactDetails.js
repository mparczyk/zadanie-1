import { Divider } from 'antd';
import { url } from "../settings/settings";
import { useNavigate, useLoaderData, } from "react-router";
import { Paragraph, ScrollWrapper, StyledButton, StyledText } from "../styles/styles";

export const factsIdLoader = async ({ params }) => {
    const response = await fetch(`${url}/${params.factId}`);
    
    if (response.status === 404) {
        throw new Response("Not Found", { status: 404 });
      }
    return response.json();
}
export const FactDetails = () => {
    const navigate = useNavigate();
    let factById = useLoaderData();

    return (
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
    )
}
