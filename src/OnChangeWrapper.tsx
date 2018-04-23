import * as React from 'react';

export interface WrapperProps {
    onChange: (value: string) => void;
    children: JSX.Element;
}

export const OnChangeWrapper = ({ onChange, children }: WrapperProps) => {
    const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => (
        onChange && onChange(event.target.value)
    )

    const Child = React.Children.only(children);

    return React.cloneElement(Child, {...children.props, onChange: onChangeHandler});
}