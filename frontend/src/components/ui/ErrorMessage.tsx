import { FC } from 'react';
import { FiAlertCircle } from 'react-icons/fi';

type ErrorMessageProps = {
    title?: string;
    message: string;
};

const ErrorMessage: FC<ErrorMessageProps> = ({ title = 'Something went wrong', message }) => {
    return (
        <div className="flex items-start gap-3 bg-red-50 border border-red-200 text-red-700 p-10 rounded-lg shadow-sm max-w-lg mx-auto mt-8">
            <FiAlertCircle className="w-6 h-6 mt-1 text-red-500" />
            <div>
                <h2 className="font-semibold text-xl">{title}</h2>
                <p>{message}</p>
            </div>
        </div>
    )
}

export default ErrorMessage;
