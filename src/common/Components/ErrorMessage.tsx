import React, {FC} from 'react';
import {Alert} from "antd";

import {clearError} from "../../store/slices/appSlice";
import {useAppDispatch} from "../../store/config/hook/hook";

interface IErrorMessage {
    error: string | null
}

export const ErrorMessage: FC<IErrorMessage> = ({error}) => {

    const dispatch = useAppDispatch()

    const CloseHandler = () => {
        dispatch(clearError())
    }

    return (
        <div>
            <Alert
                message={error}
                description="Что-то пошло не так!"
                type="error"
                closable
                onClose={CloseHandler}
            />
        </div>
    );
};

