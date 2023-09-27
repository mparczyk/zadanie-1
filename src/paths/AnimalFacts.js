import { useState } from 'react';

import { Typography, List, Divider } from 'antd';
import { SelectBar, ScrollWrapper, StyledText } from '../styles/styles';
import { useFetchFacts } from "../utils/useFetchFacts";
import { Loading } from '../ui/Loading';

import '../App.css';
import { ListItem } from '../ui/ListItem';

const { Text } = Typography;

export const AnimalFacts = () => {
    const [animalType, setAnimalType] = useState("cat");
    const { facts, error, isLoading } = useFetchFacts(animalType);

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
                        defaultValue={animalType}
                        onChange={handleChange}
                        options={selectBarValue}
                    />
                </Divider>
                <ScrollWrapper>
                    <List
                        className='list'
                        bordered
                        dataSource={facts}
                        renderItem={(fact) => <ListItem fact={fact} />}
                    />
                    </ScrollWrapper>
            </>
        }
        </Loading>
    )
}