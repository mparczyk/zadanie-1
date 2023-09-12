import React, { useState } from 'react';
import { Button, Modal } from 'antd';

export const ModalButton = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [factsById, setFactsById] = useState([]);
    const [error, setError] = useState();
    const [isLoading, setIsLoading] = useState(false);

    const handleModalClick = async () => {
        setIsLoading(true);
        const response = await fetch("https://cat-fact.herokuapp.com/facts/591f98803b90f7150a19c229");
        const data = await response.json();
            
        if (response.ok) {
            setFactsById(data);
            setIsLoading(false);
        } else {
            setError(`Error! status: ${response.status}`);
            setIsLoading(false);
        }
    }

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
            <Button type="primary" onClick={() => {
                showModal();
                handleModalClick();
            }}
            >
                Expand
            </Button>
            <Modal title="Fact" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
            {isLoading ? <div>Loading...</div> 
            : 
                error ? <div>{error}</div>
            :
                <div>
                    <p>{factsById.text}</p>
                    <p>fact id: {factsById._id}</p>
                </div>
            }
            </Modal>
        </>
    );
};