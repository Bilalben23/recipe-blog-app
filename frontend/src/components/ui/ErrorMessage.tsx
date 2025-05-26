import { FC } from 'react';
import { FiAlertCircle } from 'react-icons/fi';

type ErrorMessageProps = {
    title?: string;
    message: string;
};

const ErrorMessage: FC<ErrorMessageProps> = ({ title = 'Something went wrong', message }) => {
    return (
        <div className="flex items-start max-w-lg gap-3 p-10 mx-auto mt-8 text-red-700 border border-red-200 rounded-lg shadow-sm bg-red-50">
            <FiAlertCircle className="w-6 h-6 mt-1 text-red-500" />
            <div>
                <h2 className="text-xl font-semibold">{title}</h2>
                <p>{message}</p>
            </div>
        </div>
    )
}

export default ErrorMessage;
