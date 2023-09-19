import React, { useState } from 'react';
import { Button, Modal, Typography, Space } from 'antd';
import { Loading } from './Loading';
import { url } from '../settings/settings';

const { Text } = Typography;

export const ModalButton = ({ id }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [factById, setFactById] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);


    const fetchFactById = async () => {
        setIsLoading(true);
        const response = await fetch(`${url}/${id}`);
            
        if (response.ok) {
            const data = await response.json();
            setFactById(data);
        } else {
            setError(`Error! status: ${response.status}`);
        }
        setIsLoading(false);
    };

    const handleOnClick = () => {
        showModal();
        fetchFactById();
    };
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    
    return (
        <>
            <Button type="primary" onClick={handleOnClick}>Details</Button>
            <Modal title="Fact" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <Loading isLoading={isLoading}>
                    {error ? <Text type="danger">{error}</Text>
                    :
                        <Space direction='vertical'>
                            <Text>{factById.text}</Text>
                            <Text>ID: {factById._id}</Text>
                        </Space>
                    }
                </Loading>
            </Modal>
        </>
    );
};
