import React from "react";
import { useForm } from "react-hook-form";

export default function Form({ defaultValues, children, onSubmit }: any) {
    const methods = useForm({ defaultValues });
    const { handleSubmit } = methods;

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            {React.Children.map(children, child => {
                return child.props.name
                    ? React.createElement(child.type, {
                        ...{
                            ...child.props,
                            register: methods.register,
                            key: child.props.name
                        }
                    })
                    : child;
            })}
        </form>
    );
}



// import React from "react";
// import { useForm } from "react-hook-form";
// import clsx from "clsx";
// type FormProps = React.DetailedHTMLProps<React.FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>;

// const Form: React.FC<FormProps> = ({ defaultValues, children, onSubmit, className, ...props }) => {

//     const methods = useForm({ defaultValues });
//     const { handleSubmit } = methods;

//     return (
//         <form onSubmit={handleSubmit(onSubmit)}>
//             {React.Children.map(children, child => {
//                 return child?.props.name
//                     ? React.createElement(child.type, {
//                         ...{
//                             ...child.props,
//                             register: methods.register,
//                             key: child.props.name
//                         }
//                     })
//                     : child;
//             })}
//         </form>
//     );
// }

// return <form className={clsx("flex flex-col gap-1", className)} {...props}>{children}</form>
// }

// export default Form;