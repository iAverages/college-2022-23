import clsx from "clsx";
type InputProps = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
    errors: Record<string, any>
};

// export function Input({ register, name, ...rest }) {
//     return <input {...register(name)} {...rest} />;
//   }


const Input: React.FC<InputProps> = ({ register, children, className, errors, name, ...props }) => {
    console.log(errors)
    return (
        <>
            <input className={clsx("bg-zinc-600", className)} {...register(name)} {...props} />
            {name && errors[name]?.message && <p className="text-white">{errors[name].message}</p>}
        </>
    )
}

export default Input;