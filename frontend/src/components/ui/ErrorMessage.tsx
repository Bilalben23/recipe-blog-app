import { FC } from 'react';

type ErrorMessageProps = {
    title?: string;
    message: string;
};

const ErrorMessage: FC<ErrorMessageProps> = ({
    title = 'Error Detected',
    message,
}) => {
    return (
        <div
            role="alert"
            aria-live="assertive"
            className="flex flex-col items-center max-w-sm gap-4 p-6 mx-auto mt-12 text-center text-red-700 rounded-lg shadow-md bg-red-600/10"
        >
            <div className="flex items-center justify-center text-white bg-red-600 rounded-full shadow-sm w-14 h-14">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-7 h-7"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    aria-hidden="true"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 8v4m0 4h.01M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z"
                    />
                </svg>
            </div>
            <h3 className="text-xl font-semibold">{title}</h3>
            <p className="max-w-xs text-sm leading-relaxed">{message}</p>
        </div>
    );
};

export default ErrorMessage;
