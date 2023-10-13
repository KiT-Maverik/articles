import {Alert, type AlertColor, Snackbar} from "@mui/material";
import {createContext, type ReactNode, useContext, useMemo, useState} from "react";

export interface I_ToastProvider_Props {
    children: ReactNode;
}

interface I_ToastContext {
    showToast: (message: string, type: AlertColor) => void;
}

export const Context = createContext({} as I_ToastContext);

export const ToastProvider = ({children}: I_ToastProvider_Props) => {
    const [open, setOpen] = useState<boolean>(false);
    const [message, setMessage] = useState<string>('');
    const [type, setType] = useState<AlertColor>('info');


    const renderContent = useMemo(() => {
        switch (type) {
            case "success"  :
                return <Alert severity="success" variant="filled">{message}</Alert>
            case "info"  :
                return <Alert severity="info" variant="filled">{message}</Alert>
            case "warning"  :
                return <Alert severity="warning" variant="filled">{message}</Alert>
            case "error"  :
                return <Alert severity="error" variant="filled">{message}</Alert>
        }
    }, [type, message]);

    const showToast = (message: string, type: AlertColor) => {
        setMessage(message);
        setType(type);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (

        <Context.Provider value={{showToast}}>
            <Snackbar
                open={open}
                autoHideDuration={1000}
                onClose={handleClose}>
                {renderContent}
            </Snackbar>
            {children}
        </Context.Provider>
    )
}

export const useToast = (): I_ToastContext => {
    const context = useContext(Context);

    if (!context) {
        throw new Error('useToast must be used within an Toast context');
    }

    return context;
};
