import { useNavigate, useLoaderData, } from "react-router";
import { Divider } from 'antd';

import { url } from "../settings/settings";
import { Paragraph, ScrollWrapper, StyledButton, StyledText } from "../styles/styles";

export const factsIdLoader = async ({ params }) => {
    const response = await fetch(`${url}/${params.factId}`);
    
    // if (response.status === 404) {
    //     throw new Response("Not Found", { status: 404 });
    //   }
    if (!response.ok) {
        throw new Response("Some Error", {status: response.status})
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
                    <StyledButton type="text" onClick={() => {navigate("/");}}>
                        Back
                    </StyledButton>
                </Paragraph>
            </ScrollWrapper>
        </>
    )
}
