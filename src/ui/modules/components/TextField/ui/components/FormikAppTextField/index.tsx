import { useFormikAppTextField } from "../../../common";
import { AppTextField, AppTextFieldProps } from "../AppTextField";

export type FormikAppTextFieldProps = AppTextFieldProps & {
    validateBeforeTouch?: boolean;
};

export function FormikAppTextField(props: FormikAppTextFieldProps) {
    const { field, handleChange, hasError, errorMessage } = useFormikAppTextField(props);
    return (
        <AppTextField
            {...field}
            {...props}
            onChange={handleChange}
            error={hasError}
            errorMessage={errorMessage}
        />
    );
};
