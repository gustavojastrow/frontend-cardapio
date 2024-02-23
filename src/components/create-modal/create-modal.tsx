import { useEffect, useState } from 'react';
import { useFoodDataMutate } from '../../hooks/useFoodDataMutate';
import { FoodData } from '../../interface/FoodData';

import "./modal.css";

interface InputProps {
    label: string,
    value: string | number,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    updateValue(value: any): void
}   

interface ModalProps {
    closeModal(): void
}

const Input = ({ label, value, updateValue }: InputProps) => {
    return (
        <>
            <label>{label}</label>
            <input value={value} onChange={event => updateValue(event.target.value)}></input>
        </>
    )
}

export function CreateModal({ closeModal }: ModalProps){
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState(0);
    const [image, setImage] = useState("");
    
    const { mutate, isSuccess, isPending } = useFoodDataMutate();

    const back = () => {
        closeModal();
    }
    const submit = () => {
        const foodData: FoodData = {
            title, 
            price,
            image,
            description
        }
        mutate(foodData)
    }


    useEffect(() => {
        if(!isSuccess) return 
        closeModal();
    }, [closeModal, isSuccess])

    return(
        <div className="modal-overlay">
            <div className="modal-body">
                <h2>Cadastre um novo item no cardápio</h2>
                <form className="input-container">
                    <Input label="Título:" value={title} updateValue={setTitle}/>
                    <Input label="Descrição:" value={description} updateValue={setDescription}/>
                    <Input label="Preço:" value={price} updateValue={setPrice}/>
                    <Input label="Link da imagem:" value={image} updateValue={setImage}/>
                </form>
                    <div className='buttons'>
                        <button onClick={submit} className="btn-secondary">
                            {isPending ? 'postando...' : 'Postar'}
                        </button>
                        <button onClick={back} className='btn-back'>
                            Voltar
                        </button>
                    </div>
            </div>
        </div>
    )
}