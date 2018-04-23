import * as React from 'react';

// Output props
export interface OnChangeHoFProps {
    onChange?: (value: string) => void;
}

// Input props
export interface OnChangeNative {
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

export function withOnChangeString<T extends OnChangeNative>(Child: React.ComponentType<T>) {
    return class extends React.Component<OnChangeHoFProps & T, {}> {
        static displayName = `withOnChangeString(${Child.displayName || Child.name})`;

        onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => 
            this.props.onChange && this.props.onChange(event.target.value);

        render() {
            return <Child {...this.props} onChange={this.onChangeHandler} />;
        }
    }
}
