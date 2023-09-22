import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import { Typography, List, Divider } from 'antd';
import { SelectBar, ScrollWrapper, StyledButton, StyledText } from '../styles/styles';
import { useFetchFacts } from "../utils/useFetchFacts";
import { Loading } from './Loading';
import { url } from '../settings/settings';

const { Text } = Typography;

export const AnimalFacts = () => {
    const [animalType, setAnimalType] = useState("cat");
    const { facts, error, isLoading } = useFetchFacts(`${url}/random?animal_type=${animalType}&amount=30`);

    const selectBarValue = [
        {
        value: 'cat',
        label: 'Cat',
        },
        {
        value: 'dog',
        label: 'Dog',
        },
        {
        value: 'horse',
        label: 'Horse',
        },
    ];
    
    const handleChange = (value) => {
        setAnimalType(value);
    }
    
    return (
        <Loading isLoading={isLoading}>
        {error ? <Text type="danger">{error}</Text>
        :
            <>
                <Divider orientation="center">
                    <StyledText>Select an animal</StyledText>
                    <SelectBar
                        defaultValue="cat"
                        onChange={handleChange}
                        options={selectBarValue}
                    />
                </Divider>
                <ScrollWrapper>
                    <List
                        className='list'
                        bordered
                        dataSource={facts}
                        renderItem={(fact) => (
                            <List.Item>
                                {fact.text}
                                <Link to={`details/${fact._id}`}><br/>
                                <StyledButton>Details</StyledButton></Link>
                            </List.Item>
                        )}
                    />
                    </ScrollWrapper>
            </>
        }
        </Loading>
    )
}