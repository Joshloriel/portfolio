import React from "react"
import { useForm } from "react-hook-form"
// The following component is an example of your existing Input Component

const Input = ({ label, register, required, className, type = "text" }) => (
    <div className="flex flex-col w-full mb-2">
        <label htmlFor={label}>{label}: </label>
        <input id={label} type={type} className={`text-zinc-800 py-1 px-2 rounded-md col-span-full ${className}`} {...register(label, { required })} />
    </div>
);

// const TextArea = ({ label, register, required, className }) => (
//     <div className="flex flex-col w-full">
//         <label htmlFor={label} className="mb-1">{label}: <span className="text-red-500">{required ? "*" : ""}</span></label>
//         <textarea
//             {...register(label, { required })}
//             id={label}
//             className={`text-zinc-800 py-1 px-2 rounded-md col-span-full border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 ${className}`}
//         ></textarea>
//     </div>
// )
// you can use React.forwardRef to pass the ref too
// const Select = React.forwardRef(({ onChange, onBlur, name, label }, ref) => (
//     <>
//         <Label>{label}:</Label>
//         <select className="px-3 py-1 m-2 font-semibold text-black rounded-lg" name={name} ref={ref} onChange={onChange} onBlur={onBlur}>
//             <option value="20">20</option>
//             <option value="30">30</option>
//         </select>
//     </>
// ))


const CoreForm = () => {
    const { register, handleSubmit } = useForm()


    const onSubmit = (data) => {
        alert(JSON.stringify(data))
    }


    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="md:flex md:flex-row md:gap-3 mb-3">
                <Input label="First Name" register={register} required />
                <Input label="Middle Name" register={register} required />
                <Input label="Last Name" register={register} required />
            </div>
            <Input type="email" label="Email" className="w-full mb-3" register={register} required />
            <div className="flex flex-col">
                <label htmlFor="message">Message: </label>
                <textarea rows="5" id="message" className="text-zinc-800 py-1 px-2 rounded-md w-full" {...register('message', { required: 'Message is required' })} />
            </div>

            <button type="submit" className="px-4 py-2 m-2 text-white bg-blue-600 rounded-md">Submit</button>
        </form>
    )
}

export default CoreForm;