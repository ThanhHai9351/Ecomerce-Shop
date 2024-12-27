import { IProduct } from '@/lib/types';
import { Button } from '@mui/material';
import { IoHeart } from "react-icons/io5";
import { GiShatteredHeart } from "react-icons/gi"
import { useAddWhistlistMutation, useRemoveWhistlistMutation } from '@/store/services/whistlist.service';
import { useState } from 'react';
import { toast } from 'react-toastify';

const ButtonWhistlisted = ({ product }: { product: IProduct }) => {
    const [whistlisted, setWhistlisted] = useState(product.isWhistlisted)
    const accessToken = localStorage.getItem("accessToken") || "";
    const [addWhistListed] = useAddWhistlistMutation();
    const [removeWhistlisted] = useRemoveWhistlistMutation();
    const handleWhistlisted = async () => {
        if (whistlisted) {
            const res = await removeWhistlisted({ productId: product._id, accessToken }).unwrap();
            if ((await res).status === 200) {
                setWhistlisted(false)
                toast.success("Remove whistlist successfully!")
            }
            if ((await res).status === 400) {
                toast.error("Product has whistlist!")
            }
        } else {
            const res = addWhistListed({ productId: product._id, accessToken }).unwrap();
            if ((await res).status === 200) {
                setWhistlisted(true)
                toast.success("Add whistlist successfully!")
            }
        }
    }
    return (
        <Button onClick={handleWhistlisted} variant="outlined" color="error">
            {whistlisted ? <IoHeart /> : <GiShatteredHeart />}
        </Button>
    );
}

export default ButtonWhistlisted;
